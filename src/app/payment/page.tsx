"use client";
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { ArrowLeft, CreditCard, Shield, CheckCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { getCurrencyByCountry, getExchangeRate } from '@/utils/currency';
import { PaymentData } from '@/types/payment';

function PaymentContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [userCountry, setUserCountry] = useState('US');
    const [localCurrency, setLocalCurrency] = useState({ currency: 'USD', symbol: '$' });

    useEffect(() => {
        const initializePayment = async () => {
            try {
                // Get user's country from IP
                const locationResponse = await fetch('https://ipapi.co/json/');
                const locationData = await locationResponse.json();
                const countryCode = locationData.country_code || 'US';
                setUserCountry(countryCode);

                // Get currency info
                const currencyInfo = getCurrencyByCountry(countryCode);
                setLocalCurrency(currencyInfo);

                // Get payment data from URL params
                const packageName = searchParams.get('package') || '';
                const priceUSD = parseFloat(searchParams.get('price') || '0');
                const service = searchParams.get('service') || '';

                if (!packageName || !priceUSD || !service) {
                    router.push('/');
                    return;
                }

                // Calculate local price
                let localPrice = priceUSD;
                if (currencyInfo.currency !== 'USD') {
                    const exchangeRate = await getExchangeRate('USD', currencyInfo.currency);
                    localPrice = priceUSD * exchangeRate;
                }

                setPaymentData({
                    packageName,
                    price: priceUSD,
                    currency: 'USD',
                    localPrice: Math.round(localPrice),
                    localCurrency: currencyInfo.currency,
                    service
                });
            } catch (error) {
                console.error('Failed to initialize payment:', error);
                router.push('/');
            } finally {
                setLoading(false);
            }
        };

        initializePayment();
    }, [searchParams, router]);

    const createOrder = async () => {
        if (!paymentData) return '';

        try {
            const response = await fetch('/api/paypal/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: paymentData.price,
                    currency: 'USD',
                    packageName: paymentData.packageName,
                    service: paymentData.service,
                }),
            });

            const order = await response.json();
            return order.id;
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    };

    const onApprove = async (data: any) => {
        setProcessing(true);
        try {
            const response = await fetch('/api/paypal/capture-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    orderID: data.orderID,
                }),
            });

            const orderData = await response.json();

            if (orderData.status === 'COMPLETED') {
                // Redirect to success page with order details
                router.push(`/payment/success?orderId=${data.orderID}&package=${encodeURIComponent(paymentData?.packageName || '')}&service=${encodeURIComponent(paymentData?.service || '')}`);
            } else {
                throw new Error('Payment not completed');
            }
        } catch (error) {
            console.error('Error capturing order:', error);
            router.push('/payment/error');
        }
    };

    const onError = (err: any) => {
        console.error('PayPal error:', err);
        router.push('/payment/error');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="flex items-center space-x-2">
                    <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
                    <span className="text-gray-600">Loading payment details...</span>
                </div>
            </div>
        );
    }

    if (!paymentData) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Invalid Payment Request</h2>
                    <Link href="/" className="text-blue-600 hover:text-blue-700">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="h-16"></div>

            {/* Back Navigation */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-8">
                <Link href="/#services" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Services
                </Link>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Payment</h1>
                        <p className="text-gray-600">Secure payment powered by PayPal</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Order Summary */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <CreditCard className="mr-3 h-6 w-6 text-blue-600" />
                                Order Summary
                            </h2>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Service</span>
                                    <span className="font-semibold text-gray-900">{paymentData.service}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Package</span>
                                    <span className="font-semibold text-gray-900">{paymentData.packageName}</span>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-600">Price (USD)</span>
                                        <span className="font-semibold text-gray-900">${paymentData.price}</span>
                                    </div>

                                    {localCurrency.currency !== 'USD' && (
                                        <div className="flex justify-between items-center text-sm text-gray-500">
                                            <span>Approximately</span>
                                            <span>{localCurrency.symbol}{paymentData.localPrice.toLocaleString()}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="border-t pt-4">
                                    <div className="flex justify-between items-center text-lg font-bold">
                                        <span>Total</span>
                                        <span className="text-blue-600">${paymentData.price}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Security Features */}
                            <div className="mt-8 p-4 bg-green-50 rounded-xl">
                                <div className="flex items-start">
                                    <Shield className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-green-800 mb-1">Secure Payment</h3>
                                        <p className="text-sm text-green-700">
                                            Your payment is protected by PayPal's buyer protection and industry-standard encryption.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>

                            {processing ? (
                                <div className="text-center py-8">
                                    <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
                                    <p className="text-gray-600">Processing your payment...</p>
                                </div>
                            ) : (
                                <PayPalScriptProvider
                                    options={{
                                        "clientId": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                                        currency: "USD",
                                        intent: "capture"
                                    }}
                                >
                                    <div className="space-y-4">
                                        <PayPalButtons
                                            style={{
                                                layout: "vertical",
                                                color: "blue",
                                                shape: "rect",
                                                label: "paypal"
                                            }}
                                            createOrder={createOrder}
                                            onApprove={onApprove}
                                            onError={onError}
                                            onCancel={() => {
                                                console.log('Payment cancelled');
                                            }}
                                        />
                                    </div>
                                </PayPalScriptProvider>
                            )}

                            <div className="mt-6 text-center text-sm text-gray-500">
                                <p>By completing this purchase, you agree to our terms of service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function PaymentPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
        }>
            <PaymentContent />
        </Suspense>
    );
}
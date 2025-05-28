"use client";
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Home, Mail, Calendar, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function SuccessContent() {
    const searchParams = useSearchParams();
    const [orderDetails, setOrderDetails] = useState<{
        orderId: string;
        packageName: string;
        service: string;
    } | null>(null);

    useEffect(() => {
        const orderId = searchParams.get('orderId') || '';
        const packageName = searchParams.get('package') || '';
        const service = searchParams.get('service') || '';

        if (orderId && packageName && service) {
            setOrderDetails({ orderId, packageName, service });
        }
    }, [searchParams]);

    if (!orderDetails) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <CheckCircle className="h-12 w-12 text-green-600" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                >
                    Payment Successful!
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 mb-8 text-lg"
                >
                    Thank you for your purchase. Your order has been confirmed and we'll get started on your project right away.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gray-50 rounded-2xl p-6 mb-8"
                >
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>
                    <div className="space-y-3 text-left">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Order ID:</span>
                            <span className="font-mono text-sm text-gray-900">{orderDetails.orderId}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Service:</span>
                            <span className="font-semibold text-gray-900">{orderDetails.service}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Package:</span>
                            <span className="font-semibold text-gray-900">{orderDetails.packageName}</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid md:grid-cols-3 gap-4 mb-8"
                >
                    <div className="flex items-center justify-center p-4 bg-blue-50 rounded-xl">
                        <Mail className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-blue-800 text-sm font-medium">Check Your Email</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-green-50 rounded-xl">
                        <Calendar className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-green-800 text-sm font-medium">24-48hr Response</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-purple-50 rounded-xl">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                        <span className="text-purple-800 text-sm font-medium">Quality Guaranteed</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-4"
                >
                    <p className="text-gray-600">
                        We'll contact you within 24-48 hours to begin working on your {orderDetails.service.toLowerCase()}.
                        A confirmation email has been sent to your email address.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        <Home className="mr-2 h-5 w-5" />
                        Return to Home
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 pt-6 border-t border-gray-200"
                >
                    <p className="text-sm text-gray-500">
                        Need help? Contact us at{' '}
                        <a href="mailto:mwangiedna9@gmail.com" className="text-blue-600 hover:text-blue-700">
                            mwangiedna9@gmail.com
                        </a>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default function PaymentSuccessPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
        }>
            <SuccessContent />
        </Suspense>
    );
}

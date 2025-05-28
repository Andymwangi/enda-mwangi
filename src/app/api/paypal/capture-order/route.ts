// src/app/api/paypal/capture-order/route.ts
import { NextRequest, NextResponse } from 'next/server';

const PAYPAL_BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

async function getPayPalAccessToken() {
    const auth = Buffer.from(
        `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
    ).toString('base64');

    const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
    });

    const data = await response.json();
    return data.access_token;
}

export async function POST(request: NextRequest) {
    try {
        const { orderID } = await request.json();

        if (!orderID) {
            return NextResponse.json(
                { error: 'Order ID is required' },
                { status: 400 }
            );
        }

        const accessToken = await getPayPalAccessToken();

        // Capture the payment
        const captureResponse = await fetch(
            `${PAYPAL_BASE_URL}/v2/checkout/orders/${orderID}/capture`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const captureData = await captureResponse.json();

        if (captureData.status === 'COMPLETED') {
            // Extract payment information
            const payer = captureData.payer;
            const purchaseUnit = captureData.purchase_units[0];
            const capture = purchaseUnit.payments.captures[0];

            // Extract custom data from purchase unit description or custom_id
            const customData = purchaseUnit.custom_id ? JSON.parse(purchaseUnit.custom_id) : {};

            const paymentData = {
                orderId: orderID,
                customerEmail: payer.email_address,
                customerName: `${payer.name.given_name} ${payer.name.surname}`,
                service: customData.service || 'Professional Service',
                packageName: customData.packageName || 'Standard Package',
                amount: parseFloat(capture.amount.value),
                currency: capture.amount.currency_code,
            };

            // Send confirmation emails
            try {
                const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/payment/send-confirmation`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(paymentData),
                });

                if (!emailResponse.ok) {
                    console.error('Failed to send confirmation emails:', await emailResponse.text());
                }
            } catch (emailError) {
                console.error('Email sending error:', emailError);
                // Don't fail the payment if email fails
            }

            return NextResponse.json({
                status: 'COMPLETED',
                orderID,
                paymentData,
            });
        } else {
            return NextResponse.json(
                { error: 'Payment capture failed', details: captureData },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error('PayPal capture error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
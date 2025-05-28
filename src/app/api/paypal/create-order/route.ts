// src/app/api/paypal/create-order/route.ts
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
        const { amount, currency, packageName, service } = await request.json();

        if (!amount || !currency || !packageName || !service) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const accessToken = await getPayPalAccessToken();

        // Create custom data to store with the order
        const customData = {
            packageName,
            service,
        };

        const orderData = {
            intent: 'CAPTURE',
            purchase_units: [
                {
                    custom_id: JSON.stringify(customData),
                    description: `${service} - ${packageName}`,
                    amount: {
                        currency_code: currency,
                        value: amount.toString(),
                        breakdown: {
                            item_total: {
                                currency_code: currency,
                                value: amount.toString(),
                            },
                        },
                    },
                    items: [
                        {
                            name: `${service} - ${packageName}`,
                            description: `Professional ${service.toLowerCase()} service`,
                            quantity: '1',
                            unit_amount: {
                                currency_code: currency,
                                value: amount.toString(),
                            },
                            category: 'DIGITAL_GOODS',
                        },
                    ],
                },
            ],
            application_context: {
                brand_name: 'Professional Services',
                landing_page: 'NO_PREFERENCE',
                user_action: 'PAY_NOW',
                return_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/payment/success`,
                cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/payment/cancel`,
            },
        };

        const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        const order = await response.json();

        if (!response.ok) {
            console.error('PayPal order creation failed:', order);
            return NextResponse.json(
                { error: 'Failed to create PayPal order', details: order },
                { status: 400 }
            );
        }

        return NextResponse.json({ id: order.id });

    } catch (error) {
        console.error('PayPal create order error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
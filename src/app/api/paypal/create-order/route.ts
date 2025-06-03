import { NextRequest, NextResponse } from 'next/server';

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET!;
const PAYPAL_BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

async function getAccessToken() {
    try {
        const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64');

        const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials',
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('PayPal token error:', response.status, errorText);
            throw new Error(`Failed to get access token: ${response.status}`);
        }

        const data = await response.json();
        console.log('Access token obtained successfully');
        return data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error);
        throw error;
    }
}

export async function POST(request: NextRequest) {
    try {
        // Validate environment variables
        if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
            console.error('Missing PayPal credentials');
            return NextResponse.json(
                { error: 'PayPal credentials not configured' },
                { status: 500 }
            );
        }

        const { amount, currency, packageName, service } = await request.json();

        // Validate input
        if (!amount || !currency || !packageName || !service) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        console.log('Creating PayPal order:', { amount, currency, packageName, service });

        const accessToken = await getAccessToken();

        const orderData = {
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: currency,
                        value: amount.toFixed(2), // Ensure proper decimal formatting
                    },
                    description: `${service} - ${packageName}`,
                },
            ],
            application_context: {
                return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
                cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/cancel`,
                brand_name: "Your Company Name", // Add your brand name
                landing_page: "NO_PREFERENCE",
                user_action: "PAY_NOW"
            },
        };

        console.log('PayPal order data:', JSON.stringify(orderData, null, 2));

        const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(orderData),
        });

        const responseText = await response.text();
        console.log('PayPal response status:', response.status);
        console.log('PayPal response:', responseText);

        if (!response.ok) {
            console.error('PayPal order creation failed:', response.status, responseText);
            return NextResponse.json(
                { error: 'Failed to create PayPal order', details: responseText },
                { status: response.status }
            );
        }

        const order = JSON.parse(responseText);
        console.log('PayPal order created successfully:', order.id);

        return NextResponse.json(order);
    } catch (error) {
        console.error('PayPal order creation failed:', error);
        return NextResponse.json(
            { error: 'Failed to create PayPal order', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
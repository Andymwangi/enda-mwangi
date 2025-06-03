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
        return data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error);
        throw error;
    }
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

        console.log('Capturing PayPal order:', orderID);

        const accessToken = await getAccessToken();

        const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders/${orderID}/capture`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        const responseText = await response.text();
        console.log('PayPal capture response:', responseText);

        if (!response.ok) {
            console.error('PayPal order capture failed:', response.status, responseText);
            return NextResponse.json(
                { error: 'Failed to capture PayPal order', details: responseText },
                { status: response.status }
            );
        }

        const order = JSON.parse(responseText);
        console.log('PayPal order captured successfully:', order.id);

        return NextResponse.json(order);
    } catch (error) {
        console.error('PayPal order capture failed:', error);
        return NextResponse.json(
            { error: 'Failed to capture PayPal order', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
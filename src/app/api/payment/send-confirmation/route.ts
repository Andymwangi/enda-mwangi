// src/app/api/payment/send-confirmation/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendPaymentSuccessEmail, sendPaymentNotificationToAdmin } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            orderId,
            customerEmail,
            customerName,
            service,
            packageName,
            amount,
            currency = 'USD'
        } = body;

        // Validate required fields
        if (!orderId || !customerEmail || !customerName || !service || !packageName || !amount) {
            return NextResponse.json(
                { error: 'Missing required payment confirmation data' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(customerEmail)) {
            return NextResponse.json(
                { error: 'Invalid customer email format' },
                { status: 400 }
            );
        }

        const paymentData = {
            orderId,
            customerEmail: customerEmail.trim().toLowerCase(),
            customerName: customerName.trim(),
            service,
            packageName,
            amount: parseFloat(amount),
            currency,
        };

        // Send confirmation emails in parallel
        await Promise.all([
            sendPaymentSuccessEmail(paymentData),
            sendPaymentNotificationToAdmin(paymentData),
        ]);

        return NextResponse.json(
            {
                success: true,
                message: 'Payment confirmation emails sent successfully'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Payment confirmation email error:', error);
        return NextResponse.json(
            {
                error: 'Failed to send payment confirmation emails'
            },
            { status: 500 }
        );
    }
}
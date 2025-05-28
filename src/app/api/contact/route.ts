// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendContactNotification, sendContactAutoReply } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, service, message } = body;

        // Validate required fields
        if (!name || !email || !service || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        const contactData = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            service,
            message: message.trim(),
        };

        // Send emails in parallel
        await Promise.all([
            sendContactNotification(contactData),
            sendContactAutoReply(contactData),
        ]);

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for your message. We\'ll be in touch soon!'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            {
                error: 'Failed to send message. Please try again later.'
            },
            { status: 500 }
        );
    }
}
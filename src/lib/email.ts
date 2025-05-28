// src/lib/email.ts
import nodemailer from 'nodemailer';

export interface ContactFormData {
    name: string;
    email: string;
    service: string;
    message: string;
}

export interface PaymentConfirmationData {
    orderId: string;
    customerEmail: string;
    customerName: string;
    service: string;
    packageName: string;
    amount: number;
    currency: string;
}

// Create transporter with Gmail configuration
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD, // 16-character app password
        },
    });
};

// Send contact form notification to admin
export const sendContactNotification = async (data: ContactFormData) => {
    const transporter = createTransporter();

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
        subject: `New Contact Form Submission - ${data.service}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #1f2937; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h1>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 10px;">Contact Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Service Interest:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.service}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; color: #1f2937; line-height: 1.6;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            This email was sent from your website contact form.
          </div>
        </div>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);
};

// Send auto-reply to contact form submitter
export const sendContactAutoReply = async (data: ContactFormData) => {
    const transporter = createTransporter();

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: data.email,
        subject: 'Thank you for contacting us - We\'ll be in touch soon!',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="width: 60px; height: 60px; background-color: #10b981; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
              <span style="color: white; font-size: 24px;">✓</span>
            </div>
            <h1 style="color: #1f2937; margin-bottom: 10px;">Thank You for Reaching Out!</h1>
            <p style="color: #6b7280; font-size: 16px;">We've received your message and will respond within 24-48 hours.</p>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px; font-size: 18px;">Your Message Summary:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Service Interest:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.service}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0;">
            <h4 style="color: #1e40af; margin-bottom: 10px;">What happens next?</h4>
            <ul style="color: #1f2937; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 5px;">We'll review your message and service requirements</li>
              <li style="margin-bottom: 5px;">Our team will prepare a personalized response</li>
              <li style="margin-bottom: 5px;">You'll receive a detailed reply within 24-48 hours</li>
            </ul>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #6b7280; margin-bottom: 15px;">Need immediate assistance?</p>
            <a href="mailto:${process.env.GMAIL_USER}" style="background-color: #3b82f6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
              Email Us Directly
            </a>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            <p>Best regards,<br>Professional Services Team</p>
          </div>
        </div>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);
};

// Send payment success confirmation
export const sendPaymentSuccessEmail = async (data: PaymentConfirmationData) => {
    const transporter = createTransporter();

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: data.customerEmail,
        subject: `Payment Confirmed - ${data.service} Package`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
        <div style="background-color: white; padding: 30px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
              <span style="color: white; font-size: 32px;">✓</span>
            </div>
            <h1 style="color: #1f2937; margin-bottom: 10px; font-size: 28px;">Payment Successful!</h1>
            <p style="color: #6b7280; font-size: 16px;">Thank you for your purchase. We're excited to work with you!</p>
          </div>

          <div style="background: linear-gradient(135deg, #f8fafc, #e2e8f0); padding: 25px; border-radius: 12px; margin-bottom: 25px;">
            <h2 style="color: #374151; margin-bottom: 20px; font-size: 20px; text-align: center;">Order Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Order ID:</td>
                <td style="padding: 12px 0; color: #1f2937; font-family: monospace; border-bottom: 1px solid #e5e7eb;">${data.orderId}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Service:</td>
                <td style="padding: 12px 0; color: #1f2937; border-bottom: 1px solid #e5e7eb;">${data.service}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Package:</td>
                <td style="padding: 12px 0; color: #1f2937; border-bottom: 1px solid #e5e7eb;">${data.packageName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Amount Paid:</td>
                <td style="padding: 12px 0; color: #059669; font-weight: bold; font-size: 18px;">${data.currency} ${data.amount}</td>
              </tr>
            </table>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 25px 0;">
            <div style="text-align: center; padding: 20px; background-color: #eff6ff; border-radius: 10px;">
              <div style="color: #3b82f6; font-size: 24px; margin-bottom: 8px;">📧</div>
              <p style="color: #1e40af; font-weight: bold; margin: 0; font-size: 14px;">Check Email</p>
            </div>
            <div style="text-align: center; padding: 20px; background-color: #f0fdf4; border-radius: 10px;">
              <div style="color: #10b981; font-size: 24px; margin-bottom: 8px;">⏰</div>
              <p style="color: #047857; font-weight: bold; margin: 0; font-size: 14px;">24-48hr Response</p>
            </div>
            <div style="text-align: center; padding: 20px; background-color: #fef3f2; border-radius: 10px;">
              <div style="color: #ef4444; font-size: 24px; margin-bottom: 8px;">⭐</div>
              <p style="color: #dc2626; font-weight: bold; margin: 0; font-size: 14px;">Quality Assured</p>
            </div>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 10px; margin: 25px 0;">
            <h3 style="color: #374151; margin-bottom: 15px;">What's Next?</h3>
            <ol style="color: #1f2937; margin: 0; padding-left: 20px; line-height: 1.8;">
              <li>Our team will review your order and requirements</li>
              <li>We'll contact you within 24-48 hours to begin the process</li>
              <li>You'll receive regular updates on your project progress</li>
              <li>Final deliverables will be sent upon completion</li>
            </ol>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #6b7280; margin-bottom: 15px;">Questions about your order?</p>
            <a href="mailto:${process.env.GMAIL_USER}" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: bold; display: inline-block;">
              Contact Support
            </a>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            <p style="margin-bottom: 5px;">Thank you for choosing our professional services!</p>
            <p style="margin: 0;">We look forward to helping you achieve your career goals.</p>
          </div>
        </div>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);
};

// Send payment notification to admin
export const sendPaymentNotificationToAdmin = async (data: PaymentConfirmationData) => {
    const transporter = createTransporter();

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
        subject: `New Payment Received - ${data.service}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #1f2937; margin-bottom: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
            💰 New Payment Received
          </h1>
          
          <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 15px; margin-bottom: 20px;">
            <h3 style="color: #047857; margin-bottom: 10px;">Payment Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold; width: 30%;">Order ID:</td>
                <td style="padding: 8px 0; color: #1f2937; font-family: monospace;">${data.orderId}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Amount:</td>
                <td style="padding: 8px 0; color: #059669; font-weight: bold; font-size: 18px;">${data.currency} ${data.amount}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Service:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Package:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.packageName}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 10px;">Customer Information:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.customerName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.customerEmail}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #fef3f2; border-left: 4px solid #ef4444; padding: 15px; margin-top: 20px;">
            <h4 style="color: #dc2626; margin-bottom: 10px;">Action Required:</h4>
            <p style="color: #1f2937; margin: 0;">Please contact the customer within 24-48 hours to begin the project.</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            Payment processed via PayPal at ${new Date().toLocaleString()}
          </div>
        </div>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);
};
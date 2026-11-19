import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    if (
      !name ||
      !email ||
      !message ||
      name.length > 100 ||
      email.length > 200 ||
      message.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: 'Invalid form input.' },
        { status: 400 }
      );
    }
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const senderEmail = process.env.RESEND_FROM_EMAIL;
    if (!apiKey || !contactEmail || !senderEmail) {
      return NextResponse.json(
        { error: 'Email service not configured.' },
        { status: 503 }
      );
    }
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: senderEmail,
        to: [contactEmail],
        reply_to: email,
        subject: `Portfolio contact from ${name}`,
        text:
          `Name: ${name}\n` + `Email: ${email}\n\n` + `Message:\n${message}`,
      }),
    });
    if (!result.ok) {
      return NextResponse.json(
        { error: 'Email provider rejected request.' },
        { status: 502 }
      );
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: 'Unexpected server error.' },
      { status: 500 }
    );
  }
}

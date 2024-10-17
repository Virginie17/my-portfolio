import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    console.log('Received data:', { name, email, message });

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `
        <h1>Nouveau message de ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Méthode non autorisée' }, { status: 405 });
}
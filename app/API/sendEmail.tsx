// pages/api/sendEmail.ts
import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, message } = req.body; // Ajout de 'email' dans la déstructuration

        // Configurez le transporteur Nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Hôte SMTP pour Gmail
            port: 587, // Port SMTP pour TLS
            secure: false, // false pour le port 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Définissez les options de l'email
        const mailOptions = {
            from: process.env.EMAIL_USER, // Utilisation de l'utilisateur d'authentification
            to: 'virginiechaffard@gmail.com', 
            subject: `Message de ${name}`,
            text: message,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email envoyé avec succès!' });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email: ' + (error as Error).message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
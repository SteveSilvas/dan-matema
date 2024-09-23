import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    const { fromName, fromEmail, message } = await request.json();

    if (!fromName || !fromEmail || !message) {
        return NextResponse.json({ error: "Missing fields!" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
            user: "steve.evets00@gmail.com", 
            pass: process.env.SMTP_USER,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    try {
        const mailSent = await transporter.sendMail({
            from: `${fromEmail} <${fromEmail}>`,
            to: ["steve.evets00@gmail.com"],
            subject: "Contato pelo site Dan Matema",
            text: "Contato pelo site Dan Matema",
            date: new Date(),
            sender: `${fromName} <${fromEmail}>`,
            inReplyTo: fromEmail,
            html: "<p style='font-family: sans-serif; font-size: 16px; '>" + fromName + " (" + fromEmail + ")</p><p style='font-family: sans-serif; font-size: 16px;'>" + message + "</p>",
        });

        return NextResponse.json({
            success: true,
            message: "Email enviado com sucesso",
        });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Falha ao enviar e-mail, tente novamente mais tarde.",
        });
    }
}

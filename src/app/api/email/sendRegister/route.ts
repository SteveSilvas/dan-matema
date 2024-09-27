import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    const { fromName, fromEmail, phone, studantName, studantCicle } = await request.json();

    if (!fromName || !fromEmail || !studantName || !studantCicle) {
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
            subject: "Inscricão em curso pelo site Dan Matema",
            text: `Nome: ${fromName}\nEmail: ${fromEmail}\nTelefone: ${phone}\nEstudante: ${studantName}\nCiclo: ${studantCicle}`,
            date: new Date(),
            sender: fromEmail,
        });

        if (!mailSent) {
            return NextResponse.json({
                success: false,
                message: "Falha ao enviar e-mail, tente novamente mais tarde.",
            });
        }
        return NextResponse.json({
            success: true,
            message: "Email enviado com sucesso",
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            message: "Falha ao enviar e-mail, tente novamente mais tarde.",
        });
    }
}

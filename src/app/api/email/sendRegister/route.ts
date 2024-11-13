import { sendGmail, TransportGmail } from "@/app/api/services/Nodemailer/Nodemailer";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
    const { fromName, fromEmail, phone, studantName, studantCicle } = await request.json();

    if (!fromName || !fromEmail || !studantName || !studantCicle) {
        return NextResponse.json({ error: "Missing fields!" }, { status: 400 });
    }

    const textToSend = `Nome: ${fromName}\nEmail: ${fromEmail}\nTelefone: ${phone}\nEstudante: ${studantName}\nCiclo: ${studantCicle}`;
    
    try {
        const mailSent = sendGmail({
            content:textToSend,
            subject: "Inscrição para curso DanMatema",
            fromMail: fromEmail,
            fromName:fromName
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

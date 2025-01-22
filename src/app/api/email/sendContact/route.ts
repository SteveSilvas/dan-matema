import { TransportGmail } from "@/app/api/services/Nodemailer/Nodemailer";
import { NextRequest, NextResponse } from "next/server";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
    const { fromName, fromEmail, phone, message } = await request.json();

    if (!fromName || !fromEmail || !message) {
        return NextResponse.json({ error: "Missing fields!" }, { status: 400 });
    }

    const addressContact: Mail.Address = {
        address: fromEmail,
        name: fromName
    }

    try {
        const mailSent = await TransportGmail.sendMail({
            from: addressContact,
            to: ["profdanmatema@gmail.com","steve.evets00@gmail.com","irenita.f.lopes@gmail.com"],
            subject: "Contato pelo site Dan Matema",
            text: `Nome: ${fromName}\nEmail: ${fromEmail}\nTelefone: ${phone}\nMensagem: ${message}`,
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

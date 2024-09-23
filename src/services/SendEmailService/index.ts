"use client";

import { IMailSendMailData, ISendMailResult } from "@/utils/interfaces/SendMail";

async function sendEmail(mailData: IMailSendMailData): Promise<ISendMailResult> {
    try {
        const res = await fetch("/api/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mailData),
        });

        const data = await res.json();

        if (data.error) {
            return {
                success: false,
                message: data.error
            };
        }

        return {
            success: true,
            message: "Email enviado com sucesso. Aguarde meu contato."
        };

    } catch (e) {
        return {
            success: false,
            message: "Erro ao enviar e-mail, tente novamente mais tarde."
        };
    }
}

export default sendEmail;

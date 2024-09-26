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
            message: "Inscrição realizada com sucesso. Entraremos em contato para realizar a matrícula."
        };
    } catch (e) {
        console.error(e);
        return {
            success: false,
            message: "Erro ao enviar e-mail, tente novamente mais tarde."
        };
    }
}

export default sendEmail;

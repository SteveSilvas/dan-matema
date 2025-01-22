import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export const TransportGmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_AUTH,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

export interface ISendGmailContent {
    content: string;
    subject: string;
    fromMail: string;
    fromName: string;
}

export const sendGmail = async (content: ISendGmailContent) => {
    const addressContact: Mail.Address = {
        address: content.fromMail,
        name: content.fromName
    };
    const addressToSend: Mail.Address = {
        address: process.env.SMTP_USER ?? "profdanmatema@gmail.com",
        name: content.fromName
    };

    return await TransportGmail.sendMail({
        from: addressContact,
        to: addressToSend,
        subject: content.subject,
        text: content,
        date: new Date(),
        sender: content.fromMail,
    });
}
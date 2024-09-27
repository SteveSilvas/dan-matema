"use client";
import Image from "next/image";
import danmatema_contact from "@/assets/danmatema_contact.png";
import { useState } from "react";
import { useAtom } from "jotai";
import toastContext from "@/context/ToastAtom";
import ContactBar from "@/components/ContactBar";
import { sendEmailContact } from "@/services/SendEmailService";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [, setToast] = useAtom(toastContext);

    const handleSendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValidateFields())
            return;

        const emailSended = await sendEmailContact({
            fromName: name,
            fromEmail: email,
            phone: phone,
            message: message
        })

        setToast({
            isOpen: true,
            text: emailSended.message ?? ""
        })
    }

    const isValidateFields = () => {
        if (!name || !phone || !email || !message) {
            setToast({
                isOpen: true,
                text: "Preencha todos os campos."
            });
            return false;
        }
        return true;
    }

    return (
        <div className="text-center bg-white min-h-[80vh] grid grid-cols-1 sm:grid-cols-2" id="contato">
            <figure className="flex w-auto h-[80vh] justify-center py-10 overflow-hidden">
                <Image
                    className="w-auto h-full md:w-auto object-cover"
                    src={danmatema_contact}
                    alt="Fotografia do professor Danilo Souza"
                    title="Fotografia do professor Danilo Souza"
                    priority
                />
            </figure>
            <section className="w-full flex flex-col text-start items-center">
                <p className="text-xl text-gray-800  p-4">
                    Muito obrigado por acreditar na matemática e chegar até aqui!
                </p>
                <p className="text-xl text-gray-800  p-4">
                    Entre em contato para desenvolvermos soluções juntos e me acompanhe nas redes sociais:
                </p>
                <ContactBar />

                <form
                    className="flex flex-col items-center w-full gap-4"
                    onSubmit={handleSendEmail}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-200 p-2 rounded-md w-3/4"
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-200 p-2 rounded-md w-3/4"
                    />
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="WhatsApp"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-gray-200 p-2 rounded-md w-3/4"
                        pattern="\+?[0-9\s\-\(\)]{7,15}"
                        inputMode="tel"
                        title="Por favor, insira um número de telefone válido."
                    />
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Mensagem"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-gray-200 p-2 rounded-md w-3/4"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue_d :hover:bg-yellow_d text-white p-2 rounded-md w-3/4 mb-4"
                    >
                        Enviar
                    </button>
                </form>
            </section>
        </div>
    );
}

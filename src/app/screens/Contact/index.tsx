"use client";
import Image from "next/image";
import danmatema_contact from "@/assets/danmatema_contact.png";
import sendEmail from "@/services/SendEmailService";
import { useState } from "react";
import { useAtom } from "jotai";
import toastContext from "@/context/ToastAtom";
import ContactBar from "@/components/ContactBar";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [, setToast] = useAtom(toastContext);

    const handleSendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValidateFields())
            return;

        const emailSended = await sendEmail({
            fromName: name,
            fromEmail: email,
            message: message
        })

        setToast({
            isOpen: true,
            text: emailSended.message ?? ""
        })
    }

    const isValidateFields = () => {
        if (!name || !email || !message) {
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
            <figure className="flex w-full justify-center">
                <Image
                    className="w-full h-auto md:w-full md:h-auto object-cover"
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
               <ContactBar/>

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

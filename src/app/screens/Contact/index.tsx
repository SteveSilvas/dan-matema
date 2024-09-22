"use client";
import Image from "next/image";
import danmatema_contact from "@/assets/danmatema_contact.png";
import { RiFacebookFill, RiInstagramFill, RiPhoneFill, RiMailFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import Link from "next/link";
import sendEmail from "@/services/SendEmailService";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendEmail(message, name, email);
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
                <div className="flex gap-4 p-2 flex-wrap">
                    <a
                        className="flex justify-center items-center text-[12px]"
                        href="mailto:profdanmatema@gmail.com">
                        <RiMailFill className="text-3xl text-purple-700 hover:text-purple-500" />
                    </a>
                    <a
                        className="flex justify-center items-center text-[12px]"
                        href="https://wa.me/5511947934827"
                        target="_blank"
                        rel="noopener noreferrer">
                        <RiPhoneFill className="text-3xl text-purple-700 hover:text-purple-500" />
                    </a>
                    <Link
                        title="Facebook"
                        className="flex justify-center items-center text-[12px]"
                        href={"https://www.facebook.com/danmatema/"}
                        target="_blank">
                        <RiFacebookFill className="text-3xl text-purple-700 hover:text-purple-500" />
                    </Link>
                    <Link
                        title="Instagram"
                        className="flex justify-center items-center text-[12px]"
                        href={"https://www.instagram.com/danmatema/"}
                        target="_blank">
                        <RiInstagramFill className="text-3xl text-purple-700 hover:text-purple-500" />
                    </Link>
                    <RiLinkedinFill className="text-3xl text-purple-700 hover:text-purple-500" />
                    <Link
                        title="Youtube"
                        className="flex justify-center items-center text-[12px]"
                        href={"https://www.youtube.com/c/%C3%89oesquema"}
                        target="_blank">
                        <RiYoutubeFill className="text-3xl text-purple-700 hover:text-purple-500" />
                    </Link>
                </div>

                <form className="flex flex-col items-center w-full gap-4" onSubmit={handleSendEmail}>
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
                        className="bg-purple-700 text-white p-2 rounded-md w-3/4 mb-4"
                    >
                        Enviar
                    </button>
                </form>
            </section>
        </div>
    );
}

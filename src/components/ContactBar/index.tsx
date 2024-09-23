import Link from 'next/link';
import React from 'react';
import {
    RiFacebookFill,
    RiInstagramFill,
    RiLinkedinFill,
    RiMailFill,
    RiPhoneFill,
    RiYoutubeFill
} from 'react-icons/ri';

const ContactBar: React.FC = () => {
    return (
        <div className="flex gap-4 p-2 flex-wrap animate-fadeIn">
            <a
                className="flex justify-center items-center text-[12px]"
                href="mailto:profdanmatema@gmail.com">
                <RiMailFill className="text-3xl text-blue_d hover:text-yellow_d" />
            </a>
            <a
                className="flex justify-center items-center text-[12px]"
                href="https://wa.me/5511947934827"
                target="_blank"
                rel="noopener noreferrer">
                <RiPhoneFill className="text-3xl text-blue_d hover:text-yellow_d" />
            </a>
            <Link
                title="Facebook"
                className="flex justify-center items-center text-[12px]"
                href={"https://www.facebook.com/danmatema/"}
                target="_blank">
                <RiFacebookFill className="text-3xl text-blue_d hover:text-yellow_d" />
            </Link>
            <Link
                title="Instagram"
                className="flex justify-center items-center text-[12px]"
                href={"https://www.instagram.com/danmatema/"}
                target="_blank">
                <RiInstagramFill className="text-3xl text-blue_d hover:text-yellow_d" />
            </Link>
            <Link
                title="Linkedin"
                className="flex justify-center items-center text-[12px]"
                href={"https://www.linkedin.com/in/danilo-souza-0b019170/"}
                target="_blank"
            >
                <RiLinkedinFill className="text-3xl text-blue_d hover:text-yellow_d" />

            </Link>
            <Link
                title="Youtube"
                className="flex justify-center items-center text-[12px]"
                href={"https://www.youtube.com/c/%C3%89oesquema"}
                target="_blank">
                <RiYoutubeFill className="text-3xl text-blue_d hover:text-yellow_d" />
            </Link>
        </div>
    );
}

export default ContactBar;
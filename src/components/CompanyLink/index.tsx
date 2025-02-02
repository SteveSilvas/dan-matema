import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import companyLogo from "../../assets/logo_infotecdevs_transparente.png";

const CompanyLink: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center mt-6">
            <span className="text-sm text-gray-400 mr-2">Desenvolvido por:</span>
            <Link
                title='Infotec Devs'
                href="https://www.infotecdevs.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded px-2 overflow-hidden block bg-white hover:bg-gray-100"
            >
                <Image
                    src={companyLogo}
                    alt="Logo da Empresa"
                    width={100}
                    height={40}
                    className="rounded-lg"
                />
            </Link>

        </div>
    );
}

export default CompanyLink;
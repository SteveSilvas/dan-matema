import React, { useState } from 'react';
import materiais_pedagogicos from "@/assets/soluctions/materiais_pedagogicos.png";
import irium_educacao from "@/assets/soluctions/irium_educacao.png";
import facilita_vestibulares from "@/assets/partners/facilita_vestibulares.jpeg";
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
export interface IPartnerData {
    empresa?: string;
    src?: StaticImport;
    description: string;
}

const Partner: React.FC = () => {
    const [animateDirection,] = useState('slideInRight');

    const partners: IPartnerData[] = [
        {
            empresa: 'MMP',
            src: materiais_pedagogicos,
            description: 'Materiais matemáticos, seleção do Dan Matema com condições exclusivas',
        },
        {
            empresa: 'IRIUM',
            src: irium_educacao,
            description: 'Projetos Educacionais'
        },
        {
            empresa: 'Facilita Vestibulares',
            src: facilita_vestibulares,
            description: 'Curso preparatório para ENEM'
        },
        {
            empresa: 'Colégio Empatia',
            src: irium_educacao,
            description: 'Escola particular de ensino básico'
        },
        {
            empresa: 'Colégio Objetivo Caucaia do Alto',
            src: irium_educacao,
            description: 'Escola particular de ensino básico'
        },
        {
            empresa: 'Colégio Crescer',
            src: irium_educacao,
            description: 'Escola particular de ensino básico'
        },
        {
            empresa: 'Colégio Company',
            src: irium_educacao,
            description: 'Escola particular de ensino básico'
        },
        {
            empresa: 'Colégio Rebuá',
            src: irium_educacao,
            description: 'Escola particular de ensino básico'
        },
    ];

    const renderItems = () => {
        return partners.map((partner) => (
            <div
                key={partner.empresa + partner.description}
                className={`w-full md:w-1/5 min-h-64 md:min-h-90 text-[18px] md:text-[16px]bg-white shadow-lg rounded-lg p-4 transition-all duration-100 animate-${animateDirection}`}
            >
                <figure className="w-full h-[200px] flex items-center justify-center">
                    <Image
                        className="w-auto h-full object-cover rounded-tr-3xl p-[1px]"
                        src={partner.src ?? ""}
                        alt={partner.description}
                        title={partner.empresa}
                        priority
                    />
                </figure>
                <h5 className="text-2xl font-bold tracking-tight text-blue_d mt-4">
                    {partner.empresa}
                </h5>
                <p className="font-normal text-gray-700 mt-2">
                    {partner.description}
                </p>
            </div>
        ));
    };

    return (
        <div id="parceiros" className="bg-white w-full h-full min-h-screen py-10">
            <h2 className="text-left px-4 text-4xl font-bold text-blue_d mb-8">Parceiros</h2>
            <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center p-4 w-full mx-auto">
                {renderItems()}
            </div>
        </div>
    );
};

export default Partner;

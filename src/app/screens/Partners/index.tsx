import React, { useState } from 'react';
import materiais_pedagogicos from "@/assets/soluctions/materiais_pedagogicos.png";
import irium_educacao from "@/assets/soluctions/irium_educacao.png";
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
export interface IPartnerData {
    empresa?: string;
    src?: StaticImport;
    description: string;
}

const Partner: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateDirection, setAnimateDirection] = useState('slideInRight');

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
    ];

    const renderItems = () => {
        return partners.map((partner) => (
            <div
                className={`w-1/4 min-h-64 md:min-h-80 h-full text-[18px] md:text-[16px]bg-white shadow-lg rounded-lg p-4 transition-all duration-100 animate-${animateDirection}`}
            >
                <Image
                    className="w-full h-full object-cover rounded-tr-3xl p-[1px]"
                    src={partner.src ?? ""}
                    alt={partner.description}
                    title={partner.empresa}
                    priority
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">
                    {partner.empresa}
                </h5>
                <p className="font-normal text-gray-700 mt-2">
                    {partner.description}
                </p>
            </div>
        ));
    };

    return (
        <div id="depoimentos" className="bg-white w-full h-full min-h-screen py-10">
            <h2 className="text-left px-4 text-4xl font-bold text-blue_d mb-8">Parceiros</h2>
            <div className="flex gap-4 justify-center p-4 w-full mx-auto">
                {renderItems()}
            </div>
        </div>
    );
};

export default Partner;

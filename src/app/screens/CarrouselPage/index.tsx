// import { Carousel } from "flowbite-react";
import React from 'react';
import danMatemaLecionando from '@/assets/danmatema_lecionando.png';
import professorDanilo from '@/assets/professor_danilo.png';
import Image from "next/image";
import Carousel, { Slide } from '@/components/Carousel';
const CarrouselPage: React.FC = () => {

    const slides: Slide[] = [
        {
            name: 'Professor Danilo Souza escrevendo na lousa',
            src: danMatemaLecionando,
            alt: 'Professor Danilo Souza escrevendo na lousa',
        },
        {
            name: 'Professor Danilo Souza explicando conteúdo',
            src: professorDanilo,
            alt: 'Professor Danilo Souza explicando conteúdo',
        },
    ];

    return (
        <div className=" bg-yellow-500 w-full h-full">
            <Carousel slidesDatas={slides} />
        </div>
    );
}

export default CarrouselPage;
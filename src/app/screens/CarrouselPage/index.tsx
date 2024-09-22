import React from 'react';
import criancas_chao from '@/assets/criancas_chao.png';
import foto1 from '@/assets/opened-book-with-apple-desk-near-chalkboard.jpg';
import foto2 from '@/assets/students-knowing-right-answer.jpg';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Carousel, { Slide } from '@/components/Carousel';
const CarrouselPage: React.FC = () => {

    const slides: Slide[] = [
        {
            name: 'Crianças no chão 1',
            src: criancas_chao,
            alt: 'Crianças no chão',
            description: 'Atividade lúdica com jogos que envolvem o pensamento lógico na resolução de desafios'
        },
        {
            name: 'Foto 1',
            src: foto1,
            alt: 'Foto 1',
            description: 'Atividade lúdica com jogos que envolvem o pensamento lógico na resolução de desafios'
        },
        {
            name: 'Foto 1',
            src: foto2,
            alt: 'Foto 2',
            description: 'Atividade lúdica com jogos que envolvem o pensamento lógico na resolução de desafios'
        },
    ];

    return (
        <div className="">
            <Carousel
                slidesDatas={slides}>
            </Carousel>

        </div>
    );
}

export default CarrouselPage;
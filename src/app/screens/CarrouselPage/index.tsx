import React from 'react';
import danMatemaLecionando from '@/assets/danmatema_lecionando.png';
import professorDanilo from '@/assets/professor_danilo.png';
import Carousel, { Slide } from '@/components/Carousel';
const CarrouselPage: React.FC = () => {

    const slides: Slide[] = [
        {
            name: 'Professor Danilo Souza escrevendo na lousa',
            src: danMatemaLecionando,
            alt:  'Professor Danilo Souza escrevendo na lousa',
        },
        {
            name: 'Professor Danilo Souza explicando conteúdo',
            src: professorDanilo,
            alt:  'Professor Danilo Souza explicando conteúdo',
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
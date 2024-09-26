import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export interface ITestimonyData {
    empresa?: string;
    cargo?: string;
    name: string;
    title: string;
    description: string;
}

const Testimony: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateDirection, setAnimateDirection] = useState('slideInRight');

    const testimonies: ITestimonyData[] = [
        {
            name: 'Priscila',
            title: 'Mãe de estudante',
            description: 'Meu filho melhorou muito na aula de matemática com o método do professor eu acredito que para cada aluno ele tem um método individual estimular o interesse do aluno na materia'
        },
        {
            name: 'Izabella',
            title: 'Mãe de estudante',
            description: 'Uma pessoa competente  e humana, que tem um olhar diferenciado pra cada criança  e pra cada situação.'
        },
        {
            name: 'Irenita',
            title: 'Mãe de estudante',
            description: 'Meu filho nunca ficou tão ansioso pelo dia da aula com o professor Danilo. Está progredindo muito mais na escola.'
        },
    ];

    const nextSlide = () => {
        setAnimateDirection('slideOutLeft');
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1
            );
            setAnimateDirection('slideInRight');
        }, 500);
    };

    const prevSlide = () => {
        setAnimateDirection('slideOutRight');
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1
            );
            setAnimateDirection('slideInLeft');
        }, 500); // Tempo da animação de saída
    };

    const itemTemplate = (testimony: ITestimonyData) => {
        return (
            <div
                className={`w-full min-h-[400px] md:min-h-90 h-full text-[18px] md:text-[16px] bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 transition-all duration-100 animate-${animateDirection}`}
            >
                <h5 className="text-2xl font-bold tracking-tight text-blue_d mt-4">{testimony.name}</h5>
                <div className='w-full h-full flex flex-col items-start justify-between flex-grow'>
                    <p className="font-normal text-gray-700 mt-2">{testimony.description}</p>
                    <span className='text-blue_d italic'>{testimony.title}</span>
                </div>
            </div>
        );
    };

    const getSecondaryIndex = () => {
        return currentIndex === testimonies.length - 1 ? 0 : currentIndex + 1;
    };

    const getTertiaryIndex = () => {
        return currentIndex === 0 ? testimonies.length - 1 : currentIndex - 1;
    };

    const renderItem = () => {
        return (
            <>
                <div className="w-full p-4 min-h-[400px]">
                    {itemTemplate(testimonies[currentIndex])}
                </div>
                <div className="w-full p-4 hidden sm:block">
                    {itemTemplate(testimonies[getSecondaryIndex()])}
                </div>
                <div className="w-full p-4 hidden md:block">
                    {itemTemplate(testimonies[getTertiaryIndex()])}
                </div>
            </>
        );
    };

    return (
        <div id="depoimentos" className="bg-white w-full h-full min-h-screen p-4">
            <h2 className="text-left px-4 text-4xl font-bold text-blue_d mb-8">Depoimentos</h2>
            <div className="relative w-full mx-auto">
                <div className="flex items-center justify-between">

                    <IoIosArrowBack
                        className="cursor-pointer text-4xl text-blue_d md:text-[3rem] transition-colors duration-300 "
                        onClick={prevSlide} />

                    {renderItem()}

                    <IoIosArrowForward
                        className="cursor-pointer text-4xl text-blue_d md:text-[4rem] transition-colors duration-300"
                        onClick={nextSlide} />
                </div>
            </div>
        </div>
    );
};

export default Testimony;

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
        { name: 'Danilo Souza', title: 'Excelente Professor', description: 'Danilo Souza me ajudou a compreender matemática...' },
        { name: 'Maria Fernanda', title: 'Consultoria Educacional', description: 'A consultoria educacional do professor Danilo foi essencial...' },
        { name: 'João Pedro', title: 'Aprendi muito', description: 'Nunca pensei que conseguiria gostar de matemática, mas o professor...' },
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
                className={`w-full min-h-64 md:min-h-80 h-full text-[18px] md:text-[16px]bg-white shadow-lg rounded-lg p-4 transition-all duration-100 animate-${animateDirection}`}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">{testimony.title}</h5>
                <p className="font-normal text-gray-700 mt-2">{testimony.description}</p>
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
                <div className="w-full p-4">{itemTemplate(testimonies[currentIndex])}</div>
                <div className="w-full p-4 hidden sm:block">{itemTemplate(testimonies[getSecondaryIndex()])}</div>
                <div className="w-full p-4 hidden md:block">{itemTemplate(testimonies[getTertiaryIndex()])}</div>
            </>
        );
    };

    return (
        <div id="depoimentos" className="bg-white w-full h-full min-h-screen py-10">
            <h2 className="text-left px-4 text-4xl font-bold text-blue_d mb-8">Depoimentos</h2>
            <div className="relative w-full max-w-[90%] mx-auto">
                <div className="flex items-center justify-between">

                    <button onClick={prevSlide} className="w-14 h-14 bg-gray-300 rounded-full group hover:bg-blue_d">
                        <IoIosArrowBack className="cursor-pointer text-4xl text-blue_d md:text-[3rem] transition-colors duration-300 group-hover:text-white" />
                    </button>

                    {renderItem()}

                    <button onClick={nextSlide} className="w-14 h-14 bg-gray-300 rounded-full group hover:bg-blue_d">
                        <IoIosArrowForward className="cursor-pointer text-4xl text-blue_d md:text-[3rem] transition-colors duration-300 group-hover:text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimony;

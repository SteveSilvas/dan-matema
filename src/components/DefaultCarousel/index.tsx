import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export interface IDefaultCarouselProps {
    src?: StaticImport;
    alt?: string;
    description?: string;
    title?: string;
    target?: "_blank" | "_self" | "_parent" | "_top" | "framename" | "none" | undefined;
}

export interface IDefaultCarousel {
    data: IDefaultCarouselProps[];
}

const DefaultCarousel: React.FC<IDefaultCarousel> = ({
    data
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false); // Gerenciar animações

    const nextSlide = () => {
        if (isAnimating) return; // Evitar disparar a animação enquanto ela já está em execução
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 500); // Espera a animação terminar antes de mudar o slide
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
        }, 500);
    };

    // Resetar o estado de animação após cada mudança de slide
    useEffect(() => {
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }, [currentIndex]);

    const renderImage = (item: IDefaultCarouselProps) => {
        return item?.src && (
            <figure className="w-full h-[200px] flex items-center justify-center">
                <Image
                    className="w-auto h-full object-cover rounded-tr-3xl p-[1px]"
                    src={item.src}
                    alt={item.alt ?? ""} />
            </figure>
        );
    };

    const itemTemplate = (item: IDefaultCarouselProps) => {
        return (
            <div
                className={`w-full min-h-[400px] md:min-h-90 h-full text-[18px] md:text-[16px] bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 transition-transform duration-500 ease-in-out ${
                    isAnimating ? 'opacity-50' : 'opacity-100'}`}
            >
                {renderImage(item)}
                <h5 className="text-2xl font-bold tracking-tight text-blue_d mt-4">{item?.title}</h5>
                <div className='w-full h-full flex flex-col items-start justify-between flex-grow'>
                    <p className="font-normal text-gray-700 mt-2">{item?.description}</p>
                </div>
            </div>
        );
    };

    const getNextIndex = (offset: number) => {
        return (currentIndex + offset) % data.length;
    };

    const renderItem = () => {
        return (
            <div className="flex w-full space-x-4 overflow-hidden">
                <div className="w-full min-w-0">
                    {itemTemplate(data[currentIndex])}
                </div>
                <div className="w-full hidden sm:block min-w-0">
                    {itemTemplate(data[getNextIndex(1)])}
                </div>
                <div className="w-full hidden md:block min-w-0">
                    {itemTemplate(data[getNextIndex(-1)])}
                </div>
                <div className="w-full hidden md:block min-w-0">
                    {itemTemplate(data[getNextIndex(2)])}
                </div>
            </div>
        );
    };

    return (
        <div id="depoimentos" className="bg-white w-full h-full min-h-screen p-4 overflow-hidden">
            <h2 className="text-left px-4 text-4xl font-bold text-blue_d mb-8">Depoimentos</h2>
            <div className="relative w-full mx-auto">
                <div className="flex items-center justify-between">
                    <IoIosArrowBack
                        className="cursor-pointer text-4xl text-blue_d md:text-[3rem] transition-colors duration-300"
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

export default DefaultCarousel;

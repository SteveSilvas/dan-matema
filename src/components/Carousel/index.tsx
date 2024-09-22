"use client";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Slide {
    name: string;
    src: StaticImport;
    alt: string;
    description?: string;
}

export interface ICarousel {
    slidesDatas: Slide[];
}

const Carousel: React.FC<ICarousel> = ({ slidesDatas }) => {
    const [selectedItem, setSelectedItem] = useState<Slide | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (slidesDatas.length > 0) {
            setSelectedItem(slidesDatas[0]);
        }
    }, [slidesDatas]);

    const handlePrevSlide = () => {
        const newIndex = (currentIndex === 0) ? slidesDatas.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedItem(slidesDatas[newIndex]);
    };

    const handleNextSlide = () => {
        const newIndex = (currentIndex === slidesDatas.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedItem(slidesDatas[newIndex]);
    };

    const SlideContent = () => (
        <div className="w-[100%] min-h-[392px] h-full relative flex justify-center align-center ">
            {selectedItem && (
                <>
                    <Image
                        className="w-full h-auto object-cover"
                        src={selectedItem.src}
                        alt={selectedItem.alt}
                        title={selectedItem.name}
                    />
                </>
            )}
        </div>
    );

    return (
        <div className="text-center bg-purple-800 overflow-hidden max-h-[392px] min-h-[392px] w-full relative group">
            <IoIosArrowBack
                className="cursor-pointer z-30 absolute top-1/2 -translate-y-1/2 left-2 text-4xl text-white hover:text-gray-400 transition-colors duration-300"
                onClick={handlePrevSlide}
            />
            <IoIosArrowForward
                className="cursor-pointer z-30 absolute top-1/2 -translate-y-1/2  right-2 text-4xl text-white hover:text-gray-400 transition-colors duration-300"
                onClick={handleNextSlide}
            />
            <span className="p-10 text-xl absolute bg-black h-full inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-20 pointer-events-none">
                {selectedItem?.description}
            </span>

            <SlideContent />
        </div>
    );
};

export default Carousel;

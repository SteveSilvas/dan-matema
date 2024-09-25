import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
  const [animationDirection, setAnimationDirection] = useState<string>("");

  useEffect(() => {
    if (slidesDatas.length > 0) {
      setSelectedItem(slidesDatas[0]);
    }
  }, [slidesDatas]);

  const handlePrevSlide = () => {
    const newIndex = currentIndex === 0 ? slidesDatas.length - 1 : currentIndex - 1;
    setAnimationDirection("slideInRight");
    setCurrentIndex(newIndex);
    setSelectedItem(slidesDatas[newIndex]);
  };

  const handleNextSlide = () => {
    const newIndex = currentIndex === slidesDatas.length - 1 ? 0 : currentIndex + 1;
    setAnimationDirection("slideInLeft");
    setCurrentIndex(newIndex);
    setSelectedItem(slidesDatas[newIndex]);
  };

  const SlideContent = () => (
    <div className="w-full flex justify-center items-center">
      {selectedItem && (
        <Image
          className={`w-full h-auto object-cover ${animationDirection}`}
          src={selectedItem.src}
          alt={selectedItem.alt}
          title={selectedItem.name}
        />
      )}
    </div>
  );

  return (
    <div className="text-center bg-white overflow-hidden max-h-[392px] md:min-h-[392px] w-full relative group flex flex-col items-center">
      <div className="w-full flex justify-between items-center px-4">
        <IoIosArrowBack
          className="cursor-pointer text-4xl text-blue_d md:text-[3rem] hover:text-[3.1rem] transition-colors duration-300"
          onClick={handlePrevSlide}
        />
        <div className="w-[90%] flex justify-center items-center">
          <SlideContent />
        </div>
        <IoIosArrowForward
          className="cursor-pointer text-4xl text-blue_d md:text-[3rem] hover:text-[3.1rem] transition-colors duration-300"
          onClick={handleNextSlide}
        />
      </div>
      {selectedItem?.description && (
        <div className="p-4 text-white w-full text-center text-lg md:text-xl mt-2">
          {selectedItem.description}
        </div>
      )}
    </div>
  );
};

export default Carousel;

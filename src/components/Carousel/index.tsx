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
    <div className="w-[100%] md:min-h-[392px] h-full relative flex justify-center items-center">
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
    <div className="text-center bg-white overflow-hidden max-h-[392px] md:min-h-[392px] w-full relative group">
      <IoIosArrowBack
        className="cursor-pointer z-30 absolute top-1/2 -translate-y-1/2 left-2 text-4xl text-white hover:text-blue_d md:text-[3rem] md:hover:text-[3.1rem] transition-colors duration-300"
        onClick={handlePrevSlide}
      />
      <IoIosArrowForward
        className="cursor-pointer z-30 absolute top-1/2 -translate-y-1/2 right-2 text-4xl text-white hover:text-blue_d md:text-[3rem] md:hover:text-[3.1rem] transition-colors duration-300"
        onClick={handleNextSlide}
      />
      {selectedItem?.description && (
        <span className="p-10 text-xl absolute bg-black h-full inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-20 pointer-events-none">
          {selectedItem?.description}
        </span>
      )}
      <SlideContent />
    </div>
  );
};

export default Carousel;

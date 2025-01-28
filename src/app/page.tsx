"use client";
import Image from "next/image";
import danmatema_home from "../assets/danmatema_home.png";
import CarrouselPage from "./screens/CarrouselPage";
import About from "./screens/About";
import Curriculum from "./screens/Curriculum";
import Solcution from "./screens/Soluction";
import Contact from "./screens/Contact";
import Testimony from "./screens/Testimony";
import Partner from "./screens/Partners";
import ContactButton from "@/components/ContactButton";
export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row-reverse bg-white">
        <figure className="flex justify-center w-full md:w-1/2 animate-slideInRight">
          <Image
            className="h-[75%] w-auto"
            src={danmatema_home}
            title="Fotografia do professor Danilo Souza"
            alt="Fotografia do professor Danilo Souza"
            priority
          />
        </figure>
        <section className="flex flex-col justify-center items-center h-1/2 md:h-auto">
          <strong className="px-3 text-4xl md:text-7xl text-left text-blue_d animate-slideInLeft transition-all">
            Professor Danilo Souza
          </strong>
          <p className="px-3 text-2xl md:text-4xl text-left text-gray-700 animate-slideInLeft transition-all">
            Transforme a Matemática no Maior Aliado do Seu Filho!
          </p>
        </section>
      </div>
      <ContactButton />
      <CarrouselPage />
      <About />
      <Curriculum />
      <Testimony />
      <Solcution />
      <Partner />
      <Contact />
    </>
  );
}

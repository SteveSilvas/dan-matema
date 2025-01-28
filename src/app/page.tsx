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
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
        <section className="flex justify-center items-center h-1/2 md:h-auto">
          <strong className="px-3 text-4xl md:text-7xl text-left text-blue_d animate-slideInLeft transition-all">
            Professor Danilo Souza
          </strong>
        </section>
        <figure className="flex justify-center  animate-slideInRight">
          <Image
            className="h-[75%] w-auto"
            src={danmatema_home}
            title="Fotografia do professor Danilo Souza"
            alt="Fotografia do professor Danilo Souza"
            priority
          />
        </figure>
      </div>
      <ContactButton/>
      <CarrouselPage />
      <About />
      <Curriculum />
      <Testimony />
      <Solcution />
      <Partner/>
      <Contact />
    </>
  );
}

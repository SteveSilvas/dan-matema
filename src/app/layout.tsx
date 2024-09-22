"use client";
import { Open_Sans } from 'next/font/google';
import './globals.css';
import About from "./screens/About";
import Contact from "./screens/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Curriculum from "./screens/Curriculum";
import Solcution from "./screens/Soluction";
import CarrouselPage from "./screens/CarrouselPage";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-default',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="pt-br">
      <body className={`h-screen w-screen overflow-x-hidden ${openSans.variable} font-sans`}>
        <div className="w-full min-h-20">
          <div className="top-0 w-full fixed z-10">
            <Header />
            <Navbar
              isOpen={isOpen}
              toggleSidebar={() => {
                toggleSidebar();
              }}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
        <main className="w-full">
          {children}
          <CarrouselPage />
          <About />
          <Curriculum />
          <Solcution />
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
  );
}
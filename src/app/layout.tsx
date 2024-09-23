"use client";
import { Open_Sans } from 'next/font/google';
import './globals.css';
import About from "./screens/About";
import Contact from "./screens/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Curriculum from "./screens/Curriculum";
import Solcution from "./screens/Soluction";
import CarrouselPage from "./screens/CarrouselPage";
import ToastComponent from '@/components/Toast';
import { useAtom } from 'jotai';
import toastContext from '@/context/ToastAtom';

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
  const [toast, setToast] = useAtom(toastContext)

  useEffect(() => {
   if(toast.isOpen){
    setTimeout(() => {
      setToast({
        isOpen: false,
        text: ''
      })
    }, 4000);
   }
  }, [toast, setToast]);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="pt-br">
      <body className={`h-screen w-screen overflow-x-hidden ${openSans.variable} font-sans`}>
        <div className='fixed z-50 right-0'>
          {toast.isOpen && <ToastComponent text={toast.text} />}

        </div>
        <div className="w-full min-h-10">
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
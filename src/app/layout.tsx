"use client";
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import ToastComponent from '@/components/Toast';
import { useAtom } from 'jotai';
import toastContext from '@/context/ToastAtom';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

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
  const [toast, setToast] = useAtom(toastContext);

  useEffect(() => {
    if (toast.isOpen) {
      setTimeout(() => {
        setToast({
          isOpen: false,
          text: ''
        });
      }, 5000);
    }
  }, [toast, setToast]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="pt-br">
      <head>
        <title>Dan Matema</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${openSans.variable} font-sans flex flex-col min-h-screen`}>
        <header className="w-full fixed top-0 left-0 z-50">
          <div className="fixed z-50 right-0">
            {toast.isOpen && <ToastComponent text={toast.text} />}
          </div>
          <Header />
          <Navbar
            isOpen={isOpen}
            toggleSidebar={() => toggleSidebar()}
            setIsOpen={setIsOpen}
          />
        </header>
        <main className="flex-grow w-full mt-[90px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

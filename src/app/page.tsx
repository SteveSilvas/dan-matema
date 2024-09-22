import Image from "next/image";
import danmatema_home from "../assets/danmatema_home.png";
export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <section className="flex justify-center items-center ">
        <strong className="px-3 text-4xl md:text-7xl text-left text-purple-800 animate-slideInLeft transition-all">
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
  );
}

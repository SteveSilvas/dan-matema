import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill, RiMailFill, RiPhoneFill } from "react-icons/ri";
import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-blue_d text-white py-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Danilo Souza</h2>
            <span className="text-sm">Professor e Consultor Educacional</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2 text-center">Siga-me nas redes sociais:</span>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/danmatema/" target="_blank">
                <RiFacebookFill className="text-2xl hover:text-gray-300 transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/danmatema/" target="_blank">
                <RiInstagramFill className="text-2xl hover:text-gray-300 transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/in/danilo-souza" target="_blank">
                <RiLinkedinFill className="text-2xl hover:text-gray-300 transition-colors" />
              </Link>
              <Link href="https://www.youtube.com/c/%C3%89oesquema" target="_blank">
                <RiYoutubeFill className="text-2xl hover:text-gray-300 transition-colors" />
              </Link>
            </div>
          </div>
          <div className="text-center md:text-right">
            <span className="text-sm mb-2">Contate-me:</span>
            <div className="flex justify-center md:justify-end gap-2">
              <a href="mailto:profdanmatema@gmail.com">
                <RiMailFill className="text-2xl hover:text-gray-300 transition-colors" />
              </a>
              <a href="https://wa.me/5511947934827" target="_blank" rel="noopener noreferrer">
                <RiPhoneFill className="text-2xl hover:text-gray-300 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Danilo Souza. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }
  
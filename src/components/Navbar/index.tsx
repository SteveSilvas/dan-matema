import Link from "next/link";
import { GrClose, GrMenu } from "react-icons/gr";

export interface INavbarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    setIsOpen: (value: boolean) => void;
}

const Navbar: React.FC<INavbarProps> = ({ isOpen, toggleSidebar, setIsOpen }) => {
    return (
        <div
            className={`${isOpen ? "h-screen" : "h-auto"} md:h-auto top-0 left-0 bg-white text-black flex flex-col md:flex-row align-center items-center p-4`}
        >
            <div className="flex justify-center md:justify-start items-center relative w-full md:w-auto p-4 md:p-0">
                {isOpen ? <GrClose
                    className="cursor-pointer absolute right-4 md:hidden"
                    onClick={toggleSidebar} /> :
                    <GrMenu
                        className="cursor-pointer absolute right-4 md:hidden"
                        onClick={toggleSidebar}
                    />}
            </div>
            <nav className="w-[100%] h-[100%] text-[18px] md:h-auto flex flex-col md:flex-row align-center items-center justify-center md:justify-end gap-10">
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Inicio
                </Link>
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#biografia"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Biografia
                </Link>
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#solucoes"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Soluções
                </Link>
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#curriculo"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Conheça mais
                </Link>
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#depoimentos"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Depoimentos
                </Link>
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#parceiros"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Parceiros
                </Link>
                <Link
                    className={`hover:text-blue_d font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#contato"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Contato
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;

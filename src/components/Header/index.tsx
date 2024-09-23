import Link from "next/link";
import { RiFacebookFill, RiInstagramFill, RiMailFill, RiPhoneFill, RiYoutubeFill } from "react-icons/ri";

export interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = () => {
    return (
        <section className="hidden md:flex bg-yellow_d top-0 w-[100%] mx-0 justify-around items-center p-1 text-xs">
            <div className="flex justify-center items-center flex-1 gap-1">
                <a
                    className="flex justify-center items-center text-[12px] hover:text-blue_d"
                    href="https://wa.me/5511947934827"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <RiPhoneFill className="text-xl hover:text-blue_d" />
                    +55 (11) 94793-4827
                </a>
                <a
                    className="flex justify-center items-center text-[12px] hover:text-blue_d"
                    href="mailto:profdanmatema@gmail.com">
                    <RiMailFill className="text-xl hover:text-blue_d" />
                    profdanmatema@gmail.com
                </a>
            </div>
            <div className="flex justify-end items-center gap-1 flex-1 px-4">
                <Link
                    title="Instagram"
                    className="flex justify-center items-center text-[12px]"
                    href={"https://www.instagram.com/danmatema/"}
                    target="_blank">
                    <RiInstagramFill className="text-xl hover:text-blue_d"/>
                </Link>
                <Link
                    title="Facebook"
                    className="flex justify-center items-center text-[12px] "
                    href={"https://www.facebook.com/danmatema/"}
                    target="_blank">
                    <RiFacebookFill className="text-xl hover:text-blue_d" />
                </Link>
                <Link
                    title="Youtube"
                    className="flex justify-center items-center text-[12px]"
                    href={"https://www.youtube.com/c/%C3%89oesquema"}
                    target="_blank">
                    <RiYoutubeFill className="text-xl hover:text-blue_d transition-colors" />
                </Link>
            </div>
        </section>
    );
};

export default Header;

import Image, { StaticImageData } from "next/image";
import alfabetizacao_matematica from "@/assets/soluctions/alfabetizacao_matematica.png";
import esq_educacao from "@/assets/soluctions/esq_educacao.png";
import aulas_gratuitas from "@/assets/soluctions/aulas_gratuitas.png";
import Card from "@/components/Card";
import DefaultButton from "@/components/DefaultButton";
import { RiSearchLine } from "react-icons/ri";
export interface ISoluctionCard {
    description: string;
    title: string;
    to: string;
    src: StaticImageData;
    alt: string;
    target?: "_blank" | "_self" | "_parent" | "_top" | "framename" | "none" | undefined
}
export default function Solcution() {
    const SoluctionCard: React.FC<ISoluctionCard> = ({
        description,
        title,
        to,
        src,
        alt,
        target
    }) => {
        return (
            <div className="w-full md:w-[250px] min-h-[400px] shadow-lg flex flex-col justify-between">
                <figure className="w-full h-[250px] flex items-center justify-center">
                    <Image
                        className="w-full h-full object-cover rounded-tr-3xl p-[1px]"
                        src={src}
                        alt={alt}
                        title={title}
                        priority
                    />
                </figure>
                <div className="px-4 py-2 flex flex-col items-center justify-between flex-grow">
                    <span className="text-center">
                        {description}
                    </span>
                    <DefaultButton
                        title="Saiba mais"
                        target={target}
                        to={to}>
                        <RiSearchLine size={20} />
                    </DefaultButton>
                </div>
            </div>
        );
    }

    return (
        <div className="text-start bg-white min-h-screen" id="solucoes">
            <h1 className="text-4xl text-blue_d font-bold px-4">
                Soluções Educacionais
            </h1>

            <section className="mt-4 flex flex-col md:flex-row justify-center items-center p-4 gap-4">
                <SoluctionCard
                    title="Alfabetacao Matematica"
                    to="curso-alfabetizacao-matematica"
                    src={alfabetizacao_matematica}
                    alt="Alfabetacao Matematica"
                    description="Curso - Alfabetização Matemática com Dan Matema"
                />
                <SoluctionCard
                    title="ESQ educação"
                    to="https://eoesquema.com/"
                    src={esq_educacao}
                    alt="ESQ educação"
                    description="Hub de Produtos Educacionais"
                    target="_blank"
                />
                <SoluctionCard
                    title="Canal do youtube"
                    to="https://www.youtube.com/watch?v=hqeKPvTwfkU&list=PLbyU8QzGbC2XaeCzX1HXvxtZ8FTAe5qeE"
                    src={aulas_gratuitas}
                    alt="Canal do youtube"
                    description="Playlist de aulas gratuitas"
                    target="_blank"
                />
            </section>
        </div>
    );
}


import Image, { StaticImageData } from "next/image";
import alfabetizacao_matematica from "@/assets/soluctions/alfabetizacao_matematica.png";
import esq_educacao from "@/assets/soluctions/esq.jpg";
import materiais_pedagogicos from "@/assets/soluctions/materiais_pedagogicos.png";
import aulas_gratuitas from "@/assets/soluctions/aulas_gratuitas.png";
import danmatema_lecionando from "@/assets/danmatema_lecionando.png";
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
                        to={to}
                        className='bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-xl'
                    >
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
                    title="Acompanhamento escolar/aula particular"
                    to="https://aulas.universodanmatema.com.br/"
                    src={danmatema_lecionando}
                    alt="Acompanhamento escolar/aula particular"
                    description="Acompanhamento escolar/aula particular"
                    target="_blank"
                />
                <SoluctionCard
                    title="Curadoria de jogos matemáticos"
                    to="https://danmatema.mmpmateriaismatematicos.com.br/"
                    src={materiais_pedagogicos}
                    alt="Loja de jogos matemáticos"
                    description="Loja online de jogos educativos com foco em matemática e raciocinio lógico"
                    target="_blank"
                />
                <SoluctionCard
                    title="Alfabetacao Matematica"
                    to="curso-alfabetizacao-matematica"
                    src={alfabetizacao_matematica}
                    alt="Alfabetacao Matematica"
                    description="Curso - Alfabetização Matemática com Dan Matema"
                />
                <SoluctionCard
                    title="ESQ educação"
                    to="https://naducandeiasitapevisp.my.canva.site/esq"
                    src={esq_educacao}
                    alt="ESQ educação"
                    description="Hub de Produtos Educacionais"
                    target="_blank"
                />
                <SoluctionCard
                    title="Canal do youtube"
                    to="https://www.youtube.com/c/%C3%89oesquema"
                    src={aulas_gratuitas}
                    alt="Canal do youtube"
                    description="Playlist de aulas gratuitas"
                    target="_blank"
                />
            </section>
        </div>
    );
}


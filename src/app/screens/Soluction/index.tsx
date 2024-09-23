import Image from "next/image";
import materiais_pedagogicos from "@/assets/soluctions/materiais_pedagogicos.png";
import alfabetizacao_matematica from "@/assets/soluctions/alfabetizacao_matematica.png";
import irium_educacao from "@/assets/soluctions/irium_educacao.png";
import esq_educacao from "@/assets/soluctions/esq_educacao.png";
import Card from "@/components/Card";
import DefaultButton from "@/components/DefaultButton";
import { RiSearchLine } from "react-icons/ri";

export default function Solcution() {
    return (
        <div className="text-center bg-white min-h-[80vh]" id="solucoes">
            <h1 className="text-4xl text-blue_d font-bold px-10">
                Soluções Educacionais
            </h1>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
                <Card>
                    <figure className="w-full h-[250px] flex items-center justify-center">
                        <Image
                            className="w-full h-full object-cover rounded-tr-3xl p-[1px]"
                            src={materiais_pedagogicos}
                            alt="Materiais pedagógicos"
                            title="Materiais pedagógicos"
                            priority
                        />
                    </figure>
                    <div className="px-4 py-2 flex flex-col h-full items-center justify-between">
                        <span>
                            Materiais matemáticos, seleção do
                            Dan Matema com condições exclusivas
                        </span>
                        <DefaultButton title="Saiba mais" to="">
                            <RiSearchLine size={20} />
                        </DefaultButton>
                    </div>
                </Card>

                <Card>
                    <figure className="w-full h-[250px] flex items-center justify-center">
                        <Image
                            className="w-full h-full object-cover rounded-tr-3xl p-[1px]"
                            src={alfabetizacao_matematica}
                            alt="Curso de Alfabetização matemática"
                            title="Curso de Alfabetização matemática"
                            priority
                        />
                    </figure>
                    <div className="px-4 py-2 flex flex-col h-full items-center justify-between">
                        <span>
                            Curso - Alfabetização
                            Matemática com Dan Matema
                        </span>
                        <DefaultButton title="Saiba mais" to="">
                            <RiSearchLine size={20} />
                        </DefaultButton>
                    </div>
                </Card>

                <Card>
                    <figure className="w-full h-[250px] flex items-center justify-center">
                        <Image
                            className="w-full h-full object-cover rounded-tr-3xl p-[1px]"
                            src={irium_educacao}
                            alt="Projetos educacionais"
                            title="Projetos educacionais"
                            priority
                        />
                    </figure>
                    <div className="px-4 py-2 flex flex-col h-full items-center justify-between">
                        <span>
                            Projetos Educacionais
                        </span>
                        <DefaultButton title="Saiba mais" to="">
                            <RiSearchLine size={20} />
                        </DefaultButton>
                    </div>
                </Card>

                <Card>
                    <figure className="w-full h-[250px] flex items-center justify-center">
                        <Image
                            className="w-full h-full object-cover rounded-tr-3xl"
                            src={esq_educacao}
                            alt="ESQ educação"
                            title="ESQ educação"
                            priority
                        />
                    </figure>
                    <div className="px-4 py-2 flex flex-col h-full items-center justify-between">
                        <span>
                            Hub de Produtos Educacionais
                        </span>
                        <DefaultButton title="Saiba mais" to="">
                            <RiSearchLine size={20} />
                        </DefaultButton>
                    </div>
                </Card>
            </section>
        </div>
    );
}

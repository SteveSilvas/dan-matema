export default function Curriculum() {
    return (
        <div className="text-center bg-white min-h-screen text-[18px] md:text-[16px]" id="curriculo">
            <h1 className="text-4xl text-blue_d font-bold text-start px-4">
                Conheça mais sobre
                <strong className="text-4xl text-yellow_d font-bold mx-2">
                    Dan Matema
                </strong>
            </h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 md:mt-10">
                <div className="flex-col max-w-[100%] m-4 animate-bounceIn">
                    <strong>Prestação de Serviços</strong>
                    <ul className="p-4 border-b-8 border-gray-300 md:min-h-[100%]">
                        <li className="text-start list-disc">
                            Foi professor da rede estadual de educação por 10 anos
                        </li>
                        <li className="text-start list-disc">
                            Lecionou também física, desenho geométrico, educação financeira, educação fiscal  e Power BI
                        </li>
                        <li className="text-start list-disc">
                            Consultor matemática em escolas e empresas de materiais didáticos
                        </li>
                        <li className="text-start list-disc">
                            Experiência lecionando em colégios particulares
                        </li>
                        <li className="text-start list-disc">
                            Atuação no terceiro setor
                        </li>
                    </ul>
                </div>
                <div className="flex-col max-w-[100%] m-4 animate-bounceIn">
                    <strong>Produção de material</strong>
                    <ul className="p-4 border-b-8 border-gray-300 md:min-h-[100%]">
                        <li className="text-start list-disc">
                            Produziu e-book de atividades para educadores
                        </li>
                        <li className="text-start list-disc">
                            Lançou cursos online do universo    matemático
                        </li>
                        <li className="text-start list-disc">
                            Produção de planilhas automatizadas para rotina e gestão escolar
                        </li>
                        <li className="text-start list-disc">
                            Criou um laboratório virtual de ensino
                        </li>
                    </ul>
                </div>
                <div className="flex-col max-w-[100%] m-4 animate-bounceIn ">
                    <strong>Empreendedorismo</strong>
                    <ul className="p-4 border-b-8 border-gray-300 md:min-h-[100%]">
                        <li className="text-start list-disc">
                            Possui o Hub de soluções educacionais, ESQ Educação
                        </li>
                        <li className="text-start list-disc">
                            Criou o Curso Alfabetização Matemática
                        </li>
                        <li className="text-start list-disc">
                            É diretor de Franquia da Irium Educação
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

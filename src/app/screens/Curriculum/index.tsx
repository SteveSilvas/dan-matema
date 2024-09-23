export default function Curriculum() {
    return (
        <div className="text-center bg-white min-h-[80vh]" id="curriculo">
            <h1 className="text-4xl text-blue_d font-bold text-start px-4">
                Conheça mais sobre Dan Matema
            </h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 ">
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
                            Criou um laboratório virtual de ensino
                        </li>
                    </ul>
                </div>
                <div className="flex-col max-w-[100%] m-4 animate-bounceIn">
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

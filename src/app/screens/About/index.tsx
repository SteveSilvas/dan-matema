
export default function About() {
    return (
        <div className="px-4 py-10 text-xl text-left bg-white min-h-[80vh] w-[100%] flex flex-col md:flex-row" id="biografia">
            <div className="min-w-[50%]">
                <h1 className="text-4xl text-blue_d font-bold">
                    Os <strong className="text-4xl text-yellow_d font-bold">números</strong> que
                    podemos descobrir
                </h1>
            </div>
            <div className="min-w-[50%] flex flex-col md:gap-4 leading-6">
                <p className="text-justify py-4 md:p-4 md:py-0  min-w-[50%] text-[16px]">
                    Danilo Souza, popularmente conhecido como Dan Matema é pesquisador, professor
                    com formação em matemática, especialista em tecnologias educacionais e
                    empreendedor.

                </p>
                <p className="text-justify md:p-4 md:py-0  min-w-[50%] text-[16px]">
                    Nascido e criado na zona oeste de São Paulo, Danilo sempre foi um entusiasta dos
                    conhecimentos científicos e um autodidata nato, agora ele dedica-se à apresentar
                    esse universo a estudantes de diversas faixas etárias, além de fortalecer mais de 50
                    unidades escolares com seu trabalho de consultorias.
                </p>
            </div>
        </div>
    );
}

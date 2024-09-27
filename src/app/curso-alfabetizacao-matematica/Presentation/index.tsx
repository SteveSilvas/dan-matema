import React from 'react';

const Presentation: React.FC = () => {
    return (
        <section className='w-screen min-h-[70vh] flex flex-col md:flex-row'>
            <div className='h-full flex-1 p-4 flex-col'>
                <h1 className='text-4xl text-blue_d font-bold'>Curso de Alfabetização Matemática</h1>

                <h3 className='text-2xl text-gray-900 mt-4'>
                    Desvende os Mistérios da Matemática com o Professor Danmatema!
                </h3>

                <strong className='text-gray-900 py-4'>
                    Seu filho se depara com dificuldades em matemática?
                </strong>
                <p className='text-gray-900 mt-4'>
                    No curso Alfabetização Matemática,
                    seus filhos embarcam em uma jornada pelo mundo dos números,
                    desvendando seus segredos de forma lúdica e envolvente</p>
            </div>
            <div className='flex-1 p-4 md:p-0'>
                <iframe
                    className="w-full md:px-4 aspect-video self-stretch md:min-h-96"
                    src="https://www.youtube.com/embed/fMKEDnqZIHo?si=3pXF0TwyFuAqVYou"
                    title="YouTube video player"
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>

                </iframe>
            </div>
        </section>
    );
}

export default Presentation;
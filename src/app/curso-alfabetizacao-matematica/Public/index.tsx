import React from 'react';

// import { Container } from './styles';

const Public: React.FC = () => {
    return (
        <section className='flex flex-col gap-4 p-4 py-10'>
            <div className='w-full'>
                <h3 className='text-4xl text-blue_d font-bold'>Público atendido</h3>
                <p className='text-lg text-gray-700 text-center'>
                    Atendemos a um público de idades variadas
                    desde os primeiros anos do ensino fundamental ao final deste ciclo.
                </p>
            </div>
            <div className='flex flex-col md:flex-row gap-4 justify-center'>
                <div className='shadow-lg w-full md:w-60 h-80'>
                    <figure className='h-40 w-full bg-gray-700'>
                        {/* <Image
                            src="https://d9aloqs890lqz.cloudfront.net/uploads/846/17-07-2024/5y4uo-5.jpg"
                            alt="materiais_pedagogicos"
                            width={100}
                            height={100}
                            priority
                        /> */}
                    </figure>
                    <div className='flex flex-col justify-center items-center mt-4'>
                        <strong className='text-xl'>Fundamental 1</strong>
                        <p>Crianças de 6 à 10 Anos</p>
                        <span>Horário: 10h30 Às 12h</span>
                    </div>
                </div>
                <div className='shadow-lg  w-full md:w-60 h-80'>
                    <figure className='h-40 w-full bg-gray-700'>
                        {/* <Image
                            src="https://d9aloqs890lqz.cloudfront.net/uploads/846/17-07-2024/5y4uo-5.jpg"
                            alt="materiais_pedagogicos"
                            width={100}
                            height={100}
                            priority
                        /> */}
                    </figure>
                    <div className='flex flex-col justify-center items-center mt-4'>
                        <strong className='text-xl'>Ensino Fundamental 2</strong>
                        <p>Crianças de 11 à 13 Anos</p>
                        <span>Horário: 8h às 10h</span>
                    </div>
                </div>

                <div className='shadow-lg  w-full md:w-60 h-80'>
                    <figure className='h-40 w-full bg-gray-700'>
                        {/* <Image
                            src="https://d9aloqs890lqz.cloudfront.net/uploads/846/17-07-2024/5y4uo-5.jpg"
                            alt="materiais_pedagogicos"
                            width={100}
                            height={100}
                            priority
                        /> */}
                    </figure>
                    <div className='flex flex-col justify-center items-center mt-4'>
                        <strong className='text-xl'>Ensino Médio</strong>
                        <p>Jovens de 14 à 17 Anos</p>
                        <span>Horário: 14h às 16h</span>
                    </div>
                </div>

                <div className='shadow-lg  w-full md:w-60 h-80'>
                    <figure className='h-40 w-full bg-gray-700'>
                        {/* <Image
                            src="https://d9aloqs890lqz.cloudfront.net/uploads/846/17-07-2024/5y4uo-5.jpg"
                            alt="materiais_pedagogicos"
                            width={100}
                            height={100}
                            priority
                        /> */}
                    </figure>
                    <div className='flex flex-col justify-center items-center mt-4'>
                        <strong className='text-xl'>Pré vestibular</strong>
                        <p>Jovens a partir de 16 anos</p>
                        <span>Horário: 16h às 16h</span>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Public;
import React from 'react';

const Public: React.FC = () => {
    return (
        <section className='flex flex-col gap-4 p-4 py-10'>
            <div className='w-full'>
                <h3 className='text-4xl text-blue_d font-bold'>Público atendido</h3>
                <p className='text-lg text-gray-700 text-center'>
                    Atendemos a um público de idades variadas
                    desde os primeiros anos do ensino fundamental ao final deste ciclo.
                </p>
                <p className="text-md text-gray-600 text-center font-semibold">
                    * Os horários abaixo são válidos para todas as quartas-feiras.
                </p>
            </div>
            <div className='flex flex-col md:flex-row gap-4 justify-center'>
                <div className='shadow-lg w-full md:w-96 h-80'>
                    <figure className='h-40 w-full bg-blue-100'>
                    </figure>
                    <div className='flex flex-col justify-center items-center mt-4'>
                        <strong className='text-xl text-blue_d'>Ensino Fundamental I</strong>
                        <p>Crianças de 6 a 10 Anos (2º ao 5º ano)</p>
                        <span>08:00 às 09:30 (manhã)</span>
                        <span>15:30 às 17:00 (tarde)</span>
                    </div>
                </div>
                <div className='shadow-lg  w-full md:w-96 h-80'>
                    <figure className='h-40 w-full bg-blue-100'>
                    </figure>
                    <div className='flex flex-col justify-center items-center mt-4'>
                        <strong className='text-xl text-blue_d'>Ensino Fundamental II</strong>
                        <p>Crianças de 11 à 13 Anos (6º ao 9º ano)</p>
                        <span>09:45 às 11:00 (manhã)</span>
                        <span>14:00 às 15:15 (tarde)</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Public;
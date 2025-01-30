import React from 'react';

const Address: React.FC = () => {
    return (
        <section id='endereco' className="w-full bg-blue_d p-8 my-8">
            <h1 className="text-3xl font-bold text-white mb-4">Endereço</h1>

            <h3 className="list-disc list-inside text-lg text-white">
                Colégio crescer
            </h3>
            <span className='text-lg text-white'>
                Av. Rua Maria Helena, 68, Centro, Carapicuíba - SP. Cep: 06320-070
            </span>
        </section>
    );
}

export default Address;
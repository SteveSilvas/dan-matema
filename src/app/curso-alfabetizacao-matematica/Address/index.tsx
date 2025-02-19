import React from 'react';

const Address: React.FC = () => {
    return (
        <section id='endereco' className="w-full bg-blue_d p-8 my-8">
            <h1 className="text-3xl font-bold text-white mb-4">Endereço</h1>

            <h3 className="list-disc list-inside text-lg text-white">
                Espaço de Recreação Crescer
            </h3>
            <span className='text-lg text-white'>
                Av. Miriam, 28 - Centro, Carapicuíba - SP, 06320-060
            </span>
        </section>
    );
}

export default Address;
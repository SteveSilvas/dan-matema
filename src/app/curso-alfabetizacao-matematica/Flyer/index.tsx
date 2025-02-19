import React from 'react';

const Flyer: React.FC = () => {
    return (
        <div className="mt-8 p-6 bg-blue-100 rounded-md">
            <p className="text-xl font-semibold text-blue_d">Inscrições abertas!</p>
            <p className="text-lg text-gray-800">Vagas limitadas!</p>
            <p className="text-lg text-gray-800 font-bold mt-4">Garanta a vaga do seu filho agora mesmo!</p>
        </div>
    );
}

export default Flyer;
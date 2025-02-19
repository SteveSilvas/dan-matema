import React from 'react';

const Plain: React.FC = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-blue_d mb-12">
                    Conheça nossos Planos
                </h2>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <div className="p-6 md:w-[35%] border rounded-lg shadow-lg bg-white">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Plano Semestral</h3>
                        <p className="text-4xl font-bold text-gray-900 mb-4">5 x R$ 210,00</p>
                        <p className="text-sm text-gray-500">R$ 1.050,66 à vista</p>
                    </div>

                    <div className="p-6 md:w-[35%] border rounded-lg shadow-lg bg-white">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Plano Anual (10% OFF)</h3>
                        <p className="text-4xl font-bold text-gray-900 mb-4">10 x R$ 189,00</p>
                        <p className="text-sm text-gray-500">R$ 1.890,00 à vista</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Plain;
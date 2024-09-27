import React from 'react';

const Plain: React.FC = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-blue_d mb-12">Conheça nossos Planos</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 border rounded-lg shadow-lg bg-white">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Plano Mensal</h3>
                        <p className="text-4xl font-bold text-gray-900 mb-4">R$ 195,00</p>
                        <p className="text-sm text-gray-500">Mensalmente</p>
                    </div>

                    <div className="p-6 border rounded-lg shadow-lg bg-white">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Plano Semestral</h3>
                        <p className="text-4xl font-bold text-gray-900 mb-4">6 x R$ 157,11</p>
                        <p className="text-sm text-gray-500">R$ 942,66 à vista</p>
                    </div>

                    <div className="p-6 border rounded-lg shadow-lg bg-white">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Plano Anual</h3>
                        <p className="text-4xl font-bold text-gray-900 mb-4">12 x R$ 143,25</p>
                        <p className="text-sm text-gray-500">R$ 1725,00 à vista</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Plain;
import React from 'react';

export interface IRegisterForm {
    handleSendRegistration: (e:React.FormEvent) => void;
}
const RegisterForm: React.FC<IRegisterForm> = ({
    handleSendRegistration
}) => {
    return (
        <form className="space-y-6 shadow-md p-4 m-4">
            <div className='flex flex-col md:flex-row'>
                <div className='px-4 w-full'>
                    <h2 className="text-xl font-bold text-blue_d mb-6">Responsável</h2>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nome</label>
                        <input type="text" id="nome" name="nome" className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Seu nome" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">E-mail:</label>
                        <input type="email" id="email" name="email" className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Seu e-mail" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Telefone | Celular:</label>
                        <input type="tel" id="celular" name="celular" className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Digite seu WhatsApp..." />
                    </div>
                </div>

                <div className='px-4 w-full'>
                    <h2 className="text-xl font-bold text-blue_d mb-6">Estudante</h2>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nome:</label>
                        <input type="text" id="nome" name="nome" className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Seu nome" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Série escolar:</label>
                        <input type="email" id="email" name="email" className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Seu e-mail" />
                    </div>
                </div>
            </div>
            <div className="pt-4 flex justify-center">
                <button
                    type="submit"
                    className="w-full md:w-1/3 bg-white text-blue_d text-lg font-bold py-3 rounded-lg hover:bg-blue_d hover:text-white border border-blue_d hover:border-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                    onClick={handleSendRegistration}>
                    Finalizar inscrição
                </button>

            </div>
        </form>
    );
}

export default RegisterForm;
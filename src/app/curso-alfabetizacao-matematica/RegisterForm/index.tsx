import toastContext from '@/context/ToastAtom';
import { sendEmailRegister } from '@/services/SendEmailService';
import { ISendMailRegisterData } from '@/utils/interfaces/SendMailRegister';
import { useAtom } from 'jotai';
import React, { useState } from 'react';

const RegisterForm: React.FC = ({ }) => {
    const [, setToast] = useAtom(toastContext);
    const [mailData, setMailData] = useState<ISendMailRegisterData>({
        fromName: "",
        fromEmail: "",
        phone: "",
        studantName: "",
        studantCicle: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMailData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSendRegistration = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValidateFields()) return;

        const emailSended = await sendEmailRegister(mailData);

        setToast({
            isOpen: true,
            text: emailSended.message ?? ""
        });
    };

    const isValidateFields = () => {
        const { fromName, fromEmail, studantName, studantCicle } = mailData;

        if (!fromName || !fromEmail || !studantName || !studantCicle) {
            setToast({
                isOpen: true,
                text: "Preencha todos os campos."
            });
            return false;
        }
        return true;
    };

    return (
        <section className="w-screen bg-white flex flex-col gap-4 items-center p-4">
            <form className="space-y-6 w-full shadow-lg rounded-2xl p-4 md:w-2/3" onSubmit={handleSendRegistration}>
                <div className='flex flex-col md:flex-row  gap-4' >
                    <div className='w-full'>
                        <h2 className="text-xl font-bold text-blue_d">Responsável</h2>
                        <div className='py-2'>
                            <label className="block text-sm font-medium text-gray-700">Nome</label>
                            <input
                                type="text"
                                name="fromName"
                                value={mailData.fromName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Seu nome" />
                        </div>

                        <div className='py-2'>
                            <label className="block text-sm font-medium text-gray-700">E-mail:</label>
                            <input
                                type="email"
                                name="fromEmail"
                                value={mailData.fromEmail}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Seu e-mail" />
                        </div>

                        <div className='py-2'>
                            <label className="block text-sm font-medium text-gray-700">WhatsApp:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={mailData.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Digite seu WhatsApp..." />
                        </div>
                    </div>

                    <div className='w-full'>
                        <h2 className="text-xl font-bold text-blue_d">Estudante</h2>
                        <div className='py-2'>
                            <label className="block text-sm font-medium text-gray-700">Nome:</label>
                            <input
                                type="text"
                                name="studantName"
                                value={mailData.studantName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Nome do estudante" />
                        </div>

                        <div className='py-2'>
                            <label className="block text-sm font-medium text-gray-700">Série escolar:</label>
                            <input
                                type="text"
                                name="studantCicle"
                                value={mailData.studantCicle}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Série escolar do estudante" />
                        </div>
                    </div>
                </div>
                <div className="pt-4 flex justify-center w-full">
                    <button
                        type="submit"
                        className="w-full md:w-1/4 bg-white text-blue_d text-lg font-bold py-3 rounded-lg hover:bg-blue_d hover:text-white border border-blue_d hover:border-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                        Finalizar inscrição
                    </button>
                </div>
            </form>
        </section>
    );
};

export default RegisterForm;

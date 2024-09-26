"use client";
import toastContext from '@/context/ToastAtom';
import sendEmail from '@/services/SendEmailService';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

const CursoAlfabetizacaoMatematica: React.FC = () => {
  const [, setToast] = useAtom(toastContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSendRegistration = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidateFields())
      return;

    const emailSended = await sendEmail({
      fromName: name,
      fromEmail: email,
      message: message
    })

    setToast({
      isOpen: true,
      text: emailSended.message ?? ""
    })
  }

  const isValidateFields = () => {
    if (!name || !email || !message) {
      setToast({
        isOpen: true,
        text: "Preencha todos os campos."
      });
      return false;
    }
    return true;
  }

  return (
    <div className='w-screen min-h-screen bg-white'>

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
            No curso "Alfabetização Matemática",
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

      <section className='flex flex-col gap-4 p-4 py-10'>
        <div className='w-full'>
          <h3 className='text-4xl text-blue_d font-bold'>Público atendido</h3>
          <p>
            Atendemos a um público de idades variadas
            desde os primeiros anos do ensino fundamental ao final deste ciclo.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-4'>
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

      <section>
        <div className="w-full min-h-screen bg-gray-50 p-8">
          <h1 className="text-3xl font-bold text-blue_d mb-4">O que seu filho(a) vai aprender:</h1>

          <ul className="list-disc list-inside text-lg text-gray-700">
            <li><strong>Fundamentos matemáticos:</strong> Uma base sólida para o sucesso escolar.</li>
            <li><strong>Resolução de problemas:</strong> Desafios e simulações para desenvolver o pensamento crítico.</li>
            <li><strong>Pensamento lógico:</strong> Habilidades essenciais para o dia a dia.</li>
            <li><strong>História da matemática:</strong> Uma jornada através do tempo para entender a origem dos números.</li>
          </ul>

          <h2 className="text-3xl font-bold text-blue_d mt-8 mb-4">Benefícios:</h2>

          <ul className="list-disc list-inside text-lg text-gray-700">
            <li><strong>Aprendizagem ativa:</strong> Aulas práticas e envolventes que colocam o aluno no centro do processo.</li>
            <li><strong>Desenvolvimento do raciocínio:</strong> Jogos, dinâmicas e atividades para estimular o pensamento crítico.</li>
            <li><strong>Motivação e engajamento:</strong> Uma abordagem divertida que mantém os alunos interessados.</li>
            <li><strong>Preparação para o futuro:</strong> Habilidades matemáticas essenciais para o sucesso na escola e na vida.</li>
          </ul>

          <div className="mt-8 p-6 bg-blue-100 rounded-md">
            <p className="text-xl font-semibold text-blue_d">Inscrições abertas!</p>
            <p className="text-lg text-gray-800">Vagas limitadas!</p>
            <p className="text-lg text-gray-800 font-bold mt-4">Garanta a vaga do seu filho agora mesmo!</p>
          </div>
        </div>

      </section>

      <section className="w-full min-h-screen bg-gray-50 p-8">
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

            <div className="mt-12">


            </div>
          </div>
        </section>

      </section>
      <RegisterForm handleSendRegistration={handleSendRegistration} />
    </div>
  )
}

export default CursoAlfabetizacaoMatematica;
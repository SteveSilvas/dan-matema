import React from 'react';

const Content: React.FC = () => {
    return (
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
            </div>
        </section>
    );
}

export default Content;
import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const ProgramasProjetos = () => {
  useDocTitle('Programas e Projetos');

  const [programas] = useState([
    {
      id: 1,
      nome: 'Bolsa de Estudo',
      descricao: 'Oferecemos bolsas de estudo para estudantes de baixa renda interessados em áreas de tecnologia.',
      objetivo: 'Fornecer suporte financeiro para alunos talentosos.',
      publicoAlvo: 'Estudantes universitários de baixa renda.',
      inscricaoLink: '/inscricao/bolsa-de-estudo'
    },
    {
      id: 2,
      nome: 'Hackathons',
      descricao: 'Hackathons para resolver desafios tecnológicos reais.',
      objetivo: 'Promover inovação e colaboração em soluções tecnológicas.',
      publicoAlvo: 'Desenvolvedores, designers e entusiastas de tecnologia.',
      inscricaoLink: '/inscricao/hackathon'
    },
    {
      id: 3,
      nome: 'Inclusão Digital',
      descricao: 'Iniciativas para reduzir o fosso digital em comunidades carentes.',
      objetivo: 'Prover acesso a tecnologia e capacitação digital.',
      publicoAlvo: 'Comunidades carentes e pessoas com baixa conectividade.',
      inscricaoLink: '/inscricao/inclusao-digital'
    }
  ]);

  const renderPrograma = (programa) => (
    <div key={programa.id} className="flex flex-col justify-between bg-gray-100 p-5 rounded-lg shadow-lg h-full">
      <h3 className="text-2xl font-semibold text-blue-900">{programa.nome}</h3>
      <p className="text-gray-700 mt-2">{programa.descricao}</p>
      <p className="mt-2"><strong>Objetivo: </strong>{programa.objetivo}</p>
      <p className="mt-2"><strong>Público-alvo: </strong>{programa.publicoAlvo}</p>
      <div className="mt-4 flex justify-center">
      <a
        href={programa.inscricaoLink}
        className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
      >
        Inscreva-se
      </a>
    </div>
    </div>
  );

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div id='programas' className="flex flex-col justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20" data-aos="fade-up">
          <h1 className="text-center text-4xl font-bold text-blue-900">Programas e Projetos</h1>

          {/* Lista de Programas */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programas.map(programa => renderPrograma(programa))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProgramasProjetos;
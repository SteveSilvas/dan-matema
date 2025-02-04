"use client";
import React from 'react';
import RegisterForm from './RegisterForm';
import Presentation from './Presentation';
import Public from './Public';
import Content from './Content';
import Plain from './Plain';
import Address from './Address';

const CursoAlfabetizacaoMatematica: React.FC = () => {

  return (
    <div className='w-screen min-h-screen bg-white'>
      <Presentation />
      <Public />
      <Address/>
      <Content />
      <Plain />
      <RegisterForm />
    </div>
  )
};

export default CursoAlfabetizacaoMatematica;
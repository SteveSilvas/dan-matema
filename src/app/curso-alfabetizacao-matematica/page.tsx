"use client";
import toastContext from '@/context/ToastAtom';
import { sendEmailRegister } from '@/services/SendEmailService';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import Presentation from './Presentation';
import Public from './Public';
import Content from './Content';
import Plain from './Plain';

const CursoAlfabetizacaoMatematica: React.FC = () => {

  return (
    <div className='w-screen min-h-screen bg-white'>
      <Presentation />
      <Public />
      <Content />
      <Plain />
      <RegisterForm />
    </div>
  )
}

export default CursoAlfabetizacaoMatematica;
import React from 'react';
import DefaultButton from '../DefaultButton';

const ContactButton: React.FC = () => {
    return (
        <DefaultButton
            title="Entre em Contato"
            to='#contato'
            className='fixed bottom-4 right-4 z-50 text:black   bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-xl'
        />
    );
}

export default ContactButton;
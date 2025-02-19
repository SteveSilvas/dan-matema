const RegisterFormGoogleForms: React.FC = ({ }) => {


    return (
        <section className="w-screen bg-white flex flex-col gap-4 items-center p-4">
            <iframe
                className="w-full h-screen"
                src="https://docs.google.com/forms/d/e/1FAIpQLSc-CIFTIUAEr0UwQMLMZXYd1ovMABx1WD0pdgGEQcQrHdMGJQ/viewform?embedded=true"
            >
                Carregando…
            </iframe>
        </section>
    );
};

export default RegisterFormGoogleForms;

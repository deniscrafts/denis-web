import { FaDiscord } from 'react-icons/fa6';

const JoinCommunity = () => {
    return (
        <section id="joincommunity" className=" pt-40 w-full items-center justify-center flex flex-col scroll-mt-0 py-40">
            <div className="flex flex-col items-center justify-center text-center mb-20">
                <h2 className="text-5xl text-[rgba(var(--branding))] font-bold mb-6">¿Tienes alguna pregunta?</h2>
                <p className="text-lg text-[rgba(var(--secondaryText))] mb-4">
                    Conéctate con otros usuarios, comparte tus experiencias y aprende más sobre cómo gestionar tus finanzas personales de manera efectiva.
                </p>
                <p className="text-lg text-[rgba(var(--secondaryText))]">
                    Simplemente únete al servidor de Discord, abre un ticket y mencioname para que pueda asistirte personalmente.
                </p>
                <FaDiscord className="text-[rgba(var(--tertiaryBranding))] mt-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={() => window.open("https://discord.com/invite/6n3f9vTSUu", "_blank")}
                size={60} />
                
            </div>
            
        </section>
    )
}

export default JoinCommunity;


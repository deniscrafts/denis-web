import { FaDice } from "react-icons/fa6";
import { BsGraphUpArrow } from 'react-icons/bs'; 
import { FaFaceLaughSquint } from "react-icons/fa6";
import { motion } from "framer-motion";

const NotGonnaLearn = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
            staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 100 },
        },
        hover: { scale: 1.05 },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring" as const, stiffness: 80 },
        },
    };


    return (
        <section id="notgonnalearn">
            <motion.div 
                className="pt-50 w-full flex flex-col lg:flex-row items-center justify-center scroll-mt-0 py-20 px-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-center mb-10 lg:mb-0"
                    variants={imageVariants}
                >
                    <h1 className="text-3xl lg:text-5xl text-[rgba(var(--branding))] font-bold mb-6 text-center">
                        ¿Qué no vas a aprender aquí?
                    </h1>
                    <p className="text-[rgba(var(--secondaryText))] text-lg lg:text-xl text-center lg:text-start">
                        Enseñamos lo profesional, no lo superficial.
                    </p>
                    <motion.img 
                        src="/enciclopedia_abierto.png" 
                        alt="Enciclopedia abierta" 
                        className="mt-6 w-3/4 lg:w-1/3 rounded-xl shadow-lg"
                        variants={imageVariants}
                    />
                </motion.div>

                <motion.div className="w-full lg:w-1/2 grid grid-cols-1 gap-6" variants={containerVariants}>
                    <motion.div 
                        className="flex flex-col justify-center items-center px-6 bg-[rgba(var(--secondaryBackground))] rounded-3xl py-5"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="w-full flex flex-row justify-between items-center px-2">
                            <h3 className="text-2xl lg:text-3xl text-[rgba(var(--branding))] font-semibold text-center flex-1">
                                Especulación
                            </h3>
                            <div className="ml-4 text-3xl lg:text-4xl">
                                <FaDice className="text-[rgba(var(--secondaryBranding))]" />
                            </div>
                        </div>
                        <p className="text-[rgba(var(--secondaryText))] mt-4 text-center text-sm lg:text-base">
                            No vas a aprender a apostar por subidas rápidas sin fundamentos.
                            La especulación puede dar ganancias momentáneas, pero rara vez construye resultados sostenibles.
                            Aquí trabajamos con <span className="font-bold text-[rgba(var(--branding))]">estrategias sólidas</span>,
                            no con <span className="font-bold text-[rgba(var(--error))]">loterías</span>.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="flex flex-col justify-center items-center px-6 bg-[rgba(var(--secondaryBackground))] rounded-3xl py-5"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="w-full flex flex-row justify-between items-center px-2">
                            <h3 className="text-2xl lg:text-3xl text-[rgba(var(--branding))] font-semibold text-center flex-1">
                                Memes
                            </h3>
                            <div className="ml-4 text-3xl lg:text-4xl">
                                <FaFaceLaughSquint className="text-[rgba(var(--secondaryBranding))]" />
                            </div>
                        </div>
                        <p className="text-[rgba(var(--secondaryText))] mt-4 text-center text-sm lg:text-base">
                            No vas a aprender a perseguir memecoins ni <span className="font-bold text-[rgba(var(--error))]">promesas vacías </span> 
                            de ganancias rápidas. Aquí no dependemos de la suerte: 
                            usamos <span className="font-bold text-[rgba(var(--branding))]">análisis y números reales</span>.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="flex flex-col justify-center items-center px-6 bg-[rgba(var(--secondaryBackground))] rounded-3xl py-5"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="w-full flex flex-row justify-between items-center px-2">
                            <h3 className="text-2xl lg:text-3xl text-[rgba(var(--branding))] font-semibold text-center flex-1">
                                No te harás rico mágicamente
                            </h3>
                            <div className="ml-4 text-3xl lg:text-4xl">
                                <BsGraphUpArrow className="text-[rgba(var(--secondaryBranding))]" />
                            </div>
                        </div>
                        <p className="text-[rgba(var(--secondaryText))] mt-4 text-center text-sm lg:text-base">
                            La riqueza no llega de la noche a la mañana.
                            Aquí aprenderás a construir resultados con <span className="font-bold text-[rgba(var(--branding))]">esfuerzo</span>,
                            disciplina y paciencia, no con métodos mágicos.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default NotGonnaLearn;

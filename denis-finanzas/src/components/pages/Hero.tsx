"use client"

import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";
import HeroImage from "../smallComponents/HeroImage";

const Hero = () => {
  return (
    <section id="hero" className="pt-70 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-center text-center gap-10 md:gap-0 sm:px-40">
        
        {/* Textos */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-2/3 flex flex-col items-center justify-start md:items-start "
        >
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[rgba(var(--branding))] text-4xl sm:text-5xl md:text-7xl text-start leading-tight"
          >
            Denis Finanzas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-[rgba(var(--secondaryText))] text-lg sm:text-xl md:text-2xl mt-4 sm:text-start text-center"
          >
            DeFi con <span className="text-[rgba(var(--branding))] font-bold">fundamentos </span> 
             - Rendimiento sostenible, sin <span className="text-[rgba(var(--error))] ">especulación</span>.
          </motion.p>

          {/* Iconos con stagger */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="w-full flex justify-center md:justify-start gap-8 mt-6"
          >
            <motion.a
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              href="https://www.youtube.com/@denisfinanzas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                className="text-[rgba(var(--tertiaryBranding))] 
                  hover:scale-110 transition-transform 
                  hover:rotate-12 duration-500"
                size={40}
                aria-label="Mi canal de youtube"
              />
            </motion.a>

            <motion.a
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              href="https://x.com/denisfinanzas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter
                className="text-[rgba(var(--tertiaryBranding))] 
                  hover:scale-110 transition-transform
                  hover:-rotate-12 duration-500"
                size={34}
                aria-label="Mi perfil de X (antes Twitter)"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="hidden sm:flex w-full md:w-1/3 justify-center"
        >
          <HeroImage />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

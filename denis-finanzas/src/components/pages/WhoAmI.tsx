"use client"

import { FaSmileWink } from 'react-icons/fa';
import { motion } from "framer-motion";

const WhoAmI = () => {
  return (
    <section
      id="whoami"
      className="pt-10 md:pt-40 md:pb-10 flex justify-center items-center text-center px-4 pb-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-9/10 gap-8 md:gap-12">
        
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="items-center justify-center flex flex-col"
        >
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl sm:text-start text-center w-full font-bold mb-4 md:mb-6 text-[rgba(var(--secondaryBranding),1)]"
          >
            ¿Quién soy?
          </motion.h2>

          {/* Separador animado */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="origin-left w-full mb-6 md:mb-10 h-1 bg-[rgba(var(--secondaryBranding),0.2)]"
          ></motion.div>

          {/* Párrafos con stagger */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="w-full space-y-4 text-start"
          >
            {[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et lectus molestie, porttitor ipsum eget, euismod lorem.",
              "In vehicula posuere augue a bibendum. Integer luctus ligula vel felis aliquet, et fringilla sem tristique.",
              "Aliquam erat volutpat. Sed at mi euismod, tincidunt nulla a, tincidunt ex. Cras ullamcorper risus eget mi porttitor feugiat."
            ].map((text, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                className="text-base sm:text-lg text-[rgba(var(--secondaryText),1)] sm:text-start text-center"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Subtítulo divertido */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 120 }}
            className="text-3xl sm:text-2xl font-bold mb-4 md:mb-6 text-[rgba(var(--secondaryBranding),1)] mt-5 flex flex-col sm:flex-row items-center gap-2"
          >
            <span>Aprendo cosas y las enseño</span>
            <FaSmileWink className="text-[rgba(var(--secondaryBranding),1)]" />
          </motion.h2>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <iframe
            className="w-full h-56 sm:h-72 md:h-96 rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/z94L0qAFNr8"
            title="Cómo Construir un Portfolio de $10,000 en Yield Farming (Tutorial Completo DeFi)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoAmI;

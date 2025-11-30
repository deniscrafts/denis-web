"use client";

import { FaTelegram, FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Featured = () => {
  const cards = [
    {
      title: "Sueldo mensual con Yield Farming en DeFi",
      src: "https://www.youtube.com/embed/Mq3a4YBjAoU",
      description:
        "Aprende cómo generar ingresos pasivos con estrategias de Yield Farming en el ecosistema DeFi.",
    },
    {
      title: "Aprovecha los Prestamos y la Deuda",
      src: "https://www.youtube.com/embed/4jd0rj6GTJc",
      description:
        "Todo sobre el funcionamiento de la deuda y estrategias de Lending aplicables en DeFi",
    },
    {
      title: "Cómo Farmear Polymarket Desde Cero",
      src: "https://www.youtube.com/embed/EMAIxxUpXAI",
      description:
        "Tutorial completo para aprender el funcionamiento de los Prediction Markets",
    },
  ];

  return (
    <section id="featured">
      <div className="w-full pt-60 flex flex-col items-center justify-center sm:px-10 scroll-mt-100">
        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl text-[rgba(var(--branding))] font-bold mb-6 sm:text-start text-center"
        >
          Contenido destacado
        </motion.h1>

        {/* Grid de videos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
          className="w-full flex flex-col sm:grid grid-cols-3 gap-6 sm:h-auto"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.7 }}
              className="flex flex-col w-full bg-[rgba(var(--secondaryBackground))] rounded-xl p-4 shadow-md"
            >
              {/* Contenedor del título con altura fija para alinear videos */}
              <div className="w-full mb-4 flex justify-center items-center">
                <h3 className="text-2xl text-[rgba(var(--branding))] font-semibold text-center line-clamp-2 min-h-[4rem]">
                  {card.title}
                </h3>
              </div>

              {/* Video con relación 16:9 */}
              <div className="w-full aspect-video mb-3 rounded-lg overflow-hidden shadow-inner">
                <iframe
                  className="w-full h-full"
                  src={card.src}
                  title={card.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </div>

              {/* Descripción */}
              <p className="text-center text-[rgba(var(--secondaryText))] mt-auto">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-center items-center mt-16"
        >
          <h2 className="text-3xl text-[rgba(var(--secondaryBranding))] font-semibold text-center mb-2">
            ¿Quieres ver mi contenido?
          </h2>
          <p className="text-center text-[rgba(var(--secondaryText))] max-w-lg">
            Sígueme en YouTube y únete a mi canal de Telegram para ser un
            maestro en DeFi.
          </p>

          {/* Iconos sociales */}
          <div className="flex flex-row justify-center items-center mt-6 gap-6">
            <motion.div whileHover={{ scale: 1.2, rotate: 8 }}>
              <FaYoutube
                className="text-4xl text-[rgba(var(--secondaryBranding))] cursor-pointer"
                onClick={() =>
                  window.open("https://www.youtube.com/@denisfinanzas", "_blank")
                }
                size={40}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: -8 }}>
              <FaTelegram
                className="text-4xl text-[rgba(var(--secondaryBranding))] cursor-pointer"
                onClick={() =>
                  window.open("https://t.me/denisfinanzas", "_blank")
                }
                size={33}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;

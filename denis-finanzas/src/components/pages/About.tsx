"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaShare } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri"; // Lending
import { GiWheat, GiWaterDrop } from "react-icons/gi"; // Yield / Liquidity
import { FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Lending",
    text: "Presta tus activos y gana intereses pasivos en protocolos seguros.",
    emoji: <RiLock2Fill size={40} className="text-[rgba(var(--tertiaryBranding))] mb-4" />
  },
  {
    title: "Yield Farming",
    text: "Aporta liquidez o haz staking y recibe recompensas extra en tokens.",
    emoji: <GiWheat size={40} className="text-[rgba(var(--tertiaryBranding))] mb-4" />
  },
  {
    title: "Liquidity Pools",
    text: "Gana comisiones al participar en pools de intercambio de tokens.",
    emoji: <GiWaterDrop size={40} className="text-[rgba(var(--tertiaryBranding))] mb-4" />
  },
  {
    title: "Delta Neutral",
    text: "Reduce el riesgo con estrategias que mantienen rendimientos estables.",
    emoji: <FaBalanceScale size={40} className="text-[rgba(var(--tertiaryBranding))] mb-4" />
  }
];

const About = () => {
  return (
    <section
      id="about"
  className="mt-[50px] pt-[40px] w-full flex flex-col items-center justify-center scroll-mt-0 py-[40px]"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full flex items-center justify-center mb-20"
      >
        <img
          className="sm:w-[10%] w-1/2 hover:scale-105 transition-transform duration-500 max-w-[120px]"
          src="/enciclopedia_cerrada.webp"
          alt="La enciclopedia"
        />
      </motion.div>

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center mb-20"
      >
        <h2 className="text-5xl text-[rgba(var(--branding))] font-bold mb-6">
          Sobre la enciclopedia
        </h2>
      </motion.div>

      {/* Grid de cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
  className="hidden sm:grid grid-cols-2 justify-items-center w-[90%] gap-6"
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center items-center px-10 bg-[rgba(var(--secondaryBackground))] rounded-3xl m-4 hover:scale-105 transition-transform py-5 w-full shadow-md"
          >
            <div className="w-full flex flex-row justify-between items-center px-4">
              <h3 className="text-3xl text-[rgba(var(--branding))] font-semibold text-center flex-1">
                {card.title}
              </h3>
              <div className="ml-4 text-4xl">{card.emoji}</div>
            </div>
            <p className="text-[rgba(var(--secondaryText))] mt-4 text-center">
              {card.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Swiper para móvil */}
      <div className="sm:hidden w-full max-w-md overflow-hidden">
  <Swiper
    modules={[Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    pagination={{ clickable: true }}
    className="w-full"
  >

          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center items-center px-6 bg-[rgba(var(--secondaryBackground))] rounded-3xl py-6 shadow-md"
              >
                <div className="flex-row flex justify-center items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl text-[rgba(var(--branding))] font-semibold mb-2">
                    {card.title}
                  </h3> 
                  {card.emoji}
                </div>
                <p className="text-m sm:text-base md:text-lg text-[rgba(var(--secondaryText))] mb-4 text-center">
                  {card.text}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lo que encontrarás dentro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center justify-center mt-20 px-5"
      >
        <div className="bg-[rgba(var(--secondaryBackground))] rounded-3xl p-8 w-full max-w-3xl hover:scale-105 transition-transform shadow-md">
          <h3 className="text-3xl text-[rgba(var(--branding))] font-semibold mb-6 text-center">
            Lo que encontrarás dentro
          </h3>
          <ul className="text-[rgba(var(--secondaryText))] space-y-4 text-lg">
            <li>✅ +100 Farmings explicados y categorizados por tiers</li>
            <li>✅ +100 Airdrops organizados y filtrados por niveles</li>
            <li>🎥 +15 Tutoriales en vídeo paso a paso desde cero</li>
            <li>📊 Artículos, calculadoras, wallets smart money, herramientas, libros y más</li>
            <li>⚡ Actualización diaria con airdrops, farmings y estrategias</li>
          </ul>
        </div>
      </motion.div>

      {/* CTA final */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center justify-center mt-20 px-5"
      >
        
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="px-5 py-2 rounded-full bg-[rgba(var(--secondaryBranding))] cursor-pointer shadow-lg flex items-center justify-center">
            <h2
              className="text-[rgba(var(--mainText))] cursor-pointer"
              onClick={() =>
                window.open("https://www.youtube.com/watch?v=78Xp_lfDck0", "_blank")
              }
            >
              Saber más
            </h2>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

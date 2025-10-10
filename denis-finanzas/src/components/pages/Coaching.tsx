"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Separator from "../smallComponents/Separator"

const temas = [
  "Lending",
  "Yield Farming",
  "Pools de liquidez",
  "Delta Neutral",
  "Portfolio Management",
]

const secciones = [
  {
    titulo: "Recibo Feedback y mejoro",
    texto: <>Por favor, deja una reseña en <span className="font-bold text-[rgba(var(--branding))]">Denis Feedback</span> tras las <span className="font-bold text-[rgba(var(--branding))]">clases</span> para compartir tu <span className="font-bold text-[rgba(var(--branding))]">experiencia</span> y ayudar a otros a elegir.</>
  },
  {
    titulo: "Mi experiencia",
    texto: <><span className="font-bold text-[rgba(var(--branding))]">Aficionado avanzado de DeFi</span> con años de prueba y error, enfocado en explicar cómo funcionan realmente las herramientas y los mecanismos, fomentando el criterio propio (<span className="font-bold text-[rgba(var(--branding))]">DYOR</span>) y mostrando todas las <span className="font-bold text-[rgba(var(--branding))]">estrategias</span> posibles.</>
  }
]

const Coaching = () => {
  const [open, setOpen] = useState(false)

  return (
    <section id="coaching" className="pb-20">

      {/* Intro */}
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
  className="w-full max-w-full pt-[50px] pb-0 flex flex-col sm:flex-row items-center justify-center px-4 sm:px-6 md:px-[30px] sm:px-[30px] sm:gap-10"
      >
        {/* Columna 1 */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full sm:w-1/2 max-w-full flex flex-col items-start justify-center text-left mb-5 sm:mb-20"
        >
          <h1 className="text-5xl text-[rgba(var(--branding))] font-bold mb-6 text-center sm:text-start">
            Asesorías personalizadas
          </h1>
          <p className="text-lg text-[rgba(var(--secondaryText))] mb-4 text-center sm:text-start">
            ¿Tienes dudas sobre tu portafolio o estrategia en DeFi?
          </p>
          <p className="text-lg text-[rgba(var(--secondaryText))] mb-4 text-center sm:text-start">
            ¿Quieres profundizar en un protocolo o en estrategias DeFi como{" "}
            {temas.map((tema, i) => (
              <span key={i} className="font-semibold text-[rgba(var(--secondaryBranding))]"> {tema}{i < temas.length - 1 ? "," : ""}</span>
            ))}?  
            Ofrecemos consultorías privadas 1 a 1, completamente personalizadas y diseñadas para ti.
          </p>
        </motion.div>

        {/* Columna 2 */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full sm:w-1/2 max-w-full flex flex-col items-start justify-center text-left mb-5 sm:mb-20"
        >
          <h2 className="text-3xl text-[rgba(var(--branding))] font-semibold mb-6 text-center sm:text-start w-full">
            ¿Sobre qué?
          </h2>
          <p className="text-lg text-[rgba(var(--secondaryText))] mb-4 text-center sm:text-start">
            Enseño a moverte en <span className="font-bold text-[rgba(var(--branding))]">DeFi</span> desde cero hasta estrategias avanzadas dentro de mis especialidades de <span className="font-bold text-[rgba(var(--branding))]">tipos de negocio</span>.  
            No vendo <span className="font-bold text-[rgba(var(--branding))]">predicciones</span> ni <span className="font-bold text-[rgba(var(--branding))]">promesas</span>, me enfoco en lo que sí controlamos: <span className="font-bold text-[rgba(var(--branding))]">gestionar portfolios</span> y <span className="font-bold text-[rgba(var(--branding))]">diseñar estrategias</span> según tu <span className="font-bold text-[rgba(var(--branding))]">riesgo</span>.  
            El objetivo es que <span className="font-bold text-[rgba(var(--branding))]">entiendas todo intuitivamente</span>, paso a paso.
          </p>
        </motion.div>
      </motion.div>

      <Separator />

      {/* Secciones dinámicas */}
      <div className="w-full flex flex-col sm:flex-row">
        {secciones.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="sm:w-1/2 w-full max-w-full flex justify-center items-center mb-10 flex-col px-4 sm:px-6 md:px-[30px] sm:px-[30px]"
          >
            <h2 className="text-3xl text-[rgba(var(--branding))] font-semibold mb-6 text-center w-full">{sec.titulo}</h2>
            <p className="text-lg text-[rgba(var(--secondaryText))] mb-4 text-center w-full">
              {sec.texto}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call to action */}
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
  className="w-full max-w-full flex justify-center items-center mb-20 flex-col px-4 sm:px-6 md:px-[30px] sm:px-[30px]"
      >
        <div className="px-4 sm:px-6 md:px-[30px] py-5 bg-[rgba(var(--branding))] rounded-full flex justify-center
        items-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105 transition-transform 
        duration-300" onClick={() => window.open("https://discord.gg/7V7BGwRXKn", "_blank")}>
          <h2 className="text-3xl text-[rgba(var(--mainText))] font-semibold">¡Reserva ya!</h2>
        </div>

        
      </motion.div>

      
    </section>
  )
}

export default Coaching

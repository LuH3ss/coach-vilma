"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bird, Flower2, MessageCircle, Sparkles } from "lucide-react";
import { WA_LINK } from "./constants";
import flyerImage from "../../flyer-vilma.jpg";
import profileImage from "../../foto-perfil-2-recortada.jpeg";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 md:px-8">
      <Image
        src={flyerImage}
        alt="Flyer de referencia"
        fill
        priority
        className="object-cover opacity-20 blur-[1px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-flyer-cloud/90 via-flyer-soft/85 to-flyer-bg/95" />
      <div className="shadow-clarity-band absolute inset-x-0 top-0 h-36 md:h-40" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            <span className="symbol-chip">
              <Sparkles size={13} /> Sombras
            </span>
            <span className="symbol-chip">
              <Bird size={13} /> Claridad
            </span>
            <span className="symbol-chip">
              <Flower2 size={13} /> Transformación
            </span>
          </div>
          <p className="mx-auto mb-3 inline-flex w-fit rounded-full bg-flyer-plum/15 px-3 py-1 text-sm font-extrabold uppercase tracking-wide text-flyer-plum">
            Coaching ontológico profesional
          </p>
          <h1 className="title-flyer text-5xl leading-[0.98] md:text-7xl">
            Viaje de las sombras a la claridad
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-flyer-ink/85">
            Mi acompañamiento profesional, no en un proceso eterno de catarsis.
            Te ofrezco un espacio de trabajo concreto, directo y con base
            científica, incluyendo dinámicas, ejercicios, etc., para descubrir
            los bloqueos que hoy te frenan para re-estructurar tu ser; terminar con el ruido
            mental, miedos que te paralizan, etc. y poder actuar con claridad,
            así como fortalecer tu autoconocimiento y autoestima, empoderándote
            para poder construir una nueva identidad.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-lg font-bold text-white shadow-glow transition hover:scale-[1.02]"
          >
            <MessageCircle size={20} />
            Agendar por WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="cloud-card relative p-3 shadow-glow">
            <Image
              src={profileImage}
              alt="Foto de perfil de Vilma"
              className="h-auto w-full rounded-2xl object-cover object-top"
              priority
            />
            <motion.div
              animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-3 top-6 rounded-full bg-white/75 p-2 text-flyer-plum shadow-md"
            >
              <Bird size={15} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 7, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 bottom-8 rounded-full bg-white/75 p-2 text-flyer-lavender shadow-md"
            >
              <Flower2 size={15} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

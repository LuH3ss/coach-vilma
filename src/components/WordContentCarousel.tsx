"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bird, Flower2, Sparkles } from "lucide-react";
import { ExpandableText } from "./ExpandableText";
import flyerImage from "../../flyer-vilma.jpg";

const contentCards = [
  {
    title: "LA OSCURIDAD",
    text: "En las nubes y las sombras se presenta el ruido mental, los bloqueos y los mandatos heredados que hoy te nublan la vista. En el estado de confusión y parálisis, sentís que no podés avanzar porque la niebla de tus propios pensamientos automáticos te mantiene en la penumbra.",
  },
  {
    title: "EL IMPULSO (la ciencia) Y LAS NUEVAS RUTAS NEURONALES",
    text: "Es el motor técnico del proceso. Mi experiencia científica analiza tus patrones de conducta actuales para descifrar creencias limitantes. Al hacerlo mediante preguntas facilitamos la aparición de tus darte cuenta y que nuevos pensamientos generen nuevas rutas neuronales.",
  },
  {
    title: "LA ACCIÓN Y EL MOVIMIENTO",
    text: "El carruaje simboliza este paso crucial. No basta con entender el problema, se requiere el compromiso y la voluntad para tomar las riendas del mismo. Al consolidar esas nuevas conexiones neuronales, se produce la acción concreta que te permite avanzar y te saca definitivamente de la oscuridad, acompañándote con fuerza hacia la claridad.",
  },
  {
    title: "LOS ADOQUINES Y LAS FLORES",
    text: "Los adoquines representan la rigidez de las estructuras viejas, así como la dureza de la vida. Mi enfoque busca que tu esencia florezca, incluso en espacios difíciles, permitiendo que las flores atraviesen los adoquines, esa dureza que antes parecía inamovible.",
  },
  {
    title: "LAS MARIPOSAS (TRANSFORMACIÓN)",
    text: "Representan el proceso de metamorfosis profunda del observador que eres. Es el proceso donde abandonas la mirada antigua para desplegar una nueva identidad elegida.",
  },
  {
    title: "LOS COLIBRÍES (LEVEDAD Y ENERGÍA VITAL)",
    text: "Simbolizan la agilidad emocional y la reconexión con tu energía vital. Representan el momento en que lográs soltar el peso del ruido mental para moverte con liviandad y alegría, conectando plenamente con el presente.",
  },
  {
    title: "EL ARCOÍRIS Y LA CLARIDAD",
    text: "El arcoíris representa la integración armónica de todas tus facetas después de la tormenta, es el preludio a la claridad: el destino final, donde disfrutarás de un estado de transformación, paz y orden mental absoluto.",
  },
];

export function WordContentCarousel() {
  return (
    <section className="section-glow px-4 py-14 md:px-8">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-center gap-2 text-flyer-plum">
          <Sparkles size={16} />
          <p className="text-xs font-bold uppercase tracking-[0.2em]">
            Propuesta de valor
          </p>
        </div>

        <h2 className="title-flyer text-center text-4xl md:text-5xl">
          Mi método
        </h2>

        <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-[1fr_360px]">
          <div className="cloud-card h-full p-7 md:p-9">
            <h3 className="title-flyer text-3xl md:text-4xl">
              El viaje desde las sombras a la claridad
            </h3>
            <p className="mt-4 text-flyer-ink/85">
              Hoy, traslado mi sólida experiencia científica al coaching
              ontológico profesional, integrando la precisión de la ciencia con
              la profundidad del ser.
            </p>
            <p className="mt-3 text-flyer-ink/85">
              Mi enfoque se nutre a partir de cursos realizados sobre coaching y
              gestión de emociones y coaching y liderazgo, herramientas que uso
              actualmente para brindar un acompañamiento de excelencia a mis
              consultantes y por el continuo perfeccionamiento. Actualmente
              cursando post-títulos de Neurocoach, de coaching de parejas, de
              Eneagramas (personalidades), diplomaturas y cursos sobre
              autoestima, entre otros.
            </p>
            <p className="mt-3 text-flyer-ink/85">
              Aquí incluyo la descripción detallada del flyer, presentando las
              metáforas utilizadas desde la oscuridad, rutas neuronales nuevas,
              carruaje, adoquines, flores, mariposas, colibríes hasta el arco
              iris y la claridad.
            </p>
          </div>

          <div className="cloud-card mx-auto flex h-full w-full max-w-[360px] p-3 shadow-glow">
            <Image
              src={flyerImage}
              alt="Flyer de Vilma Duschak: de las sombras a la claridad"
              className="h-auto w-full rounded-2xl object-cover lg:h-full"
              sizes="(min-width: 1024px) 360px, 80vw"
            />
          </div>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 carousel-scroll">
          {contentCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="cloud-card min-w-[85%] snap-start p-6 sm:min-w-[45%] lg:min-w-[31%]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="meta-capsule text-xs sm:text-sm">
                  {i < 2 ? <Sparkles size={12} /> : i === 4 ? <Bird size={12} /> : <Flower2 size={12} />}
                  Etapa {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-flyer-plum">
                {card.title}
              </h3>
              <ExpandableText
                text={card.text}
                maxChars={200}
                className="mt-3 leading-relaxed text-flyer-ink/85"
              />
            </motion.article>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="slider-label">Desliza para ver etapas</span>
        </div>
      </div>
    </section>
  );
}

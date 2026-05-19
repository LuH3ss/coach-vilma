"use client";

import { motion } from "framer-motion";
import { ExpandableText } from "./ExpandableText";

const testimonials = [
  {
    author: "TESTIMONIO, JULIANA MORINIGO (COACH)",
    text: "Haber trabajado con Vilma fue una de las experiencias más gratificantes de mi vida. Es, sin dudas, una de las personas que marcó profundamente mi camino, y estoy genuinamente agradecida por ello. Su recorrido personal, junto con su sólida formación científica y en la disciplina del coaching ontológico, le otorgan a su palabra una precisión y asertividad poco comunes. Es una coach que va a lo concreto, sin rodeos, pero con una rigurosa amorosidad.",
  },
  {
    author: "Lourdes Arévalo (enfermera)",
    text: "Conozco a Vilma en un momento de cambios en mi vida. Lo que me impulsó a trabajar con ella fue mi inseguridad tanto personal como profesional, a través de los encuentros pude romper barreras, fue de suma importancia cada sesión, diálogo, actividad y retroalimentación para este paso enorme que di. Hoy puedo decir que el coaching es una de las formas más eficientes para impulsar a lograr tus metas.",
  },
  {
    author: "Gise C (Especialista en unas esculpidas)",
    text: "Estuvimos trabajando con Vilma sobre aceptar mi nueva identidad de Terapeuta Holística, ella me acompañó en cada sesión, me impulsó a animarme a mostrar mis dones y a no sentir vergüenza. Acompañó mi crecimiento, estoy más que agradecida con ella.",
  },
  {
    author: "Niulka N (República Dominicana)",
    text: "Mi experiencia con las sesiones de coaching junto a Vilma fue realmente súper positiva para mi vida. En cada encuentro me sentí acompañada, escuchada y contenida. Algo que valoro muchísimo es que siempre terminé cada sesión con una sensación de alegría, liviandad y mucha felicidad, como si algo dentro mío se ordenara y cobrara sentido.",
  },
  {
    author: "Tamara F (abogada)",
    text: "Mi principal desafío antes de comenzar con el coaching era afrontar y superar un enorme miedo a mi problema de salud de osteoporosis. Durante las sesiones me sentí comprendida y contenida absolutamente. El resultado fue excelente porque pude superar el temor y ponerme en acción.",
  },
  {
    author: "Verónica Vignola (esteticista)",
    text: "Cuando empecé solo era curiosidad, estaba en proceso de explorar y a medida pasaron las sesiones me abrió la cabeza de tal modo que me sirvió para exteriorizar cosas que uno no sabe que las tiene guardadas hasta que te das cuenta. Excelente experiencia para la vida.",
  },
  {
    author: "Julieta C (Terapeuta Holística)",
    text: "Antes de empezar el proceso de coaching con Vilma, sentía que mis proyectos profesionales estaban frenados por algo que no lograba ver con claridad. Las sesiones me permitieron mirarme desde otro lugar, cuestionar creencias que cargaba sin saberlo y reconectar con lo que realmente quiero construir.",
  },
  {
    author: "Raquel (Profesora de inglés)",
    text: "Mi objetivo principal fue ordenar el embrollo en el que me encontraba para poder tomar impulso y llevar adelante un proyecto personal y familiar. Durante las sesiones, me sentí muy cómoda, la calidez de Vilma es para destacar, al igual que su compromiso y acompañamiento profesional.",
  },
  {
    author: "Any D (de ama de casa, mamá, a emprendedora)",
    text: "Quiero compartir mi experiencia con las sesiones de coaching junto a Vilma. Realmente fueron súper positivas para mi vida. En cada encuentro me sentí acompañada, escuchada y contenida. Sin dudas, fue un proceso muy enriquecedor que sumó muchísimo a mi crecimiento personal.",
  },
  {
    author: "Denisse J (estilista)",
    text: "El proceso de coaching con Vilma me ayudó a ver nuevas posibilidades en mi vida personal y laboral. Como peluquera y mamá, enfrentaba desafíos económicos y dudas, pero a través del acompañamiento logré identificar bloqueos, me sentí más contenida y pude tomar decisiones importantes para avanzar.",
  },
  {
    author: "Silvia I (Dra en Química)",
    text: "Mi desafío era superar mi temor a hablar en público. Logré luego de pocas sesiones desarrollar mayor confianza y fluidez al dar mis charlas. Pude cumplir este objetivo con muy buenos resultados.",
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="section-glow px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="title-flyer text-center text-4xl md:text-5xl">
          Respaldo y referencias profesionales
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-flyer-ink/80">
          Historias reales de consultantes y colegas que atravesaron procesos
          de cambio con resultados concretos.
        </p>

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 carousel-scroll">
          {testimonials.map((item, i) => (
            <motion.article
              key={item.author}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="cloud-card min-w-[88%] snap-start p-6 sm:min-w-[48%] lg:min-w-[38%]"
            >
              <ExpandableText
                text={item.text}
                maxChars={190}
                className="text-flyer-ink/90"
              />
              <span className="meta-capsule mt-4 w-fit max-w-full text-left normal-case tracking-normal">
                {item.author}
              </span>
            </motion.article>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <span className="slider-label">Desliza para ver testimonios</span>
        </div>
      </div>
    </section>
  );
}

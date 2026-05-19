"use client";

import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import profileAboutImage from "../../vilma-sobre-mi-recortada.png";

export function About() {
  const [expanded, setExpanded] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const [needsBottomFade, setNeedsBottomFade] = useState(true);

  const measureBottomFade = useCallback(() => {
    const el = previewRef.current;
    if (!el || expanded) {
      setNeedsBottomFade(false);
      return;
    }
    setNeedsBottomFade(el.scrollHeight > el.clientHeight + 1);
  }, [expanded]);

  useLayoutEffect(() => {
    measureBottomFade();
    if (expanded) return;
    const el = previewRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measureBottomFade);
    ro.observe(el);
    window.addEventListener("resize", measureBottomFade);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measureBottomFade);
    };
  }, [expanded, measureBottomFade]);

  useLayoutEffect(() => {
    if (!expanded) {
      const el = previewRef.current;
      if (el) el.scrollTop = 0;
    }
  }, [expanded]);

  return (
    <section className="section-glow px-4 py-14 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-stretch">
        <div className="cloud-card p-3 md:min-h-[22rem] lg:h-[38rem] lg:min-h-0">
          <Image
            src={profileAboutImage}
            alt="Dra. Vilma G. Duschak"
            className="h-full min-h-[320px] w-full rounded-2xl object-cover object-top md:min-h-[22rem] lg:min-h-0"
          />
        </div>

        <div className="cloud-card flex min-h-[19rem] flex-col p-6 sm:min-h-[20rem] sm:p-7 md:min-h-[22rem] lg:h-[38rem] lg:min-h-0">
          <h3 className="title-flyer shrink-0 text-3xl font-bold">Sobre mí</h3>

          <div className="mt-3 flex min-h-0 flex-1 flex-col sm:mt-4">
            <div
              ref={previewRef}
              className={
                expanded
                  ? "about-body-scroll relative min-h-0 flex-1 overflow-y-auto pr-1 max-h-[min(62vh,30rem)] sm:max-h-[min(65vh,34rem)] lg:max-h-none"
                  : `relative min-h-0 flex-1 overflow-hidden max-h-[min(52vh,18.5rem)] sm:max-h-[min(50vh,20.5rem)] lg:max-h-none${needsBottomFade ? " about-preview-mask" : ""}`
              }
            >
              <p className="text-flyer-ink/85 font-bold">
                1. BIOGRAFÍA Y RESPALDO PROFESIONAL. Dra Vilma G Duschak
              </p>
              <p className="mt-3 text-flyer-ink/85 font-bold">
                1.1. RIGOR CIENTÍFICO Y ACOMPAÑAMIENTO DEL SER HUMANO
              </p>
              <p className="mt-3 text-flyer-ink/85">
                Mi identidad profesional se forjó durante más de 3 décadas como
                investigadora científica de CONICET, centrando mi labor
                fundamentalmente en la Enfermedad de Chagas, una enfermedad
                endógena en nuestro país y Latinoamérica. Mi trabajo se focalizó
                en el estudio del agente causal,{" "}
                <em>Trypanosoma cruzi</em>, con el fin de analizar las
                diferencias metabólicas y/o moleculares entre el parásito y el
                ser humano, que permitieran identificar factores bioquímicos y/o
                estructuras presentes exclusivamente en el parásito para
                explorarlos como factibles blancos para el desarrollo de nuevas
                drogas tripanocidas, minimizando la toxicidad que presentan las
                usadas actualmente. Por otro lado, mi investigación con
                pacientes crónicos, permitió hallar indicadores precisos para
                relacionar la progresión de la enfermedad con el grado de
                disfunción cardíaca del paciente.
              </p>
              <p className="mt-3 text-flyer-ink/85">
                Mi trayectoria cuenta con más de 50 trabajos publicados en
                revistas científicas internacionales con referato de alto
                impacto y la participación en más de 200 Congresos y
                Conferencias nacionales e internacionales. Me he desempeñado
                como evaluadora de becarios, científicos, proyectos de
                investigación de CONICET, UBA, UNSAM y otras Instituciones,
                revisora de trabajos presentados a publicación en múltiples
                revistas científicas y editora invitada de revistas
                internacionales de alto impacto.
              </p>
              <p className="mt-5 text-flyer-ink/85 font-bold">
                1.2. FORMACIÓN DE POTENCIAL HUMANO
              </p>
              <p className="mt-3 text-flyer-ink/85">
                Mi compromiso con el desarrollo de las personas ha sido una
                constante en mi carrera. He liderado y desarrollado el talento
                de:
              </p>
              <p className="mt-3 text-flyer-ink/85">
                <span className="font-bold">A-Numerosos recursos humanos:</span>{" "}
                Incluyendo la dirección de becarios y pasantes, guiándolos en el
                rigor científico del pensamiento y en la concreción de sus metas
                de alta complejidad.
              </p>
              <p className="mt-3 text-flyer-ink/85">
                <span className="font-bold">B-Numerosos doctorandos:</span>{" "}
                Formados bajo mi dirección para alcanzar el máximo grado
                académico, integrando disciplina y visión estratégica.
              </p>
              <p className="mt-3 text-flyer-ink/85">
                <span className="font-bold">C-Equipos interdisciplinarios:</span>{" "}
                Coordinación de profesionales en entornos de alta exigencia,
                gestionando tanto los conocimientos técnicos como científicos y
                el factor humano, trabajando en colaboración con investigadores
                nacionales de distintas disciplinas e internacionales de Brasil,
                México, Venezuela, Francia, Alemania y EE UU.
              </p>

            </div>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="shrink-0 border-t border-flyer-lavender/10 pt-3 text-left text-sm font-bold uppercase tracking-wide text-flyer-lavender underline decoration-flyer-lavender/35 underline-offset-2 hover:text-flyer-plum sm:pt-4"
          >
            {expanded ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </div>
    </section>
  );
}

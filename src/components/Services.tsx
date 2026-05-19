const offerings = [
  {
    n: "1",
    text: "Acompañamiento en un proceso de transformación personal de cambio profundo, herramientas para que logres que esos cambios sean reales en tu camino y obtengas resultados sostenibles en pocas sesiones.",
  },
  {
    n: "2",
    text: "Un espacio para rediseñar tu vida, saliendo de la confusión y yendo a la coherencia para reencontrarte con tu claridad, propósito, bienestar y dirección.",
  },
  {
    n: "3",
    text: "Escucha activa para que puedas darte cuenta de tus luces y tus sombras, de tus capacidades y tus limitaciones, para que puedas crear nuevas rutas neuronales que te lleven hacia la claridad y la acción.",
  },
  {
    n: "4",
    text: "Transformar tu manera de vincularte, de poner límites y de decidir mediante un proceso cuidado y personalizado, con objetivos claros y medibles, para destrabar lo que hoy te limita y pasar del estancamiento a la acción consciente.",
  },
];

export function Services() {
  return (
    <section className="section-glow px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="title-flyer text-center text-3xl md:text-5xl">
          Procesos breves de coaching ontológico profesional con base científica
        </h2>

        <div className="cloud-card mx-auto mt-8 max-w-4xl p-7 md:p-9">
          <h3 className="text-2xl font-extrabold text-flyer-plum">Te ofrezco:</h3>

          <ol className="mt-6 space-y-5">
            {offerings.map((item) => (
              <li key={item.n} className="flex gap-3 text-flyer-ink/85">
                <span className="shrink-0 font-bold text-flyer-plum">{item.n}.</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

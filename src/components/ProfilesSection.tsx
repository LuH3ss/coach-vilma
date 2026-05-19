const profiles = [
  {
    title: "1-REESTRUCTURACIÓN DEL SER",
    text: "Para superar mandatos, bloqueos, creencias limitantes.",
    meta: "META: Identidad propia elegida",
  },
  {
    title: "2-ACCIÓN CON CLARIDAD",
    text: "Para terminar con el ruido mental y la parálisis.",
    meta: "META: Foco y eficacia",
  },
  {
    title: "3-DISEÑO DE IDENTIDAD",
    text: "Para fortalecer la autoestima y el empoderamiento.",
    meta: "META: Seguridad y autosuficiencia.",
  },
];

export function ProfilesSection() {
  return (
    <section className="section-glow px-4 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="title-flyer text-center text-3xl md:text-5xl">
          Grupos o perfiles de consultantes (coachees) de acuerdo a su motivo
          de llegada a la consulta y soluciones
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {profiles.map((profile) => (
            <article key={profile.title} className="cloud-card p-6">
              <p className="font-semibold uppercase tracking-wide text-flyer-plum">
                {profile.title}
              </p>
              <p className="mt-3 text-flyer-ink/85">{profile.text}</p>
              <span className="meta-capsule mt-4 w-fit">{profile.meta}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

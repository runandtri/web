import Reveal from "../components/Reveal";
import SemanaTipo from "../components/SemanaTipo";

const PILLARS = [
  {
    number: "01",
    title: "Objetivos",
    text: "Definimos objetivos en base a tu nivel, tu experiencia y el tiempo disponible para entrenar.",
  },
  {
    number: "02",
    title: "Plan semanal",
    text: "Planes semanales con todas las sesiones organizadas: el contacto con el deportista es constante y más fluido.",
  },
  {
    number: "03",
    title: "Sin recetas",
    text: "No damos «recetas» generales: queremos resultados, y eso se consigue con atención y comunicación.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="bg-neoprene px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <Reveal>
        <div className="flex items-center gap-3 font-split text-xs uppercase tracking-[0.3em] text-white/50 sm:text-sm">
          <span className="h-1.5 w-1.5 bg-atlantico" />
          Método RUNyTRI
        </div>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
          Todo gira en torno al deportista.
        </h2>
      </Reveal>

      <Reveal delay={150}>
        <p className="mt-8 max-w-2xl font-body text-sm leading-relaxed text-white/60 sm:text-base">
          Con los años hemos desarrollado un método en el que todo gira en
          torno al deportista, siendo nosotros los que nos
          adaptamos a sus necesidades — haciendo posible que la metodología de
          entrenamiento más avanzada esté al servicio de cualquier objetivo.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-3 lg:mt-20">
        {PILLARS.map((pillar, i) => (
          <Reveal key={pillar.number} delay={i * 120} className="bg-neoprene">
            <div className="h-full px-0 py-8 sm:px-8 sm:py-10">
              <div className="font-split text-xs font-medium tracking-widest text-white/40">
                {pillar.number}
              </div>
              <h3 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
                {pillar.title}
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-white/60">
                {pillar.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <SemanaTipo />
    </section>
  );
}

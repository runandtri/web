import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

const TOOLS = [
  "Funcional",
  "Running",
  "HIIT",
  "Pilates",
  "TRX",
  "Natación",
  "Aquagym",
  "Propiocepción",
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-neoprene px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <Reveal>
        <div className="flex items-center gap-3 font-split text-xs uppercase tracking-[0.3em] text-white/50 sm:text-sm">
          <span className="h-1.5 w-1.5 bg-atlantico" />
          Servicios
        </div>
        <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
          Dos formas de entrenar.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
        <Reveal>
          <article className="flex h-full flex-col border border-white/15 p-8 transition-colors hover:border-atlantico/60 sm:p-10">
            <div className="font-split text-xs uppercase tracking-widest text-white/40">
              En persona
            </div>
            <h3 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
              Entrenamientos personales
            </h3>
            <p className="mt-5 font-body text-sm leading-relaxed text-white/60 sm:text-base">
              La atención individualizada es la mejor manera de lograr
              resultados y adherirse a una actividad. En instalaciones o a
              domicilio: tras una valoración inicial y la definición de
              objetivos, el entrenamiento se centra en tus necesidades.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-white/60">
              Pérdida de peso, puesta en forma, rehabilitación o rendimiento en
              atletismo, trail y triatlón.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="border border-white/15 px-3 py-1 font-split text-[10px] uppercase tracking-widest text-white/50"
                >
                  {tool}
                </span>
              ))}
            </div>
            <a
              href="#contacto"
              className="group mt-auto flex items-center gap-2 pt-8 font-split text-xs uppercase tracking-widest text-white transition-colors hover:text-atlantico"
            >
              Reserva tu valoración
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </article>
        </Reveal>

        <Reveal delay={150}>
          <article className="flex h-full flex-col border border-white/15 p-8 transition-colors hover:border-atlantico/60 sm:p-10">
            <div className="font-split text-xs uppercase tracking-widest text-white/40">
              Online
            </div>
            <h3 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
              Planificación y seguimiento a distancia
            </h3>
            <p className="mt-5 font-body text-sm leading-relaxed text-white/60 sm:text-base">
              Las nuevas tecnologías han hecho que ninguna distancia sea
              insalvable: con un teléfono móvil mantenemos un contacto
              permanente con nuestros deportistas en cualquier parte del mundo.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-white/60">
              Definimos objetivos y recibes un plan de entrenamiento personal
              con todas las sesiones organizadas, semana a semana.
            </p>
            <a
              href="#contacto"
              className="group mt-auto flex items-center gap-2 pt-8 font-split text-xs uppercase tracking-widest text-white transition-colors hover:text-atlantico"
            >
              Empieza donde estés
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

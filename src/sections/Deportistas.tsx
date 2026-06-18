import { ArrowUpRight } from "lucide-react";

import Reveal from "../components/Reveal";

const ATHLETES = [
  {
    name: "Oscar Díaz",
    place: "A Coruña",
    quote:
      "Incansable. Si algo define a Oscar es su valentía a la hora de enfrentarse a lo que se le plantee.",
  },
  {
    name: "Iago Vara",
    place: "Vigo",
    quote:
      "Uno de los mejores C.V. del triatlón de media y larga distancia de Galicia.",
  },
  {
    name: "Luis López",
    place: "Arzúa",
    quote: "Querer es poder.",
  },
];

export default function Deportistas() {
  return (
    <section
      id="deportistas"
      className="border-y border-white/10 bg-neoprene-raised px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <Reveal>
        <div className="flex items-center gap-3 font-split text-xs uppercase tracking-[0.3em] text-white/50 sm:text-sm">
          <span className="h-1.5 w-1.5 bg-atlantico" />
          Nuestros deportistas
        </div>
        <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
          Lo que dicen.
        </h2>
        <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-white/60 sm:text-base">
          Estos son algunos de los corredores y triatletas que confían en
          nuestro trabajo. Si quieres entrenar con nosotros, ponte en contacto.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-20">
        {ATHLETES.map((athlete, i) => (
          <Reveal key={athlete.name} delay={i * 120}>
            <figure className="flex h-full flex-col justify-between border border-white/15 p-8">
              <blockquote className="font-body text-sm leading-relaxed text-white/70 sm:text-base">
                “{athlete.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <div className="font-display text-2xl font-extrabold uppercase tracking-wide text-white">
                  {athlete.name}
                </div>
                <div className="mt-1 font-split text-[10px] uppercase tracking-widest text-white/40">
                  {athlete.place}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <a
          href="https://maps.app.goo.gl/4SkfFh2FztPdLSG36"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 border border-white/30 px-6 py-3 font-split text-xs uppercase tracking-widest text-white transition-colors hover:border-atlantico hover:bg-white/10 lg:mt-16"
        >
          Ver reseñas en Google
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  );
}

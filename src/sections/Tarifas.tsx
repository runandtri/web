import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Tarifas() {
  return (
    <section id="tarifas" className="bg-neoprene px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <Reveal className="text-center">
        <div className="flex items-center justify-center gap-3 font-split text-xs uppercase tracking-[0.3em] text-white/50 sm:text-sm">
          <span data-sport="swim" className="h-1.5 w-1.5 bg-tick" />
          Tarifas
        </div>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
          ¿Buscas superar un reto?
        </h2>
        <p className="mx-auto mt-8 max-w-xl font-body text-sm leading-relaxed text-white/60 sm:text-base">
          Ya seas un recién llegado o tengas experiencia, no dudes en contactar
          con nosotros. Cada plan se adapta a ti — cuéntanos tu objetivo y te
          proponemos el camino.
        </p>
        <a
          href="#contacto"
          className="group mx-auto mt-10 inline-flex items-center gap-2 border border-white/30 px-8 py-4 font-split text-xs uppercase tracking-widest text-white transition-colors hover:border-accent hover:bg-white/10"
        >
          Pide tu plan
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>
    </section>
  );
}

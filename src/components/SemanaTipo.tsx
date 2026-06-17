import Reveal from "./Reveal";

const DISCIPLINE_COLOR: Record<string, string> = {
  nada: "bg-atlantico",
  rueda: "bg-amanecer",
  corre: "bg-tiza",
};

const WEEK = [
  {
    day: "L",
    session: "Descanso",
    detail: "Movilidad 20'",
    disciplines: [],
  },
  {
    day: "M",
    session: "Natación 2.400 m",
    detail: "Técnica + 8×100",
    disciplines: ["nada"],
  },
  {
    day: "X",
    session: "Rodillo 1h15'",
    detail: "Z2 · cadencia",
    disciplines: ["rueda"],
  },
  {
    day: "J",
    session: "Pista 50'",
    detail: "6×400 + cuestas",
    disciplines: ["corre"],
  },
  {
    day: "V",
    session: "Aguas abiertas 2.000 m",
    detail: "Neopreno · orientación",
    disciplines: ["nada"],
  },
  {
    day: "S",
    session: "Bici 2h30' + 15' carrera",
    detail: "Transición — brick",
    disciplines: ["rueda", "corre"],
  },
  {
    day: "D",
    session: "Tirada larga 1h20'",
    detail: "Progresiva",
    disciplines: ["corre"],
  },
];

const LEGEND = [
  { key: "nada", label: "Natación" },
  { key: "rueda", label: "Ciclismo" },
  { key: "corre", label: "Carrera" },
];

export default function SemanaTipo() {
  return (
    <div className="mt-20 lg:mt-28">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-split text-xs uppercase tracking-[0.3em] text-white/50">
              Una semana tipo
            </div>
            <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-white/60 sm:text-base">
              Microciclo real de media distancia, fase específica. Tu plan se
              construye sobre tu semana — trabajo, familia y horas reales de
              entreno.
            </p>
          </div>
          <div className="flex gap-5">
            {LEGEND.map((item) => (
              <span
                key={item.key}
                className="flex items-center gap-2 font-split text-[10px] uppercase tracking-widest text-white/50"
              >
                <span
                  className={`h-1.5 w-1.5 ${DISCIPLINE_COLOR[item.key]}`}
                />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-8 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-7">
          {WEEK.map((entry) => (
            <div
              key={entry.day}
              className="group flex flex-col justify-between bg-neoprene p-4 transition-colors hover:bg-white/[0.04] sm:min-h-[8.5rem]"
            >
              <div className="flex items-center justify-between">
                <span className="font-split text-xs font-medium text-white/40">
                  {entry.day}
                </span>
                <span className="flex gap-1.5">
                  {entry.disciplines.map((d) => (
                    <span
                      key={d}
                      className={`h-1.5 w-1.5 ${DISCIPLINE_COLOR[d]}`}
                    />
                  ))}
                </span>
              </div>
              <div className="mt-3 sm:mt-6">
                <div className="font-body text-sm font-semibold leading-snug text-white">
                  {entry.session}
                </div>
                <div className="mt-1 font-split text-[10px] uppercase tracking-wider text-white/45">
                  {entry.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 font-split text-[10px] uppercase tracking-widest text-white/35">
          Ejemplo — cada plan se programa semana a semana sobre tus horarios.
        </p>
      </Reveal>
    </div>
  );
}

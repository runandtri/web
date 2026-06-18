import Reveal from "../components/Reveal";

// Optional coach photo. To enable, drop the image in `public/` and set this to
// its path (e.g. "/img/berto.jpg"). The section is designed to look complete
// when this is null — no empty/broken image box is rendered.
const PHOTO: string | null = null;

const PROFESIONAL = [
  "Licenciado en Educación Física (Universidad de A Coruña)",
  "Entrenador nacional de triatlón",
  "Entrenador nacional de atletismo",
  "Máster en Alto Rendimiento en Deportes Cíclicos (Universidad de Murcia)",
  "Especialista en entrenamiento por potencia en ciclismo",
  "+20 años de experiencia en deportes de resistencia",
];

const DEPORTIVA = [
  "7 Ironman finalizados, incluido el Norseman",
  "+10 maratones",
  "+25 pruebas 70.3",
  "Travesías a nado",
  "Experiencia en pruebas de ultradistancia",
];

export default function QuienSoy() {
  return (
    <section
      id="quien-soy"
      className="border-t border-white/10 bg-neoprene px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <Reveal>
        <div className="flex items-center gap-3 font-split text-xs uppercase tracking-[0.3em] text-white/50 sm:text-sm">
          <span className="h-1.5 w-1.5 bg-atlantico" />
          Quién soy
        </div>
        <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
          Soy Berto Pino.
        </h2>
        <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-white/60 sm:text-base">
          Llevo más de veinte años entrenando a corredores y triatletas — y
          compitiendo en las mismas pruebas que preparo. Conozco cada plan
          desde los dos lados: el del entrenador que lo diseña y el del atleta
          que lo cumple a las seis de la mañana. Esto es lo que hay detrás.
        </p>
      </Reveal>

      {PHOTO && (
        <Reveal delay={100} className="mt-12 lg:mt-16">
          <img
            src={PHOTO}
            alt="Berto Pino, entrenador"
            className="h-72 w-full border border-white/15 object-cover object-top sm:h-96"
          />
        </Reveal>
      )}

      <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col border border-white/15 p-8 sm:p-10">
            <div className="font-split text-xs uppercase tracking-widest text-white/40">
              Profesional
            </div>
            <ul className="mt-6 divide-y divide-white/10">
              {PROFESIONAL.map((item) => (
                <li
                  key={item}
                  className="py-3 font-split text-sm leading-relaxed text-white/70 first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex h-full flex-col border border-white/15 p-8 sm:p-10">
            <div className="font-split text-xs uppercase tracking-widest text-white/40">
              Deportiva
            </div>
            <ul className="mt-6 divide-y divide-white/10">
              {DEPORTIVA.map((item) => (
                <li
                  key={item}
                  className="py-3 font-split text-sm leading-relaxed text-white/70 first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

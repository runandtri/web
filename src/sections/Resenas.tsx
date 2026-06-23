import { ArrowUpRight, Star } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import Reveal from "../components/Reveal";

type ReviewBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; label: string; items: string[] };

type Review = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  body: ReviewBlock[];
};

const REVIEWS: Review[] = [
  {
    name: "Rubén Vázquez",
    rating: 5,
    body: [
      { kind: "p", text: "Simplemente el mejor! Como entrenador es un autentico espectáculo pero como persona es indescriptible. Empece a entrenar con Alberto en Septiembre del 2025 y el conocimiento que tiene es brutal. Siempre con predisposición a ayudarte a conseguir cada uno de tus objetivos por muy lejos y complicado que lo veas. Se ajusta a la perfección en tu día a día y a cualquier imprevisto. Simplemente: Confía en el proceso. Él se encarga del resto y que cruces cualquier meta que te propongas." },
    ],
  },
  {
    name: "Antía",
    rating: 5,
    body: [
      { kind: "p", text: "Inicialmente quería mejorar en triatlón sin pensar en los entrenos. Con una agenda de vida complicada/saturada, ha sabido adaptar cada entrenamiento a mi disponibilidad. Ha conseguido que entrenar sea ilusionante; de hecho, estoy deseando que llegue el fin de semana para descubrir qué me espera la siguiente." },
      { kind: "p", text: "He conseguido retos que sinceramente nunca imaginé a mi alcance tan pronto 😳." },
      { kind: "p", text: "Aprendo muchísimo de él. Responde a cualquier duda por wasap y transmite una pasión auténtica por ayudar a las personas a progresar." },
      { kind: "p", text: "Gracias a eso, y no es que quiera seguir subiendo al podio 😏, yo seguiré entrenando con él muchos años más." },
    ],
  },
  {
    name: "Pablo Centeno",
    rating: 5,
    body: [
      { kind: "p", text: "Empecé en el 2025 estancado en Hyrox para mejorar mis tiempos en carrera y complementar mis entrenamientos de fuerza buscando un sub 60'. Actualmente tengo una marca oficial de 58'38\"." },
      { kind: "list", label: "Pros:", items: [
        "Yo marco mis objetivos.",
        "Entrenamientos programados y sincronizados automáticamente con mi reloj.",
        "Seguimiento y planificación semanal.",
        "Adaptaciones semanales al ritmo de vida, eventos o sensaciones.",
      ] },
      { kind: "list", label: "Contras:", items: [
        "Las zapatillas no corren solas 😅",
      ] },
    ],
  },
  {
    name: "Cris Pérez",
    rating: 5,
    body: [
      { kind: "p", text: "Si quieres un entrenador con conocimientos teoricos de lo que hace, que tenga la cabeza bien amueblada, que adapte entrenos a todos los públicos (mayores, pequeños, hombres, mujeres, con sobrepeso y con lesiones) que entienda que también hay vida detrás del deporte...es el mejor!, tendrás un entrenador y el mejor apoyo psicológico, el éxito no está sólo en tener un buen profesional, si no un buen apoyo y un grupo donde estés cómodo y feliz." },
    ],
  },
  {
    name: "Alberto Gómez",
    rating: 5,
    body: [
      { kind: "p", text: "No puedo recomendarlo más. Es un entrenador excepcional, pero lo que realmente marca la diferencia es su calidad humana. Siempre está disponible, se preocupa de verdad por sus deportistas y ofrece un apoyo moral increíble en todo el proceso." },
      { kind: "p", text: "En mi caso, llevo varios meses lesionado y en todo momento ha sabido adaptar los entrenamientos a mi situación, buscando alternativas para que pudiera seguir avanzando sin comprometer la recuperación. Esa atención personalizada y esa preocupación constante son algo que valoro enormemente." },
      { kind: "p", text: "Además de ser un gran profesional, tiene la capacidad de adaptarse a cualquier persona, independientemente de su nivel, objetivo o deporte. Sus entrenamientos son personalizados, efectivos y están perfectamente ajustados a las necesidades de cada deportista." },
      { kind: "p", text: "Da gusto trabajar con alguien tan cercano, comprometido y apasionado por lo que hace. Sin duda, una de las mejores decisiones que he tomado." },
    ],
  },
  {
    name: "Marina Miras",
    rating: 5,
    body: [
      { kind: "p", text: "Llevo meses entrenando con Berto y lo que más destaco es su nivel de formación constante: no se limita a dar rutinas, sino que se nota que está al día en entrenamiento, nutrición deportiva y recuperación de lesiones, y lo aplica de forma personalizada según tu situación. Sabe adaptar el trabajo a cada nivel —da igual si vienes de cero o ya tienes experiencia— y consigue sacar lo mejor de cada persona sin forzar ni generalizar. Además de la parte técnica, tiene una capacidad para motivarte y animarte, incluso cuando tú mismo no lo ves claro. Profesionalidad, conocimiento real, trato cercano, siempre está ahí." },
    ],
  },
];

// Tall reviews are clamped to this height when collapsed, so cards of very
// different length don't leave ragged vertical gaps. ~7 lines of body copy.
const COLLAPSED_MAX_PX = 176;

function ReviewCard({ review }: { review: Review }) {
  const bodyRef = useRef<HTMLQuoteElement>(null);
  const bodyId = useId();
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  // Only show the "Leer más" toggle when the full text actually exceeds the
  // collapsed height. Re-measure on resize (reflow changes line count) and once
  // webfonts have loaded (they change wrapping). scrollHeight reports the full
  // content height regardless of the max-height clamp, so this holds in both
  // collapsed and expanded states.
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const measure = () => setOverflows(el.scrollHeight > COLLAPSED_MAX_PX + 8);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    if (document.fonts) document.fonts.ready.then(measure).catch(() => {});
    return () => observer.disconnect();
  }, []);

  const clamp = overflows && !expanded;

  return (
    <figure className="flex flex-col border border-divider/15 p-8">
      <div className="relative">
        <blockquote
          ref={bodyRef}
          id={bodyId}
          className={`font-body text-sm leading-relaxed text-white/70 sm:text-base${
            clamp ? " overflow-hidden" : ""
          }`}
          style={clamp ? { maxHeight: COLLAPSED_MAX_PX } : undefined}
        >
          {review.body.map((block, bi) =>
            block.kind === "p" ? (
              <p key={bi} className="mt-4 first:mt-0">
                {block.text}
              </p>
            ) : (
              <div key={bi} className="mt-4 first:mt-0">
                <div className="font-split text-xs uppercase tracking-widest text-white/40">
                  {block.label}
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {block.items.map((item, ii) => (
                    <li key={ii}>{item}</li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </blockquote>
        {clamp && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neoprene-raised to-transparent"
          />
        )}
      </div>

      {overflows && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={bodyId}
          className="mt-4 self-start font-split text-xs uppercase tracking-widest text-accent transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {expanded ? "Leer menos" : "Leer más"}
        </button>
      )}

      <div
        className="mt-8 flex items-center gap-1"
        role="img"
        aria-label={`${review.rating} de 5 estrellas`}
      >
        {Array.from({ length: review.rating }).map((_, s) => (
          <Star
            key={s}
            className="h-4 w-4 fill-current text-accent"
            aria-hidden="true"
          />
        ))}
      </div>
      <figcaption className="mt-3 font-display text-2xl font-extrabold uppercase tracking-wide text-white">
        {review.name}
      </figcaption>
    </figure>
  );
}

export default function Resenas() {
  return (
    <section
      id="resenas"
      className="border-y border-divider/10 bg-neoprene-raised px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <Reveal>
        <div className="flex items-center gap-3 font-split text-xs uppercase tracking-[0.3em] text-white/50 sm:text-sm">
          <span data-sport="swim" className="h-1.5 w-1.5 bg-tick" />
          Reseñas
        </div>
        <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
          Lo que dicen.
        </h2>
        <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-white/60 sm:text-base">
          Esto es lo que cuentan los corredores y triatletas que entrenan
          conmigo. Reseñas reales, publicadas en Google.
        </p>
      </Reveal>

      <div className="mt-14 grid items-start gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {REVIEWS.map((review, i) => (
          <Reveal key={review.name} delay={i * 80}>
            <ReviewCard review={review} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 lg:mt-16">
        <a
          href="https://maps.app.goo.gl/4SkfFh2FztPdLSG36"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-divider/30 px-6 py-3 font-split text-xs uppercase tracking-widest text-white transition-colors hover:border-accent hover:bg-white/10"
        >
          Ver reseñas en Google
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  );
}

import { useState } from "react";
import { ArrowUpRight, Award, Waves, X } from "lucide-react";

// Hero background clips. All free for commercial use (Mixkit Free License /
// Coverr License) — for production, self-host these rather than hot-linking.
// `overlay` is a per-clip dark layer (0–100) tuned so the white headline stays
// legible; brighter footage (pool, track) needs more. Switch live with ?v=<key>.
type HeroVideo = {
  key: string;
  label: string;
  src: string;
  overlay: number;
  position?: string; // object-position; defaults to center
  credit?: string; // shown over the hero when the license requires attribution
};

const VIDEOS: HeroVideo[] = [
  // Default clip (pickVideo falls back to VIDEOS[0]); self-hosted so the hero
  // never depends on a CDN being up.
  {
    key: "atardecer",
    label: "Carrera al atardecer",
    src: "/video/carrera-atardecer.mp4",
    overlay: 30,
  },
  {
    key: "swim",
    label: "Aguas abiertas",
    src: "https://assets.mixkit.co/videos/46929/46929-720.mp4",
    overlay: 35,
  },
  {
    key: "race",
    label: "Carrera — salida de natación",
    src: "/video/triatlon-carrera.mp4",
    overlay: 40,
    position: "center 30%",
    credit: "Vídeo: NaBUru38 / Wikimedia Commons · CC BY-SA 4.0",
  },
  {
    key: "start",
    label: "Salida de triatlón",
    src: "/video/triatlon-salida.mp4",
    overlay: 35,
    position: "center 28%",
  },
  {
    key: "bike",
    label: "Ciclismo en ruta",
    src: "https://cdn.coverr.co/videos/coverr-a-group-of-cyclists-4885/1080p.mp4",
    overlay: 30,
  },
  {
    key: "pool",
    label: "Piscina",
    src: "https://assets.mixkit.co/videos/33192/33192-720.mp4",
    overlay: 45,
  },
  {
    key: "track",
    label: "Pista",
    src: "https://assets.mixkit.co/videos/609/609-1080.mp4",
    overlay: 45,
  },
  {
    key: "amanecer",
    label: "Carrera al amanecer",
    src: "/video/carrera-amanecer.mp4",
    overlay: 30,
  },
];

function pickVideo(): HeroVideo {
  if (typeof window !== "undefined") {
    const wanted = new URLSearchParams(window.location.search).get("v");
    const match = VIDEOS.find((v) => v.key === wanted);
    if (match) return match;
  }
  return VIDEOS[0];
}

const NAV_LINKS = [
  { label: "Método", href: "#metodo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Quién soy", href: "#quien-soy" },
  { label: "Deportistas", href: "#deportistas" },
  { label: "Tarifas", href: "#tarifas" },
];

const HEADLINE = ["Nada.", "Rueda.", "Corre."];

const STATS = [
  { value: "+20", label: "Años de experiencia" },
  { value: "3", label: "Disciplinas" },
  { value: "100%", label: "Planes a medida" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const video = pickVideo();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neoprene">
      <video
        key={video.src}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: video.position ?? "center" }}
        src={video.src}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Legibility: a flat dark layer tuned per clip, plus a left-weighted
          gradient so the headline reads regardless of what the footage shows. */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: video.overlay / 100 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neoprene/80 via-neoprene/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-neoprene/70 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full flex-col">
        <nav className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          <a
            href="/"
            className="font-display text-3xl font-black uppercase tracking-wide text-white sm:text-4xl"
          >
            Run y Tri
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-split text-xs uppercase tracking-widest text-white/80 transition-colors hover:text-atlantico"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className="hidden items-center gap-2 border border-white/30 px-6 py-3 font-split text-xs uppercase tracking-widest text-white transition-colors hover:border-atlantico hover:bg-white/10 md:flex"
          >
            Contacta
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(true)}
            className="space-y-1.5 md:hidden"
          >
            <div className="h-0.5 w-6 bg-white" />
            <div className="h-0.5 w-6 bg-white" />
            <div className="h-0.5 w-4 bg-white" />
          </button>
        </nav>

        <div className="flex flex-1 items-center px-6 sm:px-10 lg:px-16">
          <div>
            <div className="animate-fade-up mb-6 flex items-center gap-3 lg:mb-8">
              <Waves className="h-4 w-4 text-atlantico" />
              <span className="font-split text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
                Entrenamiento personal y online
              </span>
            </div>

            <h1 className="animate-fade-up-delay-1 font-display font-black uppercase leading-[0.88] tracking-tight text-white">
              {HEADLINE.map((verb) => (
                <span
                  key={verb}
                  className="block text-[clamp(3.2rem,9vw,8rem)]"
                >
                  {verb}
                </span>
              ))}
            </h1>

            <p className="animate-fade-up-delay-2 mt-6 max-w-md font-body text-sm leading-relaxed text-white/70 sm:text-base lg:mt-8">
              Mediadores entre el soñador y su sueño.
              <br />
              Triatlón y running a tu medida, estés donde estés —{" "}
              <span className="font-semibold text-white">
                del sueño a la meta.
              </span>
            </p>

            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-10">
              <a
                href="#contacto"
                className="group flex items-center gap-2 bg-neoprene px-5 py-3 font-split text-[11px] uppercase tracking-widest text-white transition-colors hover:bg-black sm:px-7 sm:py-4 sm:text-xs"
              >
                Empieza hoy
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="hidden items-center gap-3 sm:flex">
                <Award className="h-8 w-8 text-white/50" />
                <div className="font-split text-[11px] uppercase tracking-wider text-white/60">
                  Método RUNyTRI
                  <br />
                  Personal &amp; online
                </div>
              </div>
            </div>

            <div className="animate-fade-up-delay-4 mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-12 lg:mt-14 lg:gap-16">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-split text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-split text-[9px] uppercase tracking-widest text-white/50 sm:text-[11px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {video.credit && (
        <p className="absolute bottom-3 right-4 z-10 max-w-[70%] text-right font-split text-[9px] leading-tight text-white/40">
          {video.credit}
        </p>
      )}

      <div
        className={`fixed inset-0 z-50 bg-neoprene/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 sm:px-10">
          <span className="font-display text-3xl font-black uppercase tracking-wide text-white">
            Run y Tri
          </span>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
          >
            <X className="h-7 w-7 text-white" />
          </button>
        </div>

        <div className="flex h-[calc(100%-5rem)] flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl font-black uppercase text-white sm:text-6xl"
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
                transitionProperty: "opacity, transform",
                transitionDuration: "500ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center gap-2 border border-white/30 px-8 py-4 font-split text-xs uppercase tracking-widest text-white transition-colors hover:border-atlantico hover:bg-white/10"
            style={{
              transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`,
              transitionProperty: "opacity, transform",
              transitionDuration: "500ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Contacta
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

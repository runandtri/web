import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import Reveal from "../components/Reveal";

const CHANNELS = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "651 996 243",
    href: "tel:+34651996243",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Escríbenos",
    href: "https://wa.me/34651996243",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bertopino@gmail.com",
    href: "mailto:bertopino@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@runytri",
    href: "https://instagram.com/runytri",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@tripino",
    href: "https://instagram.com/tripino",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "/runytri",
    href: "https://facebook.com/runytri",
  },
];

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="border-t border-white/10 bg-neoprene-raised px-6 pb-12 pt-24 sm:px-10 lg:px-16 lg:pt-32"
    >
      <Reveal>
        <div className="flex items-center gap-3 font-split text-xs uppercase tracking-[0.3em] text-white/50 sm:text-sm">
          <span className="h-1.5 w-1.5 bg-atlantico" />
          Contacto
        </div>
        <h2 className="mt-6 font-display text-[clamp(2.8rem,7vw,6rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
          Hablemos.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {CHANNELS.map((channel, i) => (
          <Reveal key={channel.href} delay={i * 80} className="bg-neoprene-raised">
            <a
              href={channel.href}
              target={channel.href.startsWith("https") ? "_blank" : undefined}
              rel={
                channel.href.startsWith("https")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex h-full items-center justify-between px-2 py-6 transition-colors hover:bg-white/5 sm:px-6"
            >
              <span className="flex items-center gap-4">
                <channel.icon className="h-5 w-5 text-white/40 transition-colors group-hover:text-atlantico" />
                <span>
                  <span className="block font-split text-[10px] uppercase tracking-widest text-white/40">
                    {channel.label}
                  </span>
                  <span className="mt-1 block font-body text-sm text-white sm:text-base">
                    {channel.value}
                  </span>
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-atlantico" />
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
        <div className="font-display text-2xl font-black uppercase tracking-wide text-white">
          Run y Tri
        </div>
        <div className="font-body text-sm italic text-white/40">
          Mediadores entre el soñador y su sueño.
        </div>
        <div className="font-split text-[10px] uppercase tracking-widest text-white/30">
          © 2026 Método RUNyTRI
        </div>
      </div>
    </section>
  );
}

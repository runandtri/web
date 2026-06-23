import { useEffect } from "react";
import { pickWarmth } from "./warmth";
import Hero from "./sections/Hero";
import Metodo from "./sections/Metodo";
import Servicios from "./sections/Servicios";
import QuienSoy from "./sections/QuienSoy";
import Tarifas from "./sections/Tarifas";
import Contacto from "./sections/Contacto";

export default function App() {
  // The sections render after the browser's native hash scroll has already
  // run, so direct links like /#servicios need a second attempt on mount.
  useEffect(() => {
    // ?warmth=1–7 previews a colour variant (1–4 retint accents, 5–7 are full
    // themes); anything else leaves today's look untouched (no attribute → the
    // CSS-variable defaults stand).
    const warmth = pickWarmth(window.location.search);
    if (warmth) {
      document.documentElement.dataset.warmth = String(warmth);
    }

    if (window.location.hash) {
      document
        .querySelector(window.location.hash)
        ?.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, []);

  return (
    <main className="bg-neoprene">
      <Hero />
      <Metodo />
      <Servicios />
      <QuienSoy />
      <Tarifas />
      <Contacto />
    </main>
  );
}

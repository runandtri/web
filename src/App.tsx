import { useEffect } from "react";
import Hero from "./sections/Hero";
import Metodo from "./sections/Metodo";
import Servicios from "./sections/Servicios";
import Deportistas from "./sections/Deportistas";
import Tarifas from "./sections/Tarifas";
import Contacto from "./sections/Contacto";

export default function App() {
  // The sections render after the browser's native hash scroll has already
  // run, so direct links like /#servicios need a second attempt on mount.
  useEffect(() => {
    if (window.location.hash) {
      document
        .querySelector(window.location.hash)
        ?.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, []);

  return (
    <main className="bg-black">
      <Hero />
      <Metodo />
      <Servicios />
      <Deportistas />
      <Tarifas />
      <Contacto />
    </main>
  );
}

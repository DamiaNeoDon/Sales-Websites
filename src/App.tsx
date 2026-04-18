import {
  Phone,
  MapPin,
  Wrench,
  Zap,
  Disc,
  Wind,
  Truck,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">

      {/* NAV */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-lg">
            Auto-Moto <span className="text-orange-500">Serwis</span>
          </h1>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#home">Start</a>
            <a href="#services">Usługi</a>
            <a href="#about">O nas</a>
            <a href="#contact">Kontakt</a>
          </nav>

          <button className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menu && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 text-xl z-50">
          <a href="#home" onClick={() => setMenu(false)}>Start</a>
          <a href="#services" onClick={() => setMenu(false)}>Usługi</a>
          <a href="#about" onClick={() => setMenu(false)}>O nas</a>
          <a href="#contact" onClick={() => setMenu(false)}>Kontakt</a>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="pt-40 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Profesjonalny serwis samochodowy
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Szybka diagnostyka, uczciwe ceny i doświadczenie. Twój samochód w dobrych rękach.
        </p>

        <a
          href="tel:575664662"
          className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2"
        >
          <Phone /> Zadzwoń teraz
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Usługi</h3>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            { icon: <Wrench />, title: "Mechanika", desc: "Silniki, zawieszenie, hamulce" },
            { icon: <Zap />, title: "Diagnostyka", desc: "Komputerowa analiza błędów" },
            { icon: <Wind />, title: "Klimatyzacja", desc: "Serwis i odgrzybianie" },
            { icon: <Disc />, title: "Opony", desc: "Wymiana i wyważanie" },
            { icon: <Truck />, title: "Pomoc drogowa", desc: "Holowanie 24/7" },
            { icon: <CheckCircle2 />, title: "Elektryka", desc: "Instalacje i naprawy" }
          ].map((s, i) => (
            <div key={i} className="bg-slate-900 p-6 rounded-xl border border-white/10">
              <div className="text-orange-500 mb-3">{s.icon}</div>
              <h4 className="font-bold mb-1">{s.title}</h4>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-black/40 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Dlaczego my?</h3>
          <p className="text-gray-400">
            Stawiamy na jakość, uczciwość i szybki czas realizacji.
            Każde auto traktujemy indywidualnie.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">Kontakt</h3>

        <p className="mb-2">📍 Elżbieta 93A</p>
        <p className="mb-6">📞 575 664 662</p>

        <a
          href="https://maps.google.com"
          target="_blank"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold"
        >
          <MapPin /> Zobacz lokalizację
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-10 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Auto-Moto Serwis. Wszelkie prawa zastrzeżone.
      </footer>

    </div>
  );
}

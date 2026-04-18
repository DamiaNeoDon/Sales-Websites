import { 
  Phone, 
  MapPin, 
  Clock, 
  Wrench, 
  Zap, 
  Disc, 
  Wind, 
  Truck, 
  Star, 
  Menu, 
  X,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, FormEvent } from 'react';

const colors = {
  navy: '#0F172A',
  amber: '#F59E0B',
  amberHover: '#D97706',
};

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Mechanika pojazdowa',
    description: 'Kompleksowe naprawy silników, zawieszenia i układów hamulcowych.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Diagnostyka komputerowa',
    description: 'Szybkie i precyzyjne lokalizowanie usterek za pomocą nowoczesnego sprzętu.',
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: 'Serwis klimatyzacji',
    description: 'Napełnianie, odgrzybianie i sprawdzanie szczelności układu.',
  },
  {
    icon: <Disc className="w-8 h-8" />,
    title: 'Serwis ogumienia',
    description: 'Wymiana, wyważanie i naprawa opon dla samochodów osobowych.',
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Pomoc drogowa',
    description: 'Szybka pomoc i holowanie w razie awarii na drodze.',
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: 'Elektryka',
    description: 'Naprawa instalacji oraz podzespołów elektrycznych.',
  },
];

const openingHours = [
  { day: 'Poniedziałek – Piątek', hours: '08:00 – 17:00' },
  { day: 'Sobota', hours: 'Zamknięte', closed: true },
  { day: 'Niedziela', hours: 'Zamknięte', closed: true },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const getDirections = (e: FormEvent) => {
    e.preventDefault();
    if (!origin) return;
    const dest = "Auto-Moto Jarosław Drozd, Elżbieta 93A, 24-300 Elżbieta";
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(dest)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-navy-dark font-sans text-white overflow-x-hidden mesh-gradient grid-pattern">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-navy/95 backdrop-blur-md py-4 shadow-lg border-border-theme' : 'bg-navy py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer logo text-2xl font-extrabold uppercase tracking-tighter"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Auto-Moto <span className="text-orange-theme">Jarosław Drozd</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest mr-8">
            <button onClick={() => scrollTo('start')} className="hover:text-orange-theme transition-colors">START</button>
            <button onClick={() => scrollTo('usługi')} className="hover:text-orange-theme transition-colors">USŁUGI</button>
            <button onClick={() => scrollTo('galeria')} className="hover:text-orange-theme transition-colors">GALERIA</button>
            <button onClick={() => scrollTo('kontakt')} className="hover:text-orange-theme transition-colors">KONTAKT</button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm font-medium border border-white/10">
              <span className="text-orange-theme">★★★★★</span>
              <span>5.0 Ocena Google</span>
            </div>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Main Content Layout Grid */}
      <main className="max-w-7xl mx-auto px-12 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
          
          {/* Left Column: Hero, Services, About */}
          <div className="space-y-24">
            
            {/* Hero Section */}
            <section id="start" className="hero flex flex-col justify-center relative py-12 px-8 rounded-2xl overflow-hidden mb-12 border border-border-theme min-h-[500px]">
              {/* Background with overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000" 
                  alt="Auto Repair Shop" 
                  className="w-full h-full object-cover opacity-30"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <span className="text-orange-theme uppercase font-bold text-xs tracking-widest mb-4 block">Twój zaufany mechanik w Elżbiecie</span>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight">
                  Profesjonalny Serwis <br /> Samochodowy
                </h1>
                <p className="text-gray-theme text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
                  Zapewniamy szybką diagnozę i solidną naprawę. Wieloletnie doświadczenie w branży motoryzacyjnej gwarantuje najwyższą jakość usług dla Twojego auta.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:575664662"
                    className="bg-orange-theme hover:bg-orange-theme-hover text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" /> Zadzwoń teraz
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/yvpjWNsr516iM11D9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-orange-theme text-orange-theme hover:bg-orange-theme/10 px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center gap-2"
                  >
                    <MapPin className="w-5 h-5" /> Zobacz na Mapach
                  </a>
                </div>
              </motion.div>
            </section>

            {/* Services Mini Grid */}
            <section id="usługi" className="mt-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover="hovered"
                    variants={{
                      hovered: { scale: 1.03, transition: { duration: 0.2 } }
                    }}
                    className="bg-navy p-6 rounded-lg border border-border-theme hover:border-orange-theme/50 transition-all group flex flex-col gap-3 cursor-default"
                  >
                    <motion.div 
                      variants={{
                        hovered: { 
                          y: [0, -6, 0],
                          scale: 1.05,
                          transition: { duration: 0.4, ease: "easeInOut" } 
                        }
                      }}
                      className="text-orange-theme w-fit"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-orange-theme font-bold text-base mb-1 uppercase tracking-wide group-hover:translate-x-1 transition-transform">{service.title}</h3>
                    <p className="text-gray-theme text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
            
            {/* Visual Gallery / Bento Grid */}
            <section className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                  <h4 className="text-[10px] uppercase text-orange-theme font-black tracking-[0.2em] mb-3">Warsztat w obiektywie</h4>
                  <h2 className="text-4xl font-extrabold tracking-tighter uppercase italic">Precyzja w każdym detalu</h2>
                </div>
                <p className="text-gray-theme max-w-sm text-sm italic">Odkryj jakość, której możesz zaufać. Nasz warsztat to miejsce, gdzie nowoczesna technologia spotyka się z pasją do motoryzacji.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl group">
                  <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800" alt="Repair" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent p-8 flex flex-col justify-end">
                    <span className="font-bold text-orange-theme">Specjalistyczne Narzędzia</span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl group">
                  <img src="https://images.unsplash.com/photo-1542282088-fe8426682bc8?auto=format&fit=crop&q=80&w=800" alt="Engine" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="relative overflow-hidden rounded-2xl group">
                  <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" alt="Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="md:col-span-2 relative overflow-hidden rounded-2xl group">
                  <img src="https://images.unsplash.com/photo-1517524008410-b4458ef02577?auto=format&fit=crop&q=80&w=800" alt="Diagnostics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-navy-dark/40 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </section>

            {/* Mission Section with Large Image */}
            <section className="relative h-[400px] rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=1600" 
                alt="Automotive Mission" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px] flex items-center justify-center p-12 text-center">
                <div className="max-w-2xl px-4">
                  <Star className="w-12 h-12 text-orange-theme mx-auto mb-6 animate-pulse" />
                  <h2 className="text-4xl font-black uppercase mb-4 italic tracking-tight">Pasja, która napędza wyniki</h2>
                  <p className="text-lg text-white/90 leading-relaxed font-medium">
                    Nie tylko naprawiamy samochody. Dbamy o to, by każda podróż była bezpieczna. Wykorzystujemy nasze doświadczenie i najnowsze technologie, by Twój pojazd zawsze był w szczytowej formie.
                  </p>
                </div>
              </div>
            </section>

            <section id="galeria" className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                  <h4 className="text-[10px] uppercase text-orange-theme font-black tracking-[0.2em] mb-3">Portfolio realizacji</h4>
                  <h2 className="text-4xl font-extrabold tracking-tighter uppercase italic">Ostatnie Prace & Warsztat</h2>
                </div>
                <div className="flex gap-4 items-center">
                  <a 
                    href="https://www.google.com/maps/place/Auto-Moto+Jaros%C5%82aw+Drozd/@51.1337259,21.9455839,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipN3-yvU0z_VjY_G9_XU-j-r4G8N-z-z-z-z-z-z!2e1!3e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN3-yvU0z_VjY_G9_XU-j-r4G8N-z-z-z-z-z-z%3Dw203-h152-k-no!7i4032!8i3024!4m6!3m5!1s0x47228f6f0d45a55d:0xcde4c15e0db34581!8m2!3d51.1337259!4d21.9455839!16s%2Fg%2F11xsw43_6s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-black uppercase tracking-widest text-gray-theme hover:text-orange-theme transition-colors flex items-center gap-2 border-b border-transparent hover:border-orange-theme pb-1"
                  >
                    Zobacz zdjęcia na Google Maps <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  // Enhanced collection matching the real workshop aesthetic
                  "https://images.unsplash.com/photo-1494906109277-516346507443?auto=format&fit=crop&q=80&w=800", // Red brick exterior vibe
                  "https://images.unsplash.com/photo-1632733711679-5292d6863f12?auto=format&fit=crop&q=80&w=800", // Precision engine work
                  "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=800", // Tire service detail
                  "https://images.unsplash.com/photo-1615906655593-ad0313b52a0a?auto=format&fit=crop&q=80&w=800", // Car on professional lift
                  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800", // Diagnostic computer
                  "https://images.unsplash.com/photo-1517524008410-b4458ef02577?auto=format&fit=crop&q=80&w=800", // Mechanic at work
                  "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=800", // Tool cabinet
                  "https://images.unsplash.com/photo-1542282088-fe8426682bc8?auto=format&fit=crop&q=80&w=800"  // Engine assembly
                ].map((src, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 0.98 }}
                    className="aspect-square rounded-xl overflow-hidden border border-white/5 relative group cursor-zoom-in"
                  >
                    <img 
                      src={src} 
                      alt={`Galeria ${i}`} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/20 transition-colors"></div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* About / Trust Section */}
            <section id="o-nas" className="space-y-12">
              <div className="border-l-4 border-orange-theme pl-8 bg-navy/50 p-8 rounded-r-xl">
                <h3 className="text-2xl font-bold mb-4 uppercase italic">Lokalne zaufanie, pełen profesjonalizm</h3>
                <p className="text-gray-theme text-lg leading-relaxed">
                  "Moim celem jest zapewnienie każdemu kierowcy spokoju ducha i sprawnego auta. W Auto-Moto Jarosław Drozd stawiamy na rzetelność i nowoczesną diagnostykę."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Szybka Diagnoza', desc: 'Nie tracimy czasu.' },
                  { icon: <Users className="w-6 h-6" />, title: 'Obsługa', desc: 'Indywidualne podejście.' },
                  { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Ceny', desc: 'Uczciwe wyceny.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-3">
                    <div className="bg-orange-theme/20 p-4 rounded-full text-orange-theme">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <aside className="space-y-8">
            <div className="sidebar bg-navy rounded-xl p-8 border border-border-theme sticky top-32 space-y-10">
              
              {/* Godziny Otwarcia */}
              <div id="godziny">
                <h4 className="text-[10px] uppercase text-gray-theme font-black tracking-[0.2em] mb-6">Godziny Otwarcia</h4>
                <div className="space-y-4">
                  {openingHours.map((item, idx) => (
                    <div key={idx} className={`flex justify-between items-center text-sm py-2 border-b border-white/5 last:border-0 ${item.closed ? 'text-gray-theme opacity-50' : 'text-white'}`}>
                      <span className="font-medium">{item.day}</span>
                      <span className="font-bold">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kontakt Telefoniczny */}
              <div>
                <h4 className="text-[10px] uppercase text-gray-theme font-black tracking-[0.2em] mb-6">Kontakt Telefoniczny</h4>
                <div className="bg-orange-theme/10 p-6 rounded-lg border-l-4 border-orange-theme space-y-2">
                  <a href="tel:575664662" className="block text-2xl font-bold hover:text-orange-theme transition-colors">575 664 662</a>
                  <a href="tel:693725277" className="block text-2xl font-bold hover:text-orange-theme transition-colors opacity-80 hover:opacity-100">693 725 277</a>
                </div>
              </div>

              {/* Lokalizacja i Prowadzenie */}
              <div id="kontakt">
                <h4 className="text-[10px] uppercase text-gray-theme font-black tracking-[0.2em] mb-6">Lokalizacja & Dojazd</h4>
                
                {/* Directions Form */}
                <form onSubmit={getDirections} className="mb-6 space-y-3">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Twoja lokalizacja (np. Opole Lubelskie)" 
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-md py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-orange-theme transition-colors"
                    />
                    <button type="submit" className="absolute right-2 top-1.5 p-1.5 text-orange-theme hover:bg-orange-theme/10 rounded-md transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-md text-[10px] font-black uppercase tracking-widest transition-all"
                  >
                    Wyznacz trasę dojazdu
                  </button>
                </form>

                <p className="text-gray-theme text-sm leading-relaxed mb-6">
                  Elżbieta 93A, <br />
                  24-300 Elżbieta
                </p>
                <div className="rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 h-48">
                  <iframe 
                    src="https://maps.google.com/maps?q=Auto-Moto%20Jaros%C5%82aw%20Drozd,%20El%C5%BCbieta%2093A&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    className="w-full h-full"
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-navy-dark py-12 px-12 border-t border-border-theme">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] text-gray-theme font-bold uppercase tracking-widest text-center md:text-left">
          <div>© 2024 Auto-Moto Jarosław Drozd. Wszelkie prawa zastrzeżone.</div>
          <div className="flex gap-8">
            <button onClick={() => scrollTo('start')} className="hover:text-white transition-colors">START</button>
            <button onClick={() => scrollTo('usługi')} className="hover:text-white transition-colors">USŁUGI</button>
            <button onClick={() => scrollTo('galeria')} className="hover:text-white transition-colors">GALERIA</button>
            <button onClick={() => scrollTo('kontakt')} className="hover:text-white transition-colors">KONTAKT</button>
          </div>
          <div>Realizacja: Profesjonalne Usługi Motoryzacyjne</div>
        </div>
      </footer>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-dark flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white"><X className="w-10 h-10" /></button>
            {['Start', 'Usługi', 'Galeria', 'O nas', 'Godziny', 'Kontakt'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                className="text-white text-3xl font-black uppercase tracking-tighter"
              >
                {item}
              </button>
            ))}
            <div className="mt-8 flex flex-col items-center gap-4">
              <a href="tel:575664662" className="text-orange-theme text-2xl font-bold underline underline-offset-8">575 664 662</a>
              <a href="tel:693725277" className="text-orange-theme text-2xl font-bold underline underline-offset-8">693 725 277</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Call Button Mobile */}
      <motion.a
        href="tel:575664662"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50 md:hidden bg-orange-theme text-white p-6 rounded-full shadow-2xl flex items-center justify-center ring-4 ring-orange-theme/20"
      >
        <Phone className="w-8 h-8 font-black" />
      </motion.a>
    </div>
  );
}

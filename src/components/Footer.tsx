import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import logoImg from "@/assets/iskra-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="bg-card border-t border-border pt-14 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src={logoImg} alt="Iskra Svjetlosti" className="h-10 w-10 rounded-full" />
              <div className="leading-tight">
                <div className="font-heading text-base font-extrabold text-primary tracking-tight">
                  Iskra Svjetlosti
                </div>
                <div className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                  Udruga za djecu i mlade
                </div>
              </div>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Zajedno stvaramo topliji i uključiviji svijet za djecu i mlade s teškoćama u razvoju.
            </p>
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/Iskra.Svjetlosti.hr/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-accent text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={15} />
              </a>
              <a href="https://www.instagram.com/iskrasvjetlosti/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-accent text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-accent text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-extrabold text-primary mb-4">Brzi linkovi</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Početna</Link>
              <Link to="/voditelji-radionica" className="text-sm text-muted-foreground hover:text-primary transition-colors">O nama</Link>
              <Link to="/josipove-stanice" className="text-sm text-muted-foreground hover:text-primary transition-colors">Što radimo</Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Novosti</Link>
              <Link to="/doniraj" className="text-sm text-muted-foreground hover:text-primary transition-colors">Uključi se</Link>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kontakt</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-extrabold text-primary mb-4">Kontakt</h4>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:info@iskrasvjetlosti.hr" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={13} /> info@iskrasvjetlosti.hr
              </a>
              <a href="tel:+385911234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={13} /> +385 91 123 4567
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={13} className="mt-0.5 shrink-0" /> Split, Hrvatska
              </div>
              <p className="text-xs text-muted-foreground/80 mt-1">
                <span className="font-semibold">OIB:</span> 12345678901
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-sm font-extrabold text-primary mb-4">Radno vrijeme</h4>
            <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Ponedjeljak – Petak</p>
              <p className="text-xs">08:00 – 16:00</p>
              <p className="text-xs mt-2">Vikendom i praznicima<br/>prema dogovoru</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-sm font-extrabold text-primary mb-4">Pridruži se!</h4>
            <p className="text-xs text-muted-foreground mb-3">Prati nas i budi dio naše priče.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex items-center bg-accent rounded-full p-1 pr-1"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tvoja e-mail adresa"
                className="bg-transparent flex-1 px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground outline-none min-w-0"
              />
              <button
                type="submit"
                className="w-9 h-9 shrink-0 rounded-full bg-cta text-white flex items-center justify-center hover:brightness-110 transition-all"
                aria-label="Prijavi se"
              >
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Iskra Svjetlosti. Sva prava pridržana.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Politika privatnosti</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Uvjeti korištenja</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

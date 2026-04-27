import { Facebook, Instagram, Phone, Mail, MapPin, Heart, Clock, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import logoImg from "@/assets/iskra-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-20 pb-8 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/20 blob-shape blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* CTA strip */}
        <div className="rounded-[2rem] bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 p-8 md:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary-foreground mb-2">
              Vaša podrška direktno pomaže našim korisnicima.
            </h3>
            <p className="text-primary-foreground/70">Pridružite se zajednici od 700+ donatora.</p>
          </div>
          <Link to="/doniraj" className="btn-donate px-8 py-4 text-base whitespace-nowrap">
            <Heart size={18} className="fill-current" />
            Doniraj sada
          </Link>
        </div>

        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src={logoImg} alt="Iskra Svjetlosti" className="h-10 w-10 rounded-full" />
              <span className="font-heading text-lg font-bold text-primary-foreground">Iskra Svjetlosti</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-5 max-w-sm">
              Zajedno stvaramo topliji i uključiviji svijet za djecu i mlade s teškoćama u razvoju.
            </p>
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/Iskra.Svjetlosti.hr/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-secondary transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/iskrasvjetlosti/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-secondary transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold text-primary-foreground mb-5">Brzi linkovi</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Početna</Link>
              <Link to="/voditelji-radionica" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">O nama</Link>
              <Link to="/josipove-stanice" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Što radimo</Link>
              <Link to="/blog" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Novosti</Link>
              <Link to="/doniraj" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Uključi se</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold text-primary-foreground mb-5">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@iskrasvjetlosti.hr" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                <Mail size={14} /> info@iskrasvjetlosti.hr
              </a>
              <a href="tel:0976653783" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                <Phone size={14} /> 097 6653 783
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Put Iza Nove Bolnice 10c,<br />21000 Split, Hrvatska</span>
              </div>
              <p className="text-xs text-primary-foreground/50 pt-1"><span className="text-primary-foreground/40">OIB:</span> 40118970568</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold text-primary-foreground mb-5">Radno vrijeme</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary-foreground/90">Pon – Pet</p>
                  <p className="text-xs">08:00 – 16:00</p>
                </div>
              </div>
              <p className="text-xs mt-2">Vikendom i praznicima prema dogovoru</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Udruga Iskra Svjetlosti. Sva prava pridržana.
          </p>
          <p className="flex items-center gap-2 text-xs text-primary-foreground/50">
            <ShieldCheck size={14} /> Vaša podrška direktno pomaže našim korisnicima.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

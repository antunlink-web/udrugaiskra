import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import logoImg from "@/assets/iskra-logo.png";
const LOGO_URL = logoImg;

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={LOGO_URL} alt="Iskra Svjetlosti" className="h-8 w-8" />
              <span className="font-heading text-lg font-bold text-primary-foreground">Iskra Svjetlosti</span>
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">
              Udruga za pomoć osobama s intelektualnim poteškoćama iz Splita.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/Iskra.Svjetlosti.hr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/iskrasvjetlosti/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-bold text-primary-foreground mb-4">Stranice</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">O nama</a>
              <Link to="/voditelji-radionica" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">Voditelji radionica</Link>
              <a href="#workshops" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">Radionice</a>
              <Link to="/josipove-stanice" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">Josipove Stanice</Link>
              <Link to="/blog" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">Blog</Link>
              <Link to="/doniraj" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">Doniraj</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-bold text-primary-foreground mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:0976653783" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                <Phone size={14} />
                097 6653 783
              </a>
              <a href="mailto:info@iskrasvjetlosti.hr" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                <Mail size={14} />
                info@iskrasvjetlosti.hr
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Put Iza Nove Bolnice 10c,<br />21000, Split</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-bold text-primary-foreground mb-4">Podaci</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <p><span className="text-primary-foreground/40">OIB:</span> 40118970568</p>
              <p><span className="text-primary-foreground/40">IBAN:</span> HR5924070001100091899</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Udruga Iskra Svjetlosti. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

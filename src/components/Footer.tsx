import { Facebook } from "lucide-react";

const LOGO_URL = "https://iskrasvjetlosti.hr/wp-content/uploads/2023/09/cropped-iskra-logo-1.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a href="https://iskrasvjetlosti.hr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mb-4">
              <img src={LOGO_URL} alt="Iskra Svjetlosti" className="h-8 w-8" />
              <span className="font-heading text-lg text-primary-foreground">Iskra Svjetlosti</span>
            </a>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">
              Udruga za pomoć osobama s intelektualnim poteškoćama iz Splita.
            </p>
            <a
              href="https://www.facebook.com/Iskra.Svjetlosti.hr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors"
            >
              <Facebook size={18} />
              Facebook
            </a>
          </div>

          <div>
            <h4 className="font-heading text-base text-primary-foreground mb-4">Linkovi</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">O nama</a>
              <a href="#workshops" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">Radionice</a>
              <a href="https://iskrasvjetlosti.hr/voditelji-radionica/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">Voditelji radionica</a>
              <a href="https://iskrasvjetlosti.hr/blog/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">Blog</a>
              <a href="#testimonials" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">Volonteri</a>
              <a href="#donate" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">Doniraj</a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base text-primary-foreground mb-4">Kontakt</h4>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Split, Hrvatska<br />
              <a href="https://iskrasvjetlosti.hr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                iskrasvjetlosti.hr
              </a>
            </p>
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

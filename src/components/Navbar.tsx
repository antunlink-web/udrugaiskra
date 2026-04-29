import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logoImg from "@/assets/iskra-logo.png";

const navLinks = [
  { label: "Početna", href: "/", anchor: undefined as string | undefined },
  { label: "O nama", href: "/#about", anchor: "about" },
  { label: "Što radimo", href: "/#workshops", anchor: "workshops" },
  { label: "Josipove stanice", href: "/josipove-stanice" },
  { label: "Novosti", href: "/blog" },
  { label: "Uključi se", href: "/doniraj" },
  { label: "Kontakt", href: "/#contact", anchor: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (link: typeof navLinks[0]) => (e: React.MouseEvent) => {
    setOpen(false);
    if (link.anchor) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(link.anchor!)?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      } else {
        document.getElementById(link.anchor)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-full bg-card transition-all duration-300 ${
          scrolled ? "shadow-[0_10px_40px_-12px_rgba(20,40,80,0.18)]" : "shadow-[0_6px_20px_-10px_rgba(20,40,80,0.12)]"
        }`}
      >
        <div className="flex items-center justify-between py-2 pl-3 pr-2 md:pl-5 md:pr-3">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logoImg} alt="Iskra Svjetlosti" className="h-11 w-11 rounded-full" />
            <div className="leading-tight">
              <div className="font-heading text-base md:text-[17px] font-extrabold text-primary tracking-tight">
                Iskra Svjetlosti
              </div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                Udruga za djecu i mlade
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.anchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleClick(link)}
                  className="px-3.5 py-2 text-sm font-semibold text-foreground/70 hover:text-primary rounded-full hover:bg-accent transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3.5 py-2 text-sm font-semibold text-foreground/70 hover:text-primary rounded-full hover:bg-accent transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/doniraj"
              className="btn-donate !hidden px-5 py-2.5 text-sm lg:!inline-flex"
            >
              <Heart size={16} className="fill-current" />
              <span>Doniraj sada</span>
            </Link>
            <button
              className="lg:hidden p-2 text-primary rounded-full hover:bg-accent"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden mx-auto max-w-7xl mt-2 rounded-3xl bg-card border border-border shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-4">
              {navLinks.map((link) =>
                link.anchor ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleClick(link)}
                    className="px-4 py-3 text-base font-medium text-foreground hover:bg-accent rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-base font-medium text-foreground hover:bg-accent rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/doniraj"
                onClick={() => setOpen(false)}
                className="btn-donate mt-3 px-5 py-3 text-base"
              >
                <Heart size={18} className="fill-current" />
                <span>Doniraj sada</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logoImg from "@/assets/iskra-logo.png";

const navLinks = [
  { label: "O nama", href: "/#about", anchor: "about" },
  { label: "Radionice", href: "/#workshops", anchor: "workshops" },
  { label: "Josipove Stanice", href: "/josipove-stanice" },
  { label: "Voditelji", href: "/voditelji-radionica" },
  { label: "Blog", href: "/blog" },
  { label: "Volonteri", href: "/#testimonials", anchor: "testimonials" },
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
        className={`mx-auto max-w-7xl rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-md shadow-[0_8px_30px_-10px_hsl(215_70%_22%/0.35)]"
            : "bg-primary/85 backdrop-blur"
        }`}
      >
        <div className="flex items-center justify-between py-2.5 pl-3 pr-2 md:pl-5 md:pr-3">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="bg-primary-foreground rounded-full p-1.5 shadow-sm">
              <img src={logoImg} alt="Iskra Svjetlosti" className="h-7 w-7" />
            </div>
            <span className="font-heading text-base md:text-lg font-bold text-primary-foreground tracking-tight">
              Iskra Svjetlosti
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.anchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleClick(link)}
                  className="px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-full hover:bg-primary-foreground/10 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-full hover:bg-primary-foreground/10 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/doniraj"
              className="btn-donate px-5 py-2.5 text-sm relative"
            >
              <Heart size={16} className="fill-current" />
              <span>Doniraj</span>
            </Link>
            <button
              className="lg:hidden p-2 text-primary-foreground rounded-full hover:bg-primary-foreground/10"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

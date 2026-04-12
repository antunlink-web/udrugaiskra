import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import logoImg from "@/assets/iskra-logo.png";
const LOGO_URL = logoImg;

const navLinks = [
  { label: "O nama", href: "#about", internal: false },
  { label: "Radionice", href: "#workshops", internal: false },
  { label: "Josipove Stanice", href: "/josipove-stanice", internal: true },
  { label: "Blog", href: "/blog", internal: true },
  { label: "Volonteri", href: "#testimonials", internal: false },
  { label: "Kontakt", href: "#contact", internal: false },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (link: typeof navLinks[0]) => {
    setOpen(false);
    if (link.internal) {
      navigate(link.href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={LOGO_URL} alt="Iskra Svjetlosti" className="h-10 w-10" />
          <span className="font-heading text-xl font-bold text-foreground">Iskra Svjetlosti</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.internal ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <Link
            to="/doniraj"
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Doniraj
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) =>
                link.internal ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </a>
                )
              )}
              <Link
                to="/doniraj"
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold text-center"
              >
                Doniraj
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const StickyDonate = () => {
  const [pulse, setPulse] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show after scrolling past hero
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pulse every 8s
  useEffect(() => {
    const id = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1400);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`hidden lg:block fixed z-40 transition-all duration-300 lg:right-6 lg:bottom-6 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <Link
        to="/doniraj"
        aria-label="Doniraj sada"
        className={`relative inline-flex items-center gap-2 px-6 py-4 rounded-full bg-cta text-cta-foreground font-bold text-base shadow-2xl hover:scale-[1.05] transition-transform ${
          pulse ? "animate-pulse-ring" : ""
        }`}
        style={{ boxShadow: "0 16px 40px -8px hsla(48 100% 45% / 0.55)" }}
      >
        <Heart size={18} className="fill-current" />
        Doniraj
        {pulse && (
          <span className="absolute inset-0 rounded-full ring-4 ring-cta/40 animate-ping pointer-events-none" />
        )}
      </Link>
    </div>
  );
};

export default StickyDonate;

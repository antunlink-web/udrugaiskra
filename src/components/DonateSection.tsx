import { motion } from "framer-motion";
import { Heart, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const PRESETS = [5, 10, 20, 50];
const RAISED = 12540;
const GOAL = 20000;

const DonateSection = () => {
  const [amount, setAmount] = useState<number | "custom">(10);
  const [customAmount, setCustomAmount] = useState("");
  const progress = Math.min(100, (RAISED / GOAL) * 100);

  return (
    <section id="donate" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden bg-hero-gradient p-7 md:p-10 text-white"
          style={{ boxShadow: "var(--shadow-float)" }}
        >
          {/* sparkle decorations */}
          <svg className="absolute top-6 right-8 text-white/30" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor"/>
          </svg>

          <div className="relative grid lg:grid-cols-[1fr_1.2fr] gap-8 items-center">
            {/* Left: title + copy */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-cta flex items-center justify-center">
                <Heart className="text-white fill-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl md:text-[1.85rem] font-heading font-extrabold leading-tight mb-2">
                  Pomozite nam širiti svjetlost
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  Vaša donacija omogućuje radionice, terapije, izlete i posebne programe
                  koji mijenjaju živote djece i mladih.
                </p>
              </div>
            </div>

            {/* Right: progress + amounts + CTA */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                  Cilj ovog mjeseca
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-heading font-extrabold mb-3">
                €{RAISED.toLocaleString("hr-HR")}{" "}
                <span className="text-white/50 text-xl font-bold">
                  / €{GOAL.toLocaleString("hr-HR")}
                </span>
              </p>
              <div className="h-2.5 rounded-full bg-white/15 overflow-hidden mb-5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  className="h-full rounded-full bg-progress-gradient"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap gap-2 flex-1">
                  {PRESETS.map((v) => (
                    <button
                      key={v}
                      onClick={() => {
                        setAmount(v);
                        setCustomAmount("");
                      }}
                      className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all min-w-[60px] ${
                        amount === v
                          ? "bg-cta text-white shadow-md"
                          : "bg-white text-primary hover:bg-white/90"
                      }`}
                    >
                      {v}€
                    </button>
                  ))}
                  <input
                    type="number"
                    min={1}
                    placeholder="Drugi iznos"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount("custom");
                    }}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold w-32 outline-none transition-all ${
                      amount === "custom"
                        ? "bg-cta text-white placeholder:text-white/70"
                        : "bg-white text-primary placeholder:text-primary/50"
                    }`}
                  />
                </div>
                <Link
                  to="/doniraj"
                  className="btn-donate px-6 py-3.5 text-sm whitespace-nowrap"
                >
                  <Heart size={16} className="fill-current" />
                  Doniraj sada
                </Link>
              </div>

              <div className="flex items-center gap-2 mt-4 text-xs text-white/65">
                <ShieldCheck size={14} />
                Sigurno plaćanje
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateSection;

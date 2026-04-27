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
    <section id="donate" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden bg-ocean p-8 md:p-14 text-primary-foreground"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary-foreground/10 blob-shape blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cta/30 blob-shape blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Left: copy */}
            <div>
              <div className="w-16 h-16 rounded-2xl bg-cta flex items-center justify-center mb-6">
                <Heart className="text-cta-foreground fill-cta-foreground" size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-5 leading-[1.1]">
                Pomozite nam širiti svjetlost
              </h2>
              <p className="text-primary-foreground/85 leading-relaxed text-lg">
                Vaša donacija omogućuje radionice, terapije i svakodnevnu podršku
                osobama kojima je to najpotrebnije.
              </p>
            </div>

            {/* Right: progress + amounts */}
            <div className="bg-primary-foreground/[0.07] backdrop-blur rounded-3xl p-6 md:p-8 border border-primary-foreground/15">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
                  Cilj ovog mjeseca
                </span>
                <span className="text-sm font-semibold text-primary-foreground/80">
                  {Math.round(progress)}%
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-heading font-bold mb-3">
                €{RAISED.toLocaleString("hr-HR")}{" "}
                <span className="text-primary-foreground/50 text-lg font-normal">
                  / €{GOAL.toLocaleString("hr-HR")}
                </span>
              </p>
              <div className="h-3 rounded-full bg-primary-foreground/10 overflow-hidden mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-cta to-amber-400"
                />
              </div>

              <div className="grid grid-cols-5 gap-2 mb-5">
                {PRESETS.map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      setAmount(v);
                      setCustomAmount("");
                    }}
                    className={`py-3 rounded-xl text-sm font-semibold transition-all ${
                      amount === v
                        ? "bg-cta text-cta-foreground shadow-md"
                        : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                    }`}
                  >
                    €{v}
                  </button>
                ))}
                <input
                  type="number"
                  min={1}
                  placeholder="€"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount("custom");
                  }}
                  className={`py-3 rounded-xl text-sm font-semibold text-center transition-all outline-none ${
                    amount === "custom"
                      ? "bg-cta text-cta-foreground placeholder:text-cta-foreground/60"
                      : "bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
                  }`}
                />
              </div>

              <Link
                to="/doniraj"
                className="btn-donate w-full justify-center px-8 py-4 text-base"
              >
                <Heart size={18} className="fill-current" />
                Doniraj sada
              </Link>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-primary-foreground/60">
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

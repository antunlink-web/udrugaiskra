import { motion } from "framer-motion";
import { Heart, Lock, Banknote, Copy, Check } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import CroatianPaymentBarcode from "@/components/CroatianPaymentBarcode";
import logoImg from "@/assets/iskra-logo.png";

const BANK = {
  name: "Udruga Iskra Svjetlosti",
  iban: "HR5924070001100091899",
  oib: "40118970568",
};

const Doniraj = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <PageLayout>
      <section className="bg-hero-gradient relative overflow-hidden py-16 md:py-24">
        <img src={logoImg} alt="" aria-hidden className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] opacity-[0.06]" />
        <div className="container mx-auto px-4 relative text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cta/25 border border-cta/40 text-ink text-xs font-bold mb-5">
              <Heart size={12} className="fill-current" /> Doniraj
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-ink mb-5 leading-tight">
              Pomozite nam širiti svjetlost
            </h1>
            <p className="text-lg text-foreground/75 leading-relaxed">
              Vaša donacija izravno omogućuje radionice, terapije i programe koji mijenjaju
              živote odraslih osoba s intelektualnim poteškoćama. Svaki doprinos znači puno.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl space-y-6">
          {/* Stripe CTA */}
          <div className="bg-ocean rounded-3xl p-7 md:p-8 text-white text-center" style={{ boxShadow: "var(--shadow-float)" }}>
            <div className="w-14 h-14 mx-auto rounded-2xl bg-cta flex items-center justify-center mb-4">
              <Heart className="text-cta-foreground fill-cta-foreground" size={26} />
            </div>
            <h2 className="font-heading text-2xl font-extrabold mb-2">Doniraj karticom</h2>
            <p className="text-white/85 text-sm mb-6 max-w-md mx-auto">
              Brza i sigurna donacija putem Stripe-a - jednokratno ili mjesečno.
            </p>
            <a href="https://iskrasvjetlosti.com/doniraj" target="_blank" rel="noopener noreferrer" className="btn-donate px-8 py-3.5 text-base">
              <Heart size={18} className="fill-current" /> Doniraj putem Stripe-a
            </a>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-white/70">
              <Lock size={13} /> Sigurno plaćanje • SSL enkripcija
            </div>
          </div>

          {/* HUB-3 */}
          <CroatianPaymentBarcode />

          {/* Bank transfer details */}
          <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/70" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Banknote size={18} className="text-primary" />
              </div>
              <h2 className="font-heading text-lg font-extrabold text-ink">Uplata na račun</h2>
            </div>
            <div className="space-y-2">
              {[
                { label: "Primatelj", value: BANK.name, key: "name" },
                { label: "IBAN", value: BANK.iban, key: "iban" },
                { label: "OIB", value: BANK.oib, key: "oib" },
              ].map((row) => (
                <div key={row.key} className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-soft">
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{row.label}</div>
                    <div className="text-sm font-semibold text-ink truncate">{row.value}</div>
                  </div>
                  <button onClick={() => copy(row.value, row.key)} className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline px-2.5 py-1.5 rounded-lg">
                    {copied === row.key ? <Check size={14} /> : <Copy size={14} />}
                    {copied === row.key ? "Kopirano" : "Kopiraj"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Doniraj;

import { motion } from "framer-motion";
import { Heart, Copy, CheckCircle, Sparkles, Users, Repeat } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";

const benefits = [
  { icon: Users, title: "19 sudionika", desc: "Direktno pomažete osobama uključenim u program." },
  { icon: Repeat, title: "Mjesečno", desc: "Mala redovita donacija osigurava stabilnost programa." },
  { icon: Sparkles, title: "100% transparentno", desc: "Pratite naš rad kroz blog i izvješća." },
];

const Doniraj = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-sky-fade py-20 md:py-28 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/15 blob-shape blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cta/10 blob-shape blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="w-20 h-20 rounded-full bg-cta/15 flex items-center justify-center mx-auto mb-6">
              <Heart className="text-cta fill-cta" size={36} />
            </div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              Doniraj
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary mb-6 leading-tight">
              Postanite dio naše priče
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pridružite se 700+ donatora koji svaki mjesec odvajaju sredstva i osiguravaju
              nesmetano provođenje programa za naše sudionike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-accent/40 rounded-3xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-card flex items-center justify-center mx-auto mb-4">
                  <b.icon className="text-secondary" size={22} />
                </div>
                <h3 className="font-heading font-semibold text-primary mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment details */}
      <section className="py-16 md:py-24 bg-sky-fade">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-[2rem] p-8 md:p-12 border border-border/60 mb-8"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-8">
                Podaci za uplatu
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
                    Primatelj
                  </label>
                  <p className="text-foreground font-medium">Udruga Iskra Svjetlosti</p>
                  <p className="text-sm text-muted-foreground">Put Iza Nove Bolnice 10c, 21000 Split</p>
                </div>

                <div>
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
                    IBAN
                  </label>
                  <div className="flex items-center gap-3">
                    <code className="text-foreground font-mono text-base md:text-lg bg-accent/50 px-4 py-3 rounded-xl flex-1 break-all">
                      HR5924070001100091899
                    </code>
                    <button
                      onClick={() => copyToClipboard("HR5924070001100091899", "iban")}
                      className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary transition-colors shrink-0"
                      title="Kopiraj IBAN"
                    >
                      {copied === "iban" ? <CheckCircle size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
                    OIB
                  </label>
                  <div className="flex items-center gap-3">
                    <code className="text-foreground font-mono text-base md:text-lg bg-accent/50 px-4 py-3 rounded-xl flex-1">
                      40118970568
                    </code>
                    <button
                      onClick={() => copyToClipboard("40118970568", "oib")}
                      className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary transition-colors shrink-0"
                      title="Kopiraj OIB"
                    >
                      {copied === "oib" ? <CheckCircle size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
                    Opis plaćanja
                  </label>
                  <p className="text-foreground">Donacija za Udrugu Iskra Svjetlosti</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-ocean rounded-[2rem] p-8 md:p-12 text-primary-foreground relative overflow-hidden"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-cta/20 blob-shape blur-3xl" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-5">
                  Zašto donirati?
                </h2>
                <div className="space-y-4 text-primary-foreground/85 leading-relaxed">
                  <p>
                    Financiramo se iz donacija građana (700+) koji svaki mjesec odvajaju sredstva,
                    prate rad udruge i osiguravaju nesmetano provođenje programa.
                  </p>
                  <p>
                    Zahvaljujući njima možemo financirati aktivnosti za naših 19 sudionika — od
                    kreativnih radionica, sportskih aktivnosti, izleta, do predstava i kulturnih događanja.
                  </p>
                  <p className="text-sm italic text-primary-foreground/70">
                    Svaka donacija, koliko god mala, čini razliku. Hvala vam! 🧡
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Doniraj;

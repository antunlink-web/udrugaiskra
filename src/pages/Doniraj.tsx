import { motion } from "framer-motion";
import { Heart, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";

const Doniraj = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
              <Heart className="text-primary" size={36} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Postanite dio naše priče
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Novac dolazi iz samog srca građana. Pridružite se 700+ donatora koji svaki mjesec
              odvajaju sredstva i osiguravaju nesmetano provođenje programa za naše sudionike.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 mb-8"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Podaci za uplatu
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                    Primatelj
                  </label>
                  <p className="text-foreground font-medium">Udruga Iskra Svjetlosti</p>
                  <p className="text-sm text-muted-foreground">Put Iza Nove Bolnice 10c, 21000 Split</p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                    IBAN
                  </label>
                  <div className="flex items-center gap-3">
                    <code className="text-foreground font-mono text-lg bg-muted px-4 py-2 rounded-lg flex-1">
                      HR5924070001100091899
                    </code>
                    <button
                      onClick={() => copyToClipboard("HR5924070001100091899", "iban")}
                      className="p-2 rounded-lg bg-accent text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="Kopiraj IBAN"
                    >
                      {copied === "iban" ? <CheckCircle size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                    OIB
                  </label>
                  <div className="flex items-center gap-3">
                    <code className="text-foreground font-mono text-lg bg-muted px-4 py-2 rounded-lg flex-1">
                      40118970568
                    </code>
                    <button
                      onClick={() => copyToClipboard("40118970568", "oib")}
                      className="p-2 rounded-lg bg-accent text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="Kopiraj OIB"
                    >
                      {copied === "oib" ? <CheckCircle size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
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
              className="bg-card rounded-3xl p-8 md:p-12 border border-border/50"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Zašto donirati?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Financiramo se iz donacija građana (700+) koji svaki mjesec odvajaju sredstva, prate rad udruge
                  i osiguravaju nesmetano provođenje programa.
                </p>
                <p>
                  Zahvaljujući njima možemo financirati aktivnosti za naših 19 sudionika — od kreativnih radionica,
                  sportskih aktivnosti, izleta, pa sve do predstava i kulturnih događanja.
                </p>
                <p className="text-sm italic">
                  Svaka donacija, koliko god mala, čini razliku. Hvala vam! 🧡
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Doniraj;

import { motion } from "framer-motion";
import { User } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { workshopLeaders } from "@/data/workshopLeaders";

const VoditeljiRadionica = () => {
  return (
    <PageLayout>
      <section className="bg-sky-fade py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-secondary/15 blob-shape blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">Naš tim</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary mb-6 leading-tight">
              Voditelji radionica
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upoznajte ljude koji vode naše kreativne radionice i inspiriraju naše sudionike svaki dan.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {workshopLeaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="bg-card rounded-3xl overflow-hidden border border-border/60 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-square bg-accent flex items-center justify-center overflow-hidden">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <User className="text-secondary/40" size={64} />
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-secondary bg-accent px-3 py-1 rounded-full">
                    {leader.role}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-primary mt-3 mb-2">{leader.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VoditeljiRadionica;

import { motion } from "framer-motion";
import { User } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { workshopLeaders } from "@/data/workshopLeaders";

const VoditeljiRadionica = () => {
  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Naš tim</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
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
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden border border-border/50 group"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <User className="text-muted-foreground/30" size={64} />
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary bg-accent px-3 py-1 rounded-full">
                    {leader.role}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-foreground mt-3 mb-2">{leader.name}</h3>
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

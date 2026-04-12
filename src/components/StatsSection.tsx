import { motion } from "framer-motion";
import { Users, Heart, Palette, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "19", label: "štićenika", suffix: "" },
  { icon: Heart, value: "700", label: "donatora", suffix: "+" },
  { icon: Palette, value: "18", label: "radionica", suffix: "" },
  { icon: Clock, value: "1000", label: "sati rada", suffix: "+" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="mx-auto mb-3 text-primary-foreground/80" size={28} />
              <p className="text-3xl md:text-4xl font-heading text-primary-foreground">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-sm text-primary-foreground/70 mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

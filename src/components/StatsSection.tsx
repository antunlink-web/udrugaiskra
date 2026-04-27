import { motion, useInView } from "framer-motion";
import { Award, Heart, Palette, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Award, value: 19, label: "godina iskustva", suffix: "" },
  { icon: Heart, value: 700, label: "donatora", suffix: "+" },
  { icon: Palette, value: 18, label: "radionica", suffix: "" },
  { icon: Clock, value: 1000, label: "sati rada godišnje", suffix: "+" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>{count}{suffix}</span>
  );
};

/**
 * Floating stats card — overlaps the hero bottom and the next section.
 * Place this directly AFTER <HeroSection /> in the page layout.
 */
const StatsSection = () => {
  return (
    <section className="relative -mt-12 md:-mt-16 mb-8 md:mb-16 z-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card rounded-[2rem] p-6 md:p-8 border border-border/60"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/25 transition-colors">
                  <stat.icon className="text-secondary" size={24} />
                </div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1.5 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

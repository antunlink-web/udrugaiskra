import { motion, useInView } from "framer-motion";
import { Users, Heart, Palette, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Users, value: 19, label: "štićenika", suffix: "" },
  { icon: Heart, value: 700, label: "donatora", suffix: "+" },
  { icon: Palette, value: 18, label: "radionica", suffix: "" },
  { icon: Clock, value: 1000, label: "sati rada", suffix: "+" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
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
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-ocean relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-foreground blob-shape blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary blob-shape blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground">
            Brojke koje grijemo srcem
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-6 border border-primary-foreground/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-primary-foreground" size={26} />
              </div>
              <p className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-primary-foreground/70 mt-2 uppercase tracking-wider font-medium">
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

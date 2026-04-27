import { motion, useInView } from "framer-motion";
import { Users, Heart, HandHeart, Euro } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Users, value: 1, label: "Centar u Splitu", suffix: "", prefix: "" },
  { icon: Heart, value: 116, label: "Aktivnih korisnika", suffix: "+", prefix: "" },
  { icon: HandHeart, value: 105, label: "Donatora", suffix: "+", prefix: "" },
  { icon: Euro, value: 85640, label: "Prikupljenih sredstava", suffix: "+", prefix: "€" },
];

const AnimatedCounter = ({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
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
    <span ref={ref}>{prefix}{count.toLocaleString("hr-HR")}{suffix}</span>
  );
};

const StatsSection = () => {
  return (
    <section className="relative -mt-14 md:-mt-20 mb-8 md:mb-16 z-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card rounded-3xl p-7 md:p-10"
          style={{ boxShadow: "var(--shadow-float)" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center group cursor-default rounded-2xl p-2 transition-shadow hover:shadow-lg"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-105 transition-transform"
                  style={{ background: "linear-gradient(135deg, hsl(220 75% 32%), hsl(210 95% 55%))" }}
                >
                  <stat.icon className="text-white" size={22} />
                </div>
                <p className="text-3xl md:text-[2.4rem] font-heading font-extrabold text-primary leading-none">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-2 font-medium">
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

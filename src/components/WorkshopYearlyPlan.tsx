import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CalendarDays, Target } from "lucide-react";
import type { YearlyPlanEntry } from "@/data/workshops";

const WorkshopYearlyPlan = ({ entries }: { entries: YearlyPlanEntry[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (entries.length === 0) {
    return (
      <div className="rounded-2xl bg-soft border border-border/60 p-6 text-sm text-muted-foreground">
        Detaljan godišnji plan uskoro će biti objavljen. Za više informacija javite se
        voditelju radionice.
      </div>
    );
  }

  return (
    <ol className="relative border-l-2 border-primary/20 pl-5 space-y-3">
      {entries.map((entry, i) => {
        const open = openIndex === i;
        return (
          <li key={`${entry.date}-${i}`} className="relative">
            <span className="absolute -left-[27px] top-4 w-3 h-3 rounded-full bg-cta ring-4 ring-cta/20" />
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full text-left bg-card rounded-2xl border border-border/60 hover:border-cta/50 transition-all px-4 py-3 flex items-start gap-3"
            >
              <CalendarDays className="text-primary mt-0.5 shrink-0" size={18} />
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold">
                  {entry.date}
                </div>
                <div className="text-sm font-semibold text-ink leading-snug">
                  {entry.title}
                </div>
              </div>
              <ChevronDown
                size={18}
                className={`text-muted-foreground mt-1 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pt-3 pb-4 text-sm text-foreground/80">
                    <ul className="list-disc pl-5 space-y-1">
                      {entry.activities.map((a, ai) => (
                        <li key={ai}>{a}</li>
                      ))}
                    </ul>
                    {entry.goal && (
                      <div className="mt-3 flex items-start gap-2 text-xs text-primary/90">
                        <Target size={14} className="mt-0.5 shrink-0" />
                        <span>
                          <span className="font-bold">Cilj: </span>
                          {entry.goal}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
};

export default WorkshopYearlyPlan;

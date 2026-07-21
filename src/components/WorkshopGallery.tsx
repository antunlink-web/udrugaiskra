import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Play, ImageIcon } from "lucide-react";
import type { WorkshopMedia } from "@/data/workshops";

const INITIAL = 4;

const WorkshopGallery = ({ media, title }: { media: WorkshopMedia[]; title: string }) => {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<WorkshopMedia | null>(null);

  if (media.length === 0) {
    return (
      <div className="rounded-2xl bg-soft border border-border/60 p-6 text-sm text-muted-foreground flex items-center gap-3">
        <ImageIcon size={18} className="text-primary shrink-0" />
        Foto i video galerija uskoro.
      </div>
    );
  }

  const visible = expanded ? media : media.slice(0, INITIAL);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {visible.map((item, i) => (
          <button
            type="button"
            key={`${item.src}-${i}`}
            onClick={() => setLightbox(item)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 bg-soft"
          >
            <img
              src={item.type === "image" ? item.src : item.thumb ?? item.src}
              alt={item.caption ?? `${title} ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {item.type === "video" && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="w-11 h-11 rounded-full bg-cta text-cta-foreground flex items-center justify-center shadow-lg">
                  <Play size={18} />
                </span>
              </span>
            )}
          </button>
        ))}
      </div>

      {media.length > INITIAL && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-card border border-border hover:border-primary/40 text-sm font-semibold text-primary transition-all"
          >
            {expanded ? "Prikaži manje" : `Prikaži sve (${media.length})`}
            <ChevronDown size={14} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {lightbox.type === "image" ? (
              <img
                src={lightbox.src}
                alt={lightbox.caption ?? title}
                className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-2xl"
              />
            ) : (
              <video
                src={lightbox.src}
                controls
                autoPlay
                className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-2xl bg-black"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkshopGallery;

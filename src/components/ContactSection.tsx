import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Ime mora imati barem 2 znaka" })
    .max(100, { message: "Ime smije imati najviše 100 znakova" }),
  email: z
    .string()
    .trim()
    .email({ message: "Unesite valjanu email adresu" })
    .max(255, { message: "Email smije imati najviše 255 znakova" }),
  subject: z
    .string()
    .trim()
    .min(2, { message: "Tema je obavezna" })
    .max(150, { message: "Tema smije imati najviše 150 znakova" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Poruka mora imati barem 10 znakova" })
    .max(1000, { message: "Poruka smije imati najviše 1000 znakova" }),
});

type FormState = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      toast.error("Provjerite unesene podatke");
      return;
    }
    setStatus("loading");
    // Simulate send (no backend)
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    toast.success("Hvala! Javit ćemo vam se uskoro.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 3500);
  };

  const inputBase =
    "w-full rounded-2xl bg-card border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";

  return (
    <section id="contact" className="py-20 md:py-28 bg-soft">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Kontakt
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Razgovarajmo
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Imate pitanje, ideju za suradnju ili se želite uključiti? Pišite nam - javljamo se brzo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-primary to-primary/85 text-primary-foreground p-8 md:p-10 flex flex-col justify-between min-h-[420px]"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold mb-3">Iskra Svjetlosti</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed mb-8">
                Tu smo za vas - donatore, volontere, roditelje i sve koji žele biti dio naše priče.
              </p>

              <div className="space-y-5">
                <a href="mailto:info@iskrasvjetlosti.hr" className="flex items-start gap-3 group">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center group-hover:bg-primary-foreground/25 transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-primary-foreground/60 font-semibold">Email</div>
                    <div className="text-sm font-medium">info@iskrasvjetlosti.hr</div>
                  </div>
                </a>
                <a href="tel:+385976653783" className="flex items-start gap-3 group">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center group-hover:bg-primary-foreground/25 transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-primary-foreground/60 font-semibold">Telefon</div>
                    <div className="text-sm font-medium">+385 97 665 3783</div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-primary-foreground/60 font-semibold">Adresa</div>
                    <div className="text-sm font-medium">Put Iza Nove Bolnice 10c, 21000, Split</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-primary-foreground/15 text-xs text-primary-foreground/70">
              Radno vrijeme: Pon – Pet, 08:00 – 16:00
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl bg-card border border-border p-6 md:p-10 shadow-[0_10px_40px_-20px_rgba(20,40,80,0.15)]"
            noValidate
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-foreground/80 mb-1.5">
                  Ime i prezime *
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  maxLength={100}
                  placeholder="Ana Anić"
                  className={`${inputBase} ${errors.name ? "border-destructive" : "border-border"}`}
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-foreground/80 mb-1.5">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  maxLength={255}
                  placeholder="ana@email.com"
                  className={`${inputBase} ${errors.email ? "border-destructive" : "border-border"}`}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-xs font-semibold text-foreground/80 mb-1.5">
                Tema *
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={update("subject")}
                maxLength={150}
                placeholder="O čemu želite razgovarati?"
                className={`${inputBase} ${errors.subject ? "border-destructive" : "border-border"}`}
              />
              {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block text-xs font-semibold text-foreground/80 mb-1.5">
                Poruka *
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={update("message")}
                maxLength={1000}
                rows={5}
                placeholder="Vaša poruka..."
                className={`${inputBase} resize-none ${errors.message ? "border-destructive" : "border-border"}`}
              />
              <div className="flex justify-between mt-1">
                {errors.message ? (
                  <p className="text-xs text-destructive">{errors.message}</p>
                ) : (
                  <span />
                )}
                <span className="text-xs text-muted-foreground">{form.message.length}/1000</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="btn-donate w-full md:w-auto px-8 py-3.5 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" && (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Šaljem...</span>
                </>
              )}
              {status === "success" && (
                <>
                  <Check size={16} />
                  <span>Poslano!</span>
                </>
              )}
              {status === "idle" && (
                <>
                  <Send size={16} />
                  <span>Pošalji poruku</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-muted-foreground mt-4">
              Slanjem poruke pristajete da vas kontaktiramo na navedeni email.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

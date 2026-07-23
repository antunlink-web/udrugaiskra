import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Hvala na prijavi! 🧡",
      description: `Poslat ćemo novosti na ${email}.`,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <section className="py-20 md:py-28 bg-sky-fade">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto bg-card rounded-[2rem] p-8 md:p-12 border border-border/60 text-center"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="w-16 h-16 rounded-2xl bg-secondary/15 flex items-center justify-center mx-auto mb-5">
            <Mail className="text-secondary" size={26} />
          </div>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-3">
            Newsletter
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-3 leading-tight">
            Prijava na Newsletter
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Pratite priče naših korisnika, radionice i događanja -
            jednom mjesečno u vašem sandučiću.
          </p>

          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-3 text-left">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Ime"
              className="px-5 py-3.5 rounded-2xl bg-accent/40 border border-border focus:border-secondary focus:bg-card outline-none text-foreground placeholder:text-muted-foreground transition-colors"
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Prezime"
              className="px-5 py-3.5 rounded-2xl bg-accent/40 border border-border focus:border-secondary focus:bg-card outline-none text-foreground placeholder:text-muted-foreground transition-colors"
            />
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email adresa"
              className="sm:col-span-2 px-5 py-3.5 rounded-2xl bg-accent/40 border border-border focus:border-secondary focus:bg-card outline-none text-foreground placeholder:text-muted-foreground transition-colors"
            />
            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors mt-1"
            >
              <Send size={16} />
              Prijavljujem se
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;

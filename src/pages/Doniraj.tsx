import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Lock,
  ArrowRight,
  ArrowLeft,
  Check,
  Loader2,
  ChevronDown,
  Users,
  Share2,
  HandHeart,
  Facebook,
  Mail,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import CroatianPaymentBarcode from "@/components/CroatianPaymentBarcode";

type Step = "amount" | "details" | "loading" | "success";
type Frequency = "once" | "monthly";

const PRESETS = [5, 10, 20, 50, 100];

const IMPACT: Record<number, string> = {
  5: "Omogućujete jedan sat radionice",
  10: "Podržavate aktivnosti jednog korisnika",
  20: "Pomažete organizaciju grupne radionice",
  50: "Pokrivate trošak jedne radionice",
  100: "Omogućujete cijeli dan aktivnosti",
};

const getImpact = (amount: number) => {
  if (!amount) return "Svaki euro pomaže — hvala!";
  if (amount in IMPACT) return IMPACT[amount];
  if (amount < 5) return "Svaki doprinos znači puno";
  if (amount < 10) return "Omogućujete jedan sat radionice";
  if (amount < 20) return "Podržavate aktivnosti jednog korisnika";
  if (amount < 50) return "Pomažete organizaciju grupne radionice";
  if (amount < 100) return "Pokrivate trošak jedne radionice";
  return "Omogućujete cijeli dan aktivnosti";
};

const Doniraj = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("amount");
  const [amount, setAmount] = useState<number>(20);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<Frequency>("once");

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [optionalOpen, setOptionalOpen] = useState(false);

  const finalAmount = customAmount ? Number(customAmount) || 0 : amount;
  const canContinue = finalAmount > 0;
  const canSubmit = firstName.trim().length > 1 && /\S+@\S+\.\S+/.test(email);

  const handleAmountClick = (v: number) => {
    setAmount(v);
    setCustomAmount("");
  };

  const goToDetails = () => canContinue && setStep("details");
  const goToLoading = () => {
    if (!canSubmit) return;
    setStep("loading");
    // Simulated redirect to Stripe
    setTimeout(() => setStep("success"), 1800);
  };

  return (
    <PageLayout>
      {/* Background */}
      <section className="relative bg-hero-gradient pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <Sparkles className="absolute top-32 right-1/4 text-white/30" size={28} />
        <svg
          className="absolute bottom-12 left-8 text-secondary/60"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
            fill="currentColor"
          />
        </svg>

        <div className="container mx-auto px-4 relative">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-10 max-w-2xl mx-auto text-white">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-semibold tracking-wide mb-4 border border-white/20">
              <Heart size={12} className="fill-current text-cta" />
              Doniraj sada
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold leading-tight mb-3">
              {step === "success"
                ? "Hvala vam ❤️"
                : "Pomozite nam širiti svjetlost"}
            </h1>
            <p className="text-white/80 text-base md:text-lg">
              {step === "success"
                ? "Vaša donacija pomaže stvarnim ljudima i omogućuje nastavak naših radionica."
                : "Vaša podrška direktno pomaže našim korisnicima."}
            </p>
          </div>

          {/* Stepper indicator */}
          {step !== "success" && (
            <div className="flex items-center justify-center gap-2 mb-6 text-white/80">
              <StepDot active={step === "amount"} done={step !== "amount"} label="1" />
              <span className="w-8 h-px bg-white/30" />
              <StepDot
                active={step === "details"}
                done={step === "loading"}
                label="2"
              />
              <span className="w-8 h-px bg-white/30" />
              <StepDot active={step === "loading"} done={false} label="3" />
            </div>
          )}

          {/* Card */}
          <div className="max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              {step === "amount" && (
                <motion.div
                  key="amount"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="bg-card rounded-3xl p-6 md:p-8"
                  style={{ boxShadow: "var(--shadow-float)" }}
                >
                  {/* Frequency toggle */}
                  <div className="flex p-1 bg-accent rounded-full mb-6 relative">
                    <button
                      onClick={() => setFrequency("once")}
                      className={`flex-1 py-2.5 text-sm font-semibold rounded-full transition-colors relative z-10 ${
                        frequency === "once"
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      Jednokratno
                    </button>
                    <button
                      onClick={() => setFrequency("monthly")}
                      className={`flex-1 py-2.5 text-sm font-semibold rounded-full transition-colors relative z-10 inline-flex items-center justify-center gap-1.5 ${
                        frequency === "monthly"
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      Mjesečno
                      <Heart
                        size={13}
                        className={
                          frequency === "monthly" ? "fill-cta text-cta" : ""
                        }
                      />
                    </button>
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute top-1 bottom-1 w-[calc(50%-0.25rem)] bg-card rounded-full shadow-sm"
                      style={{
                        left: frequency === "once" ? "0.25rem" : "calc(50%)",
                      }}
                    />
                  </div>
                  {frequency === "monthly" && (
                    <p className="text-xs text-secondary font-semibold text-center -mt-3 mb-5">
                      ❤️ Mjesečna podrška najviše pomaže — osigurava stabilnost programa
                    </p>
                  )}

                  {/* Preset amounts */}
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 block">
                    Odaberite iznos
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                    {PRESETS.map((v) => {
                      const selected = !customAmount && amount === v;
                      return (
                        <motion.button
                          key={v}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => handleAmountClick(v)}
                          className={`py-3.5 rounded-2xl text-base font-extrabold transition-all border-2 ${
                            selected
                              ? "bg-cta border-cta text-white shadow-md scale-[1.03]"
                              : "bg-card border-border text-primary hover:border-cta/60 hover:bg-accent"
                          }`}
                        >
                          {v}€
                        </motion.button>
                      );
                    })}
                  </div>
                  <input
                    type="number"
                    min={1}
                    inputMode="decimal"
                    placeholder="Unesite drugi iznos (€)"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className={`w-full px-4 py-3 rounded-2xl text-base font-semibold border-2 outline-none transition-all ${
                      customAmount
                        ? "border-cta bg-accent text-primary"
                        : "border-border bg-card text-primary focus:border-cta/60"
                    }`}
                  />

                  {/* Impact */}
                  <motion.div
                    key={finalAmount}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 flex items-start gap-3 p-4 rounded-2xl bg-accent/60 border border-accent"
                  >
                    <div className="w-9 h-9 shrink-0 rounded-full bg-secondary flex items-center justify-center">
                      <HandHeart className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">
                        Donacijom od {finalAmount || 0}€{frequency === "monthly" ? " mjesečno" : ""}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {getImpact(finalAmount)}
                      </p>
                    </div>
                  </motion.div>

                  {/* Social proof */}
                  <div className="flex items-center justify-center gap-2 mt-5 text-xs text-muted-foreground">
                    <Users size={13} />
                    Pridružite se <span className="font-semibold text-primary">700+ donatora</span>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={goToDetails}
                    disabled={!canContinue}
                    className="btn-donate w-full mt-5 px-7 py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Nastavi na plaćanje
                    <ArrowRight size={18} />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-muted-foreground">
                    <Lock size={12} />
                    Sigurno plaćanje • SSL enkripcija
                  </div>
                </motion.div>
              )}

              {step === "amount" && frequency === "once" && (
                <motion.div
                  key="barcode"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 my-5">
                    <span className="flex-1 h-px bg-white/30" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                      ili
                    </span>
                    <span className="flex-1 h-px bg-white/30" />
                  </div>
                  <CroatianPaymentBarcode description="Donacija Udruzi Iskra Svjetlosti" />
                </motion.div>
              )}

              {step === "details" && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="bg-card rounded-3xl p-6 md:p-8"
                  style={{ boxShadow: "var(--shadow-float)" }}
                >
                  {/* Selected amount summary */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-accent/60 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        Vaša donacija
                      </p>
                      <p className="text-2xl font-heading font-extrabold text-primary leading-none mt-0.5">
                        {finalAmount}€
                        <span className="text-sm font-semibold text-muted-foreground ml-1">
                          {frequency === "monthly" ? "/ mjesečno" : "jednokratno"}
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={() => setStep("amount")}
                      className="text-xs font-semibold text-secondary hover:underline"
                    >
                      Promijeni
                    </button>
                  </div>

                  <div className="space-y-4">
                    <Field
                      label="Ime"
                      required
                      value={firstName}
                      onChange={setFirstName}
                      placeholder="Vaše ime"
                    />
                    <Field
                      label="Email"
                      required
                      type="email"
                      value={email}
                      onChange={setEmail}
                      placeholder="vas@email.com"
                    />

                    {/* Optional collapsed */}
                    <button
                      type="button"
                      onClick={() => setOptionalOpen((o) => !o)}
                      className="flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary transition-colors"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${optionalOpen ? "rotate-180" : ""}`}
                      />
                      Dodatne informacije (opcionalno)
                    </button>

                    <AnimatePresence>
                      {optionalOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-4 pt-1">
                            <Field
                              label="Prezime"
                              value={lastName}
                              onChange={setLastName}
                              placeholder="Vaše prezime"
                            />
                            <div>
                              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">
                                Poruka
                              </label>
                              <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={3}
                                placeholder="Vaša poruka udruzi (nije obavezno)"
                                className="w-full px-4 py-3 rounded-2xl text-sm border-2 border-border bg-card text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-cta/60 transition-colors resize-none"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <label className="flex items-start gap-3 cursor-pointer group pt-1">
                      <input
                        type="checkbox"
                        checked={newsletter}
                        onChange={(e) => setNewsletter(e.target.checked)}
                        className="sr-only peer"
                      />
                      <span className="w-5 h-5 shrink-0 rounded-md border-2 border-border peer-checked:bg-cta peer-checked:border-cta flex items-center justify-center transition-all mt-0.5">
                        {newsletter && <Check size={13} className="text-white" />}
                      </span>
                      <span className="text-sm text-foreground/80 group-hover:text-foreground">
                        Želim primati novosti i izvješća o radu udruge
                      </span>
                    </label>
                  </div>

                  <div className="flex gap-3 mt-7">
                    <button
                      onClick={() => setStep("amount")}
                      className="px-5 py-4 rounded-full bg-card border-2 border-border text-primary font-semibold text-sm hover:bg-accent transition-colors inline-flex items-center gap-1.5"
                    >
                      <ArrowLeft size={16} />
                      Natrag
                    </button>
                    <button
                      onClick={goToLoading}
                      disabled={!canSubmit}
                      className="btn-donate flex-1 px-7 py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Nastavi
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-muted-foreground">
                    <Lock size={12} />
                    Vaši podaci su sigurni i neće biti dijeljeni
                  </div>
                </motion.div>
              )}

              {step === "loading" && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-card rounded-3xl p-10 md:p-14 text-center"
                  style={{ boxShadow: "var(--shadow-float)" }}
                >
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <Loader2 className="text-secondary animate-spin w-20 h-20" />
                    <Lock
                      size={26}
                      className="absolute inset-0 m-auto text-primary"
                    />
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-extrabold text-primary mb-2">
                    Preusmjeravamo vas na sigurno plaćanje...
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Molimo pričekajte trenutak.
                  </p>
                </motion.div>
              )}

              {step === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card rounded-3xl p-8 md:p-10 text-center"
                  style={{ boxShadow: "var(--shadow-float)" }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 220, delay: 0.1 }}
                    className="relative w-24 h-24 mx-auto mb-5"
                  >
                    <div className="absolute inset-0 rounded-full bg-cta/15 animate-ping" />
                    <div className="relative w-24 h-24 rounded-full bg-cta flex items-center justify-center">
                      <Heart className="text-white fill-white" size={40} />
                    </div>
                  </motion.div>

                  <p className="text-3xl font-heading font-extrabold text-primary mb-1">
                    {firstName ? `Hvala, ${firstName}!` : "Hvala vam!"}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base mb-6">
                    Vaša donacija pomaže stvarnim ljudima i omogućuje nastavak naših radionica.
                  </p>

                  <div className="bg-accent/60 rounded-2xl p-5 mb-6 inline-block min-w-[14rem]">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                      Donirano
                    </p>
                    <p className="text-4xl font-heading font-extrabold text-primary leading-none">
                      {finalAmount}€
                    </p>
                    <p className="text-xs text-muted-foreground mt-1.5">
                      {frequency === "monthly" ? "Mjesečna donacija" : "Jednokratna donacija"}
                    </p>
                  </div>

                  <p className="text-sm italic text-secondary mb-7">
                    "Vaša pomoć mijenja živote."
                  </p>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => navigate("/")}
                      className="btn-donate w-full px-7 py-4 text-base"
                    >
                      Vrati se na početnu
                      <ArrowRight size={18} />
                    </button>

                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.origin
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-card border-2 border-border text-primary font-semibold text-sm hover:bg-accent transition-colors"
                      >
                        <Share2 size={15} />
                        Podijelite
                      </a>
                      <Link
                        to="/voditelji-radionica"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-card border-2 border-border text-primary font-semibold text-sm hover:bg-accent transition-colors"
                      >
                        <Users size={15} />
                        Volontiraj
                      </Link>
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-3 text-muted-foreground/70">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                        aria-label="Facebook"
                      >
                        <Facebook size={16} />
                      </a>
                      <a
                        href={`mailto:?subject=Podržite Iskru Svjetlosti&body=Upravo sam donirao Udruzi Iskra Svjetlosti. Pridružite se: ${window.location.origin}`}
                        className="hover:text-primary"
                        aria-label="Email"
                      >
                        <Mail size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Trust strip */}
            {step !== "loading" && step !== "success" && (
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-xs text-white/70">
                <span className="inline-flex items-center gap-1.5">
                  <Lock size={12} /> SSL enkripcija
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check size={12} /> 100% transparentno
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Heart size={12} className="fill-current text-cta" /> 700+ donatora
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

const StepDot = ({
  active,
  done,
  label,
}: {
  active: boolean;
  done: boolean;
  label: string;
}) => (
  <div
    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
      done
        ? "bg-cta text-white"
        : active
          ? "bg-white text-primary scale-110"
          : "bg-white/20 text-white/70"
    }`}
  >
    {done ? <Check size={14} /> : label}
  </div>
);

const Field = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">
      {label} {required && <span className="text-cta">*</span>}
    </label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-2xl text-sm border-2 border-border bg-card text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-cta/60 transition-colors"
    />
  </div>
);

export default Doniraj;

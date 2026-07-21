import { useState } from "react";
import { z } from "zod";
import { Loader2, Check, Send } from "lucide-react";
import { toast } from "sonner";
import { submitWorkshopRegistration } from "@/lib/crm";

const schema = z.object({
  firstName: z.string().trim().min(2, { message: "Unesite ime" }).max(100),
  lastName: z.string().trim().min(2, { message: "Unesite prezime" }).max(100),
  email: z.string().trim().email({ message: "Unesite valjanu email adresu" }).max(255),
  phone: z.string().trim().min(6, { message: "Unesite broj telefona" }).max(40),
  note: z.string().trim().max(1000).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Potrebna je vaša suglasnost za kontakt" }),
  }),
});

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  note: string;
  consent: boolean;
};

const empty: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  note: "",
  consent: false,
};

const WorkshopRegistrationForm = ({
  workshopSlug,
  workshopTitle,
}: {
  workshopSlug: string;
  workshopTitle: string;
}) => {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        field === "consent"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setForm((f) => ({ ...f, [field]: value }));
      if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
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
    await submitWorkshopRegistration({
      workshopSlug,
      workshopTitle,
      firstName: result.data.firstName,
      lastName: result.data.lastName,
      email: result.data.email,
      phone: result.data.phone,
      note: result.data.note,
    });
    setStatus("success");
    toast.success("Prijava zaprimljena! Javit ćemo vam se uskoro.");
    setForm(empty);
    setTimeout(() => setStatus("idle"), 3500);
  };

  const base =
    "w-full rounded-2xl bg-card border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Read-only workshop context – always submitted with the payload */}
      <div className="rounded-2xl bg-soft border border-border/60 px-4 py-3">
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold">
          Prijava za radionicu
        </div>
        <div className="text-sm font-semibold text-ink break-words">
          {workshopTitle}
        </div>
        <input type="hidden" name="workshopSlug" value={workshopSlug} readOnly />
        <input type="hidden" name="workshopTitle" value={workshopTitle} readOnly />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="wr-firstName" className="block text-xs font-semibold text-foreground/80 mb-1.5">
            Ime *
          </label>
          <input
            id="wr-firstName"
            value={form.firstName}
            onChange={update("firstName")}
            maxLength={100}
            autoComplete="given-name"
            placeholder="Ime"
            className={`${base} ${errors.firstName ? "border-destructive" : "border-border"}`}
          />
          {errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="wr-lastName" className="block text-xs font-semibold text-foreground/80 mb-1.5">
            Prezime *
          </label>
          <input
            id="wr-lastName"
            value={form.lastName}
            onChange={update("lastName")}
            maxLength={100}
            autoComplete="family-name"
            placeholder="Prezime"
            className={`${base} ${errors.lastName ? "border-destructive" : "border-border"}`}
          />
          {errors.lastName && <p className="text-xs text-destructive mt-1">{errors.lastName}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="wr-email" className="block text-xs font-semibold text-foreground/80 mb-1.5">
            Email *
          </label>
          <input
            id="wr-email"
            type="email"
            value={form.email}
            onChange={update("email")}
            maxLength={255}
            autoComplete="email"
            placeholder="vas@email.com"
            className={`${base} ${errors.email ? "border-destructive" : "border-border"}`}
          />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="wr-phone" className="block text-xs font-semibold text-foreground/80 mb-1.5">
            Telefon *
          </label>
          <input
            id="wr-phone"
            value={form.phone}
            onChange={update("phone")}
            maxLength={40}
            autoComplete="tel"
            placeholder="+385 ..."
            className={`${base} ${errors.phone ? "border-destructive" : "border-border"}`}
          />
          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="wr-note" className="block text-xs font-semibold text-foreground/80 mb-1.5">
          Napomena
        </label>
        <textarea
          id="wr-note"
          value={form.note}
          onChange={update("note")}
          maxLength={1000}
          rows={4}
          placeholder="Vaša poruka (nije obavezno)"
          className={`${base} resize-none border-border`}
        />
      </div>

      <label className="flex items-start gap-2.5 text-xs text-foreground/80 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={update("consent")}
          className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-primary/30 shrink-0"
        />
        <span>
          Suglasan/na sam da me Udruga Iskra Svjetlosti kontaktira radi dogovora o
          sudjelovanju na radionici. *
        </span>
      </label>
      {errors.consent && <p className="text-xs text-destructive -mt-2">{errors.consent}</p>}

      <button
        type="submit"
        disabled={status !== "idle"}
        className="btn-donate w-full px-8 py-3.5 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" && (<><Loader2 size={16} className="animate-spin" /><span>Šaljem...</span></>)}
        {status === "success" && (<><Check size={16} /><span>Prijava zaprimljena!</span></>)}
        {status === "idle" && (<><Send size={16} /><span>Prijavi se na radionicu</span></>)}
      </button>
    </form>
  );
};

export default WorkshopRegistrationForm;

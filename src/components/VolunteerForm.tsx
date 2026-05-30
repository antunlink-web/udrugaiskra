import { useState } from "react";
import { z } from "zod";
import { Loader2, Check, Send } from "lucide-react";
import { toast } from "sonner";
import { submitVolunteerApplication } from "@/lib/crm";

const AREAS = [
  "Radionice",
  "Događanja i organizacija",
  "Marketing i društvene mreže",
  "Fotografija / video",
  "Administracija",
  "Ostalo",
];

const schema = z.object({
  firstName: z.string().trim().min(2, { message: "Unesite ime" }).max(100),
  lastName: z.string().trim().min(2, { message: "Unesite prezime" }).max(100),
  email: z.string().trim().email({ message: "Unesite valjanu email adresu" }).max(255),
  phone: z.string().trim().min(6, { message: "Unesite broj telefona" }).max(40),
  area: z.string().trim().min(1, { message: "Odaberite područje" }).max(100),
  message: z.string().trim().max(1000).optional(),
});

type FormState = z.infer<typeof schema>;

const empty: FormState = { firstName: "", lastName: "", email: "", phone: "", area: AREAS[0], message: "" };

const VolunteerForm = () => {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
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
    await submitVolunteerApplication({
      firstName: result.data.firstName,
      lastName: result.data.lastName,
      email: result.data.email,
      phone: result.data.phone,
      area: result.data.area,
      message: result.data.message,
    });
    setStatus("success");
    toast.success("Hvala! Vaša prijava za volontiranje je zaprimljena.");
    setForm(empty);
    setTimeout(() => setStatus("idle"), 3500);
  };

  const base =
    "w-full rounded-2xl bg-card border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-foreground/80 mb-1.5">Ime *</label>
          <input value={form.firstName} onChange={update("firstName")} maxLength={100} placeholder="Ime"
            className={`${base} ${errors.firstName ? "border-destructive" : "border-border"}`} />
          {errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-foreground/80 mb-1.5">Prezime *</label>
          <input value={form.lastName} onChange={update("lastName")} maxLength={100} placeholder="Prezime"
            className={`${base} ${errors.lastName ? "border-destructive" : "border-border"}`} />
          {errors.lastName && <p className="text-xs text-destructive mt-1">{errors.lastName}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-foreground/80 mb-1.5">Email *</label>
          <input type="email" value={form.email} onChange={update("email")} maxLength={255} placeholder="vas@email.com"
            className={`${base} ${errors.email ? "border-destructive" : "border-border"}`} />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-foreground/80 mb-1.5">Telefon *</label>
          <input value={form.phone} onChange={update("phone")} maxLength={40} placeholder="+385 ..."
            className={`${base} ${errors.phone ? "border-destructive" : "border-border"}`} />
          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-foreground/80 mb-1.5">Područje interesa *</label>
        <select value={form.area} onChange={update("area")} className={`${base} border-border`}>
          {AREAS.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-foreground/80 mb-1.5">Poruka</label>
        <textarea value={form.message} onChange={update("message")} maxLength={1000} rows={4} placeholder="Recite nam nešto o sebi (nije obavezno)"
          className={`${base} resize-none border-border`} />
      </div>
      <button
        type="submit"
        disabled={status !== "idle"}
        className="btn-donate w-full px-8 py-3.5 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" && (<><Loader2 size={16} className="animate-spin" /><span>Šaljem...</span></>)}
        {status === "success" && (<><Check size={16} /><span>Prijavljeno!</span></>)}
        {status === "idle" && (<><Send size={16} /><span>Pošalji prijavu</span></>)}
      </button>
      <p className="text-[11px] text-muted-foreground">
        Slanjem prijave pristajete da vas kontaktiramo radi dogovora o volontiranju.
      </p>
    </form>
  );
};

export default VolunteerForm;

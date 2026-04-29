import { useEffect, useRef, useState } from "react";
// @ts-ignore - no types
import { PDF417, HUB3 } from "pdf417-generator";
import { Copy, Check, QrCode } from "lucide-react";

interface Props {
  amount: number; // in EUR
  description?: string;
}

const RECEIVER = {
  name: "Udruga Iskra Svjetlosti",
  street: "Put Iza Nove Bolnice 10c",
  city: "21000 Split",
  iban: "HR5924070001100091899",
  model: "HR99",
  reference: "",
};

const CroatianPaymentBarcode = ({ amount, description = "Donacija" }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !amount || amount <= 0) return;
    try {
      const code = HUB3.format({
        amount: Math.round(amount * 100), // cents
        sender: {
          name: "",
          street: "",
          city: "",
        },
        receiver: RECEIVER,
        purpose: "CHAR",
        description,
      });
      PDF417.draw(code, canvasRef.current, 3);
    } catch (e) {
      console.error("Barcode generation failed", e);
    }
  }, [amount, description]);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };

  if (!amount || amount <= 0) return null;

  return (
    <div className="bg-card rounded-3xl p-6 md:p-8 mt-6" style={{ boxShadow: "var(--shadow-float)" }}>
      <div className="flex items-center gap-2.5 mb-2">
        <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center">
          <QrCode size={18} className="text-secondary" />
        </div>
        <div>
          <h3 className="font-heading text-lg font-extrabold text-primary leading-tight">
            Plati skeniranjem (HUB-3)
          </h3>
          <p className="text-xs text-muted-foreground">
            Otvorite mobilno bankarstvo i skenirajte 2D barkod
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white rounded-2xl p-4 my-4 border border-border">
        <canvas ref={canvasRef} className="max-w-full h-auto" />
        <p className="text-xs text-muted-foreground mt-2">
          Iznos: <span className="font-bold text-primary">{amount.toFixed(2)} €</span>
        </p>
      </div>

      <div className="space-y-2">
        <DetailRow
          label="Primatelj"
          value={RECEIVER.name}
          onCopy={() => copy(RECEIVER.name, "name")}
          copied={copied === "name"}
        />
        <DetailRow
          label="IBAN"
          value={RECEIVER.iban}
          mono
          onCopy={() => copy(RECEIVER.iban, "iban")}
          copied={copied === "iban"}
        />
        <DetailRow
          label="Iznos"
          value={`${amount.toFixed(2)} €`}
          onCopy={() => copy(amount.toFixed(2), "amount")}
          copied={copied === "amount"}
        />
        <DetailRow
          label="Opis"
          value={description}
          onCopy={() => copy(description, "desc")}
          copied={copied === "desc"}
        />
      </div>

      <p className="text-[11px] text-muted-foreground/80 text-center mt-4 leading-relaxed">
        Jednokratna donacija — bez naknade za uplatitelja. Hvala na podršci ❤️
      </p>
    </div>
  );
};

const DetailRow = ({
  label,
  value,
  mono,
  onCopy,
  copied,
}: {
  label: string;
  value: string;
  mono?: boolean;
  onCopy: () => void;
  copied: boolean;
}) => (
  <div className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-accent/50">
    <div className="min-w-0">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
        {label}
      </div>
      <div
        className={`text-sm font-semibold text-primary truncate ${mono ? "font-mono" : ""}`}
      >
        {value}
      </div>
    </div>
    <button
      onClick={onCopy}
      className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:text-primary transition-colors px-2.5 py-1.5 rounded-lg hover:bg-card"
      aria-label={`Kopiraj ${label}`}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Kopirano" : "Kopiraj"}
    </button>
  </div>
);

export default CroatianPaymentBarcode;

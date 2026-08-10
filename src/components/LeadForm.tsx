import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const budgets = ["до $100k", "$100k–$200k", "от $200k"];
const goals = ["Для жизни", "Для инвестиций и перепродажи", "Сдача в аренду"];

const schema = z.object({
  budget: z.string().min(1, { message: "Выберите бюджет" }),
  goal: z.string().min(1, { message: "Выберите цель покупки" }),
  contact: z
    .string()
    .trim()
    .min(5, { message: "Укажите телефон или ссылку на мессенджер" })
    .max(120, { message: "Слишком длинное значение" }),
});

function OptionRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-3">
      <Label className="eyebrow">{label}</Label>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={`rounded-sm border px-4 py-2.5 text-sm transition-colors ${
              value === o
                ? "border-accent bg-accent/15 text-foreground"
                : "border-border bg-card text-muted-foreground hover:border-accent/60"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

export function LeadForm() {
  const [budget, setBudget] = useState("");
  const [goal, setGoal] = useState("");
  const [contact, setContact] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ budget, goal, contact });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Проверьте данные");
      return;
    }
    setSent(true);
    toast.success("Заявка принята — подборка придёт в течение 30 минут.");
  }

  if (sent) {
    return (
      <div className="rounded-sm border border-accent/40 bg-card p-10 text-center shadow-soft">
        <div className="hairline mx-auto" />
        <h3 className="mt-6 text-3xl">Спасибо, заявка принята</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Персональный менеджер свяжется с вами и пришлёт закрытый каталог апартаментов
          бизнес-класса с расчётом доходности.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-8 rounded-sm border border-border bg-card p-8 shadow-soft md:p-10"
    >
      <OptionRow label="Бюджет" options={budgets} value={budget} onChange={setBudget} />
      <OptionRow label="Цель покупки" options={goals} value={goal} onChange={setGoal} />
      <div className="space-y-3">
        <Label htmlFor="contact" className="eyebrow">
          Куда отправить подборку?
        </Label>
        <Input
          id="contact"
          value={contact}
          maxLength={120}
          onChange={(e) => setContact(e.target.value)}
          placeholder="+90 ... или ссылка на Telegram / WhatsApp"
          className="h-12 rounded-sm border-border bg-background"
        />
      </div>
      <Button type="submit" size="lg" className="h-13 w-full rounded-sm text-sm tracking-widest uppercase">
        Получить каталог
      </Button>
    </form>
  );
}

import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const budgets = ["до $100k", "$100k–$200k", "от $200k"];
const goals = ["Для жизни", "Для инвестиций", "Для аренды", "Для ВНЖ / переезда"];
const locations = ["Аланья", "Мерсин", "Северный Кипр", "Пока не знаю, нужна консультация"];
const timings = ["В ближайшее время", "3–6 месяцев", "Просто изучаю рынок"];
const channels = ["WhatsApp", "Telegram"];

const schema = z.object({
  budget: z.string().min(1, { message: "Выберите бюджет" }),
  goal: z.string().min(1, { message: "Выберите цель покупки" }),
  location: z.string().min(1, { message: "Выберите локацию" }),
  timing: z.string().min(1, { message: "Укажите срок покупки" }),
  channel: z.string().min(1, { message: "Выберите, куда отправить подборку" }),
  name: z.string().trim().min(2, { message: "Укажите имя" }).max(80),
  contact: z
    .string()
    .trim()
    .min(5, { message: "Укажите телефон или Telegram" })
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
  const [location, setLocation] = useState("");
  const [timing, setTiming] = useState("");
  const [channel, setChannel] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ budget, goal, location, timing, channel, name, contact });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Проверьте данные");
      return;
    }
    setSent(true);
    toast.success("Заявка принята — подготовим персональную подборку.");
  }

  if (sent) {
    return (
      <div className="rounded-sm border border-accent/40 bg-card p-10 text-center shadow-soft">
        <div className="hairline mx-auto" />
        <h3 className="mt-6 text-3xl">Спасибо, заявка принята</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Мы свяжемся с вами в {channel || "мессенджере"} и подготовим персональную подборку
          проверенных объектов под вашу цель покупки.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-7 rounded-sm border border-border bg-card p-6 shadow-soft sm:p-8 md:p-10"
    >
      <OptionRow label="Бюджет" options={budgets} value={budget} onChange={setBudget} />
      <OptionRow label="Цель покупки" options={goals} value={goal} onChange={setGoal} />
      <OptionRow label="Локация" options={locations} value={location} onChange={setLocation} />
      <OptionRow label="Срок покупки" options={timings} value={timing} onChange={setTiming} />
      <OptionRow
        label="Куда отправить подборку"
        options={channels}
        value={channel}
        onChange={setChannel}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-3">
          <Label htmlFor="name" className="eyebrow">
            Имя
          </Label>
          <Input
            id="name"
            value={name}
            maxLength={80}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
            className="h-12 rounded-sm border-border bg-background"
          />
        </div>
        <div className="space-y-3">
          <Label htmlFor="contact" className="eyebrow">
            Телефон или Telegram
          </Label>
          <Input
            id="contact"
            value={contact}
            maxLength={120}
            onChange={(e) => setContact(e.target.value)}
            placeholder="+90 ... или @username"
            className="h-12 rounded-sm border-border bg-background"
          />
        </div>
      </div>
      <div className="space-y-3">
        <Button
          type="submit"
          size="lg"
          className="h-13 w-full rounded-sm text-xs tracking-[0.18em] uppercase"
        >
          Получить подборку
        </Button>
        <p className="text-[0.68rem] leading-relaxed text-muted-foreground">
          Нажимая кнопку, вы соглашаетесь на обработку данных и получение персональной подборки
          объектов.
        </p>
      </div>
    </form>
  );
}

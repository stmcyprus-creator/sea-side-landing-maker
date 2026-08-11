import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/LeadForm";
import heroImg from "@/assets/hero.jpg";
import mersinImg from "@/assets/mersin.jpg";
import alanyaImg from "@/assets/alanya.jpg";
import logo from "@/assets/stm-logo-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STM Real Estate — апартаменты в Аланье и Мерсине" },
      {
        name: "description",
        content:
          "Апартаменты бизнес-класса в Аланье и Мерсине под ключ: подбор ликвидных объектов, безопасные расчеты, ВНЖ и управление недвижимостью.",
      },
      { property: "og:title", content: "STM Real Estate — недвижимость в Турции под ключ" },
      {
        property: "og:description",
        content:
          "Инвестиции и жизнь у моря в Турции без рисков: юридическая чистота, представители на месте, ВНЖ и управление арендой.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const advantages = [
  {
    icon: "🛡",
    title: "Юридическая чистота на 100%",
    text: "Полная проверка объектов, титулов (TAPU) и сопровождение сделки нашими юристами.",
  },
  {
    icon: "👥",
    title: "Представители на месте в Турции",
    text: "Личный менеджер встретит в Аланье или Мерсине, организует показ и проведет за руку через все этапы.",
  },
  {
    icon: "💳",
    title: "Безопасные расчеты",
    text: "Помогаем решить вопрос с трансфером средств и проведением оплаты в текущих реалиях (включая проверенные крипто-контуры).",
  },
  {
    icon: "📑",
    title: "Пакеты для ВНЖ и Гражданства",
    text: "Берем на себя бюрократию — оформляем ВНЖ сразу после покупки.",
  },
];

const locations = [
  {
    img: mersinImg,
    city: "Мерсин",
    tag: "Новый инвестиционный хаб",
    text: "Динамично развивающийся регион с доступными ценами на бизнес-класс и высоким потенциалом роста капитализации. Идеально для старта инвестиций.",
  },
  {
    img: alanyaImg,
    city: "Аланья",
    tag: "Проверенная классика и комфорт",
    text: "Развитая инфраструктура, готовый фонд, апартаменты с отельным сервисом для жизни, отдыха и быстрого оформления ВНЖ.",
  },
];

const packages = [
  {
    name: "Пакет «Инвестор»",
    city: "Мерсин",
    text: "Объекты на этапе строительства, расчет доходности, рост стоимости до сдачи дома + опция управления арендой.",
  },
  {
    name: "Пакет «Курорт и ВНЖ»",
    city: "Аланья",
    text: "Готовые апартаменты в комплексах бизнес-класса, полное юридическое сопровождение и гарантированная помощь в получении ВНЖ.",
  },
];

function scrollToForm() {
  document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" });
}

function Landing() {
  return (
    <div className="min-h-screen">
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 md:px-14">
        <img
          src={logo}
          alt="STM Real Estate"
          width={480}
          height={340}
          className="h-12 w-auto md:h-14"
        />
        <span className="hidden text-xs tracking-[0.2em] text-primary-foreground/80 uppercase md:block">
          Real Estate · Turkey
        </span>
      </header>

      {/* Hero */}
      <section className="relative isolate flex min-h-[92vh] items-end">
        <img
          src={heroImg}
          alt="Жилой комплекс бизнес-класса у моря в Турции"
          width={1920}
          height={1200}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/25" />
        <div className="px-6 pb-20 md:px-14 md:pb-28">
          <p className="text-xs tracking-[0.24em] text-gold-soft uppercase">
            Аланья · Мерсин
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] text-primary-foreground md:text-6xl">
            Инвестиции и жизнь у моря в Турции без рисков и хлопот
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
            Апартаменты бизнес-класса в Аланье и Мерсине. Полный пакет услуг «под ключ»: от
            подбора ликвидных объектов и безопасных расчетов до ВНЖ и управления недвижимостью.
          </p>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="mt-10 h-13 rounded-sm bg-accent px-8 text-xs tracking-[0.18em] text-accent-foreground uppercase hover:bg-gold-soft"
          >
            Получить закрытый каталог объектов
          </Button>
        </div>
      </section>

      {/* Advantages */}
      <section className="px-6 py-24 md:px-14 md:py-32">
        <p className="eyebrow">Почему выбирают STM Real Estate</p>
        <h2 className="mt-5 max-w-2xl text-3xl md:text-5xl">
          Больше, чем просто покупка недвижимости
        </h2>
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
          {advantages.map((a) => (
            <div key={a.title} className="bg-card p-8 md:p-10">
              <span className="text-2xl">{a.icon}</span>
              <h3 className="mt-5 text-xl">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="bg-sand px-6 py-24 md:px-14 md:py-32">
        <p className="eyebrow">Локации</p>
        <h2 className="mt-5 max-w-2xl text-3xl md:text-5xl">
          Два перспективных направления для жизни и капитала
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {locations.map((l) => (
            <article key={l.city} className="bg-card shadow-soft">
              <img
                src={l.img}
                alt={`${l.city}, Турция`}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-72 w-full object-cover md:h-96"
              />
              <div className="p-8 md:p-10">
                <h3 className="text-3xl">{l.city}</h3>
                <p className="mt-2 text-xs tracking-[0.18em] text-accent uppercase">{l.tag}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{l.text}</p>
              </div>
            </article>
          ))}
        </div>
        <Button
          onClick={scrollToForm}
          variant="outline"
          size="lg"
          className="mt-12 h-13 rounded-sm border-foreground/25 bg-transparent px-8 text-xs tracking-[0.18em] uppercase hover:bg-foreground hover:text-primary-foreground"
        >
          Подобрать город под мои цели
        </Button>
      </section>

      {/* Packages */}
      <section className="px-6 py-24 md:px-14 md:py-32">
        <p className="eyebrow">Пакетные решения «под ключ»</p>
        <h2 className="mt-5 max-w-2xl text-3xl md:text-5xl">
          Готовые стратегии для вашего капитала
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {packages.map((p) => (
            <div key={p.name} className="border-t-2 border-accent bg-card p-8 shadow-soft md:p-10">
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">{p.city}</p>
              <h3 className="mt-3 text-2xl md:text-3xl">{p.name}</h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
        <Button
          onClick={scrollToForm}
          size="lg"
          className="mt-12 h-13 rounded-sm px-8 text-xs tracking-[0.18em] uppercase"
        >
          Узнать подробнее о пакетах
        </Button>
      </section>

      {/* Lead form */}
      <section id="lead" className="bg-ink px-6 py-24 md:px-14 md:py-32">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <div className="hairline" />
            <h2 className="mt-7 text-3xl text-primary-foreground md:text-5xl">
              Получите подборку ликвидных объектов под ваш бюджет
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/75">
              Ответьте на 3 вопроса, и мы пришлем актуальный каталог апартаментов
              бизнес-класса в Мерсине и Аланье с расчетом доходности в Telegram или WhatsApp.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 md:px-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <img
              src={logo.url}
              alt="STM Real Estate"
              loading="lazy"
              width={480}
              height={340}
              className="h-14 w-auto rounded-sm"
            />
            <p className="mt-5 text-sm text-muted-foreground">Аланья · Мерсин · Турция</p>
            
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <a href="tel:+905000000000" className="hover:text-accent">
                +90 500 000 00 00
              </a>
            </p>
            <p>
              <a href="mailto:info@stm-realestate.com" className="hover:text-accent">
                info@stm-realestate.com
              </a>
            </p>
            <div className="flex gap-5 pt-1 text-xs tracking-[0.16em] uppercase">
              <a href="https://t.me/" className="hover:text-accent">
                Telegram
              </a>
              <a href="https://wa.me/" className="hover:text-accent">
                WhatsApp
              </a>
              <a href="https://instagram.com/" className="hover:text-accent">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground">
          Информация на сайте не является публичной офертой. Все расчеты носят
          ознакомительный характер.
        </p>
      </footer>
    </div>
  );
}

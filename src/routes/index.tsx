import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/LeadForm";
import heroImg from "@/assets/hero.jpg";
import alanyaImg from "@/assets/alanya.jpg";
import mersinImg from "@/assets/mersin.jpg";
import cyprusImg from "@/assets/cyprus.jpg";
import typeApartments from "@/assets/type-apartments.jpg";
import typeNewbuild from "@/assets/type-newbuild.jpg";
import typeSecondary from "@/assets/type-secondary.jpg";
import typeVillas from "@/assets/type-villas.jpg";
import typeInvestment from "@/assets/type-investment.jpg";
import logo from "@/assets/stm-logo-mark.png";
import founderAsset from "@/assets/founder.jpg.asset.json";

const TITLE = "Недвижимость в Турции и на Северном Кипре у моря | STM Real Estate";
const DESCRIPTION =
  "Подбор недвижимости в Турции и на Северном Кипре для жизни, ВНЖ, аренды и инвестиций. Аланья, Мерсин, Северный Кипр. Проверка объектов и сопровождение сделки.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sea-side-landing-maker.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sea-side-landing-maker.lovable.app/" }],
  }),
  component: Landing,
});

const trust = [
  {
    title: "Проверяем объекты и застройщиков",
    text: "Смотрим не только на красивые фото, но и на документы, стадию строительства, репутацию застройщика и перспективу района.",
  },
  {
    title: "Подбираем под вашу цель",
    text: "Для жизни, инвестиций, аренды, ВНЖ или покупки второго дома у моря — стратегия подбирается индивидуально.",
  },
  {
    title: "Сопровождаем сделку",
    text: "Помогаем пройти путь от первого запроса до подписания договора, оплаты, оформления документов и передачи ключей.",
  },
  {
    title: "Помогаем после покупки",
    text: "Подключение сервисов, управление объектом, аренда, бытовые вопросы и адаптация на месте.",
  },
];

const purposes = [
  {
    title: "Для жизни у моря",
    text: "Квартиры и виллы в районах с развитой инфраструктурой, магазинами, школами, медициной и комфортной средой для семьи.",
  },
  {
    title: "Для инвестиций",
    text: "Объекты с потенциалом роста стоимости, понятной логикой района и возможностью перепродажи в будущем.",
  },
  {
    title: "Для аренды",
    text: "Апартаменты в туристических локациях, которые можно использовать для отдыха и сдачи в аренду.",
  },
  {
    title: "Для ВНЖ и переезда",
    text: "Подбор недвижимости с учётом требований к оформлению статуса, проживания и долгосрочного планирования.",
  },
];

const locations = [
  {
    img: alanyaImg,
    city: "Аланья",
    tag: "Турция",
    text: "Один из самых востребованных прибрежных городов Турции: развитая инфраструктура, международная среда, стабильный спрос на аренду и удобные условия для ВНЖ.",
  },
  {
    img: mersinImg,
    city: "Мерсин",
    tag: "Турция",
    text: "Быстро растущее побережье с доступными ценами, современными комплексами и потенциалом роста. Хороший выбор для жизни, инвестиций и покупки на ранних этапах развития рынка.",
  },
  {
    img: cyprusImg,
    city: "Северный Кипр",
    tag: "Средиземноморье",
    text: "Альтернативный рынок недвижимости у моря: мягкий климат, университетская среда, курортная аренда и спокойная среда для жизни и инвестиций.",
  },
];

const strategies = [
  {
    budget: "До $100k",
    text: "Доступный вход в рынок, компактные апартаменты, новостройки на ранних этапах и объекты для первого инвестирования.",
  },
  {
    budget: "$100k–$200k",
    text: "Комфортные квартиры в хороших комплексах, варианты для жизни, отдыха, аренды и долгосрочного владения.",
  },
  {
    budget: "От $200k",
    text: "Премиальные апартаменты, просторные квартиры, виллы и объекты с более высоким уровнем сервиса и локации.",
  },
];

const steps = [
  {
    title: "Знакомимся с вашей целью",
    text: "Определяем бюджет, страну, город, срок покупки и задачу: жизнь, инвестиции, аренда или ВНЖ.",
  },
  {
    title: "Подбираем объекты",
    text: "Готовим персональную подборку объектов с фото, ценами, локациями и пояснением по каждому варианту.",
  },
  {
    title: "Организуем просмотр",
    text: "Показываем объекты онлайн или организуем просмотр на месте в Турции / Северном Кипре.",
  },
  {
    title: "Проверяем и согласуем сделку",
    text: "Помогаем проверить объект, документы, условия оплаты и договор.",
  },
  {
    title: "Сопровождаем до ключей",
    text: "Помогаем пройти сделку, оформить документы и решить вопросы после покупки.",
  },
];

const formats = [
  {
    img: typeApartments,
    title: "Апартаменты у моря",
    text: "Для отдыха, жизни и аренды в популярных прибрежных районах.",
    price: "от $80k",
  },
  {
    img: typeNewbuild,
    title: "Новостройки от застройщиков",
    text: "Объекты на стадии строительства или в готовых комплексах с современной инфраструктурой.",
    price: "от $110k",
  },
  {
    img: typeSecondary,
    title: "Готовое жильё на вторичном рынке",
    text: "Квартиры и апартаменты, которые можно посмотреть вживую, купить быстрее и использовать сразу после сделки.",
    price: "по запросу",
  },
  {
    img: typeVillas,
    title: "Виллы и таунхаусы",
    text: "Более приватный формат для семьи, отдыха или долгосрочного проживания.",
    price: "по запросу",
  },
  {
    img: typeInvestment,
    title: "Инвестиционные объекты",
    text: "Объекты с потенциалом роста стоимости, сдачи в аренду или перепродажи.",
    price: "по запросу",
  },
];

function scrollToForm() {
  document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" });
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 max-w-2xl text-3xl md:text-5xl">{title}</h2>
    </>
  );
}

function Landing() {
  return (
    <div className="min-h-screen watermark-surface">
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 md:px-14">
        <img
          src={logo}
          alt="STM Real Estate"
          width={480}
          height={340}
          className="h-11 w-auto md:h-14"
        />
        <span className="hidden text-[0.68rem] tracking-[0.2em] text-primary-foreground/80 uppercase sm:block">
          Турция · Северный Кипр
        </span>
      </header>

      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end">
        <img
          src={heroImg}
          alt="Современная недвижимость у моря в Турции"
          width={1920}
          height={1200}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/30" />
        <div className="px-6 pb-16 md:px-14 md:pb-28">
          <p className="text-[0.68rem] tracking-[0.24em] text-gold-soft uppercase">
            Аланья · Мерсин · Северный Кипр
          </p>
          <h1 className="hero-headline mt-5 max-w-3xl text-balance text-[1.9rem] leading-[1.14] text-primary-foreground sm:text-4xl md:text-6xl">
            Недвижимость у моря для жизни, ВНЖ и инвестиций Турция, Северный Кипр
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
            Подберём проверенные объекты под ваш бюджет. Сопровождаем сделку от подбора до
            оформления документов.
          </p>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="mt-8 h-13 w-full rounded-sm bg-accent px-8 text-xs tracking-[0.16em] text-accent-foreground uppercase hover:bg-gold-soft sm:w-auto"
          >
            Получить подборку объектов под мой бюджет
          </Button>
          <p className="mt-4 text-[0.68rem] leading-relaxed tracking-[0.12em] text-primary-foreground/65 uppercase">
            Гарантия юридической чистоты объекта
          </p>
        </div>
      </section>

      {/* Trust */}
      <section className="px-6 py-20 md:px-14 md:py-32">
        <SectionHead
          eyebrow="Доверие"
          title={
            <>
              Почему покупатели выбирают{" "}
              <span className="font-display">STM Real Estate</span>
            </>
          }
        />
        <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2">
          {trust.map((t) => (
            <div
              key={t.title}
              className="border-t-2 border-accent bg-card p-7 shadow-soft md:p-10"
            >
              <h3 className="text-xl md:text-2xl">{t.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Purpose */}
      <section className="watermark-texture bg-sand px-6 py-20 md:px-14 md:py-32">
        <SectionHead eyebrow="Цель покупки" title="Подберём объект под вашу цель" />
        <div className="mt-12 grid gap-px border border-border bg-border md:mt-14 md:grid-cols-2">
          {purposes.map((p) => (
            <div key={p.title} className="bg-card p-7 md:p-10">
              <h3 className="text-xl md:text-2xl">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
        <Button
          onClick={scrollToForm}
          size="lg"
          className="mt-10 h-13 w-full rounded-sm px-8 text-xs tracking-[0.16em] uppercase sm:w-auto"
        >
          Подобрать объект под мою цель
        </Button>
      </section>

      {/* Locations */}
      <section className="px-6 py-20 md:px-14 md:py-32">
        <SectionHead eyebrow="Локации" title="Локации для жизни, ВНЖ и инвестиций" />
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Поможем выбрать страну и город под вашу цель: переезд, отдых, аренда, сохранение
          капитала или покупка недвижимости для получения статуса.
        </p>
        <div className="mt-12 grid gap-8 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <article key={l.city} className="bg-card shadow-soft">
              <img
                src={l.img}
                alt={`${l.city} — недвижимость у моря`}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-64 w-full object-cover md:h-80"
              />
              <div className="p-7 md:p-8">
                <h3 className="text-2xl md:text-3xl">{l.city}</h3>
                <p className="mt-2 text-[0.68rem] tracking-[0.16em] text-accent uppercase">
                  {l.tag}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{l.text}</p>
              </div>
            </article>
          ))}
        </div>
        <Button
          onClick={scrollToForm}
          variant="outline"
          size="lg"
          className="mt-10 h-13 w-full rounded-sm border-foreground/25 bg-transparent px-8 text-xs tracking-[0.16em] uppercase hover:bg-foreground hover:text-primary-foreground sm:w-auto"
        >
          Помочь выбрать локацию
        </Button>
      </section>

      {/* Budget strategies */}
      <section className="watermark-texture bg-sand px-6 py-20 md:px-14 md:py-32">
        <SectionHead eyebrow="Бюджет" title="Подберём стратегию покупки под ваш бюджет" />
        <div className="mt-12 space-y-6 md:mt-14">
          {strategies.map((s) => (
            <div
              key={s.budget}
              className="flex flex-col gap-4 border-l-2 border-accent bg-card p-7 shadow-soft md:flex-row md:items-center md:gap-12 md:p-10"
            >
              <h3 className="shrink-0 text-2xl md:w-64 md:text-3xl">{s.budget}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <Button
          onClick={scrollToForm}
          size="lg"
          className="mt-10 h-13 w-full rounded-sm px-8 text-xs tracking-[0.16em] uppercase sm:w-auto"
        >
          Рассчитать варианты под мой бюджет
        </Button>
      </section>

      {/* Process */}
      <section className="px-6 py-20 md:px-14 md:py-32">
        <SectionHead eyebrow="Процесс" title="Как мы сопровождаем покупку" />
        <ol className="mt-12 border-t border-border md:mt-14">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex flex-col gap-3 border-b border-border py-8 md:flex-row md:gap-12"
            >
              <span className="text-sm tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:flex-1">
                <h3 className="text-xl md:text-2xl">{s.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Founder */}
      <section className="watermark-texture relative bg-sand px-6 py-20 md:px-14 md:py-32">
        <div className="relative grid gap-10 md:grid-cols-[minmax(0,22rem)_1fr] md:items-start md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card shadow-soft">
            <img
              src={founderAsset.url}
              alt="Темур Шабанов — основатель STM Real Estate"
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div>
            <SectionHead
              eyebrow="Основатель"
              title="Персональный подход к зарубежной недвижимости"
            />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              STM Real Estate помогает клиентам выбирать недвижимость в Турции и на Северном Кипре
              не по красивым фотографиям, а по цели покупки: жизнь, аренда, ВНЖ, сохранение
              капитала или инвестиционный рост.
            </p>
            <p className="mt-6 text-[0.68rem] tracking-[0.16em] text-accent uppercase">
              Основатель — Темур Шабанов
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Мой подход — смотреть на объект как на финансовое и жизненное решение: учитывать
              локацию, ликвидность, документы, расходы после покупки, качество застройщика и
              реальный сценарий использования недвижимости.
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="mt-8 h-13 w-full rounded-sm px-8 text-xs tracking-[0.16em] uppercase sm:w-auto"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="px-6 py-20 md:px-14 md:py-32">
        <SectionHead eyebrow="Объекты" title="Форматы недвижимости, которые мы подбираем" />
        <div className="mt-12 grid gap-8 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {formats.map((f) => (
            <article key={f.title} className="bg-card shadow-soft">
              <img
                src={f.img}
                alt={f.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 md:p-7">
                <h3 className="text-xl">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                <p className="mt-5 text-[0.68rem] tracking-[0.16em] text-accent uppercase">
                  {f.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lead form */}
      <section id="lead" className="bg-ink px-6 py-20 md:px-14 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
          <div className="md:sticky md:top-20">
            <div className="hairline" />
            <h2 className="mt-7 text-3xl text-primary-foreground md:text-5xl">
              Получите персональную подборку объектов под ваш бюджет
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/75">
              Ответьте на несколько вопросов — мы подготовим варианты недвижимости в Турции или
              на Северном Кипре под вашу цель покупки.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/"
                className="rounded-sm border border-gold-soft/50 px-6 py-3 text-[0.68rem] tracking-[0.16em] text-gold-soft uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/"
                className="rounded-sm border border-gold-soft/50 px-6 py-3 text-[0.68rem] tracking-[0.16em] text-gold-soft uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Telegram
              </a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 md:px-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <img
              src={logo}
              alt="STM Real Estate"
              loading="lazy"
              width={480}
              height={340}
              className="h-14 w-auto rounded-sm"
            />
            <p className="mt-5 text-sm text-muted-foreground">
              Аланья · Мерсин · Северный Кипр
            </p>
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
          Информация на сайте не является публичной офертой. Все расчёты носят ознакомительный
          характер и не являются финансовой или юридической консультацией.
        </p>
      </footer>
    </div>
  );
}

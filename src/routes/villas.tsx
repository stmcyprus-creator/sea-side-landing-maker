import { createFileRoute, Link } from "@tanstack/react-router";
import offer1 from "@/assets/offer-1.jpg";
import offer2 from "@/assets/offer-2.jpg";
import offer3 from "@/assets/offer-3.jpg";
import offer4 from "@/assets/offer-4.jpg";
import offer5 from "@/assets/offer-5.jpg";
import offer6 from "@/assets/offer-6.jpg";
import { SITE_URL } from "@/lib/site";

const SITE = SITE_URL;
const TITLE = "Виллы и коттеджи у моря в Средиземноморье — цены и фото";
const DESCRIPTION =
  "Подборка вилл и коттеджей в Аланье, Мерсине и на Северном Кипре: фото, площади, цены и краткое описание. Заявка по любому объекту уходит напрямую в WhatsApp.";

const WHATSAPP = "79056814006";
const BOT = "https://t.me/stmrealestate_bot";

type Offer = {
  id: string;
  title: string;
  location: string;
  price: string;
  area: string;
  layout: string;
  distance: string;
  image: string;
  alt: string;
  note: string;
};

const offers: Offer[] = [
  {
    id: "AL-114",
    title: "Вилла с бассейном и видом на бухту",
    location: "Аланья, Каргыджак",
    price: "$385 000",
    area: "210 м²",
    layout: "4 спальни",
    distance: "700 м до моря",
    image: offer1,
    alt: "Вилла с бассейном и видом на море в Аланье",
    note: "Отдельный участок, инфинити-бассейн, панорамное остекление гостиной, готова к заселению.",
  },
  {
    id: "AL-207",
    title: "Каменный коттедж в оливковой роще",
    location: "Аланья, Демирташ",
    price: "$168 000",
    area: "115 м²",
    layout: "2 спальни",
    distance: "1,2 км до моря",
    image: offer2,
    alt: "Каменный коттедж с черепичной крышей у моря",
    note: "Собственный сад с оливами, терраса с видом на бухту, тихая застройка без высотных комплексов.",
  },
  {
    id: "CY-032",
    title: "Минималистичная вилла первой линии",
    location: "Северный Кипр, Эсентепе",
    price: "$450 000",
    area: "185 м²",
    layout: "3 спальни",
    distance: "первая линия",
    image: offer3,
    alt: "Современная вилла с бассейном на первой линии моря, Северный Кипр",
    note: "Прямой выход к морю, бассейн-инфинити, рассрочка от застройщика до сдачи.",
  },
  {
    id: "MR-058",
    title: "Дуплекс-вилла в закрытом комплексе",
    location: "Мерсин, Эрдемли",
    price: "$212 000",
    area: "160 м²",
    layout: "3 спальни",
    distance: "900 м до моря",
    image: offer4,
    alt: "Современная дуплекс-вилла с бассейном в Мерсине",
    note: "Закрытая территория с охраной, общий бассейн, паркинг, подходит для аренды круглый год.",
  },
  {
    id: "AL-311",
    title: "Дом на побережье с террасой у пляжа",
    location: "Аланья, Махмутлар",
    price: "$298 000",
    area: "175 м²",
    layout: "3 спальни",
    distance: "80 м до пляжа",
    image: offer5,
    alt: "Терраса дома с видом на пляж и море",
    note: "Большая терраса с видом на пляж, вторичный фонд с ремонтом, документы готовы к сделке.",
  },
  {
    id: "CY-076",
    title: "Приватная вилла на склоне с видом на горы",
    location: "Северный Кипр, Лапта",
    price: "$332 000",
    area: "195 м²",
    layout: "4 спальни",
    distance: "1,5 км до моря",
    image: offer6,
    alt: "Вилла с бассейном и видом на горы и море, Северный Кипр",
    note: "Свой бассейн, пергола, кипарисовый сад, панорама моря и гор с обеих террас.",
  },
];

function waLink(offer?: Offer) {
  const lines = offer
    ? [
        "Здравствуйте! Интересует объект с сайта.",
        `Объект: ${offer.title} (${offer.id})`,
        `Локация: ${offer.location}`,
        `Цена: ${offer.price}`,
      ]
    : ["Здравствуйте! Хочу подборку вилл и коттеджей у моря."];
  return `https://wa.me/${WHATSAPP}?text=${lines.map((l) => encodeURIComponent(l)).join("%0A")}`;
}

export const Route = createFileRoute("/villas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/villas` },
      { property: "og:site_name", content: "ЭС ТЭ ЭМ Риал Эстейт" },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE}/villas` }],
  }),
  component: VillasPage,
});

function VillasPage() {
  return (
    <main>
      <section className="offers-hero">
        <div className="wrap">
          <div className="eyebrow">Аланья · Мерсин · Северный Кипр</div>
          <h1 className="offers-title">Виллы и коттеджи у моря</h1>
          <p className="offers-lead">
            Актуальная подборка домов на побережье Средиземноморья: площадь, планировка, расстояние
            до моря и цена. По каждому объекту отправим полный пакет фото, документы и условия
            оплаты.
          </p>
          <div className="offers-hero-actions">
            <a className="btn-primary" href={BOT} target="_blank" rel="noopener">
              Запросить подборку у ИИ-консультанта
            </a>
            <a className="btn-ghost-link" href="tel:+79056814006">
              Позвонить: +7 905 681-40-06
            </a>
            <Link to="/" className="btn-ghost-link">
              ← На главную
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="offers-grid">
            {offers.map((offer) => (
              <article className="offer-card" key={offer.id}>
                <div className="offer-media">
                  <img src={offer.image} alt={offer.alt} loading="lazy" width={1200} height={800} />
                  <span className="offer-id">{offer.id}</span>
                </div>
                <div className="offer-body">
                  <div className="coord">{offer.location}</div>
                  <h2 className="offer-name">{offer.title}</h2>
                  <div className="offer-price">{offer.price}</div>
                  <ul className="offer-specs">
                    <li>{offer.area}</li>
                    <li>{offer.layout}</li>
                    <li>{offer.distance}</li>
                  </ul>
                  <p className="offer-note">{offer.note}</p>
                  <div className="offer-actions">
                    <a className="offer-cta" href={BOT} target="_blank" rel="noopener">
                      Узнать детали у ИИ-консультанта →
                    </a>
                    <a className="offer-cta-alt" href={waLink(offer)} target="_blank" rel="noopener">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight section-dark">
        <div className="wrap offers-footer">
          <h3 className="offers-footer-title">Не нашли подходящий вариант?</h3>
          <p>
            В работе больше объектов, чем размещено на сайте. Напишите бюджет и цель покупки — пришлём
            подборку под задачу в течение дня.
          </p>
          <div className="offers-hero-actions">
            <a className="btn-primary" href={BOT} target="_blank" rel="noopener">
              Открыть ИИ-консультанта
            </a>
            <a className="btn-ghost-link" href="mailto:info@stmrealestate.ru">
              info@stmrealestate.ru
            </a>
            <a className="btn-ghost-link" href="https://instagram.com/stmcyprus" target="_blank" rel="noopener">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "@/stm/body.html?raw";
import { initStm } from "@/stm/init";

const SITE = "https://sea-side-landing-maker.lovable.app";
const TITLE = "Недвижимость у моря в Турции и на Северном Кипре — STM Real Estate";
const DESCRIPTION =
  "Подбор недвижимости у моря в Аланье, Мерсине и на Северном Кипре: для жизни, ВНЖ, аренды и инвестиций. Проверка объектов и застройщиков, безопасные расчёты, сопровождение до передачи ключей.";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&w=1200&auto=format&fit=crop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "недвижимость Турция, недвижимость Аланья, недвижимость Мерсин, недвижимость Северный Кипр, квартира у моря, ВНЖ Турция, инвестиции в недвижимость",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:site_name", content: "STM Real Estate" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Апартаменты у моря — STM Real Estate" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "STM Real Estate",
          description: DESCRIPTION,
          url: `${SITE}/`,
          image: OG_IMAGE,
          telephone: "+7 903 699 50 70",
          areaServed: [
            { "@type": "Place", name: "Аланья, Турция" },
            { "@type": "Place", name: "Мерсин, Турция" },
            { "@type": "Place", name: "Северный Кипр" },
          ],
          founder: { "@type": "Person", name: "Темур Шабанов" },
          knowsLanguage: ["ru", "tr", "en"],
          serviceType: [
            "Подбор недвижимости у моря",
            "Сопровождение сделки",
            "Оформление ВНЖ",
            "Управление недвижимостью",
          ],
        }),
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  useEffect(() => {
    initStm();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}

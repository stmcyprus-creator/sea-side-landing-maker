import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "@/stm/body.html?raw";
import { initStm } from "@/stm/init";

const TITLE = "STM — Агентство недвижимости у моря в Турции и на Северном Кипре";
const DESCRIPTION =
  "Подбор недвижимости у моря в Турции и на Северном Кипре: Аланья, Мерсин, Северный Кипр. Проверка объектов, безопасные расчёты, ВНЖ и сопровождение сделки.";

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

function Landing() {
  useEffect(() => {
    initStm();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}

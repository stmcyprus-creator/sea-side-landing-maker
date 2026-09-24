import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <a href="/" className="legal-back">← На главную</a>
        <h1 className="serif">{title}</h1>
        <div className="legal-body">{children}</div>
        <nav className="legal-nav">
          <a href="/privacy">Политика конфиденциальности</a>
          <a href="/consent">Согласие на обработку данных</a>
          <a href="/requisites">Реквизиты</a>
        </nav>
      </div>
    </main>
  );
}

export function legalHead(path: string, title: string, description: string) {
  const full = `${title} — ЭС ТЭ ЭМ Риал Эстейт`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `https://stmrealestate.ru${path}` }],
  };
}

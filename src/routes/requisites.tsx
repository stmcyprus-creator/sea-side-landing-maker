import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/LegalPage";
import "@/stm/stm.css";

const rows: [string, string][] = [
  ["Наименование", "ЭС ТЭ ЭМ Риал Эстейт"],
  ["Руководитель", "Темур Шабанов"],
  ["ИНН", "—"],
  ["ОГРН / ОГРНИП", "—"],
  ["Юридический адрес", "—"],
  ["Телефон", "+7 905 681-40-06"],
  ["Электронная почта", "info@stmrealestate.ru"],
];

export const Route = createFileRoute("/requisites")({
  head: () =>
    legalHead("/requisites", "Реквизиты агентства", "Реквизиты и контактные данные агентства недвижимости ЭС ТЭ ЭМ Риал Эстейт."),
  component: () => (
    <LegalPage title="Реквизиты агентства">
      <dl className="legal-reqs">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </LegalPage>
  ),
});

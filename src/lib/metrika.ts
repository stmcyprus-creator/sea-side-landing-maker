export const METRIKA_ID = 94692420;

type Ym = (id: number, action: string, ...args: unknown[]) => void;

function channelOf(href: string): string | null {
  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("mailto:")) return "email";
  if (href.includes("wa.me") || href.includes("whatsapp")) return "whatsapp";
  if (href.includes("t.me/stmrealestate_bot")) return "ai_bot";
  if (href.includes("t.me")) return "telegram";
  if (href.includes("instagram.com")) return "instagram";
  return null;
}

let installed = false;
/** Отправляет цель в Метрику при клике по любому каналу связи на сайте. */
export function installContactTracking() {
  if (installed || typeof document === "undefined") return;
  installed = true;
  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const ch = channelOf(a.getAttribute("href") || "");
      if (!ch) return;
      const ym = (window as unknown as { ym?: Ym }).ym;
      ym?.(METRIKA_ID, "reachGoal", `contact_${ch}`, { channel: ch, page: location.pathname });
      ym?.(METRIKA_ID, "reachGoal", "contact_any", { channel: ch });
    },
    true,
  );
}

export const METRIKA_SNIPPET = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');ym(${METRIKA_ID},'init',{webvisor:true,clickmap:true,referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});`;

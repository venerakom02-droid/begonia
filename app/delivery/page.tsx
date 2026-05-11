import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Доставка и оплата — БегоНия Venus | Бережная доставка растений по России",
  description:
    "СДЭК, Почта России, Яндекс Доставка, самовывоз. Термоупаковка, бережная упаковка с мхом и жёстким коробом. Оплата картой, СБП, ЮMoney.",
};

/* placeholder — skeleton with sections filled via Edit */

const DELIVERY_METHODS = [
  {
    name: "СДЭК",
    badge: "Основной",
    icon: "📦",
    details: ["ПВЗ + курьер", "3–7 рабочих дней", "По всей России"],
  },
  {
    name: "Почта России",
    badge: null,
    icon: "✉️",
    details: ["«Посылка Онлайн»", "От 1 дня", "Отслеживание на сайте"],
  },
  {
    name: "Яндекс Доставка",
    badge: "Москва",
    icon: "🚀",
    details: ["Same / next day", "Курьерская доставка", "Только Москва и МО"],
  },
  {
    name: "Самовывоз",
    badge: null,
    icon: "🤝",
    details: ["На выставках", "У метро (по договорённости)", "Бесплатно"],
  },
];

const PACKAGING_STEPS = [
  { step: "1", icon: "🌿", label: "Мох сфагнум", desc: "Корневая система оборачивается влажным мхом" },
  { step: "2", icon: "🔄", label: "Плёнка", desc: "Герметичная обёртка сохраняет влагу" },
  { step: "3", icon: "📐", label: "Жёсткий короб", desc: "Защита от механических повреждений" },
  { step: "4", icon: "🌡️", label: "Термоупаковка", desc: "При температуре ниже +10°C" },
];

const MONTHS = [
  { name: "Янв", safe: false },
  { name: "Фев", safe: false },
  { name: "Мар", safe: true },
  { name: "Апр", safe: true },
  { name: "Май", safe: true },
  { name: "Июн", safe: true },
  { name: "Июл", safe: true },
  { name: "Авг", safe: true },
  { name: "Сен", safe: true },
  { name: "Окт", safe: true },
  { name: "Ноя", safe: false },
  { name: "Дек", safe: false },
];

const PAYMENT_METHODS = [
  { name: "Visa / MC / Мир", icon: "💳" },
  { name: "СБП", icon: "⚡" },
  { name: "ЮMoney", icon: "💰" },
  { name: "Банковский перевод", icon: "🏦" },
];

const FAQ_ITEMS = [
  {
    q: "Как быстро вы отправляете заказ?",
    a: "Отправка в течение 1–3 рабочих дней после подтверждения оплаты. В высокий сезон (весна) срок может увеличиться до 5 дней.",
  },
  {
    q: "Можно ли отправить растение зимой?",
    a: "Да, мы используем термоупаковку с грелками. При температуре ниже −15°C рекомендуем подождать потепления — безопасность растения важнее скорости.",
  },
  {
    q: "Как отследить посылку?",
    a: "После отправки вы получите трек-номер в Telegram или на email. Отслеживание доступно на сайте транспортной компании.",
  },
  {
    q: "Что делать, если растение повреждено при доставке?",
    a: "Сфотографируйте повреждения в течение 48 часов и напишите нам. Мы предложим замену со скидкой 75% или полный возврат — подробнее на странице гарантий.",
  },
  {
    q: "Доставляете ли вы за рубеж?",
    a: "На данный момент доставка осуществляется только по территории России. Международная доставка требует фитосанитарных сертификатов и планируется в будущем.",
  },
];

export default function DeliveryPage() {
  return (
    <div className="pt-28 pb-20">
      {/* ── Header ── */}
      <section className="mx-auto max-w-5xl px-6 text-center mb-16">
        <p
          className="text-gold uppercase tracking-[3px] mb-4"
          style={{ fontSize: "11px" }}
        >
          Информация
        </p>
        <h1
          className="text-cream text-4xl sm:text-5xl mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Доставка и <span className="text-gold">оплата</span>
        </h1>
        <p className="text-cream/50 max-w-xl mx-auto text-sm leading-relaxed">
          Бережная доставка живых растений по всей России. Мы знаем, как
          сохранить ваше растение в пути.
        </p>
        <div className="gold-line mt-10" />
      </section>

      {/* ── Delivery methods grid ── */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <h2
          className="text-cream text-2xl sm:text-3xl text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Способы <span className="text-gold">доставки</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DELIVERY_METHODS.map((m) => (
            <div
              key={m.name}
              className="border border-gold/15 bg-forest/40 p-6 rounded-sm relative"
            >
              {m.badge && (
                <span className="absolute top-4 right-4 text-[9px] uppercase tracking-[1.5px] bg-gold/15 text-gold px-2 py-0.5 rounded-sm">
                  {m.badge}
                </span>
              )}
              <span className="text-3xl">{m.icon}</span>
              <h3
                className="text-cream text-lg mt-3 mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.name}
              </h3>
              <ul className="space-y-1.5">
                {m.details.map((d) => (
                  <li key={d} className="text-cream/50 text-sm flex items-start gap-2">
                    <span className="text-gold/50 mt-1 text-xs">—</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Packaging ── */}
      <section className="mx-auto max-w-5xl px-6 mb-20">
        <h2
          className="text-cream text-2xl sm:text-3xl text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Как мы <span className="text-gold">упаковываем</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PACKAGING_STEPS.map((s) => (
            <div key={s.step} className="text-center p-6 border border-gold/10 bg-forest/30 rounded-sm">
              <span className="text-3xl">{s.icon}</span>
              <div className="text-gold/40 text-xs uppercase tracking-[2px] mt-3 mb-1">
                Шаг {s.step}
              </div>
              <h4
                className="text-cream text-base mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.label}
              </h4>
              <p className="text-cream/45 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Seasonal calendar ── */}
      <section className="mx-auto max-w-4xl px-6 mb-20">
        <h2
          className="text-cream text-2xl sm:text-3xl text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Сезонный <span className="text-gold">календарь</span> отправок
        </h2>
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
          {MONTHS.map((m) => (
            <div
              key={m.name}
              className={`py-3 rounded-sm text-center ${
                m.safe
                  ? "bg-sage/50 border border-fern/30"
                  : "bg-terra/20 border border-terra/30"
              }`}
            >
              <span className="text-cream/70 text-xs">{m.name}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-4 text-xs text-cream/40">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-sage/50 border border-fern/30 inline-block" />
            Безопасная отправка
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-terra/20 border border-terra/30 inline-block" />
            Тёплая доставка / риск
          </span>
        </div>
      </section>

      {/* ── Important notes ── */}
      <section className="mx-auto max-w-4xl px-6 mb-20">
        <div className="border border-gold/20 bg-forest/30 p-8 rounded-sm">
          <h3
            className="text-gold text-xl mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Важная информация
          </h3>
          <ul className="space-y-3 text-cream/60 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-gold mt-0.5">●</span>
              <span>
                <strong className="text-cream">100% предоплата</strong> — оплата
                подтверждает бронь растения.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold mt-0.5">●</span>
              <span>
                <strong className="text-cream">Термоупаковка</strong> при
                температуре ниже +10°C предлагается автоматически.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold mt-0.5">●</span>
              <span>
                <strong className="text-cream">Стоимость упаковки:</strong>{" "}
                1 000–4 500 ₽ в зависимости от количества и размера растений.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Payment methods ── */}
      <section className="mx-auto max-w-4xl px-6 mb-20">
        <h2
          className="text-cream text-2xl sm:text-3xl text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Способы <span className="text-gold">оплаты</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {PAYMENT_METHODS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center gap-2 p-5 border border-gold/10 bg-forest/30 rounded-sm"
            >
              <span className="text-2xl">{p.icon}</span>
              <span className="text-cream/70 text-xs text-center uppercase tracking-[1px]">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-6">
        <h2
          className="text-cream text-2xl sm:text-3xl text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Частые <span className="text-gold">вопросы</span>
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <details
              key={i}
              className="group border border-gold/15 bg-forest/30 rounded-sm"
            >
              <summary className="flex items-center justify-between cursor-pointer p-5 text-cream text-sm hover:text-gold transition-colors duration-300">
                <span>{faq.q}</span>
                <span className="text-gold/50 ml-4 text-lg transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 text-cream/50 text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

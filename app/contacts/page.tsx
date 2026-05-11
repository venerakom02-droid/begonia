import type { Metadata } from "next";
import Link from "next/link";
import { CONTACTS, SOCIAL_LINKS } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Контакты — BegoNia | Свяжитесь с нами",
  description:
    "Telegram, WhatsApp, Max, email — выберите удобный способ связи. Отвечаем в течение дня.",
};

const CONTACT_CARDS: {
  icon: string;
  title: string;
  value: string;
  link: string | null;
  note: string;
}[] = [
  {
    icon: "✈",
    title: "Telegram",
    value: `@${CONTACTS.orderTelegram}`,
    link: `https://t.me/${CONTACTS.orderTelegram}`,
    note: "Самый быстрый способ связи",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: CONTACTS.phoneDisplay,
    link: SOCIAL_LINKS.whatsapp,
    note: "Для заказов и консультаций",
  },
  {
    icon: "📱",
    title: "Max",
    value: CONTACTS.phoneDisplay,
    link: SOCIAL_LINKS.max,
    note: "Российский мессенджер",
  },
  {
    icon: "✉",
    title: "Email",
    value: CONTACTS.email,
    link: `mailto:${CONTACTS.email}`,
    note: "Ответ в течение 24 часов",
  },
];

const SUBJECT_OPTIONS = [
  "Вопрос по заказу",
  "Наличие сорта",
  "Доставка",
  "Сотрудничество",
  "Другое",
];

export default function ContactsPage() {
  return (
    <div className="pt-28 pb-20">
      {/* ── Header ── */}
      <section className="mx-auto max-w-5xl px-6 text-center mb-16">
        <p
          className="text-gold uppercase tracking-[3px] mb-4"
          style={{ fontSize: "11px" }}
        >
          Связь
        </p>
        <h1
          className="text-cream text-4xl sm:text-5xl mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Контакты
        </h1>
        <p className="text-cream/50 max-w-xl mx-auto text-sm leading-relaxed">
          Есть вопросы? Мы всегда на связи и рады помочь с выбором растения,
          оформлением заказа или консультацией по уходу.
        </p>
        <div className="gold-line mt-10" />
      </section>

      {/* ── 2-column layout ── */}
      <section className="mx-auto max-w-6xl px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Contact form */}
          <div className="border border-gold/15 bg-forest/30 p-6 sm:p-8 rounded-sm">
            <h2
              className="text-cream text-2xl mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Напишите <span className="text-gold">нам</span>
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-cream/40 text-xs uppercase tracking-[1.5px] mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-night/60 border border-gold/15 text-cream text-sm px-4 py-3 rounded-sm placeholder:text-cream/20 focus:border-gold/40 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-cream/40 text-xs uppercase tracking-[1.5px] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-night/60 border border-gold/15 text-cream text-sm px-4 py-3 rounded-sm placeholder:text-cream/20 focus:border-gold/40 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-cream/40 text-xs uppercase tracking-[1.5px] mb-2">
                  Тема
                </label>
                <select className="w-full bg-night/60 border border-gold/15 text-cream text-sm px-4 py-3 rounded-sm focus:border-gold/40 focus:outline-none transition-colors duration-300 appearance-none">
                  <option value="" className="bg-night text-cream/40">
                    Выберите тему
                  </option>
                  {SUBJECT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-night text-cream">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-cream/40 text-xs uppercase tracking-[1.5px] mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={5}
                  placeholder="Ваш вопрос или сообщение..."
                  className="w-full bg-night/60 border border-gold/15 text-cream text-sm px-4 py-3 rounded-sm placeholder:text-cream/20 focus:border-gold/40 focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Отправить
              </button>
            </form>
          </div>

          {/* Right — Contact info */}
          <div className="space-y-5">
            {CONTACT_CARDS.map((c) => (
              <div
                key={c.title}
                className="border border-gold/15 bg-forest/30 p-6 rounded-sm flex items-start gap-4"
              >
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <h3
                    className="text-cream text-base mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {c.title}
                  </h3>
                  {c.link ? (
                    <a
                      href={c.link}
                      className="text-gold text-sm hover:text-gold-light transition-colors duration-300"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-cream/70 text-sm">{c.value}</p>
                  )}
                  <p className="text-cream/35 text-xs mt-1">{c.note}</p>
                </div>
              </div>
            ))}

            {/* Working hours */}
            <div className="border border-gold/20 bg-gradient-to-br from-forest to-moss/30 p-6 rounded-sm">
              <h3
                className="text-cream text-base mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Время <span className="text-gold">работы</span>
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-cream/60">
                  <span>Пн — Пт</span>
                  <span className="text-cream">10:00 — 19:00</span>
                </div>
                <div className="flex justify-between text-cream/60">
                  <span>Сб</span>
                  <span className="text-cream">11:00 — 16:00</span>
                </div>
                <div className="flex justify-between text-cream/60">
                  <span>Вс</span>
                  <span className="text-cream/30">Выходной</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex-1 text-center"
              >
                Telegram-канал
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex-1 text-center"
              >
                YouTube
              </a>
            </div>
            <Link href="/cart" className="btn-primary w-full">
              Оформить предзаказ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

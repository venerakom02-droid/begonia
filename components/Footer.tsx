import Link from "next/link";
import { SOCIAL_LINKS, CONTACTS } from "@/lib/contacts";

const CATALOG_LINKS = [
  { href: "/catalog?type=rex", label: "Рексы" },
  { href: "/catalog?type=rhizomatous", label: "Ризоматозные" },
  { href: "/catalog?type=cane", label: "Тростниковые" },
  { href: "/catalog?type=species", label: "Видовые" },
  { href: "/catalog?filter=rare", label: "Редкие" },
  { href: "/catalog?filter=new", label: "Новинки" },
];

const INFO_LINKS = [
  { href: "/delivery", label: "Доставка" },
  { href: "/guarantees", label: "Гарантии" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "О нас" },
];

const HELP_LINKS = [
  { href: "/care", label: "Уход" },
  { href: "/propagation", label: "Размножение" },
  { href: "/blog", label: "Блог" },
  { href: "/consultation", label: "Консультация" },
];

const SOCIALS = [
  { label: "Telegram", href: SOCIAL_LINKS.telegram, icon: "\u2708" },
  { label: "YouTube", href: SOCIAL_LINKS.youtube, icon: "\u25B6" },
  { label: "WhatsApp", href: SOCIAL_LINKS.whatsapp, icon: "\uD83D\uDCAC" },
];

export default function Footer() {
  return (
    <footer className="bg-night border-t border-leaf/20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* ── Column 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span
                className="uppercase tracking-[4px] text-cream"
                style={{ fontFamily: "var(--font-display)", fontSize: "20px" }}
              >
                Бегония&nbsp;<span className="text-gold">Venus</span>
              </span>
            </Link>
            <p className="mt-4 text-cream/40 text-sm leading-relaxed max-w-xs">
              Коллекционные декоративнолиственные бегонии. Бережно выращиваем и
              доставляем редкие сорта по всей России.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-gold/25 text-cream/40 text-xs hover:text-gold hover:border-gold transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-1 text-xs text-cream/40">
              <a
                href={`tel:+${CONTACTS.phone}`}
                className="hover:text-gold transition-colors duration-300"
              >
                {CONTACTS.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACTS.email}`}
                className="hover:text-gold transition-colors duration-300"
              >
                {CONTACTS.email}
              </a>
            </div>
          </div>

          {/* ── Column 2: Каталог ── */}
          <div>
            <h4
              className="text-gold uppercase tracking-[2px] mb-5"
              style={{ fontSize: "10px" }}
            >
              Каталог
            </h4>
            <ul className="flex flex-col gap-2.5">
              {CATALOG_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/45 text-sm hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Информация ── */}
          <div>
            <h4
              className="text-gold uppercase tracking-[2px] mb-5"
              style={{ fontSize: "10px" }}
            >
              Информация
            </h4>
            <ul className="flex flex-col gap-2.5">
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/45 text-sm hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Помощь ── */}
          <div>
            <h4
              className="text-gold uppercase tracking-[2px] mb-5"
              style={{ fontSize: "10px" }}
            >
              Помощь
            </h4>
            <ul className="flex flex-col gap-2.5">
              {HELP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/45 text-sm hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-leaf/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-cream/25 text-xs tracking-wide">
            &copy; 2026 Бегония Venus. Все права защищены.
          </p>
          <Link
            href="/privacy"
            className="text-cream/25 text-xs tracking-wide hover:text-cream/50 transition-colors duration-300"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}

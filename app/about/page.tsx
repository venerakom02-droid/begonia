import type { Metadata } from "next";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "О нас — БегоНия Venus | Коллекция декоративнолиственных бегоний",
  description:
    "Венера из Оренбургской области собирает декоративнолиственные бегонии 6 лет. В коллекции 170+ сортов, отправляем по всей России.",
};

const TIMELINE = [
  { year: "2020", text: "Целенаправленно заказала первые бегонии и не смогла устоять перед разнообразием окрасок листьев." },
  { year: "2022", text: "Коллекция разрослась до нескольких десятков сортов, начались первые обмены с коллекционерами." },
  { year: "2024", text: "В коллекции уже больше ста сортов. Регулярно отправляю растения по всей России." },
  { year: "2026", text: "170+ сортов и запуск БегоНия Venus — собственного онлайн-магазина." },
];

const VALUES = [
  {
    title: "Качество",
    icon: "✦",
    text: "Каждое растение выращено мной лично, прошло акклиматизацию и проверку. Отправляю только здоровые экземпляры, с которыми сама готова работать дальше.",
  },
  {
    title: "Забота",
    icon: "❋",
    text: "Бережная упаковка, термозащита в холодное время года, подробные инструкции по уходу. Сопровождаю растение от теплицы до вашего подоконника.",
  },
  {
    title: "Знание",
    icon: "✿",
    text: "За 6 лет я узнала характер каждого сорта в коллекции. Помогу подобрать растение под ваши условия и подскажу, как сохранить окраску листьев.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* ── Hero ── */}
      <section className="mx-auto max-w-5xl px-6 text-center mb-20">
        <p
          className="text-gold uppercase tracking-[3px] mb-4"
          style={{ fontSize: "11px" }}
        >
          О коллекции
        </p>
        <h1
          className="text-cream text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          БегоНия&nbsp;<span className="text-gold">Venus</span>
        </h1>
        <p className="text-cream/50 max-w-2xl mx-auto leading-relaxed">
          Частная коллекция декоративнолиственных бегоний. Шесть лет я бережно
          собираю и размножаю сорта, которые цепляют своей окраской и
          характером листа. Отправляю растения по всей России.
        </p>
        <div className="gold-line mt-10" />
      </section>

      {/* ── Personal story ── */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — owner photo */}
          <div className="aspect-[4/5] rounded-sm overflow-hidden border border-gold/15 bg-forest/40">
            <img
              src="/venera.jpg"
              alt="Венера — основатель коллекции БегоНия Venus"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right — text */}
          <div>
            <h2
              className="text-cream text-3xl sm:text-4xl mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Привет, я — <span className="text-gold">Венера</span>
            </h2>
            <div className="space-y-4 text-cream/60 leading-relaxed text-sm">
              <p>
                Я живу в Оренбургской области. Шесть лет назад целенаправленно заказала
                первые декоративнолиственные бегонии — и не смогла устоять
                перед разнообразием окрасок и рисунка их листьев.
              </p>
              <p>
                С тех пор коллекция выросла до{" "}
                <span className="text-cream">170+ сортов и видов</span>. Каждый
                сорт — отдельная история: поиск, обмен с другими
                коллекционерами, кропотливое размножение и адаптация к домашним
                условиям.
              </p>
              <p>
                Я знаю характер каждого растения в коллекции. И отправляю
                только те экземпляры, с которыми сама готова работать дальше —
                здоровые, акклиматизированные, с понятным сортом.
              </p>
              <p className="text-cream/80 italic">
                Бегонии — моё вдохновение и спасение в трудную минуту.
              </p>
            </div>
            <div className="flex gap-8 mt-8">
              {[
                { num: "6", label: "лет с бегониями" },
                { num: "170+", label: "сортов в коллекции" },
              ].map((s) => (
                <div key={s.label}>
                  <span
                    className="text-gold text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.num}
                  </span>
                  <p className="text-cream/40 text-xs mt-1 uppercase tracking-[1px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="mx-auto max-w-4xl px-6 mb-24">
        <h2
          className="text-cream text-3xl text-center mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Путь <span className="text-gold">коллекции</span>
        </h2>
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gold/20" />
          <div className="space-y-10">
            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
                  i % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse sm:text-right"
                }`}
              >
                {/* dot */}
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1/2 mt-1 sm:mt-0" />
                {/* content */}
                <div className="pl-10 sm:pl-0 sm:w-1/2 sm:px-8">
                  <span
                    className="text-gold text-xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.year}
                  </span>
                  <p className="text-cream/60 text-sm mt-1">{item.text}</p>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <h2
          className="text-cream text-3xl text-center mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Наши <span className="text-gold">ценности</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="border border-gold/15 bg-forest/40 p-8 rounded-sm text-center"
            >
              <span className="text-gold text-3xl">{v.icon}</span>
              <h3
                className="text-cream text-xl mt-4 mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {v.title}
              </h3>
              <p className="text-cream/50 text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-3xl px-6 text-center">
        <div className="gold-line mb-12" />
        <h2
          className="text-cream text-3xl mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Следите за <span className="text-gold">коллекцией</span>
        </h2>
        <p className="text-cream/50 text-sm mb-8 max-w-lg mx-auto">
          Новые сорта, закулисье теплицы, советы по уходу — подписывайтесь,
          чтобы не пропустить обновления.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={SOCIAL_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Telegram-канал
          </a>
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            YouTube
          </a>
          <Link href="/catalog" className="btn-ghost">
            Каталог сортов
          </Link>
        </div>
      </section>
    </div>
  );
}

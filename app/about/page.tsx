import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О нас — Бегония Venus | Коллекция декоративнолиственных бегоний",
  description:
    "История коллекции Бегония Venus: 7+ лет опыта, 180+ сортов, 2400+ отправок. Узнайте о нашей страсти к редким бегониям и философии бережного ухода.",
};

/* placeholder:sections filled below */

const TIMELINE = [
  { year: "2018", text: "Первая бегония в коллекции — начало пути" },
  { year: "2020", text: "Первые продажи и отправки по России" },
  { year: "2022", text: "Коллекция превысила 200 сортов" },
  { year: "2024", text: "2 400+ успешных отправок" },
  { year: "2026", text: "Запуск Бегония Venus — онлайн-магазин коллекции" },
];

const VALUES = [
  {
    title: "Качество",
    icon: "✦",
    text: "Каждое растение выращено с любовью, прошло карантин и адаптировано к домашним условиям. Мы отправляем только здоровые экземпляры.",
  },
  {
    title: "Забота",
    icon: "❋",
    text: "Бережная упаковка, термозащита, подробные инструкции по уходу — мы сопровождаем каждое растение от теплицы до вашего подоконника.",
  },
  {
    title: "Сообщество",
    icon: "✿",
    text: "Более 3 000 коллекционеров доверяют нам. Мы делимся знаниями, проводим консультации и объединяем любителей бегоний.",
  },
];

const EXHIBITIONS = ["Orchidium 2023", "Monsterium 2024", "GREEN RARE 2025"];

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
          О коллекции Bego
          <span className="text-gold">Nia</span>
        </h1>
        <p className="text-cream/50 max-w-2xl mx-auto leading-relaxed">
          Редкие декоративнолиственные бегонии, выращенные с любовью и знанием
          дела. Более 7 лет мы собираем, размножаем и бережно доставляем
          уникальные сорта коллекционерам по всей России.
        </p>
        <div className="gold-line mt-10" />
      </section>

      {/* ── Personal story ── */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — gradient visual placeholder */}
          <div className="aspect-[4/5] rounded-sm bg-gradient-to-br from-moss via-forest to-sage flex items-end p-8">
            <p className="text-cream/20 text-xs uppercase tracking-[2px]">
              Фото коллекции
            </p>
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
                Моя коллекция началась с одного невзрачного листочка Rex-бегонии,
                подаренного бабушкой. С тех пор прошло более{" "}
                <span className="text-cream">7 лет</span>, и сегодня в моей
                теплице живут{" "}
                <span className="text-cream">180+ сортов и видов</span>{" "}
                декоративнолиственных бегоний.
              </p>
              <p>
                Каждый сорт — это история: месяцы поиска, обмены с
                коллекционерами из разных стран, кропотливое размножение и
                адаптация. Я знаю особенности каждого растения и готова поделиться
                этими знаниями.
              </p>
              <p>
                За годы работы я отправила более{" "}
                <span className="text-cream">2 400 растений</span> по всей
                России — от Калининграда до Владивостока. Каждая посылка
                упакована так, словно я отправляю её себе.
              </p>
            </div>
            <div className="flex gap-8 mt-8">
              {[
                { num: "7+", label: "лет опыта" },
                { num: "180+", label: "сортов" },
                { num: "2 400+", label: "отправок" },
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

      {/* ── Gallery placeholder ── */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <h2
          className="text-cream text-3xl text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Наша <span className="text-gold">теплица</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "from-moss to-forest",
            "from-sage to-moss",
            "from-forest to-sage",
            "from-moss to-night",
          ].map((grad, i) => (
            <div
              key={i}
              className={`aspect-square rounded-sm bg-gradient-to-br ${grad} flex items-end justify-center p-4`}
            >
              <span className="text-cream/15 text-xs uppercase tracking-[2px]">
                Фото {i + 1}
              </span>
            </div>
          ))}
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

      {/* ── Exhibition badges ── */}
      <section className="mx-auto max-w-4xl px-6 mb-24 text-center">
        <p
          className="text-gold uppercase tracking-[3px] mb-6"
          style={{ fontSize: "11px" }}
        >
          Участник выставок
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {EXHIBITIONS.map((ex) => (
            <span
              key={ex}
              className="px-6 py-3 border border-gold/25 text-cream/70 uppercase tracking-[2px] rounded-sm"
              style={{ fontSize: "11px" }}
            >
              {ex}
            </span>
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
          Новые сорта, закулисье теплицы, советы по уходу — подписывайтесь на
          наши каналы, чтобы не пропустить обновления.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="btn-primary"
          >
            Telegram-канал
          </a>
          <a
            href="#"
            className="btn-ghost"
          >
            Группа VK
          </a>
        </div>
      </section>
    </div>
  );
}

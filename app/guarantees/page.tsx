import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Гарантия живого товара — защита вашего растения",
  description:
    "Фото перед отправкой, бережная упаковка, бесплатная замена при повреждении в пути и поддержка 30 дней после покупки. Гарантия БегоНия Venus на каждое растение.",
};

const GUARANTEE_CARDS = [
  {
    icon: "📸",
    title: "Фото перед отправкой",
    text: "Мы присылаем фотографию именно вашего растения перед упаковкой — вы видите то, что получите.",
  },
  {
    icon: "📦",
    title: "Бережная упаковка",
    text: "Термобокс, фиксация корневой системы, зимнее утепление — каждое растение защищено для безопасной дороги.",
  },
  {
    icon: "🔄",
    title: "Замена при повреждении",
    text: "Если растение повреждено в пути — мы бесплатно отправим замену или вернём полную стоимость.",
  },
  {
    icon: "💬",
    title: "Поддержка после покупки",
    text: "В течение 30 дней после получения мы консультируем по уходу, адаптации и пересадке — бесплатно.",
  },
];

const CLAIM_STEPS = [
  {
    num: "01",
    title: "Сфотографируйте растение сразу при получении",
    text: "Сделайте фото упаковки и самого растения при курьере или в пункте выдачи. Это поможет зафиксировать состояние.",
  },
  {
    num: "02",
    title: "Напишите нам в Telegram или на email в течение 24 часов",
    text: "Отправьте фото и описание повреждений. Чем быстрее мы узнаем, тем быстрее решим вопрос.",
  },
  {
    num: "03",
    title: "Мы предложим замену или полный возврат средств",
    text: "В течение 24 часов после обращения мы согласуем с вами оптимальное решение — замена растения или возврат денег.",
  },
  {
    num: "04",
    title: "Отправим новое растение за наш счёт",
    text: "Если выбрана замена — мы подготовим и отправим новое растение полностью за наш счёт, включая доставку.",
  },
];

const DISCLAIMERS = [
  {
    title: "Естественный листопад при транспортировке",
    text: "Потеря 1–3 нижних листьев от стресса — нормальная реакция. Растение восстановится в течение 2–4 недель.",
  },
  {
    title: "Незначительные косметические повреждения",
    text: "Мелкие пятна, слегка загнутые кончики или потёртости, не влияющие на здоровье растения.",
  },
  {
    title: "Повреждения, заявленные после 24 часов",
    text: "Претензии принимаются строго в течение 24 часов с момента получения посылки.",
  },
];

export default function GuaranteesPage() {
  return (
    <div className="pt-28 pb-20">
      {/* ── Hero ── */}
      <section className="mx-auto max-w-5xl px-6 text-center mb-16">
        <p
          className="text-gold uppercase tracking-[3px] mb-4"
          style={{ fontSize: "11px" }}
        >
          Гарантия
        </p>
        <h1
          className="text-cream text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Гарантия <span className="text-gold">живого товара</span>
        </h1>
        <p className="text-cream/50 max-w-2xl mx-auto leading-relaxed">
          Мы несём ответственность за каждое растение — от момента упаковки до
          вашего подоконника. Если что-то пошло не так, мы всё решим.
        </p>
        <div className="gold-line mt-10" />
      </section>

      {/* ── Main guarantee promise ── */}
      <section className="mx-auto max-w-4xl px-6 mb-20">
        <blockquote className="border-l-2 border-gold/40 pl-8 py-4">
          <p
            className="text-cream text-xl sm:text-2xl leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            &laquo;Каждое наше растение защищено нашей гарантией. Мы
            фотографируем его перед отправкой, упаковываем с максимальной
            заботой и берём на себя все риски транспортировки. Если растение
            пострадало в пути —{" "}
            <span className="text-gold">мы заменим его бесплатно.</span>&raquo;
          </p>
          <footer className="text-cream/40 text-sm tracking-wide uppercase">
            — Команда БегоНия Venus
          </footer>
        </blockquote>
      </section>

      {/* ── Что мы гарантируем ── */}
      <section className="bg-forest py-16 mb-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2
            className="text-cream text-2xl sm:text-3xl text-center mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Что мы <span className="text-gold">гарантируем</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GUARANTEE_CARDS.map((card) => (
              <div
                key={card.title}
                className="border border-gold/15 bg-night/60 p-6 rounded-sm text-center"
              >
                <span className="text-3xl">{card.icon}</span>
                <h3
                  className="text-cream text-lg mt-3 mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {card.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Что делать если растение повреждено ── */}
      <section className="mx-auto max-w-5xl px-6 mb-20">
        <h2
          className="text-cream text-2xl sm:text-3xl text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Что делать если растение{" "}
          <span className="text-gold">повреждено</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CLAIM_STEPS.map((step) => (
            <div
              key={step.num}
              className="border border-gold/15 bg-forest/30 p-6 rounded-sm flex gap-5"
            >
              <span
                className="text-gold/30 text-4xl font-light shrink-0 leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.num}
              </span>
              <div>
                <h4
                  className="text-cream text-base mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h4>
                <p className="text-cream/45 text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Важно знать ── */}
      <section className="mx-auto max-w-4xl px-6 mb-20">
        <div className="border border-gold/20 bg-forest/30 p-8 rounded-sm">
          <h3
            className="text-gold text-xl mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Важно знать
          </h3>
          <p className="text-cream/40 text-sm mb-5">
            Гарантия не распространяется на следующие случаи:
          </p>
          <ul className="space-y-4">
            {DISCLAIMERS.map((d) => (
              <li key={d.title} className="flex items-start gap-3">
                <span className="text-gold mt-0.5">●</span>
                <span className="text-cream/60 text-sm leading-relaxed">
                  <strong className="text-cream">{d.title}.</strong> {d.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-3xl px-6 text-center">
        <div className="gold-line mb-10" />
        <h2
          className="text-cream text-2xl sm:text-3xl mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Остались <span className="text-gold">вопросы?</span>
        </h2>
        <p className="text-cream/50 text-sm leading-relaxed max-w-lg mx-auto mb-8">
          Напишите нам — мы с радостью ответим на любые вопросы о гарантиях,
          доставке и уходе за растениями.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contacts" className="btn-primary">
            Связаться с нами
          </Link>
          <Link href="/faq" className="btn-ghost">
            Частые вопросы
          </Link>
        </div>
      </section>
    </div>
  );
}

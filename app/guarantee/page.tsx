import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Гарантии и возврат — BegoNia | Защита покупателя",
  description:
    "Фото перед отправкой, 48 часов на претензию, замена со скидкой 75%. Политика гарантий, возврата и передержки растений в BegoNia.",
};

const GUARANTEE_STEPS = [
  {
    num: "01",
    title: "Фото перед отправкой",
    text: "Каждое растение фотографируется перед упаковкой. Вы получите фото в Telegram и сможете убедиться в состоянии.",
  },
  {
    num: "02",
    title: "Окно претензий — 48 часов",
    text: "С момента получения у вас есть 48 часов, чтобы осмотреть растение и сообщить нам о проблемах.",
  },
  {
    num: "03",
    title: "Замена со скидкой 75%",
    text: "Если растение погибло в течение 3 месяцев не по вашей вине — мы предложим замену того же сорта со скидкой 75%.",
  },
  {
    num: "04",
    title: "Алгоритм при повреждении",
    text: "Сфотографируйте повреждения → напишите нам в Telegram → получите решение в течение 24 часов.",
  },
];

const NOT_DEFECTS = [
  "Временное увядание листьев после транспортировки (до 7 дней)",
  "Листопад от стресса — растение сбрасывает 1–3 нижних листа при адаптации",
  "Незначительные косметические повреждения (мелкие пятна, загнутые кончики)",
  "Различия в окраске — цвет может отличаться от фото из-за освещения и условий",
  "Следы от предыдущих листьев на стебле",
];

const ACCLIMATION_STEPS = [
  {
    icon: "📦",
    title: "Распаковка",
    text: "Аккуратно извлеките растение. Не торопитесь — дайте ему «подышать» 15–20 минут.",
  },
  {
    icon: "💧",
    title: "Полив",
    text: "Слегка увлажните грунт, если он подсох. Не заливайте — корни после дороги чувствительны.",
  },
  {
    icon: "🌤️",
    title: "Освещение",
    text: "Поставьте в полутень на 3–5 дней. Избегайте прямых солнечных лучей и сквозняков.",
  },
  {
    icon: "🌡️",
    title: "Температура",
    text: "Оптимально 20–24°C. Не размещайте рядом с батареей или открытым окном.",
  },
  {
    icon: "💨",
    title: "Влажность",
    text: "Поддерживайте влажность 50–70%. Можно использовать поддон с керамзитом или увлажнитель.",
  },
  {
    icon: "🔄",
    title: "Пересадка",
    text: "Не пересаживайте 2–3 недели. Дайте корневой системе адаптироваться к новым условиям.",
  },
];

export default function GuaranteePage() {
  return (
    <div className="pt-28 pb-20">
      {/* ── Header ── */}
      <section className="mx-auto max-w-5xl px-6 text-center mb-16">
        <p
          className="text-gold uppercase tracking-[3px] mb-4"
          style={{ fontSize: "11px" }}
        >
          Защита покупателя
        </p>
        <h1
          className="text-cream text-4xl sm:text-5xl mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Гарантии и <span className="text-gold">возврат</span>
        </h1>
        <p className="text-cream/50 max-w-xl mx-auto text-sm leading-relaxed">
          Мы уверены в качестве каждого растения и обеспечиваем прозрачные
          условия защиты для наших покупателей.
        </p>
        <div className="gold-line mt-10" />
      </section>

      {/* ── Legal notice ── */}
      <section className="mx-auto max-w-3xl px-6 mb-16">
        <div className="border-2 border-gold/25 bg-forest/30 p-6 sm:p-8 rounded-sm">
          <h3
            className="text-gold text-lg mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Правовое основание
          </h3>
          <p className="text-cream/50 text-sm leading-relaxed">
            Живые растения относятся к товарам, не подлежащим обмену и возврату
            надлежащего качества (
            <span className="text-cream">Постановление Правительства РФ №55</span>
            , <span className="text-cream">Постановление №2463</span>). Однако мы
            выходим за рамки закона и предоставляем собственную расширенную
            гарантию.
          </p>
        </div>
      </section>

      {/* ── Guarantee steps ── */}
      <section className="mx-auto max-w-4xl px-6 mb-20">
        <h2
          className="text-cream text-2xl sm:text-3xl text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Наша <span className="text-gold">гарантия</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {GUARANTEE_STEPS.map((s) => (
            <div
              key={s.num}
              className="border border-gold/15 bg-forest/40 p-6 rounded-sm"
            >
              <span
                className="text-gold/30 text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.num}
              </span>
              <h3
                className="text-cream text-lg mt-2 mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.title}
              </h3>
              <p className="text-cream/50 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Not defects ── */}
      <section className="mx-auto max-w-3xl px-6 mb-20">
        <h2
          className="text-cream text-2xl sm:text-3xl text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Что <span className="text-gold">НЕ</span> является дефектом
        </h2>
        <div className="border border-gold/15 bg-forest/30 p-6 sm:p-8 rounded-sm">
          <ul className="space-y-3">
            {NOT_DEFECTS.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-cream/60 text-sm">
                <span className="text-gold/50 mt-0.5">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Передержка ── */}
      <section className="mx-auto max-w-3xl px-6 mb-20">
        <div className="border border-gold/20 bg-gradient-to-br from-forest to-moss/30 p-8 rounded-sm text-center">
          <span className="text-3xl">🌱</span>
          <h3
            className="text-cream text-2xl mt-4 mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Услуга <span className="text-gold">передержки</span>
          </h3>
          <p className="text-cream/50 text-sm leading-relaxed max-w-lg mx-auto mb-4">
            Не готовы принять растение прямо сейчас? Мы бесплатно подержим его в
            нашей теплице, пока вы не будете готовы. Растение будет под
            профессиональным присмотром и получит нужный уход.
          </p>
          <p className="text-gold text-xs uppercase tracking-[2px]">
            Бесплатно · До момента готовности
          </p>
        </div>
      </section>

      {/* ── Acclimation ── */}
      <section className="mx-auto max-w-5xl px-6">
        <h2
          className="text-cream text-2xl sm:text-3xl text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Инструкция по <span className="text-gold">акклиматизации</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACCLIMATION_STEPS.map((s, i) => (
            <div
              key={i}
              className="border border-gold/10 bg-forest/30 p-6 rounded-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{s.icon}</span>
                <h4
                  className="text-cream text-base"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h4>
              </div>
              <p className="text-cream/50 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

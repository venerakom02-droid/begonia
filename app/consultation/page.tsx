"use client";

import { useState } from "react";
import Link from "next/link";

/* ── Data ── */

const BENEFITS = [
  {
    icon: "🌿",
    title: "Индивидуальные рекомендации по уходу",
    desc: "Составим персональный план ухода с учётом ваших условий: освещение, влажность, температура.",
  },
  {
    icon: "🔍",
    title: "Диагностика проблем с растениями",
    desc: "Поможем определить причину болезни или увядания и подберём лечение.",
  },
  {
    icon: "🪴",
    title: "Подбор сортов под ваши условия",
    desc: "Порекомендуем сорта бегоний, которые будут чувствовать себя комфортно именно у вас.",
  },
  {
    icon: "📦",
    title: "Помощь с акклиматизацией после доставки",
    desc: "Расскажем, как правильно адаптировать растение после транспортировки.",
  },
];

const SUBJECT_OPTIONS = [
  "Уход за бегониями",
  "Проблемы с растением",
  "Подбор сорта",
  "Акклиматизация",
  "Другое",
];

const STEPS = [
  {
    num: "01",
    title: "Заявка",
    desc: "Заполните форму — опишите ваш вопрос или проблему как можно подробнее.",
  },
  {
    num: "02",
    title: "Связываемся",
    desc: "Наш специалист свяжется с вами в течение 24 часов удобным способом.",
  },
  {
    num: "03",
    title: "Консультируем",
    desc: "Проведём консультацию, дадим рекомендации и ответим на все вопросы.",
  },
];

/* ── Form state interface ── */

interface FormState {
  name: string;
  email: string;
  telegram: string;
  subject: string;
  message: string;
  agree: boolean;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  telegram: "",
  subject: "",
  message: "",
  agree: false,
};

/* ── Component ── */

export default function ConsultationPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    "w-full bg-night border border-leaf/30 px-4 py-3 text-[13px] text-cream placeholder:text-cream/30 outline-none focus:border-gold/50 transition-colors rounded-sm";

  return (
    <div className="pt-24 pb-20">
      {/* ── Hero ── */}
      {/* placeholder:hero */}

      {/* ── Two-column layout ── */}
      {/* placeholder:columns */}

      {/* ── Steps ── */}
      {/* placeholder:steps */}
    </div>
  );
}

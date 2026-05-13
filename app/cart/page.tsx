"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CONTACTS, SOCIAL_LINKS } from "@/lib/contacts";

type ContactMethod = "telegram" | "whatsapp" | "max" | "phone";

const CONTACT_METHODS: { value: ContactMethod; label: string }[] = [
  { value: "telegram", label: "Telegram" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "max", label: "Max" },
  { value: "phone", label: "Звонок" },
];

function PreorderForm() {
  const searchParams = useSearchParams();
  const presetProduct = searchParams.get("product") || "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("telegram");
  const [contactHandle, setContactHandle] = useState("");
  const [products, setProducts] = useState(presetProduct);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [agree, setAgree] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (presetProduct) setProducts(presetProduct);
  }, [presetProduct]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      setError("Подтвердите согласие на обработку персональных данных.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          contactMethod,
          contactHandle,
          products,
          city,
          address,
          comment,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Не удалось отправить заявку");
      }
      setSubmitted(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Ошибка отправки";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-28 pb-20 flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        <span className="text-6xl mb-6">🌿</span>
        <h1
          className="text-cream text-3xl sm:text-4xl mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Заявка принята
        </h1>
        <p className="text-cream/60 text-sm mb-2 max-w-md">
          Спасибо, {name || "друг"}! Мы свяжемся с вами в ближайшее время
          {contactMethod === "telegram" ? " в Telegram" : contactMethod === "whatsapp" ? " в WhatsApp" : contactMethod === "max" ? " в Max" : " по телефону"}.
        </p>
        <p className="text-cream/40 text-xs mb-8 max-w-md">
          Если ответа долго нет — напишите напрямую в Telegram
          <a
            href={`https://t.me/${CONTACTS.orderTelegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold ml-1 hover:underline"
          >
            @{CONTACTS.orderTelegram}
          </a>
        </p>
        <Link href="/catalog" className="btn-primary">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="mx-auto max-w-3xl px-6 mb-8">
        <h1
          className="text-cream text-4xl sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Оформить предзаказ
        </h1>
        <p className="text-cream/50 text-sm mt-3 leading-relaxed">
          Заполните форму — мы получим вашу заявку в Telegram и свяжемся с вами,
          подтвердим наличие и согласуем доставку. Оплата по СБП после
          подтверждения.
        </p>
        <div className="gold-line mt-6" />
      </section>

      {/* Form */}
      <section className="mx-auto max-w-3xl px-6">
        <form onSubmit={onSubmit} className="space-y-5">
          <Field label="Ваше имя" required>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              placeholder="Венера"
              autoComplete="name"
            />
          </Field>

          <Field label="Телефон" required>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              placeholder="+7 999 000-00-00"
              autoComplete="tel"
            />
          </Field>

          <Field label="Удобный способ связи" required>
            <div className="flex flex-wrap gap-2">
              {CONTACT_METHODS.map((m) => (
                <button
                  type="button"
                  key={m.value}
                  onClick={() => setContactMethod(m.value)}
                  className={`px-4 py-2 rounded-sm border text-xs uppercase tracking-[2px] transition-all duration-300 ${
                    contactMethod === m.value
                      ? "border-gold text-gold bg-gold/5"
                      : "border-gold/20 text-cream/50 hover:border-gold/50 hover:text-cream"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </Field>

          {(contactMethod === "telegram" || contactMethod === "max") && (
            <Field
              label={
                contactMethod === "telegram"
                  ? "Ваш Telegram (например @username)"
                  : "Ваш ник в Max"
              }
            >
              <input
                type="text"
                value={contactHandle}
                onChange={(e) => setContactHandle(e.target.value)}
                className="form-input"
                placeholder={contactMethod === "telegram" ? "@username" : "username"}
              />
            </Field>
          )}

          <Field label="Какие сорта вас интересуют" required>
            <textarea
              required
              value={products}
              onChange={(e) => setProducts(e.target.value)}
              className="form-input min-h-[80px]"
              placeholder="Например: Бегония Фейерверк (1 шт.), Бегония Эскарго (детка)"
              rows={3}
            />
          </Field>

          <Field label="Город" required>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-input"
              placeholder="Москва"
              autoComplete="address-level2"
            />
          </Field>

          <Field label="Адрес ПВЗ или СДЭК (если знаете)">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-input"
              placeholder="ПВЗ СДЭК, адрес или просто район"
              autoComplete="street-address"
            />
          </Field>

          <Field label="Комментарий">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="form-input min-h-[80px]"
              placeholder="Удобное время связи, пожелания по упаковке, термозащита и т.д."
              rows={3}
            />
          </Field>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1 accent-gold"
            />
            <span className="text-cream/45 text-xs leading-relaxed">
              Соглашаюсь с условиями&nbsp;
              <Link href="/offer" className="text-gold hover:underline">
                публичной оферты
              </Link>
              &nbsp;и обработкой персональных данных согласно&nbsp;
              <Link href="/privacy" className="text-gold hover:underline">
                политике конфиденциальности
              </Link>
              .
            </span>
          </label>

          {error && (
            <div className="text-red-300/90 text-sm border border-red-300/30 bg-red-900/10 px-4 py-3 rounded-sm">
              {error}
              <div className="mt-2 text-xs text-cream/50">
                Можете написать напрямую:&nbsp;
                <a
                  href={`https://t.me/${CONTACTS.orderTelegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  Telegram @{CONTACTS.orderTelegram}
                </a>
                &nbsp;·&nbsp;
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Отправляем..." : "Отправить заявку"}
          </button>
        </form>
      </section>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-cream/60 text-xs uppercase tracking-[2px] mb-2">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}

export default function CartPage() {
  return (
    <Suspense fallback={<div className="pt-28 px-6 text-cream/40">Загрузка…</div>}>
      <PreorderForm />
    </Suspense>
  );
}

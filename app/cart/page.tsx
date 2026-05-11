"use client";

import { useState } from "react";
import Link from "next/link";

/* ── Mock cart data ── */
interface CartItem {
  id: number;
  name: string;
  latinName: string;
  format: string;
  price: number;
  qty: number;
  gradient: string;
}

const INITIAL_ITEMS: CartItem[] = [
  {
    id: 1,
    name: "Бегония Эскарго",
    latinName: "Begonia rex 'Escargot'",
    format: "Детка, горшок 6 см",
    price: 1200,
    qty: 1,
    gradient: "from-moss via-forest to-sage",
  },
  {
    id: 2,
    name: "Бегония Мэсона",
    latinName: "Begonia masoniana",
    format: "Взрослое растение, горшок 12 см",
    price: 2800,
    qty: 1,
    gradient: "from-sage via-moss to-forest",
  },
];

/* placeholder: component body filled below */

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(INITIAL_ITEMS);
  const [thermal, setThermal] = useState(false);
  const [photoConfirm, setPhotoConfirm] = useState(true);
  const [promo, setPromo] = useState("");

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((it) =>
          it.id === id ? { ...it, qty: Math.max(0, it.qty + delta) } : it
        )
        .filter((it) => it.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const thermalCost = thermal ? 500 : 0;
  const total = subtotal + thermalCost;

  const formatPrice = (n: number) =>
    n.toLocaleString("ru-RU") + " ₽";

  /* ── Empty state ── */
  if (items.length === 0) {
    return (
      <div className="pt-28 pb-20 flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        <span className="text-6xl mb-6">🌿</span>
        <h1
          className="text-cream text-3xl sm:text-4xl mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ваша корзина пуста
        </h1>
        <p className="text-cream/45 text-sm mb-8 max-w-sm">
          Загляните в каталог — там вас ждут более 180 сортов декоративнолиственных
          бегоний.
        </p>
        <Link href="/catalog" className="btn-primary">
          Перейти в каталог
        </Link>
      </div>
    );
  }

  /* ── Cart with items ── */
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 mb-10">
        <h1
          className="text-cream text-4xl sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Корзина
        </h1>
        <p className="text-cream/40 text-sm mt-2">
          {items.length}{" "}
          {items.length === 1 ? "товар" : items.length < 5 ? "товара" : "товаров"}
        </p>
        <div className="gold-line mt-6" />
      </section>

      {/* Content grid */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Left: Cart items ── */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="border border-gold/15 bg-forest/30 rounded-sm p-4 sm:p-5 flex gap-4"
              >
                {/* Image placeholder */}
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-sm bg-gradient-to-br ${item.gradient}`}
                />
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-cream text-base sm:text-lg truncate"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-cream/30 text-xs italic truncate"
                    style={{ fontFamily: "var(--font-latin)" }}
                  >
                    {item.latinName}
                  </p>
                  <p className="text-cream/40 text-xs mt-1">{item.format}</p>
                  {/* Price + controls (mobile-friendly row) */}
                  <div className="flex items-center justify-between mt-3 gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center border border-gold/20 text-cream/50 text-sm hover:border-gold hover:text-gold transition-all duration-300 rounded-sm"
                      >
                        −
                      </button>
                      <span className="text-cream text-sm w-6 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center border border-gold/20 text-cream/50 text-sm hover:border-gold hover:text-gold transition-all duration-300 rounded-sm"
                      >
                        +
                      </button>
                    </div>
                    <span
                      className="text-gold text-lg"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {formatPrice(item.price * item.qty)}
                    </span>
                  </div>
                </div>
                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="self-start text-cream/20 hover:text-terra text-lg transition-colors duration-300 ml-1"
                  aria-label="Удалить"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* ── Right: Order summary (sticky) ── */}
          <div className="lg:sticky lg:top-28 self-start">
            <div className="border border-gold/20 bg-forest/40 rounded-sm p-6">
              <h2
                className="text-cream text-xl mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ваш заказ
              </h2>

              {/* Subtotal */}
              <div className="flex justify-between text-sm text-cream/50 mb-2">
                <span>Подитог</span>
                <span className="text-cream">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-cream/50 mb-4">
                <span>Доставка</span>
                <span className="text-cream/40">Рассчитывается далее</span>
              </div>

              {/* Promo */}
              <div className="mb-5">
                <label className="block text-cream/30 text-xs uppercase tracking-[1.5px] mb-2">
                  Промокод
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    placeholder="BEGONIA10"
                    className="flex-1 bg-night/60 border border-gold/15 text-cream text-sm px-3 py-2 rounded-sm placeholder:text-cream/15 focus:border-gold/40 focus:outline-none transition-colors duration-300"
                  />
                  <button className="px-3 py-2 border border-gold/25 text-gold text-xs uppercase tracking-[1px] rounded-sm hover:bg-gold/10 transition-colors duration-300">
                    ОК
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 mb-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={thermal}
                    onChange={(e) => setThermal(e.target.checked)}
                    className="mt-0.5 accent-gold"
                  />
                  <span className="text-cream/60 text-sm leading-snug group-hover:text-cream transition-colors duration-300">
                    Термоупаковка{" "}
                    <span className="text-gold">(+500 ₽)</span>
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={photoConfirm}
                    onChange={(e) => setPhotoConfirm(e.target.checked)}
                    className="mt-0.5 accent-gold"
                  />
                  <span className="text-cream/60 text-sm leading-snug group-hover:text-cream transition-colors duration-300">
                    Фото перед отправкой
                  </span>
                </label>
              </div>

              {/* Divider */}
              <div className="gold-line mb-5" />

              {/* Total */}
              <div className="flex justify-between items-baseline mb-6">
                <span className="text-cream text-sm uppercase tracking-[1px]">
                  Итого
                </span>
                <span
                  className="text-gold text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {formatPrice(total)}
                </span>
              </div>

              {/* CTA */}
              <button className="btn-primary w-full mb-5">
                Оформить заказ
              </button>

              {/* Trust badges */}
              <div className="flex justify-center gap-5 text-cream/25 text-xs">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  Безопасно
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Гарантия
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                  </svg>
                  Доставка
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

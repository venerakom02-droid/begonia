"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/data";

const PHOTO_SLUGS = new Set(["ds-rozhdenie-ognya"]);

/* ── Emoji / gradient maps ── */
const SLUG_EMOJI: Record<string, string> = {
  fireworks: "\u{1F386}", "iron-cross": "\u2720\uFE0F", escargot: "\u{1F300}", luxurians: "\u{1F334}",
  brevirimosa: "\u{1F48E}", "ds-lunnyj-svet": "\u{1F319}", "silver-limbo": "\u{1FA9E}",
  maculata: "\u26AB", listada: "\u{1F33F}", "ds-rozhdenie-ognya": "\u{1F305}",
  darthvaderiana: "\u{1F5A4}", "pavlinij-hvost": "\u{1F99A}",
};
const SLUG_GRADIENT: Record<string, string> = {
  fireworks: "from-purple-900/60 via-fuchsia-800/30 to-slate-900/60",
  "iron-cross": "from-green-900/60 via-emerald-800/40 to-stone-900/60",
  escargot: "from-emerald-900/60 via-teal-800/40 to-slate-900/60",
  luxurians: "from-lime-900/50 via-green-800/40 to-emerald-950/60",
  brevirimosa: "from-pink-900/50 via-green-900/40 to-rose-950/50",
  "ds-lunnyj-svet": "from-slate-700/60 via-blue-900/30 to-slate-800/60",
  "silver-limbo": "from-slate-700/50 via-purple-900/30 to-indigo-900/50",
  maculata: "from-green-900/60 via-red-900/20 to-emerald-950/60",
  listada: "from-green-900/60 via-lime-900/30 to-emerald-950/60",
  "ds-rozhdenie-ognya": "from-red-900/50 via-orange-800/30 to-amber-950/50",
  darthvaderiana: "from-gray-950/70 via-purple-950/30 to-black/80",
  "pavlinij-hvost": "from-blue-950/60 via-indigo-900/40 to-green-950/60",
};

const FORMAT_RU: Record<string, string> = {
  baby: "Детка", leaf: "Лист", cutting: "Черенок", adult: "Взрослое",
};

const DIFFICULTY_RU: Record<string, { label: string; color: string }> = {
  easy: { label: "Простой", color: "text-fern" },
  medium: { label: "Средний", color: "text-gold" },
  hard: { label: "Сложный", color: "text-terra" },
};

const TYPE_EMOJI: Record<string, string> = {
  rex: "\u{1F33F}", rhizomatous: "\u{1F343}", cane: "\u{1F331}",
  shrub: "\u{1F333}", species: "\u{1FAB4}", trailing: "\u{1F33A}",
};

interface Props {
  product: Product;
  similar: Product[];
  typeLabel: string;
}

export default function ProductDetailClient({ product, similar, typeLabel }: Props) {
  const [qty, setQty] = useState(1);
  const emoji = SLUG_EMOJI[product.slug] || "\u{1F33F}";
  const gradient = SLUG_GRADIENT[product.slug] || "from-moss via-forest to-night";
  const diff = DIFFICULTY_RU[product.difficulty] || { label: product.difficulty, color: "text-cream" };

  return (
    <div className="pt-20">
      {/* ── BREADCRUMBS ── */}
      <Breadcrumbs productName={product.nameRu} typeLabel={typeLabel} productType={product.type} />

      {/* ── MAIN SECTION: Photo + Info ── */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Photo placeholder */}
          <div className="relative">
            <div
              className={`aspect-square w-full bg-gradient-to-br ${gradient} flex items-center justify-center border border-leaf/20 overflow-hidden`}
            >
              {PHOTO_SLUGS.has(product.slug) ? (
                <img
                  src={product.images[0]}
                  alt={product.nameRu}
                  className="h-full w-full object-contain bg-white"
                />
              ) : (
                <span className="text-[160px] md:text-[200px] opacity-[0.2] select-none pointer-events-none">
                  {emoji}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-night/30 to-transparent pointer-events-none" />
            </div>
            {/* Badges on photo */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isRare && <span className="badge-rare">Редкий сорт</span>}
              {product.isNew && <span className="badge-new">Новинка</span>}
              {product.status === "preorder" && <span className="badge-preorder">Предзаказ</span>}
              {product.terrarium && (
                <span className="inline-block px-2.5 py-1 text-[9px] tracking-[1.5px] uppercase bg-moss/80 text-cream border border-leaf/30">
                  Террариум
                </span>
              )}
              {product.iridescent && (
                <span className="inline-block px-2.5 py-1 text-[9px] tracking-[1.5px] uppercase bg-sage/80 text-cream border border-leaf/30">
                  Переливчатый
                </span>
              )}
            </div>
          </div>

          {/* Right — Product info */}
          <div className="flex flex-col">
            {/* Type & series */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[9px] tracking-[3px] uppercase text-gold">{typeLabel}</span>
              {product.series && (
                <>
                  <span className="w-1 h-1 rounded-full bg-gold/40" />
                  <span className="text-[9px] tracking-[3px] uppercase text-cream/40">Серия {product.series}</span>
                </>
              )}
            </div>

            {/* Name */}
            <h1 className="font-display text-3xl md:text-4xl font-light mb-1">
              {product.nameRu}
            </h1>
            <p className="font-latin italic text-cream/40 text-sm mb-6">{product.nameLatin}</p>

            {/* Price block */}
            <div className="flex items-end gap-4 mb-6">
              <span className="font-display text-4xl text-gold">{product.price}&nbsp;&#8381;</span>
              {product.oldPrice && (
                <span className="text-lg text-cream/30 line-through mb-1">{product.oldPrice}&nbsp;&#8381;</span>
              )}
            </div>

            {/* Status & stock */}
            <div className="flex items-center gap-4 mb-6 text-[11px]">
              {product.status === "in-stock" && (
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-fern" />
                  <span className="text-cream/60">В наличии — {product.stock} шт.</span>
                </span>
              )}
              {product.status === "preorder" && (
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-cream/60">Предзаказ{product.preorderDate ? ` — поступление ${new Date(product.preorderDate).toLocaleDateString("ru-RU", { month: "long" })}` : ""}</span>
                </span>
              )}
              {product.status === "out-of-stock" && (
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-terra" />
                  <span className="text-cream/60">Нет в наличии</span>
                </span>
              )}
              <span className="text-cream/30">|</span>
              <span className="text-cream/40">Формат: {FORMAT_RU[product.format] || product.format}</span>
              <span className="text-cream/30">|</span>
              <span className={diff.color}>Уход: {diff.label}</span>
            </div>

            {/* Quantity + Order button */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-leaf/30">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center text-cream/50 hover:text-gold transition-colors"
                >
                  &minus;
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm border-x border-leaf/30">{qty}</span>
                <button
                  onClick={() => setQty(Math.min(product.stock, qty + 1))}
                  className="w-10 h-10 flex items-center justify-center text-cream/50 hover:text-gold transition-colors"
                >
                  +
                </button>
              </div>
              <Link
                href={`/cart?product=${encodeURIComponent(`${product.nameRu} (${FORMAT_RU[product.format] || product.format}) — ${qty} шт.`)}`}
                className="btn-primary flex-1 max-w-[320px]"
              >
                {product.status === "preorder" ? "Оформить предзаказ" : "Заказать"}&ensp;&rarr;
              </Link>
            </div>

            {/* Bonus points */}
            {product.bonusPoints > 0 && (
              <p className="text-[11px] text-cream/40 mb-8">
                + {product.bonusPoints} бонусных баллов за покупку
              </p>
            )}

            {/* Gold separator */}
            <div className="gold-line mb-8" />

            {/* Care conditions */}
            <CareConditions product={product} />
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <DescriptionSection product={product} emoji={emoji} />

      {/* ── WHAT'S IN THE BOX ── */}
      <WhatsIncluded product={product} />

      {/* ── SIMILAR PRODUCTS ── */}
      {similar.length > 0 && <SimilarProducts similar={similar} />}
    </div>
  );
}


/* ═══════════ Sub-components ═══════════ */

function Breadcrumbs({ productName, typeLabel, productType }: { productName: string; typeLabel: string; productType: string }) {
  return (
    <nav className="max-w-[1400px] mx-auto px-5 md:px-10 pt-6">
      <ol className="flex items-center flex-wrap gap-1.5 text-[11px] text-cream/40">
        <li><Link href="/" className="hover:text-gold transition-colors">Главная</Link></li>
        <li className="text-cream/20">/</li>
        <li><Link href="/catalog" className="hover:text-gold transition-colors">Каталог</Link></li>
        <li className="text-cream/20">/</li>
        <li>
          <Link href={`/catalog?type=${productType}`} className="hover:text-gold transition-colors">
            {typeLabel}
          </Link>
        </li>
        <li className="text-cream/20">/</li>
        <li className="text-cream/70">{productName}</li>
      </ol>
    </nav>
  );
}


function CareConditions({ product }: { product: Product }) {
  const items = [
    { icon: "\u2600\uFE0F", label: "Освещение", value: product.light },
    { icon: "\u{1F4A7}", label: "Полив", value: product.water },
    { icon: "\u{1F321}\uFE0F", label: "Температура", value: product.temperature },
    { icon: "\u{1F4A8}", label: "Влажность", value: product.humidity },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <div key={item.label} className="bg-forest/50 border border-leaf/20 p-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base">{item.icon}</span>
            <span className="text-[9px] tracking-[2px] uppercase text-cream/40">{item.label}</span>
          </div>
          <p className="text-[12px] text-cream/80 leading-relaxed">{item.value}</p>
        </div>
      ))}
    </div>
  );
}


function DescriptionSection({ product, emoji }: { product: Product; emoji: string }) {
  return (
    <section className="bg-forest relative">
      <div className="gold-line" />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          {/* Left — heading */}
          <div>
            <p className="text-[9px] tracking-[4px] uppercase text-gold mb-3">О сорте</p>
            <h2 className="font-display text-2xl md:text-3xl font-light mb-4">
              {product.nameRu}
            </h2>
            <p className="font-latin italic text-cream/30 text-sm mb-6">{product.nameLatin}</p>
            <span className="text-[80px] opacity-[0.08] select-none pointer-events-none block">{emoji}</span>
          </div>

          {/* Right — text */}
          <div>
            <div className="text-[14px] text-cream/70 leading-[1.8] space-y-4 mb-8">
              <p>{product.description}</p>
              <p>{product.careInstructions}</p>
              {product.petSafe === false && (
                <p className="text-terra/80 text-[12px]">
                  &#9888; Внимание: бегонии токсичны для домашних животных при попадании в пищевод. Держите растение в недоступном месте.
                </p>
              )}
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2">
              {product.mini && <FeatureTag>Миниатюрный сорт</FeatureTag>}
              {product.iridescent && <FeatureTag>Переливчатый окрас</FeatureTag>}
              {product.terrarium && <FeatureTag>Подходит для террариума</FeatureTag>}
              {product.series && <FeatureTag>Серия {product.series}</FeatureTag>}
              <FeatureTag>{DIFFICULTY_RU[product.difficulty]?.label || product.difficulty} уход</FeatureTag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1.5 text-[10px] tracking-[1px] uppercase border border-leaf/30 text-cream/50">
      {children}
    </span>
  );
}


function WhatsIncluded({ product }: { product: Product }) {
  const items = [
    {
      icon: "\u{1F33F}",
      title: FORMAT_RU[product.format] || "Растение",
      desc: product.format === "baby"
        ? "Укоренённая детка с 2-4 листьями, готовая к акклиматизации"
        : product.format === "leaf"
        ? "Здоровый лист для самостоятельного укоренения"
        : product.format === "cutting"
        ? "Стеблевой черенок с точкой роста"
        : "Взрослое растение в горшке",
    },
    {
      icon: "\u{1F4E6}",
      title: "Термоупаковка",
      desc: "Растение фиксируется в индивидуальном термобоксе для безопасной доставки",
    },
    {
      icon: "\u{1F4CB}",
      title: "Паспорт растения",
      desc: "Карточка с названием сорта, рекомендациями по уходу и QR-кодом на инструкцию",
    },
    {
      icon: "\u{1F381}",
      title: "Бонус: стикер БегоНия Venus",
      desc: "Коллекционный стикер с иллюстрацией бегонии в каждом заказе",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-24">
      <p className="text-[9px] tracking-[4px] uppercase text-gold mb-3">Комплектация</p>
      <h2 className="font-display text-2xl md:text-3xl font-light mb-10">
        Что входит в <em className="text-gold-light">посылку</em>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.title} className="bg-forest/50 border border-leaf/20 p-5 md:p-6">
            <span className="text-2xl mb-3 block">{item.icon}</span>
            <h3 className="font-display text-base mb-2">{item.title}</h3>
            <p className="text-[12px] text-cream/50 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


function SimilarProducts({ similar }: { similar: Product[] }) {
  return (
    <section className="bg-forest relative">
      <div className="gold-line" />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[9px] tracking-[4px] uppercase text-gold mb-2">Рекомендуем</p>
            <h2 className="font-display text-2xl md:text-3xl font-light">
              Похожие <em className="text-gold-light">сорта</em>
            </h2>
          </div>
          <Link href="/catalog" className="text-[10px] tracking-[2px] uppercase text-gold hover:text-gold-light transition-colors">
            Весь каталог&ensp;&rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {similar.map((p) => {
            const em = SLUG_EMOJI[p.slug] || "\u{1F33F}";
            const gr = SLUG_GRADIENT[p.slug] || "from-moss via-forest to-night";
            return (
              <Link
                key={p.id}
                href={`/catalog/${p.slug}`}
                className="group bg-night border border-leaf/20 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image area */}
                <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${gr}`}>
                  {PHOTO_SLUGS.has(p.slug) ? (
                    <img
                      src={p.images[0]}
                      alt={p.nameRu}
                      className="h-full w-full object-cover bg-white"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-[80px] opacity-[0.12] select-none pointer-events-none">
                      {em}
                    </span>
                  )}
                  {p.isRare && <span className="absolute top-3 left-3 badge-rare">Редкий</span>}
                  {!p.isRare && p.isNew && <span className="absolute top-3 left-3 badge-new">Новинка</span>}
                </div>
                {/* Info */}
                <div className="p-4 flex-1 flex flex-col">
                  <p className="font-latin italic text-[10px] text-cream/30 mb-1">{p.nameLatin}</p>
                  <h3 className="font-display text-[17px] leading-snug mb-2">{p.nameRu}</h3>
                  <div className="flex gap-3 text-[9px] text-cream/40 mb-auto">
                    <span>&#9728; {p.light.split(" ").slice(0, 2).join(" ")}</span>
                  </div>
                </div>
                {/* Footer */}
                <div className="px-4 py-3 border-t border-leaf/20 flex items-center justify-between">
                  <span className="font-display text-[21px]">{p.price}&nbsp;&#8381;</span>
                  <span className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-gold text-sm group-hover:bg-gold group-hover:text-night transition-all duration-300">
                    &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

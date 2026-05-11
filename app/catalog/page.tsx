"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products, categories, type Product } from "@/lib/data";

/* ── ProductCard ── */
function ProductCard({ product, viewMode }: { product: Product; viewMode: "grid" | "list" }) {
  const emoji = product.type === "rex" ? "\u{1F33F}" : product.type === "cane" ? "\u{1F331}" : "\u{1FAB4}";
  const grad = SLUG_GRADIENT[product.slug] || "from-green-900/60 to-night";

  if (viewMode === "list") {
    return (
      <Link
        href={`/catalog/${product.slug}`}
        className="group flex gap-4 bg-forest/40 border border-leaf/15 hover:border-gold/40 transition-all duration-300 p-3"
      >
        <div className={`w-28 h-28 shrink-0 bg-gradient-to-br ${grad} flex items-center justify-center text-4xl opacity-80`}>
          {emoji}
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
          <div>
            <p className="font-latin italic text-[10px] text-cream/30 truncate">{product.nameLatin}</p>
            <h3 className="font-display text-lg leading-snug truncate">{product.nameRu}</h3>
            <div className="flex gap-2 mt-1">
              {product.isRare && <span className="badge-rare">Редкий</span>}
              {product.isNew && <span className="badge-new">Новинка</span>}
              {product.status === "preorder" && <span className="badge-preorder">Предзаказ</span>}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="font-display text-xl">{product.price}&nbsp;&#8381;</span>
            {product.oldPrice && (
              <span className="text-[11px] text-cream/30 line-through">{product.oldPrice}&nbsp;&#8381;</span>
            )}
            <span className="text-[10px] text-cream/40 ml-auto">
              {product.stock <= 2 ? "Мало" : "В наличии"}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/catalog/${product.slug}`}
      className="group bg-forest/40 border border-leaf/15 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${grad} flex items-center justify-center`}>
        <span className="text-[72px] opacity-[0.15] select-none pointer-events-none">{emoji}</span>
        {product.isRare && <span className="absolute top-3 left-3 badge-rare">Редкий</span>}
        {!product.isRare && product.isNew && <span className="absolute top-3 left-3 badge-new">Новинка</span>}
        {!product.isRare && !product.isNew && product.stock <= 1 && product.status === "in-stock" && (
          <span className="absolute top-3 left-3 badge-last">Последний</span>
        )}
        {product.status === "preorder" && <span className="absolute top-3 left-3 badge-preorder">Предзаказ</span>}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <p className="font-latin italic text-[10px] text-cream/30 mb-1">{product.nameLatin}</p>
        <h3 className="font-display text-[17px] leading-snug mb-2">{product.nameRu}</h3>
        <div className="flex gap-3 text-[9px] text-cream/40 mb-auto">
          <span>&#9728; {product.light}</span>
          <span>&#9790; {product.temperature}</span>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-leaf/20 flex items-center justify-between">
        <div>
          <span className="font-display text-[21px]">{product.price}&nbsp;&#8381;</span>
          {product.oldPrice && (
            <span className="ml-2 text-[11px] text-cream/30 line-through">{product.oldPrice}&nbsp;&#8381;</span>
          )}
        </div>
        <span className="text-[9px] text-cream/40">{product.stock <= 2 ? "Мало" : "В наличии"}</span>
      </div>
    </Link>
  );
}

/* ── Mapping helpers ── */
const TYPE_LABELS: Record<string, string> = {
  rex: "Rex",
  rhizomatous: "Rhizomatous",
  cane: "Cane",
  shrub: "Shrub",
  species: "Species",
  trailing: "Trailing",
};

const FORMAT_LABELS: Record<string, string> = {
  baby: "Детка",
  leaf: "Лист",
  cutting: "Черенок",
  adult: "Взрослое",
};

const DIFFICULTY_LABELS: Record<string, string> = {
  easy: "Легко",
  medium: "Средне",
  hard: "Сложно",
};

const SLUG_EMOJI: Record<string, string> = {
  fireworks: "🎆",
  "iron-cross": "✝️",
  escargot: "🌀",
  luxurians: "🌴",
  brevirimosa: "💎",
  "ds-lunnyj-svet": "🌙",
  "silver-limbo": "🪞",
  maculata: "⚫",
  listada: "🌿",
  "ds-ognennyj-zakat": "🌅",
  darthvaderiana: "🖤",
  "pavlinij-hvost": "🦚",
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
  "ds-ognennyj-zakat": "from-red-900/50 via-orange-800/30 to-amber-950/50",
  darthvaderiana: "from-gray-950/70 via-purple-950/30 to-black/80",
  "pavlinij-hvost": "from-blue-950/60 via-indigo-900/40 to-green-950/60",
};

type SortKey = "popularity" | "price_asc" | "price_desc" | "new" | "name";

/* ── PLACEHOLDER: Component body ── */
export default function CatalogPage() {
  /* ── State ── */
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [selectedSpecial, setSelectedSpecial] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>("popularity");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  /* ── PLACEHOLDER: filtering logic ── */
  const filtered = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.nameRu.toLowerCase().includes(q) ||
          p.nameLatin.toLowerCase().includes(q)
      );
    }

    if (selectedTypes.length > 0) {
      result = result.filter((p) => selectedTypes.includes(p.type));
    }

    if (selectedFormat !== "all") {
      result = result.filter((p) => p.format === selectedFormat);
    }

    if (selectedAvailability === "in_stock") {
      result = result.filter((p) => p.status === "in-stock");
    } else if (selectedAvailability === "preorder") {
      result = result.filter((p) => p.status === "preorder");
    }

    if (selectedDifficulty.length > 0) {
      result = result.filter((p) => selectedDifficulty.includes(p.difficulty));
    }

    if (selectedSpecial.includes("iridescent")) result = result.filter((p) => p.iridescent);
    if (selectedSpecial.includes("mini")) result = result.filter((p) => p.mini);
    if (selectedSpecial.includes("terrarium")) result = result.filter((p) => p.terrarium);
    if (selectedSpecial.includes("new")) result = result.filter((p) => p.isNew);
    if (selectedSpecial.includes("rare")) result = result.filter((p) => p.isRare);

    switch (sortKey) {
      case "price_asc": result.sort((a, b) => a.price - b.price); break;
      case "price_desc": result.sort((a, b) => b.price - a.price); break;
      case "new": result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      case "name": result.sort((a, b) => a.nameRu.localeCompare(b.nameRu)); break;
      case "popularity":
      default: result.sort((a, b) => b.bonusPoints - a.bonusPoints); break;
    }

    return result;
  }, [search, selectedTypes, selectedFormat, selectedAvailability, selectedDifficulty, selectedSpecial, sortKey]);

  const priceRange = useMemo(() => {
    if (filtered.length === 0) return { min: 0, max: 0 };
    const prices = filtered.map((p) => p.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }, [filtered]);

  const toggleArray = (arr: string[], val: string) =>
    arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];

  const resetFilters = () => {
    setSearch("");
    setSelectedTypes([]);
    setSelectedFormat("all");
    setSelectedAvailability("all");
    setSelectedDifficulty([]);
    setSelectedSpecial([]);
  };

  /* ── PLACEHOLDER: Sidebar component ── */
  const sidebar = (
    <aside className="space-y-6">
      {/* Search */}
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск по названию..."
          className="w-full bg-forest border border-gold/30 text-cream placeholder:text-cream/30 px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
        />
      </div>

      {/* Type filter */}
      <div>
        <h3 className="text-gold uppercase tracking-[2px] text-[10px] mb-3">Тип роста</h3>
        <div className="space-y-2">
          {Object.entries(TYPE_LABELS).map(([key, label]) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedTypes.includes(key)}
                onChange={() => setSelectedTypes(toggleArray(selectedTypes, key))}
                className="sr-only peer"
              />
              <span className="w-4 h-4 border border-gold/30 flex items-center justify-center peer-checked:bg-gold peer-checked:border-gold transition-all">
                {selectedTypes.includes(key) && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-night"><polyline points="20 6 9 17 4 12" /></svg>
                )}
              </span>
              <span className="text-cream/60 text-sm group-hover:text-cream transition-colors">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Format filter */}
      <div>
        <h3 className="text-gold uppercase tracking-[2px] text-[10px] mb-3">Формат</h3>
        <div className="space-y-2">
          {[{ key: "all", label: "Все" }, ...Object.entries(FORMAT_LABELS).map(([k, l]) => ({ key: k, label: l }))].map((opt) => (
            <label key={opt.key} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="format"
                checked={selectedFormat === opt.key}
                onChange={() => setSelectedFormat(opt.key)}
                className="sr-only peer"
              />
              <span className="w-4 h-4 rounded-full border border-gold/30 flex items-center justify-center peer-checked:border-gold transition-all">
                {selectedFormat === opt.key && <span className="w-2 h-2 rounded-full bg-gold" />}
              </span>
              <span className="text-cream/60 text-sm group-hover:text-cream transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability filter */}
      <div>
        <h3 className="text-gold uppercase tracking-[2px] text-[10px] mb-3">Наличие</h3>
        <div className="space-y-2">
          {[
            { key: "all", label: "Все" },
            { key: "in_stock", label: "В наличии" },
            { key: "preorder", label: "Предзаказ" },
          ].map((opt) => (
            <label key={opt.key} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="availability"
                checked={selectedAvailability === opt.key}
                onChange={() => setSelectedAvailability(opt.key)}
                className="sr-only peer"
              />
              <span className="w-4 h-4 rounded-full border border-gold/30 flex items-center justify-center peer-checked:border-gold transition-all">
                {selectedAvailability === opt.key && <span className="w-2 h-2 rounded-full bg-gold" />}
              </span>
              <span className="text-cream/60 text-sm group-hover:text-cream transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Difficulty filter */}
      <div>
        <h3 className="text-gold uppercase tracking-[2px] text-[10px] mb-3">Сложность</h3>
        <div className="space-y-2">
          {Object.entries(DIFFICULTY_LABELS).map(([key, label]) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedDifficulty.includes(key)}
                onChange={() => setSelectedDifficulty(toggleArray(selectedDifficulty, key))}
                className="sr-only peer"
              />
              <span className="w-4 h-4 border border-gold/30 flex items-center justify-center peer-checked:bg-gold peer-checked:border-gold transition-all">
                {selectedDifficulty.includes(key) && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-night"><polyline points="20 6 9 17 4 12" /></svg>
                )}
              </span>
              <span className="text-cream/60 text-sm group-hover:text-cream transition-colors">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Special properties */}
      <div>
        <h3 className="text-gold uppercase tracking-[2px] text-[10px] mb-3">Особые свойства</h3>
        <div className="space-y-2">
          {[
            { key: "iridescent", label: "Иридесцентные" },
            { key: "mini", label: "Мини" },
            { key: "terrarium", label: "Для террариума" },
            { key: "new", label: "Новинки" },
            { key: "rare", label: "Редкие" },
          ].map((opt) => (
            <label key={opt.key} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedSpecial.includes(opt.key)}
                onChange={() => setSelectedSpecial(toggleArray(selectedSpecial, opt.key))}
                className="sr-only peer"
              />
              <span className="w-4 h-4 border border-gold/30 flex items-center justify-center peer-checked:bg-gold peer-checked:border-gold transition-all">
                {selectedSpecial.includes(opt.key) && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-night"><polyline points="20 6 9 17 4 12" /></svg>
                )}
              </span>
              <span className="text-cream/60 text-sm group-hover:text-cream transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price range display */}
      <div className="border-t border-leaf/20 pt-4">
        <h3 className="text-gold uppercase tracking-[2px] text-[10px] mb-2">Диапазон цен</h3>
        <p className="text-cream/50 text-sm">
          {filtered.length > 0
            ? `${priceRange.min.toLocaleString("ru-RU")} — ${priceRange.max.toLocaleString("ru-RU")} ₽`
            : "—"}
        </p>
      </div>

      {/* Reset button */}
      <button onClick={resetFilters} className="btn-ghost w-full text-xs py-2">
        Сбросить фильтры
      </button>
    </aside>
  );

  /* ── PLACEHOLDER: Render ── */
  return (
    <section className="min-h-screen bg-night pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ── Page header ── */}
        <div className="mb-10 text-center">
          <h1
            className="text-4xl sm:text-5xl text-cream tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Каталог бегоний
          </h1>
          <p className="mt-3 text-cream/40 text-sm">
            {products.length} сортов в коллекции
          </p>
          <div className="gold-line mt-6 mx-auto max-w-xs" />
        </div>

        {/* ── Mobile filter toggle ── */}
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="lg:hidden mb-6 btn-ghost text-xs py-2 px-5 w-full"
        >
          {mobileFiltersOpen ? "Скрыть фильтры" : "Фильтры"}
        </button>

        {/* ── Two-column layout ── */}
        <div className="flex gap-8">
          {/* Sidebar */}
          <div
            className={`${
              mobileFiltersOpen ? "block" : "hidden"
            } lg:block w-full lg:w-[280px] shrink-0`}
          >
            <div className="lg:sticky lg:top-24 bg-forest/40 border border-leaf/15 p-5">
              {sidebar}
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-leaf/15">
              <p className="text-cream/40 text-sm">
                Найдено:{" "}
                <span className="text-cream">{filtered.length}</span> сортов
              </p>

              <div className="flex items-center gap-4">
                {/* View mode toggle */}
                <div className="flex items-center gap-1 border border-leaf/20 p-0.5">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 transition-colors ${
                      viewMode === "grid"
                        ? "bg-gold text-night"
                        : "text-cream/40 hover:text-cream"
                    }`}
                    aria-label="Сетка"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 transition-colors ${
                      viewMode === "list"
                        ? "bg-gold text-night"
                        : "text-cream/40 hover:text-cream"
                    }`}
                    aria-label="Список"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3" y="4" width="18" height="3" />
                      <rect x="3" y="10.5" width="18" height="3" />
                      <rect x="3" y="17" width="18" height="3" />
                    </svg>
                  </button>
                </div>

                {/* Sort dropdown */}
                <select
                  value={sortKey}
                  onChange={(e) => setSortKey(e.target.value as SortKey)}
                  className="bg-forest border border-gold/30 text-cream text-xs px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
                >
                  <option value="popularity">По популярности</option>
                  <option value="price_asc">По цене &uarr;</option>
                  <option value="price_desc">По цене &darr;</option>
                  <option value="new">По новизне</option>
                  <option value="name">По названию</option>
                </select>
              </div>
            </div>

            {/* Product grid / list */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <span className="text-5xl mb-4">🍂</span>
                <p
                  className="text-cream/60 text-xl mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ничего не найдено
                </p>
                <p className="text-cream/30 text-sm max-w-sm">
                  Попробуйте изменить параметры поиска или сбросить фильтры
                </p>
                <button onClick={resetFilters} className="btn-ghost text-xs mt-6 py-2 px-6">
                  Сбросить фильтры
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                    : "flex flex-col gap-4"
                }
              >
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


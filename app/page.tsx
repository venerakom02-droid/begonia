import Link from "next/link";
import { products, categories, reviews, blogPosts } from "@/lib/data";

/* ───────────────────── HOME PAGE (Server Component) ───────────────────── */

export default function Home() {
  return (
    <>
      {/* ══════════ 1. HERO ══════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Photo background collage */}
        <div className="absolute inset-0 -z-10">
          {/* Three photos slightly overlapping — leaves cross boundaries */}
          <div className="absolute inset-0 flex">
            <div className="relative overflow-hidden" style={{ flex: "1 0 36%" }}>
              <img src="/collection-1.png" alt="" className="absolute inset-0 w-[115%] h-full object-cover saturate-[1.4] brightness-[1.15] contrast-[1.1]" />
            </div>
            <div className="relative overflow-hidden hidden md:block -ml-[5%]" style={{ flex: "1 0 36%" }}>
              <img src="/collection-2.png" alt="" className="absolute inset-0 w-[115%] h-full object-cover saturate-[1.4] brightness-[1.15] contrast-[1.1]" style={{ left: "-7%" }} />
            </div>
            <div className="relative overflow-hidden hidden lg:block -ml-[5%]" style={{ flex: "1 0 36%" }}>
              <img src="/collection-3.png" alt="" className="absolute inset-0 w-[115%] h-full object-cover saturate-[1.4] brightness-[1.15] contrast-[1.1]" style={{ left: "-7%" }} />
            </div>
          </div>
          {/* Spotlight effect — bright center, darker edges */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, rgba(14,20,16,0.55) 100%)" }} />
          {/* Bottom fade for text area */}
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
        </div>

        {/* Floating gold particles */}
        <div
          className="absolute w-1.5 h-1.5 rounded-full bg-gold/60 top-[20%] left-[15%] animate-bob"
        />
        <div
          className="absolute w-1 h-1 rounded-full bg-gold/40 top-[35%] right-[25%] animate-bob"
          style={{ animationDelay: "0.8s" }}
        />
        <div
          className="absolute w-2 h-2 rounded-full bg-gold/30 bottom-[30%] left-[60%] animate-bob"
          style={{ animationDelay: "1.6s" }}
        />

        {/* Decorative rings */}
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full border border-gold/[0.08] pointer-events-none hidden lg:block" />
        <div className="absolute bottom-[15%] right-[20%] w-[180px] h-[180px] rounded-full border border-gold/[0.08] pointer-events-none hidden lg:block" />

        {/* Hero content */}
        <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10 pb-16 md:pb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          {/* Left text block */}
          <div className="max-w-[600px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-gold" />
              <span className="text-[9px] text-gold tracking-[4px] uppercase font-body">
                Коллекция 2026
              </span>
            </div>

            <h1
              className="font-display font-light leading-[1.05] mb-6"
              style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
            >
              Редкие{" "}
              <em className="text-gold-light not-italic italic">Бегонии</em>
            </h1>

            <p className="font-display italic text-cream/70 text-lg md:text-xl leading-relaxed mb-10 max-w-[480px]">
              Коллекционные детки декоративнолиственных бегоний — из частной
              коллекции с доставкой по всей России
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/catalog" className="btn-primary">
                Смотреть каталог&ensp;&rarr;
              </Link>
              <Link href="/catalog?filter=rare" className="btn-ghost">
                Редкие сорта
              </Link>
            </div>
          </div>

          {/* Right stats (hidden on mobile) */}
          <div className="hidden md:flex gap-12 pb-2">
            <div className="text-right">
              <span className="block font-display text-4xl text-gold-light">180+</span>
              <span className="text-[10px] tracking-[2px] uppercase text-cream/50">сортов</span>
            </div>
            <div className="text-right">
              <span className="block font-display text-4xl text-gold-light">2400+</span>
              <span className="text-[10px] tracking-[2px] uppercase text-cream/50">отправок</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bob">
          <span className="text-[9px] tracking-[3px] uppercase text-gold/60">Листать</span>
          <span className="block w-px h-6 bg-gold/40" />
        </div>
      </section>

      {/* ══════════ 2. MARQUEE BAND ══════════ */}
      <div className="bg-sage border-y border-gold/20 py-4 overflow-hidden">
        <div className="flex animate-marquee-scroll whitespace-nowrap">
          {[0, 1].map((i) => (
            <span key={i} className="flex items-center text-[11px] tracking-[3px] uppercase text-gold/80 shrink-0">
              <span>Begonia Rex</span>
              <span className="mx-4 w-1 h-1 rounded-full bg-gold/50 inline-block" />
              <span>Бесплатная упаковка</span>
              <span className="mx-4 w-1 h-1 rounded-full bg-gold/50 inline-block" />
              <span>Доставка по России</span>
              <span className="mx-4 w-1 h-1 rounded-full bg-gold/50 inline-block" />
              <span>180+ Сортов</span>
              <span className="mx-4 w-1 h-1 rounded-full bg-gold/50 inline-block" />
              <span>Гарантия живого товара</span>
              <span className="mx-4 w-1 h-1 rounded-full bg-gold/50 inline-block" />
              <span>Begonia Masoniana</span>
              <span className="mx-4 w-1 h-1 rounded-full bg-gold/50 inline-block" />
              <span>Листовые черенки</span>
              <span className="mx-4 w-1 h-1 rounded-full bg-gold/50 inline-block" />
              <span>Коллекционные сорта</span>
              <span className="mx-4 w-1 h-1 rounded-full bg-gold/50 inline-block" />
              <span>Новинки каждый сезон</span>
              <span className="mx-4 w-1 h-1 rounded-full bg-gold/50 inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* ══════════ 3. CATEGORIES (sec 01) ══════════ */}
      <section className="py-20 md:py-32 px-5 md:px-10 max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div className="relative">
            <span className="absolute -left-2 -top-8 font-display text-[80px] leading-none text-leaf/[0.15] select-none">01</span>
            <p className="text-[9px] tracking-[4px] uppercase text-gold mb-2">Навигация по коллекции</p>
            <h2 className="font-display text-3xl md:text-4xl font-light">
              Категории <em className="text-gold-light">бегоний</em>
            </h2>
          </div>
          <Link href="/catalog" className="text-[10px] tracking-[2px] uppercase text-gold hover:text-gold-light transition-colors">
            Весь каталог&ensp;&rarr;
          </Link>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-leaf/20">
          {categories.map((cat, idx) => (
            <Link
              key={cat.slug}
              href={`/catalog?type=${cat.slug}`}
              className={`group relative overflow-hidden p-6 md:p-8 flex flex-col justify-end min-h-[180px] transition-all duration-300 hover:-translate-y-1 ${
                idx === 0 ? "sm:row-span-2 min-h-[260px] sm:min-h-full" : ""
              }`}
              style={{
                background: `radial-gradient(ellipse at 70% 30%, var(--color-moss) 0%, var(--color-night) 100%)`,
              }}
            >
              {/* Large emoji bg */}
              <span className="absolute top-4 right-4 text-[80px] leading-none opacity-[0.07] pointer-events-none select-none">
                {cat.icon}
              </span>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent pointer-events-none group-hover:from-night/90 transition-all duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <p className="font-latin italic text-[10px] text-cream/30 mb-1">{cat.nameLatin}</p>
                <h3 className="font-display text-xl md:text-2xl mb-1">{cat.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-cream/40 tracking-wider">{cat.count} сортов</span>
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════ 4. PRODUCTS (sec 02) ══════════ */}
      <section className="bg-forest relative">
        <div className="gold-line" />
        <div className="py-20 md:py-32 px-5 md:px-10 max-w-[1400px] mx-auto">
          {/* Section header */}
          <div className="relative mb-12">
            <span className="absolute -left-2 -top-8 font-display text-[80px] leading-none text-leaf/[0.15] select-none">02</span>
            <p className="text-[9px] tracking-[4px] uppercase text-gold mb-2">Свежие поступления</p>
            <h2 className="font-display text-3xl md:text-4xl font-light">
              Новинки и <em className="text-gold-light">хиты</em>
            </h2>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.slice(0, 5).map((product, idx) => (
              <Link
                key={product.id}
                href={`/catalog/${product.slug}`}
                className={`group bg-night border border-leaf/20 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                  idx === 0 ? "sm:col-span-2 sm:row-span-1" : ""
                }`}
              >
                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden" style={{
                  background: `radial-gradient(ellipse at 50% 40%, var(--color-moss) 0%, var(--color-night) 100%)`,
                }}>
                  <span className="absolute inset-0 flex items-center justify-center text-[80px] opacity-[0.12] select-none pointer-events-none">
                    {product.type === 'rex' ? '\u{1F33F}' : product.type === 'cane' ? '\u{1F331}' : '\u{1FAB4}'}
                  </span>

                  {/* Badge */}
                  {product.isRare && (
                    <span className="absolute top-3 left-3 badge-rare">Редкий</span>
                  )}
                  {!product.isRare && product.isNew && (
                    <span className="absolute top-3 left-3 badge-new">Новинка</span>
                  )}
                  {!product.isRare && !product.isNew && product.stock <= 1 && product.status === 'in-stock' && (
                    <span className="absolute top-3 left-3 badge-last">Последний</span>
                  )}
                  {product.status === 'preorder' && (
                    <span className="absolute top-3 left-3 badge-preorder">Предзаказ</span>
                  )}

                  {/* Wishlist heart */}
                  <span className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center border border-cream/20 text-cream/40 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:border-gold hover:text-gold">
                    &#9825;
                  </span>
                </div>

                {/* Product info */}
                <div className="p-4 flex-1 flex flex-col">
                  <p className="font-latin italic text-[10px] text-cream/30 mb-1">{product.nameLatin}</p>
                  <h3 className="font-display text-[17px] leading-snug mb-2">{product.nameRu}</h3>
                  <div className="flex gap-3 text-[9px] text-cream/40 mb-auto">
                    <span>&#9728; {product.light}</span>
                    <span>&#9679; {product.water}</span>
                    <span>&#9790; {product.temperature}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-leaf/20 flex items-center justify-between">
                  <div>
                    <span className="font-display text-[21px]">{product.price}&nbsp;&#8381;</span>
                    {product.oldPrice && (
                      <span className="ml-2 text-[11px] text-cream/30 line-through">{product.oldPrice}&nbsp;&#8381;</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] text-cream/40">
                      {product.stock <= 2 ? "Мало" : "В наличии"}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-gold text-sm group-hover:bg-gold group-hover:text-night transition-all duration-300">
                      +
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 5. TRUST BAND ══════════ */}
      <section className="py-16 md:py-20 px-5 md:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-leaf/20">
          {[
            { icon: "📦", title: "Бережная упаковка", desc: "Каждое растение упаковываем в термобокс с фиксацией корневой системы" },
            { icon: "🛡️", title: "Гарантия живого товара", desc: "Фото до отправки и замена при повреждении — без лишних вопросов" },
            { icon: "🚚", title: "Доставка по России и СНГ", desc: "СДЭК, Почта России, курьер — от 2 дней до вашего города" },
            { icon: "🌿", title: "Из личной коллекции", desc: "Каждое растение выращено с заботой в нашей оранжерее" },
          ].map((item) => (
            <div key={item.title} className="bg-night p-6 md:p-8 flex flex-col items-start gap-4">
              <span className="w-[46px] h-[46px] flex items-center justify-center border border-leaf/30 text-2xl">
                {item.icon}
              </span>
              <h3 className="font-display text-lg">{item.title}</h3>
              <p className="text-[12px] text-cream/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ 6. ABOUT SECTION ══════════ */}
      <section className="py-20 md:py-32 px-5 md:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left visual — photo collage */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-[460px] relative">
              {/* Main large photo */}
              <div className="relative aspect-[3/4] overflow-hidden border border-gold/20">
                <img
                  src="/collection-1.png"
                  alt="Коллекционная бегония — яркий узорчатый лист"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Two smaller photos overlapping bottom */}
              <div className="flex gap-3 mt-[-60px] md:mt-[-80px] relative z-10 px-4">
                <div className="flex-1 aspect-square overflow-hidden border border-gold/20 shadow-lg shadow-night/60">
                  <img
                    src="/collection-2.png"
                    alt="Бегония с серебристыми прожилками"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 aspect-square overflow-hidden border border-gold/20 shadow-lg shadow-night/60">
                  <img
                    src="/collection-3.png"
                    alt="Редкая декоративнолиственная бегония"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Accent box */}
              <div className="absolute top-4 -right-4 md:-right-8 bg-night/90 border border-gold/30 px-5 py-3 z-20 backdrop-blur-sm">
                <span className="block font-display text-2xl text-gold">180+</span>
                <span className="text-[9px] tracking-[2px] uppercase text-cream/50">сортов в коллекции</span>
              </div>
              {/* Gold line */}
              <div className="absolute -left-6 top-1/4 w-px h-24 bg-gold/30 hidden md:block" />
            </div>
          </div>

          {/* Right text */}
          <div>
            <p className="text-[9px] tracking-[4px] uppercase text-gold mb-4">История коллекции</p>
            <blockquote
              className="font-display italic font-light leading-snug mb-8"
              style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
            >
              &laquo;Каждый лист — это маленький мир, достойный{" "}
              <em className="text-gold-light not-italic">восхищения</em>&raquo;
            </blockquote>
            <p className="text-[13px] text-cream/60 leading-relaxed mb-8 max-w-[460px]">
              Более 7 лет мы собираем редкие и коллекционные сорта
              декоративнолиственных бегоний. Наша оранжерея — это место, где
              каждое растение получает индивидуальный уход, правильный субстрат и
              оптимальные условия для роста. Мы отправляем только здоровые,
              укоренённые детки, готовые к акклиматизации в вашем доме.
            </p>
            <div>
              <span className="font-display italic text-gold text-lg">Венера</span>
              <span className="block text-[10px] text-cream/40 tracking-[2px] uppercase mt-1">
                Основатель &middot; Коллекционер
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 7. REVIEWS (sec 03) ══════════ */}
      <section className="bg-forest relative">
        <div className="gold-line" />
        <div className="py-20 md:py-32 px-5 md:px-10 max-w-[1400px] mx-auto">
          <div className="relative mb-12">
            <span className="absolute -left-2 -top-8 font-display text-[80px] leading-none text-leaf/[0.15] select-none">03</span>
            <p className="text-[9px] tracking-[4px] uppercase text-gold mb-2">Отзывы коллекционеров</p>
            <h2 className="font-display text-3xl md:text-4xl font-light">
              Что говорят <em className="text-gold-light">наши клиенты</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-night border border-leaf/20 hover:border-gold/40 transition-all duration-300 p-6 md:p-8 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-gold text-sm">&#9733;</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-display italic text-lg leading-relaxed text-cream/80 mb-6 flex-1">
                  &laquo;{review.text}&raquo;
                </p>

                {/* Footer */}
                <div className="border-t border-leaf/20 pt-4 flex items-center justify-between">
                  <div>
                    <span className="block text-sm font-display">{review.name}</span>
                    <span className="text-[10px] text-cream/40">{review.city}</span>
                  </div>
                  <span className="text-[10px] text-cream/30 italic font-latin">{review.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 8. NEWSLETTER ══════════ */}
      <section className="py-20 md:py-32 px-5 md:px-10 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 50%, var(--color-moss) 0%, var(--color-night) 100%)",
          }}
        />
        <div className="max-w-[600px] mx-auto text-center">
          <h2
            className="font-display font-light leading-snug mb-4"
            style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
          >
            Первыми узнавайте о{" "}
            <em className="text-gold-light">новых поступлениях</em>
          </h2>
          <p className="text-[13px] text-cream/50 leading-relaxed mb-8">
            Подпишитесь на рассылку и получите скидку 10% на первый заказ. Только
            новинки, редкие сорта и советы по уходу — никакого спама.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto" onSubmit={undefined}>
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-night border border-leaf/30 px-4 py-3 text-[13px] text-cream placeholder:text-cream/30 outline-none focus:border-gold/50 transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Подписаться
            </button>
          </form>
        </div>
      </section>

      {/* ══════════ 9. HOW IT WORKS ══════════ */}
      <section className="py-20 md:py-32 px-5 md:px-10 max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-[9px] tracking-[4px] uppercase text-gold mb-2">Процесс</p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            Как это <em className="text-gold-light">работает</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4 relative">
          {[
            { num: "01", icon: "🛒", title: "Выбираете", desc: "Находите идеальную бегонию в каталоге" },
            { num: "02", icon: "📸", title: "Фото перед отправкой", desc: "Присылаем фото именно вашего растения" },
            { num: "03", icon: "📦", title: "Упаковка", desc: "Бережно упаковываем в термобокс" },
            { num: "04", icon: "🚚", title: "Доставка", desc: "Отправляем СДЭК или Почтой России" },
            { num: "05", icon: "🌱", title: "Акклиматизация", desc: "Помогаем адаптировать растение дома" },
          ].map((step, idx) => (
            <div key={step.num} className="flex flex-col items-center text-center relative">
              {/* Connector line (hidden on mobile and after last) */}
              {idx < 4 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-[calc(100%-20%)] border-t border-dashed border-gold/20" />
              )}
              <span className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-[10px] text-gold tracking-wider mb-4 relative z-10 bg-night">
                {step.num}
              </span>
              <span className="text-2xl mb-3">{step.icon}</span>
              <h3 className="font-display text-base mb-1">{step.title}</h3>
              <p className="text-[11px] text-cream/40 leading-relaxed max-w-[160px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ 10. BLOG PREVIEW ══════════ */}
      <section className="py-20 md:py-32 px-5 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-[9px] tracking-[4px] uppercase text-gold mb-2">Блог</p>
            <h2 className="font-display text-3xl md:text-4xl font-light">
              Полезные <em className="text-gold-light">статьи</em>
            </h2>
          </div>
          <Link href="/blog" className="text-[10px] tracking-[2px] uppercase text-gold hover:text-gold-light transition-colors">
            Все статьи&ensp;&rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-night border border-leaf/20 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image placeholder */}
              <div
                className="aspect-[16/9] relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, var(--color-moss) 0%, var(--color-forest) 50%, var(--color-night) 100%)",
                }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-[48px] opacity-[0.12] select-none pointer-events-none">
                  {'\u{1F33F}'}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <span className="text-[10px] text-cream/30 mb-2">
                  {new Date(post.date).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <h3 className="font-display text-lg leading-snug mb-2 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-[12px] text-cream/50 leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

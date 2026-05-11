import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Блог — BegoNia | Всё об уходе за декоративнолиственными бегониями",
  description:
    "Статьи об уходе, размножении, обзоры сортов и решение проблем. Полезные материалы для коллекционеров бегоний.",
};

const CATEGORIES = ["Все", "Уход", "Размножение", "Обзоры", "Болезни", "Топы"];

const POSTS = [
  {
    slug: "rex-care-guide",
    title: "Полное руководство по уходу за бегонией Rex",
    excerpt:
      "Освещение, полив, влажность и температура — разбираем все аспекты содержания рексовых бегоний в домашних условиях.",
    category: "Уход",
    date: "12 апреля 2026",
    gradient: "from-moss via-forest to-sage",
  },
  {
    slug: "leaf-propagation",
    title: "Размножение бегоний листом: пошаговая инструкция",
    excerpt:
      "От выбора здорового листа до укоренения и пересадки молодого растения. Пошаговый гайд с рекомендациями.",
    category: "Размножение",
    date: "28 марта 2026",
    gradient: "from-sage via-moss to-forest",
  },
  {
    slug: "top-10-easy-begonias",
    title: "Топ-10 неприхотливых бегоний для начинающих",
    excerpt:
      "Подборка самых стойких и эффектных сортов, которые простят вам ошибки в уходе и будут радовать яркой листвой.",
    category: "Топы",
    date: "15 марта 2026",
    gradient: "from-forest via-sage to-moss",
  },
  {
    slug: "yellow-leaves-causes",
    title: "Почему желтеют листья бегонии: причины и решения",
    excerpt:
      "Перелив, сухой воздух, вредители или нехватка питания? Разбираемся в причинах пожелтения и находим решение.",
    category: "Болезни",
    date: "2 марта 2026",
    gradient: "from-moss to-night via-forest",
  },
  {
    slug: "iridescent-begonias",
    title: "Иридесцентные бегонии: магия переливающихся листьев",
    excerpt:
      "Обзор сортов с металлическим и радужным блеском листьев. Pavonina, серия Metallic и другие жемчужины коллекции.",
    category: "Обзоры",
    date: "18 февраля 2026",
    gradient: "from-sage via-forest to-night",
  },
  {
    slug: "winter-preparation",
    title: "Как подготовить растение к зимнему периоду",
    excerpt:
      "Сокращение полива, досветка, защита от сухого воздуха батарей — готовим бегонии к самому сложному сезону.",
    category: "Уход",
    date: "5 февраля 2026",
    gradient: "from-forest to-sage via-moss",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20">
      {/* ── Header ── */}
      <section className="mx-auto max-w-5xl px-6 text-center mb-12">
        <p
          className="text-gold uppercase tracking-[3px] mb-4"
          style={{ fontSize: "11px" }}
        >
          Знания
        </p>
        <h1
          className="text-cream text-4xl sm:text-5xl mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Блог
        </h1>
        <p className="text-cream/50 max-w-xl mx-auto text-sm leading-relaxed">
          Всё об уходе за декоративнолиственными бегониями — статьи, руководства
          и обзоры от коллекционера с 7-летним опытом.
        </p>
        <div className="gold-line mt-10" />
      </section>

      {/* ── Category pills ── */}
      <section className="mx-auto max-w-5xl px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 text-xs uppercase tracking-[1.5px] border rounded-sm transition-all duration-300 ${
                i === 0
                  ? "bg-gold text-night border-gold"
                  : "bg-transparent text-cream/50 border-gold/20 hover:text-gold hover:border-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Blog grid ── */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {POSTS.map((post) => (
            <article
              key={post.slug}
              className="group border border-gold/10 bg-forest/30 rounded-sm overflow-hidden hover:border-gold/25 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div
                className={`aspect-[16/9] bg-gradient-to-br ${post.gradient} relative`}
              >
                <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[1.5px] bg-night/70 text-gold px-2 py-1 rounded-sm backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
              {/* Content */}
              <div className="p-6">
                <p className="text-cream/30 text-xs mb-3">{post.date}</p>
                <h2
                  className="text-cream text-xl mb-3 group-hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {post.title}
                </h2>
                <p className="text-cream/45 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gold text-xs uppercase tracking-[2px] hover:text-gold-light transition-colors duration-300"
                >
                  Читать →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

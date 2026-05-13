import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import ProductDetailClient from "./ProductDetailClient";

/* ── Static params ── */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

/* ── Metadata ── */
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return {
      title: "Сорт не найден",
      robots: { index: false, follow: false },
    };
  }

  const description = product.description.slice(0, 160);
  const url = `/catalog/${product.slug}`;
  const image = product.images[0];

  return {
    title: `${product.nameRu} — ${product.nameLatin}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${product.nameRu} — ${product.nameLatin}`,
      description,
      siteName: "БегоНия Venus",
      ...(image
        ? {
            images: [
              {
                url: image,
                width: 1200,
                height: 1200,
                alt: `Бегония «${product.nameRu}» (${product.nameLatin})`,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.nameRu} — ${product.nameLatin}`,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

/* ── Page ── */
export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <section className="min-h-screen bg-night flex items-center justify-center pt-24">
        <div className="text-center">
          <span className="text-6xl block mb-4">🍂</span>
          <h1
            className="text-3xl text-cream mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Сорт не найден
          </h1>
          <p className="text-cream/40 text-sm mb-8">
            Возможно, этот сорт был удалён или перемещён
          </p>
          <Link href="/catalog" className="btn-primary">
            Вернуться в каталог
          </Link>
        </div>
      </section>
    );
  }

  const similar = products
    .filter((p) => p.type === product.type && p.slug !== product.slug)
    .slice(0, 4);

  const typeLabel: Record<string, string> = {
    rex: "Рексовые",
    rhizomatous: "Ризоматозные",
    cane: "Тростниковые",
    shrub: "Кустовые",
    species: "Видовые",
    trailing: "Ампельные",
  };

  return (
    <ProductDetailClient
      product={product}
      similar={similar}
      typeLabel={typeLabel[product.type] || product.type}
    />
  );
}

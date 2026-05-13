import type { MetadataRoute } from "next";
import { products } from "@/lib/data";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://begonia-weld.vercel.app";

/**
 * Статические маршруты сайта.
 * `/cart` и `/api/order` намеренно не индексируем — это форма заявки и API.
 */
const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/catalog", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/care", changeFrequency: "monthly", priority: 0.6 },
  { path: "/propagation", changeFrequency: "monthly", priority: 0.5 },
  { path: "/delivery", changeFrequency: "monthly", priority: 0.6 },
  { path: "/guarantees", changeFrequency: "monthly", priority: 0.5 },
  { path: "/consultation", changeFrequency: "monthly", priority: 0.5 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.4 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.5 },
  { path: "/contacts", changeFrequency: "monthly", priority: 0.7 },
  { path: "/offer", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${SITE_URL}/catalog/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...productEntries];
}

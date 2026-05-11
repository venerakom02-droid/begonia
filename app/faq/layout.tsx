import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Частые вопросы — БегоНия Venus | FAQ по заказу и доставке бегоний",
  description:
    "Ответы на частые вопросы о заказе, доставке, оплате и уходе за коллекционными бегониями в магазине БегоНия Venus.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}

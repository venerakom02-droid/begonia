import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Частые вопросы — BegoNia | FAQ по заказу и доставке бегоний",
  description:
    "Ответы на частые вопросы о заказе, доставке, оплате и уходе за коллекционными бегониями в магазине BegoNia.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}

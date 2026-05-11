import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Консультация по уходу — BegoNia | Бесплатная онлайн-консультация",
  description:
    "Запишитесь на бесплатную онлайн-консультацию по уходу за бегониями. Индивидуальные рекомендации, диагностика проблем, подбор сортов и помощь с акклиматизацией.",
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

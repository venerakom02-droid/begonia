import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог сортов — коллекционные бегонии",
  description:
    "Каталог редких декоративнолиственных бегоний: рексы, ризоматозные, тростниковые, видовые. Описание сорта, цена, наличие, фото. Отправка по всей России.",
  alternates: {
    canonical: "/catalog",
  },
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

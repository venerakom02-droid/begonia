import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Корзина — BegoNia | Оформление заказа",
  description:
    "Ваша корзина с коллекционными бегониями. Оформите заказ с термоупаковкой и бережной доставкой по России.",
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}

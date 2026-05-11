import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Предзаказ — BegoNia | Оставьте заявку",
  description:
    "Оформите предзаказ коллекционных бегоний. Заявка отправляется напрямую в Telegram, мы свяжемся для подтверждения наличия и согласования доставки.",
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}

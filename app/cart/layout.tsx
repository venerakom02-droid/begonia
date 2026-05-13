import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Предзаказ — оставьте заявку",
  description:
    "Оформите предзаказ коллекционных бегоний. Заявка отправляется напрямую в Telegram, мы свяжемся для подтверждения наличия и согласования доставки.",
  robots: { index: false, follow: true },
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}

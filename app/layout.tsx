import type { Metadata } from "next";
import { Cormorant_Garamond, Tenor_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
});

const tenor = Tenor_Sans({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
});

const ebGaramond = EB_Garamond({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-latin",
});

export const metadata: Metadata = {
  title: "Бегония Venus — Коллекционные декоративнолиственные бегонии",
  description:
    "Редкие сортовые бегонии для коллекционеров. Рексы, ризоматозные, тростниковые и видовые бегонии — бережная доставка по России. Каталог с описанием, фото и инструкциями по уходу.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.className} ${tenor.className} ${ebGaramond.className} h-full antialiased`}
      style={
        {
          "--font-display": cormorant.style.fontFamily,
          "--font-body": tenor.style.fontFamily,
          "--font-latin": ebGaramond.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

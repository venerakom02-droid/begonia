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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://begonia-weld.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "БегоНия Venus — Коллекционные декоративнолиственные бегонии",
    template: "%s — БегоНия Venus",
  },
  description:
    "Редкие сортовые бегонии для коллекционеров. Рексы, ризоматозные, тростниковые и видовые бегонии — бережная доставка по России. Каталог с описанием, фото и инструкциями по уходу.",
  keywords: [
    "бегонии",
    "декоративнолиственные бегонии",
    "коллекционные бегонии",
    "rex begonia",
    "ризоматозная бегония",
    "тростниковая бегония",
    "редкие сорта бегоний",
    "купить бегонию",
    "доставка бегоний по России",
    "детка бегонии",
    "стартер бегонии",
  ],
  authors: [{ name: "БегоНия Venus" }],
  creator: "БегоНия Venus",
  publisher: "БегоНия Venus",
  applicationName: "БегоНия Venus",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "БегоНия Venus",
    title: "БегоНия Venus — Коллекционные декоративнолиственные бегонии",
    description:
      "Редкие сортовые бегонии для коллекционеров. Бережная доставка по России. Каталог с описанием, фото и инструкциями по уходу.",
    images: [
      {
        url: "/collection-1.png",
        width: 1200,
        height: 630,
        alt: "Коллекция декоративнолиственных бегоний БегоНия Venus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "БегоНия Venus — Коллекционные декоративнолиственные бегонии",
    description:
      "Редкие сортовые бегонии для коллекционеров. Бережная доставка по России.",
    images: ["/collection-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
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

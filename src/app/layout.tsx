import type { Metadata } from "next";
import { gtAmerica, gtAmericaCompressed } from "@/lib/fonts";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://owndays-x-meller-product-page.vercel.app");

const siteTitle =
  "商品一覧 | OWNDAYS × MELLER（メラー） 公式オンラインストア｜サングラス";
const siteDescription =
  "OWNDAYS × MELLER 商品一覧。デザイン性・機能性に優れたサステナブルな素材のサングラス（全てUV99%以上カット・偏光レンズ・傷防止コート・撥水コート）を展開中。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "商品一覧",
    "サングラス",
    "偏光レンズ",
    "Meller",
    "メラー",
    "アイウェア",
    "フレーム",
    "サステイナブ",
    "トレンド",
    "バルセロナ",
    "スペイン",
    "OWNDAYS",
    "オンデーズ",
    "オンデイズ",
  ],
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "OWNDAYS × MELLER",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/figma/hero.webp",
        alt: "OWNDAYS × MELLER",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/figma/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${gtAmerica.variable} ${gtAmericaCompressed.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}

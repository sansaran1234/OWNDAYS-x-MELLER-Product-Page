import type { Metadata } from "next";
import { gtAmerica, gtAmericaCompressed } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "商品一覧 | OWNDAYS × MELLER（メラー） 公式オンラインストア｜サングラス",
  description:
    "OWNDAYS × MELLER 商品一覧。デザイン性・機能性に優れたサステナブルな素材のサングラス（全てUV99%以上カット・偏光レンズ・傷防止コート・撥水コート）を展開中。",
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
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

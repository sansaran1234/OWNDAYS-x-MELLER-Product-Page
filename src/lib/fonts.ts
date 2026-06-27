import localFont from "next/font/local";

export const gtAmerica = localFont({
  src: [
    {
      path: "../../public/fonts/gt-america-trial-webfont/GT-America-Standard-Light-Trial.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/gt-america-trial-webfont/GT-America-Standard-Regular-Trial.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/gt-america-trial-webfont/GT-America-Standard-Medium-Trial.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/gt-america-trial-webfont/GT-America-Standard-Bold-Trial.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gt-america",
  display: "swap",
});

export const gtAmericaCompressed = localFont({
  src: [
    {
      path: "../../public/fonts/gt-america-trial-webfont/GT-America-Compressed-Bold-Trial.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/gt-america-trial-webfont/GT-America-Compressed-Black-Trial.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gt-america-compressed",
  display: "swap",
});

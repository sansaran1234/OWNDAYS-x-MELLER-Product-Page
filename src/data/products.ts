export type ProductSwatch = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  imageSrc: string;
  href: string;
  swatches: ProductSwatch[];
};

export const products: Product[] = [
  {
    id: "adisa",
    name: "ADISA",
    sku: "ML2001D-6S C1",
    price: 7800,
    imageSrc: "/images/products/adisa.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2001D-6S",
    swatches: [
      { src: "/images/figma/swatches/swatch-1.webp", alt: "Color 1" },
      { src: "/images/figma/swatches/swatch-2.webp", alt: "Color 2" },
      { src: "/images/figma/swatches/swatch-3.webp", alt: "Color 3" },
      { src: "/images/products/adisa.webp", alt: "Color 4" },
    ],
  },
  {
    id: "chauen",
    name: "CHAUEN",
    sku: "ML2002D-6S C1",
    price: 7800,
    imageSrc: "/images/products/chauen.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2002D-6S",
    swatches: [
      { src: "/images/figma/swatches/swatch-1.webp", alt: "Color 1" },
      { src: "/images/figma/swatches/swatch-2.webp", alt: "Color 2" },
      { src: "/images/figma/swatches/swatch-3.webp", alt: "Color 3" },
      { src: "/images/products/chauen.webp", alt: "Color 4" },
    ],
  },
  {
    id: "cumbi",
    name: "CUMBI",
    sku: "ML2003D-6S C1",
    price: 7800,
    imageSrc: "/images/products/cumbi.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2003D-6S",
    swatches: [
      { src: "/images/figma/swatches/swatch-1.webp", alt: "Color 1" },
      { src: "/images/figma/swatches/swatch-2.webp", alt: "Color 2" },
      { src: "/images/figma/swatches/swatch-3.webp", alt: "Color 3" },
      { src: "/images/products/cumbi.webp", alt: "Color 4" },
    ],
  },
  {
    id: "kessie",
    name: "KESSIE",
    sku: "ML2004D-6S C1",
    price: 7800,
    imageSrc: "/images/products/kessie.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2004D-6S",
    swatches: [
      { src: "/images/figma/swatches/swatch-1.webp", alt: "Color 1" },
      { src: "/images/figma/swatches/swatch-2.webp", alt: "Color 2" },
      { src: "/images/figma/swatches/swatch-3.webp", alt: "Color 3" },
      { src: "/images/products/kessie.webp", alt: "Color 4" },
    ],
  },
  {
    id: "nayah",
    name: "NAYAH",
    sku: "ML2005D-6S C1",
    price: 7800,
    imageSrc: "/images/products/nayah.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2005D-6S",
    swatches: [
      { src: "/images/figma/swatches/swatch-1.webp", alt: "Color 1" },
      { src: "/images/figma/swatches/swatch-2.webp", alt: "Color 2" },
      { src: "/images/figma/swatches/swatch-3.webp", alt: "Color 3" },
      { src: "/images/products/nayah.webp", alt: "Color 4" },
    ],
  },
  {
    id: "jamil",
    name: "JAMIL",
    sku: "ML2006D-6S C1",
    price: 7800,
    imageSrc: "/images/products/jamil.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2006D-6S",
    swatches: [
      { src: "/images/figma/swatches/swatch-1.webp", alt: "Color 1" },
      { src: "/images/figma/swatches/swatch-2.webp", alt: "Color 2" },
    ],
  },
  {
    id: "kubu",
    name: "KUBU",
    sku: "ML2007D-6S C1",
    price: 7800,
    imageSrc: "/images/products/kubu.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2007D-6S",
    swatches: [
      { src: "/images/figma/swatches/swatch-1.webp", alt: "Color 1" },
      { src: "/images/figma/swatches/swatch-2.webp", alt: "Color 2" },
    ],
  },
  {
    id: "tana",
    name: "TANA",
    sku: "ML2008D-6S C1",
    price: 7800,
    imageSrc: "/images/products/tana.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2008D-6S",
    swatches: [
      { src: "/images/figma/swatches/swatch-1.webp", alt: "Color 1" },
      { src: "/images/figma/swatches/swatch-2.webp", alt: "Color 2" },
    ],
  },
];

export const navLinks = [
  { label: "ABOUT", href: "https://meller.owndays.com/about" },
  {
    label: "PRODUCTS",
    href: "https://meller.owndays.com/products",
    active: true,
  },
  { label: "STORES", href: "https://meller.owndays.com/stores" },
] as const;

export const footerNavLinks = [
  { label: "ABOUT", href: "https://meller.owndays.com/about" },
  { label: "PRODUCTS", href: "https://meller.owndays.com/products" },
  { label: "STORES", href: "https://meller.owndays.com/stores" },
] as const;

export const footerLegalLinks = [
  { label: "Contact Us", href: "https://meller.owndays.com/contact" },
  {
    label: "Privacy Policy",
    href: "https://www.owndays.com/jp/ja/information/privacy",
  },
  {
    label: "Terms of Use",
    href: "https://www.owndays.com/jp/ja/information/terms",
  },
  {
    label: "特定商取引法表示",
    href: "https://www.owndays.com/jp/ja/information/legal",
  },
] as const;

export const onlineStoreHref = "https://www.owndays.com/jp/ja/products";
export const owndaysHref = "https://www.owndays.com/jp/ja";

export type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  imageSrc: string;
  href: string;
};

export const products: Product[] = [
  {
    id: "adisa",
    name: "ADISA",
    sku: "ML2001D-6S C1",
    price: 7800,
    imageSrc: "/images/products/adisa.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2001D-6S",
  },
  {
    id: "chauen",
    name: "CHAUEN",
    sku: "ML2002D-6S C1",
    price: 7800,
    imageSrc: "/images/products/chauen.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2002D-6S",
  },
  {
    id: "cumbi",
    name: "CUMBI",
    sku: "ML2003D-6S C1",
    price: 7800,
    imageSrc: "/images/products/cumbi.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2003D-6S",
  },
  {
    id: "kessie",
    name: "KESSIE",
    sku: "ML2004D-6S C1",
    price: 7800,
    imageSrc: "/images/products/kessie.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2004D-6S",
  },
  {
    id: "nayah",
    name: "NAYAH",
    sku: "ML2005D-6S C1",
    price: 7800,
    imageSrc: "/images/products/nayah.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2005D-6S",
  },
  {
    id: "jamil",
    name: "JAMIL",
    sku: "ML2006D-6S C1",
    price: 7800,
    imageSrc: "/images/products/jamil.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2006D-6S",
  },
  {
    id: "kubu",
    name: "KUBU",
    sku: "ML2007D-6S C1",
    price: 7800,
    imageSrc: "/images/products/kubu.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2007D-6S",
  },
  {
    id: "tana",
    name: "TANA",
    sku: "ML2008D-6S C1",
    price: 7800,
    imageSrc: "/images/products/tana.webp",
    href: "https://www.owndays.com/jp/ja/products/ML2008D-6S",
  },
];

export const navLinks = [
  { label: "ABOUT", href: "https://meller.owndays.com/about" },
  { label: "PRODUCTS", href: "https://meller.owndays.com/products" },
  { label: "STORES", href: "https://meller.owndays.com/stores" },
] as const;

export const onlineStoreHref = "https://www.owndays.com/jp/ja/products";

export type { Product, ProductSwatch } from "@/types/product";

export type SiteLink = {
  label: string;
  href?: string;
  active?: boolean;
};

export const navLinks: SiteLink[] = [
  { label: "ABOUT", href: "#about" },
  { label: "PRODUCTS", href: "#product-grid", active: true },
  { label: "STORES", href: "#stores" },
];

export const footerNavLinks: SiteLink[] = [
  { label: "ABOUT", href: "#about" },
  { label: "PRODUCTS", href: "#product-grid" },
  { label: "STORES", href: "#stores" },
];

export const footerLegalLinks = [
  { label: "Contact Us" },
  { label: "Privacy Policy" },
  { label: "Terms of Use" },
  { label: "特定商取引法表示" },
] as const;

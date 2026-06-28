export type ProductSwatch = {
  alt: string;
  label: string;
  src?: string;
  hexColor?: string;
  imageSrc: string;
  images: string[];
  sku: string;
  skuCode: string;
};

export type Product = {
  id: string;
  name: string;
  code: string;
  sku: string;
  price: number;
  imageSrc: string;
  description: string;
  frameType: string;
  swatches: ProductSwatch[];
};

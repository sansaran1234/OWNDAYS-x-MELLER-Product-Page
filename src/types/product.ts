export type ProductSwatch = {
  alt: string;
  src?: string;
  hexColor?: string;
  imageSrc: string;
  sku: string;
};

export type Product = {
  id: string;
  name: string;
  code: string;
  sku: string;
  price: number;
  imageSrc: string;
  swatches: ProductSwatch[];
};

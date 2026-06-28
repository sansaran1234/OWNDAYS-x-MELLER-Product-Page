export type ProductSwatch = {
  alt: string;
  src?: string;
  hexColor?: string;
};

export type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  imageSrc: string;
  swatches: ProductSwatch[];
};

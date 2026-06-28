export type ApiProduct = {
  id: number;
  code: string;
  name: string | null;
  model_name: string;
  lens_width: string;
  lens_height: string;
  bridge_width: string;
  temple_depth: string;
  frame_weight: string;
  is_made_in_japan: boolean;
  is_free: boolean;
  size_frame: string;
  size_range: string;
};

export type ApiProductLine = {
  id: number;
  name: string;
  slug: string;
};

export type ApiProductType = {
  id: number;
  name: string;
};

export type ApiLocalization = {
  id: number;
  language_code: string;
  name: string | null;
  description: string;
};

export type ApiNosePadType = {
  id: number;
  name: string;
};

export type ApiFrameType = {
  id: number;
  code: string;
};

export type ApiMaterial = {
  id: number;
  name: string | null;
};

export type ApiTag = {
  id: number;
  name: string;
  icon?: string | null;
};

export type ApiSellingSetting = {
  id: number;
  country_code: string;
  price: number;
  raw_price: number;
  code: string | null;
  is_published: boolean;
  status: number;
  in_stock: number;
};

export type ApiColorLocalization = {
  language_code: string;
  name: string;
};

export type ApiColor = {
  id: number;
  code: string;
  name: string;
  path: string | null;
  hex_code: string | null;
  localizations: ApiColorLocalization[];
};

export type ApiProductImage = {
  id: number;
  path: string;
  path_webp: string | null;
  order: number;
};

export type ApiSku = {
  id: number;
  code: string;
  jan_code: string;
  try_on_code: string;
  order: number;
  size: string | null;
  is_default_display: number;
  is_online_exclusive: boolean;
  colors: ApiColor[];
  images: ApiProductImage[];
  sizes: unknown[];
};

export type ApiProductItem = {
  product: ApiProduct;
  product_line: ApiProductLine;
  product_type: ApiProductType;
  localization: ApiLocalization;
  nose_pad_type: ApiNosePadType;
  frame_types: ApiFrameType[];
  materials: ApiMaterial[];
  tags: ApiTag[];
  selling_setting: ApiSellingSetting;
  skus: ApiSku[];
};

export type ProductsApiResponse = {
  success: boolean;
  message: string;
  total: number;
  not_found: string[];
  data: ApiProductItem[];
};

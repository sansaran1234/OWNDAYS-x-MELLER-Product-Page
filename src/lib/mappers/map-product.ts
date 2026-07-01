import type { Product, ProductSwatch } from "@/types/product";
import type { ApiColor, ApiProductItem, ApiSku } from "@/types/meller-products";
import { env } from "@/lib/env";

function buildAssetUrl(path: string): string {
  return `${env.owndaysAssetBaseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

function getColorLabel(color: ApiColor): string {
  const enLocalization = color.localizations.find(
    (localization) => localization.language_code === "en",
  );
  const jaLocalization = color.localizations.find(
    (localization) => localization.language_code === "ja",
  );

  return enLocalization?.name ?? jaLocalization?.name ?? color.name;
}

function getSkuImageSrcs(sku: ApiSku): string[] {
  return [...sku.images]
    .sort((a, b) => a.order - b.order)
    .map((image) => buildAssetUrl(image.path));
}

function getSkuImageSrc(sku: ApiSku): string {
  const images = getSkuImageSrcs(sku);

  if (!images[0]) {
    throw new Error(`SKU ${sku.code} is missing product images.`);
  }

  return images[0];
}

function mapSkuToSwatch(sku: ApiSku, productCode: string): ProductSwatch {
  const color = sku.colors[0];
  const alt = color ? getColorLabel(color) : sku.code;
  const imageSrc = getSkuImageSrc(sku);
  const images = getSkuImageSrcs(sku);

  const baseSwatch = {
    alt,
    label: alt.toUpperCase(),
    imageSrc,
    images,
    sku: `${productCode} ${sku.code}`,
    skuCode: sku.code,
  };

  if (color?.path) {
    return {
      ...baseSwatch,
      src: buildAssetUrl(color.path),
    };
  }

  if (color?.hex_code) {
    return {
      ...baseSwatch,
      hexColor: color.hex_code,
    };
  }

  return {
    ...baseSwatch,
    hexColor: "#cccccc",
  };
}

function getDefaultSku(item: ApiProductItem): ApiSku {
  const sortedSkus = [...item.skus].sort((a, b) => a.order - b.order);

  return (
    sortedSkus.find((sku) => sku.is_default_display === 1) ?? sortedSkus[0]
  );
}

function getFrameType(item: ApiProductItem): string {
  const frameCode = item.frame_types[0]?.code;

  return frameCode
    ? frameCode.toUpperCase()
    : item.product_type.name.toUpperCase();
}

export function mapProductItemToProduct(item: ApiProductItem): Product {
  const defaultSku = getDefaultSku(item);
  const { product, selling_setting: sellingSetting, localization } = item;
  const swatches = [...item.skus]
    .sort((a, b) => a.order - b.order)
    .map((sku) => mapSkuToSwatch(sku, product.code));

  return {
    id: String(product.id),
    name: product.model_name,
    code: product.code,
    sku: `${product.code} ${defaultSku.code}`,
    price: sellingSetting.price,
    imageSrc: getSkuImageSrc(defaultSku),
    description: localization.description,
    frameType: getFrameType(item),
    swatches,
  };
}

export function mapProductItemsToProducts(items: ApiProductItem[]): Product[] {
  return items
    .filter((item) => item.selling_setting.is_published)
    .map(mapProductItemToProduct);
}

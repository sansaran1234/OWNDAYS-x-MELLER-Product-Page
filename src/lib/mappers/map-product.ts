import type { Product, ProductSwatch } from "@/types/product";
import type { ApiColor, ApiProductItem, ApiSku } from "@/types/meller-products";
import { env } from "@/lib/env";

function buildAssetUrl(path: string): string {
  return `${env.owndaysAssetBaseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

function getColorLabel(color: ApiColor): string {
  const jaLocalization = color.localizations.find(
    (localization) => localization.language_code === "ja",
  );

  return jaLocalization?.name ?? color.name;
}

function getSkuImageSrc(sku: ApiSku): string {
  const firstImage = [...sku.images].sort((a, b) => a.order - b.order)[0];

  if (!firstImage) {
    throw new Error(`SKU ${sku.code} is missing product images.`);
  }

  return buildAssetUrl(firstImage.path);
}

function mapSkuToSwatch(sku: ApiSku, productCode: string): ProductSwatch {
  const color = sku.colors[0];
  const alt = color ? getColorLabel(color) : sku.code;
  const imageSrc = getSkuImageSrc(sku);

  if (color?.path) {
    return {
      alt,
      src: buildAssetUrl(color.path),
      imageSrc,
      sku: `${productCode} ${sku.code}`,
    };
  }

  if (color?.hex_code) {
    return {
      alt,
      hexColor: color.hex_code,
      imageSrc,
      sku: `${productCode} ${sku.code}`,
    };
  }

  return {
    alt,
    hexColor: "#cccccc",
    imageSrc,
    sku: `${productCode} ${sku.code}`,
  };
}

function getDefaultSku(item: ApiProductItem): ApiSku {
  const sortedSkus = [...item.skus].sort((a, b) => a.order - b.order);

  return (
    sortedSkus.find((sku) => sku.is_default_display === 1) ?? sortedSkus[0]
  );
}

export function mapProductItemToProduct(item: ApiProductItem): Product {
  const defaultSku = getDefaultSku(item);
  const { product, selling_setting: sellingSetting } = item;
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
    swatches,
  };
}

export function mapProductItemsToProducts(items: ApiProductItem[]): Product[] {
  return items
    .filter((item) => item.selling_setting.is_published)
    .map(mapProductItemToProduct);
}

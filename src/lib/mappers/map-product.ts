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

function mapSkuToSwatch(sku: ApiSku): ProductSwatch {
  const color = sku.colors[0];
  const alt = color ? getColorLabel(color) : sku.code;

  if (color?.path) {
    return {
      alt,
      src: buildAssetUrl(color.path),
    };
  }

  if (color?.hex_code) {
    return {
      alt,
      hexColor: color.hex_code,
    };
  }

  const firstImage = [...sku.images].sort((a, b) => a.order - b.order)[0];

  return {
    alt,
    src: firstImage ? buildAssetUrl(firstImage.path) : undefined,
    hexColor: "#cccccc",
  };
}

function getDefaultSku(item: ApiProductItem): ApiSku {
  const sortedSkus = [...item.skus].sort((a, b) => a.order - b.order);

  return (
    sortedSkus.find((sku) => sku.is_default_display === 1) ?? sortedSkus[0]
  );
}

function getPrimaryImageSrc(sku: ApiSku): string {
  const firstImage = [...sku.images].sort((a, b) => a.order - b.order)[0];

  if (!firstImage) {
    throw new Error(`SKU ${sku.code} is missing product images.`);
  }

  return buildAssetUrl(firstImage.path);
}

export function mapProductItemToProduct(item: ApiProductItem): Product {
  const defaultSku = getDefaultSku(item);
  const { product, selling_setting: sellingSetting } = item;

  return {
    id: String(product.id),
    name: product.model_name,
    sku: `${product.code} ${defaultSku.code}`,
    price: sellingSetting.price,
    imageSrc: getPrimaryImageSrc(defaultSku),
    swatches: [...item.skus]
      .sort((a, b) => a.order - b.order)
      .map(mapSkuToSwatch),
  };
}

export function mapProductItemsToProducts(items: ApiProductItem[]): Product[] {
  return items
    .filter((item) => item.selling_setting.is_published)
    .map(mapProductItemToProduct);
}

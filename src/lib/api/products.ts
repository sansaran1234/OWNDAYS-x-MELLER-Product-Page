import { apiClient } from "@/lib/api/client";
import { mapProductItemsToProducts } from "@/lib/mappers/map-product";
import type { Product } from "@/types/product";
import type {
  ApiProductItem,
  ProductsApiResponse,
} from "@/types/meller-products";

export async function fetchMellerProducts(): Promise<ApiProductItem[]> {
  const { data } = await apiClient.get<ProductsApiResponse>(
    "/meller/products.json",
  );

  if (!data.success) {
    throw new Error(data.message || "Failed to fetch products.");
  }

  return data.data;
}

export async function getProducts(): Promise<Product[]> {
  const items = await fetchMellerProducts();
  return mapProductItemsToProducts(items);
}

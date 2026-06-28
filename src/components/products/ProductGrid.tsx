"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api/products";
import type { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { NotFoundData } from "@/components/ui/notfound-data";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

const SKELETON_COUNT = 8;

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch {
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <section id="product-grid" className="bg-[#ff6723]">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-[17px] px-5 pt-16 pb-12 md:grid-cols-2 lg:grid-cols-3 lg:px-[70px] lg:pt-[130px] lg:pb-16">
        {isLoading ? (
          Array.from({ length: SKELETON_COUNT }).map((_, index) => (
            <ProductCardSkeleton key={`product-skeleton-${index}`} />
          ))
        ) : products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))
        ) : (
          <NotFoundData message="Unable to load products. Please try again later." />
        )}
      </div>
    </section>
  );
}

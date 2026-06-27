import Link from "next/link";
import { Button } from "@/components/ui/button";
import { products, onlineStoreHref } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section id="product-grid" className="bg-[#ff6723]">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-[17px] px-5 pt-16 pb-12 md:grid-cols-2 lg:grid-cols-3 lg:px-[70px] lg:pt-[130px] lg:pb-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center px-5 pb-20 lg:pb-28">
        <Button variant="allItems" size="allItems" asChild>
          <Link
            href={onlineStoreHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            ALL ITEMS
          </Link>
        </Button>
      </div>
    </section>
  );
}

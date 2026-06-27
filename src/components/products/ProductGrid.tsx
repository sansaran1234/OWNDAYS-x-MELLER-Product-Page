import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section className="bg-black">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-4 gap-y-10 px-5 pb-16 md:grid-cols-4 md:gap-x-6 md:gap-y-14 md:px-10 md:pb-24">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

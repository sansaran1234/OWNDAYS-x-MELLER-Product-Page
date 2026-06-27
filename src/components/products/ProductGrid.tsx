import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section className="bg-[#ff6723]">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-[17px] px-5 pb-20 pt-16 md:grid-cols-2 lg:grid-cols-3 lg:px-[70px] lg:pb-28 lg:pt-[130px]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

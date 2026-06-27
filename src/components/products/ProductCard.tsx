import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group">
      <Link
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
          <Image
            src={product.imageSrc}
            alt={`${product.name} ${product.sku}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>

        <div className="mt-4 space-y-1 text-center text-white md:mt-5">
          <h2 className="text-sm font-medium tracking-[0.2em] md:text-base">
            {product.name}
          </h2>
          <p className="text-[11px] tracking-[0.08em] text-white/70 md:text-xs">
            {product.sku}
          </p>
          <p className="pt-1 text-xs tracking-[0.05em] md:text-sm">
            ￥{product.price.toLocaleString("ja-JP")}
            <span className="text-white/60">+tax</span>
          </p>
        </div>
      </Link>
    </article>
  );
}

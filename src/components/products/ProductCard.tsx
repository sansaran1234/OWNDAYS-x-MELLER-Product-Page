import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { ColorSwatch } from "./ColorSwatch";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white duration-300 transition-all border-3 border-transparent hover:border-[#000000]">
      <Link
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-[472/359] bg-[#f7f7f7]">
          <Image
            src={product.imageSrc}
            alt={`${product.name} ${product.sku}`}
            fill
            className="object-contain mix-blend-multiply p-6"
            sizes="(max-width: 768px) 100vw, 422px"
          />
        </div>

        <div className="flex items-end justify-between gap-4 px-[18px] pb-[38px] pt-5">
          <div className="min-w-0 text-black">
            <h2 className="font-display text-[40px] font-black leading-none tracking-[1px] md:text-[53px]">
              {product.name}
            </h2>
            <p className="mt-3 text-base tracking-[0.7px]">{product.sku}</p>
          </div>

          <div className="flex shrink-0 flex-col items-end gap-4">
            <div className="flex items-center gap-[3px]">
              {product.swatches.map((swatch, index) => (
                <ColorSwatch key={swatch.src} swatch={swatch} selected={index === 0} />
              ))}
            </div>
            <p className="whitespace-nowrap text-black tracking-[0.86px]">
              <span className="font-medium text-[23px] leading-none">
                ¥{product.price.toLocaleString("ja-JP")}
              </span>
              <span className="text-base">+tax</span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

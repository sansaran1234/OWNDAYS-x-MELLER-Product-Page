"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  productImageVariants,
  productSkuVariants,
} from "@/lib/product-card-animation";
import type { Product } from "@/types/product";
import { ColorSwatch } from "./ColorSwatch";
import { ProductDetailSheet } from "./ProductDetailSheet";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const selectedSwatch = product.swatches[selectedIndex] ?? product.swatches[0];

  if (!selectedSwatch) {
    return null;
  }

  return (
    <>
      <article
        role="button"
        tabIndex={0}
        onClick={() => setIsDetailOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsDetailOpen(true);
          }
        }}
        className="cursor-pointer border-3 border-transparent bg-white transition-all duration-300 hover:border-[#000000]"
      >
        <div className="block">
          <div className="relative aspect-[472/359] overflow-hidden bg-[#f7f7f7]">
            {shouldReduceMotion ? (
              <Image
                src={selectedSwatch.imageSrc}
                alt={`${product.name} ${selectedSwatch.sku}`}
                fill
                className="object-cover mix-blend-multiply"
                sizes="(max-width: 768px) 100vw, 422px"
              />
            ) : (
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selectedSwatch.imageSrc}
                  className="absolute inset-0"
                  variants={productImageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Image
                    src={selectedSwatch.imageSrc}
                    alt={`${product.name} ${selectedSwatch.sku}`}
                    fill
                    className="object-cover mix-blend-multiply"
                    sizes="(max-width: 768px) 100vw, 422px"
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          <div className="flex items-end justify-between gap-4 px-[18px] pt-5 pb-[38px]">
            <div className="min-w-0 text-black">
              <h2 className="font-display text-[40px] leading-none font-black tracking-[1px] md:text-[53px]">
                {product.name}
              </h2>
              {shouldReduceMotion ? (
                <p className="mt-3 text-base tracking-[0.7px]">
                  {selectedSwatch.sku}
                </p>
              ) : (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={selectedSwatch.sku}
                    className="mt-3 text-base tracking-[0.7px]"
                    variants={productSkuVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {selectedSwatch.sku}
                  </motion.p>
                </AnimatePresence>
              )}
            </div>

            <div className="flex shrink-0 flex-col items-end gap-4">
              <div
                className="flex items-center gap-[5px]"
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
              >
                {product.swatches.map((swatch, index) => (
                  <ColorSwatch
                    key={`${swatch.sku}-${index}`}
                    swatch={swatch}
                    selected={index === selectedIndex}
                    onSelect={() => setSelectedIndex(index)}
                  />
                ))}
              </div>
              <p className="tracking-[0.86px] whitespace-nowrap text-black">
                <span className="text-[23px] leading-none font-medium">
                  ¥{product.price.toLocaleString("ja-JP")}
                </span>
                <span className="text-base">+tax</span>
              </p>
            </div>
          </div>
        </div>
      </article>

      <ProductDetailSheet
        product={product}
        open={isDetailOpen}
        onOpenChange={setIsDetailOpen}
        initialSwatchIndex={selectedIndex}
      />
    </>
  );
}

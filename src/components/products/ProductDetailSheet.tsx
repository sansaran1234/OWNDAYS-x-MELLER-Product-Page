"use client";

import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  sheetDetailItemVariants,
  sheetDetailStaggerVariants,
} from "@/lib/sheet-animation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import type { Product } from "@/types/product";
import { ColorPill } from "./ColorPill";
import { ProductDetailSpecs } from "./ProductDetailSpecs";
import { ProductImageCarousel } from "./ProductImageCarousel";

type ProductDetailSheetProps = {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialSwatchIndex?: number;
};

export function ProductDetailSheet({
  product,
  open,
  onOpenChange,
  initialSwatchIndex = 0,
}: ProductDetailSheetProps) {
  const [selectedIndex, setSelectedIndex] = useState(initialSwatchIndex);
  const shouldReduceMotion = useReducedMotion();
  const selectedSwatch = product.swatches[selectedIndex] ?? product.swatches[0];
  const ContentWrapper = shouldReduceMotion ? "div" : motion.div;
  const DetailSection = shouldReduceMotion ? "div" : motion.div;
  const detailSectionProps = shouldReduceMotion
    ? {}
    : {
        variants: sheetDetailItemVariants,
      };

  useEffect(() => {
    if (open) {
      setSelectedIndex(initialSwatchIndex);
    }
  }, [open, initialSwatchIndex]);

  if (!selectedSwatch) {
    return null;
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="scrollbar-sheet overflow-y-auto border-0 p-0">
        <SheetTitle>{product.name} product details</SheetTitle>
        <SheetDescription>
          View specifications, color options, and pricing for {product.name}.
        </SheetDescription>
        <ContentWrapper
          className="flex min-h-full flex-col"
          {...(shouldReduceMotion
            ? {}
            : {
                variants: sheetDetailStaggerVariants,
                initial: "hidden",
                animate: "visible",
              })}
        >
          <DetailSection
            {...detailSectionProps}
            className="relative min-h-[499px] shrink-0 overflow-hidden rounded-tl-[20px] bg-[#f0f0f0]"
          >
            <ProductImageCarousel
              className="absolute inset-0 z-0"
              images={selectedSwatch.images}
              alt={`${product.name} ${selectedSwatch.label}`}
              colorKey={`${product.id}-${selectedSwatch.skuCode}`}
            />

            <div className="pointer-events-none relative z-10 flex items-start justify-between px-[27px] pt-0">
              <h2 className="font-display pt-0 text-[36px] leading-[81px] font-black tracking-[1.26px] text-[#ff6723]">
                {product.name}
              </h2>
              <SheetClose className="pointer-events-auto mt-[15px] flex size-[42px] shrink-0 cursor-pointer items-center justify-center text-[#ff6723] transition-opacity hover:opacity-70">
                <X className="size-8 stroke-[2.5px]" aria-hidden />
                <span className="sr-only">Close product details</span>
              </SheetClose>
            </div>

            <div className="absolute inset-x-0 bottom-8 z-10 flex flex-wrap items-center justify-center gap-[7px] px-6">
              {product.swatches.map((swatch, index) => (
                <ColorPill
                  key={`${swatch.skuCode}-${index}`}
                  label={swatch.label}
                  selected={index === selectedIndex}
                  onSelect={() => setSelectedIndex(index)}
                />
              ))}
            </div>
          </DetailSection>

          <DetailSection
            {...detailSectionProps}
            className="flex flex-1 flex-col bg-black px-[61px] py-[30px] text-white"
          >
            <ProductDetailSpecs
              partNumber={selectedSwatch.sku}
              frameType={product.frameType}
              price={product.price}
            />

            <p className="mt-[30px] max-w-[494px] text-[14px] leading-[30px] font-medium">
              {product.description}
            </p>

            <div className="mt-[30px] flex flex-col items-center gap-[10px]">
              <Button variant="onlineStore" size="store" type="button">
                ONLINE STORE
              </Button>
              <p className="text-center text-[12px] leading-[30px] font-medium whitespace-nowrap">
                OWNDAYSオンラインストアに移動します
              </p>
            </div>
          </DetailSection>
        </ContentWrapper>
      </SheetContent>
    </Sheet>
  );
}

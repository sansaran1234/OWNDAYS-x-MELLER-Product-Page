"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { productImageVariants } from "@/lib/product-card-animation";
import { cn } from "@/lib/utils";

type ProductImageCarouselProps = {
  images: string[];
  alt: string;
  colorKey: string;
  className?: string;
};

export function ProductImageCarousel({
  images,
  alt,
  colorKey,
  className,
}: ProductImageCarouselProps) {
  const shouldReduceMotion = useReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const showPagination = images.length > 1;

  useEffect(() => {
    if (!api) {
      return;
    }

    setActiveIndex(0);
    api.scrollTo(0, true);
  }, [api, colorKey]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, images]);

  if (images.length === 0) {
    return null;
  }

  const carousel = (
    <Carousel
      key={colorKey}
      setApi={setApi}
      opts={{
        loop: false,
        align: "start",
        duration: shouldReduceMotion ? 0 : 28,
      }}
      className="h-full w-full"
    >
      <CarouselContent className="ml-0 h-full">
        {images.map((imageSrc, index) => (
          <CarouselItem
            key={`${imageSrc}-${index}`}
            className="h-full basis-full pl-0"
          >
            <div className="relative h-full w-full bg-[#f0f0f0]">
              <Image
                src={imageSrc}
                alt={`${alt} ${index + 1}`}
                fill
                className="object-cover mix-blend-multiply max-[577px]:object-contain"
                sizes="616px"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );

  const rootClassName = cn("relative h-full w-full overflow-hidden", className);

  return (
    <div className={rootClassName}>
      {shouldReduceMotion ? (
        carousel
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={colorKey}
            className="h-full w-full"
            variants={productImageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {carousel}
          </motion.div>
        </AnimatePresence>
      )}

      {showPagination ? (
        <div
          className="pointer-events-auto absolute inset-x-0 bottom-[76px] z-10 flex items-center justify-center gap-[6px] max-[577px]:bottom-[55px]"
          role="tablist"
          aria-label={`${alt} image pagination`}
        >
          {images.map((imageSrc, index) => (
            <button
              key={`pagination-${imageSrc}-${index}`}
              type="button"
              role="tab"
              aria-label={`Go to image ${index + 1}`}
              aria-selected={index === activeIndex}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-[6px] rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-6 bg-[#ff6723]"
                  : "w-[6px] bg-black/25 hover:bg-black/40",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

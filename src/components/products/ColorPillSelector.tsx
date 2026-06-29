"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { ProductSwatch } from "@/types/product";
import { ColorPill } from "./ColorPill";

type ColorPillSelectorProps = {
  swatches: ProductSwatch[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export function ColorPillSelector({
  swatches,
  selectedIndex,
  onSelect,
}: ColorPillSelectorProps) {
  const shouldReduceMotion = useReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [isMobile, setIsMobile] = useState(false);
  const selectedIndexRef = useRef(selectedIndex);
  const isProgrammaticScrollRef = useRef(false);

  useEffect(() => {
    selectedIndexRef.current = selectedIndex;
  }, [selectedIndex]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 576px)");

    const updateIsMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  useEffect(() => {
    if (!api || !isMobile) {
      return;
    }

    isProgrammaticScrollRef.current = true;
    api.scrollTo(selectedIndex, true);
  }, [api, isMobile, selectedIndex]);

  useEffect(() => {
    if (!api || !isMobile) {
      return;
    }

    const onCarouselSelect = () => {
      if (isProgrammaticScrollRef.current) {
        isProgrammaticScrollRef.current = false;
        return;
      }

      const index = api.selectedScrollSnap();

      if (index !== selectedIndexRef.current) {
        onSelect(index);
      }
    };

    api.on("select", onCarouselSelect);

    return () => {
      api.off("select", onCarouselSelect);
    };
  }, [api, isMobile, onSelect]);

  return (
    <>
      <div
        className={cn(
          "absolute inset-x-0 bottom-8 z-10 hidden items-center justify-center gap-[7px] px-6",
          "min-[577px]:flex min-[577px]:flex-wrap",
        )}
      >
        {swatches.map((swatch, index) => (
          <ColorPill
            key={`${swatch.skuCode}-${index}`}
            label={swatch.label}
            selected={index === selectedIndex}
            onSelect={() => onSelect(index)}
          />
        ))}
      </div>

      {isMobile ? (
        <div className="absolute inset-x-0 bottom-0 z-10 bg-white px-4 py-2">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              containScroll: "trimSnaps",
              loop: false,
              duration: shouldReduceMotion ? 0 : 28,
              watchDrag: (_emblaApi, event) => {
                const target = event.target;

                if (target instanceof Element && target.closest("button")) {
                  return false;
                }

                return true;
              },
            }}
          >
            <CarouselContent className="ml-0 gap-[7px]">
              {swatches.map((swatch, index) => (
                <CarouselItem
                  key={`${swatch.skuCode}-${index}`}
                  className="basis-auto pl-0"
                >
                  <ColorPill
                    label={swatch.label}
                    selected={index === selectedIndex}
                    onSelect={() => onSelect(index)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      ) : null}
    </>
  );
}

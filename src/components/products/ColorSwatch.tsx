import Image from "next/image";
import type { ProductSwatch } from "@/data/products";

type ColorSwatchProps = {
  swatch: ProductSwatch;
  selected?: boolean;
};

export function ColorSwatch({ swatch, selected = false }: ColorSwatchProps) {
  return (
    <span
      className={`relative flex size-[38px] shrink-0 items-center justify-center rounded-full ${
        selected ? "ring-1 ring-[#ff6723]" : "ring-1 ring-[#999999]"
      }`}
    >
      <span className="relative size-[28px] overflow-hidden rounded-full">
        <Image src={swatch.src} alt={swatch.alt} fill className="object-cover" sizes="28px" />
      </span>
    </span>
  );
}

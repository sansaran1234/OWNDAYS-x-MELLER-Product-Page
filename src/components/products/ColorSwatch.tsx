import Image from "next/image";
import type { ProductSwatch } from "@/types/product";

type ColorSwatchProps = {
  swatch: ProductSwatch;
  selected?: boolean;
  onSelect?: () => void;
};

export function ColorSwatch({
  swatch,
  selected = false,
  onSelect,
}: ColorSwatchProps) {
  return (
    <button
      type="button"
      aria-label={swatch.alt}
      aria-pressed={selected}
      onClick={onSelect}
      className={`relative flex size-[38px] shrink-0 cursor-pointer items-center justify-center rounded-full hover:ring-1 hover:ring-[#ff6723] ${
        selected ? "ring-1 ring-[#ff6723]" : ""
      }`}
    >
      <span className="relative size-[28px] overflow-hidden rounded-full">
        {swatch.src ? (
          <Image
            src={swatch.src}
            alt={swatch.alt}
            fill
            className="object-cover"
            sizes="28px"
          />
        ) : (
          <span
            className="block size-full"
            style={{ backgroundColor: swatch.hexColor ?? "#cccccc" }}
            aria-hidden
          />
        )}
      </span>
    </button>
  );
}

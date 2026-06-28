import type { ReactNode } from "react";

type ProductDetailSpecsProps = {
  partNumber: string;
  frameType: string;
  price: number;
};

type SpecRowProps = {
  label: string;
  value: ReactNode;
};

function SpecRow({ label, value }: SpecRowProps) {
  return (
    <div className="grid grid-cols-[96px_1fr] gap-x-2">
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
}

export function ProductDetailSpecs({
  partNumber,
  frameType,
  price,
}: ProductDetailSpecsProps) {
  return (
    <div className="space-y-[14px] text-[14px] tracking-[0.63px]">
      <SpecRow label="P/No." value={partNumber} />
      <SpecRow label="TYPE" value={frameType} />
      <SpecRow
        label="PRICE"
        value={
          <>
            <span>¥{price.toLocaleString("ja-JP")}</span>{" "}
            <span className="text-[11px]">税込</span>
          </>
        }
      />
    </div>
  );
}

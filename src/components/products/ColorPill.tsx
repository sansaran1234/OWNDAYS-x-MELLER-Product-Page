import { cn } from "@/lib/utils";

type ColorPillProps = {
  label: string;
  selected?: boolean;
  onSelect?: () => void;
  className?: string;
};

export function ColorPill({
  label,
  selected = false,
  onSelect,
  className = "",
}: ColorPillProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={cn(
        "flex h-[26px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-black px-[10px] pt-[7px] pb-[6px] text-[11px] tracking-[0.44px] whitespace-nowrap shadow-sm transition-colors",
        selected
          ? "bg-black text-white"
          : "bg-transparent text-black hover:bg-black/5",
        className,
      )}
    >
      <div className="text-shadow-md text-shadow-white/10">{label}</div>
    </button>
  );
}

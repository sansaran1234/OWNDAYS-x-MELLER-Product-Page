type ColorPillProps = {
  label: string;
  selected?: boolean;
  onSelect?: () => void;
};

export function ColorPill({
  label,
  selected = false,
  onSelect,
}: ColorPillProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={`flex h-[26px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-black px-[10px] pt-[7px] pb-[6px] text-[11px] tracking-[0.44px] whitespace-nowrap shadow-sm transition-colors ${
        selected
          ? "bg-black text-white"
          : "bg-transparent text-black hover:bg-black/5"
      }`}
    >
      <div className="text-shadow-md text-shadow-white/10">{label}</div>
    </button>
  );
}

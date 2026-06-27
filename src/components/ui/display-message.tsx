import { cn } from "@/lib/utils";

type DisplayMessageProps = {
  message: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  barClassName?: string;
  align?: "center" | "left";
};

export function DisplayMessage({
  message,
  as: Tag = "p",
  className,
  barClassName,
  align = "center",
}: DisplayMessageProps) {
  return (
    <div
      className={cn(
        "relative inline-block w-full max-w-[412px]",
        align === "center" && "mx-auto",
        className,
      )}
    >
      <div
        className={cn(
          "absolute left-[5px] top-2 h-[78px] w-[405px] max-w-[calc(100%-5px)] bg-black",
          barClassName,
        )}
        aria-hidden
      />
      <Tag
        className={cn(
          "relative font-display text-[64px] font-bold leading-none text-[#ff6723] md:text-[110px] md:leading-[110px]",
          align === "center" ? "text-center" : "text-left",
        )}
      >
        {message}
      </Tag>
    </div>
  );
}

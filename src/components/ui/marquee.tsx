import type { ComponentPropsWithoutRef } from "react";

type MarqueeProps = ComponentPropsWithoutRef<"div"> & {
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
};

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = true,
  vertical = false,
  repeat = 2,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-0 [--duration:45s] [--gap:0px] ${
        vertical ? "flex-col" : "flex-row"
      } ${className}`}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={index}
          className={`flex shrink-0 justify-around gap-(--gap) ${
            vertical
              ? "animate-marquee-vertical flex-col"
              : "animate-marquee flex-row"
          } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""} ${
            reverse ? "[animation-direction:reverse]" : ""
          }`}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

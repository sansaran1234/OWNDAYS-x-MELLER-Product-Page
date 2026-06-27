import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-bold uppercase tracking-[0.63px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        onlineStore:
          "bg-[#ff6723] text-white hover:bg-[#923b14] disabled:bg-[#d9d9d9] disabled:text-white",
        allItems: "bg-black text-white hover:bg-[#525252]",
        outOfStock: "bg-[#d9d9d9] text-white cursor-not-allowed",
        icon: "rounded-none bg-[#ff6723] text-white hover:bg-[#923b14] p-0",
        ghost: "bg-transparent text-white hover:opacity-70",
      },
      size: {
        store:
          "h-[54px] min-w-[280px] rounded-full px-10 text-base md:min-w-[373px]",
        allItems:
          "h-[70px] min-w-[320px] rounded-full px-10 text-lg md:min-w-[428px]",
        icon: "size-[70px] rounded-none",
        menu: "size-6 rounded-none p-0",
      },
    },
    defaultVariants: {
      variant: "onlineStore",
      size: "store",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

import type { Variants } from "framer-motion";

import { revealEase } from "@/lib/navbar-animation";

export const productImageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.06,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.48, ease: revealEase },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(4px)",
    transition: { duration: 0.32, ease: revealEase },
  },
};

export const productSkuVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: revealEase },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.2, ease: revealEase },
  },
};

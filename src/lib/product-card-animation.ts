import type { Variants } from "framer-motion";

import { revealEase } from "@/lib/navbar-animation";

export const productCardEase = [0.16, 1, 0.3, 1] as const;

export const productCardImageZoneVariants: Variants = {
  hidden: {},
  visible: {},
};

export const productCardRevealContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 44,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.76,
      ease: productCardEase,
      delay: index * 0.06,
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  }),
};

export const productCardCurtainVariants: Variants = {
  hidden: { y: "0%" },
  visible: {
    y: "-101%",
    transition: { duration: 0.7, ease: revealEase },
  },
};

export const productCardImageRevealVariants: Variants = {
  hidden: {
    scale: 1.16,
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.88, ease: revealEase },
  },
};

export const productCardContentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
};

export const productCardContentItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.54, ease: revealEase },
  },
};

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

export const productCardViewport = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -6% 0px",
} as const;

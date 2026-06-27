import type { Variants } from "framer-motion";

export const revealEase = [0.22, 1, 0.36, 1] as const;

export const headerVariants: Variants = {
  hidden: { y: -32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.68, ease: revealEase },
  },
};

export const rowVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.18 },
  },
};

export const logoVariants: Variants = {
  hidden: { opacity: 0, x: -36, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: revealEase },
  },
};

export const navVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
};

export const linkVariants: Variants = {
  hidden: { opacity: 0, y: -14, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: revealEase },
  },
};

export const menuVariants: Variants = {
  hidden: { opacity: 0, scale: 0.82, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.48, ease: revealEase },
  },
};

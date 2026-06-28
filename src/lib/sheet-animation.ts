import type { Variants } from "framer-motion";

import { revealEase } from "@/lib/navbar-animation";

export const sheetOverlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.42, ease: revealEase },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: revealEase, delay: 0.06 },
  },
};

export const sheetContentRightVariants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0.92,
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
  },
  visible: {
    x: 0,
    opacity: 1,
    boxShadow: "-24px 0 48px rgba(0, 0, 0, 0.18)",
    transition: { duration: 0.78, ease: revealEase },
  },
  exit: {
    x: "100%",
    opacity: 0.92,
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
    transition: { duration: 0.52, ease: revealEase },
  },
};

export const sheetContentLeftVariants: Variants = {
  hidden: { x: "-100%", opacity: 0.92 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.78, ease: revealEase },
  },
  exit: {
    x: "-100%",
    opacity: 0.92,
    transition: { duration: 0.52, ease: revealEase },
  },
};

export const sheetContentTopVariants: Variants = {
  hidden: { y: "-100%", opacity: 0.92 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.78, ease: revealEase },
  },
  exit: {
    y: "-100%",
    opacity: 0.92,
    transition: { duration: 0.52, ease: revealEase },
  },
};

export const sheetContentBottomVariants: Variants = {
  hidden: { y: "100%", opacity: 0.92 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.78, ease: revealEase },
  },
  exit: {
    y: "100%",
    opacity: 0.92,
    transition: { duration: 0.52, ease: revealEase },
  },
};

export const sheetDetailStaggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.22,
    },
  },
};

export const sheetDetailItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: revealEase },
  },
};

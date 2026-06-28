import type { Variants } from "framer-motion";

import { revealEase } from "@/lib/navbar-animation";

export const mobileMenuOverlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: revealEase },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.28, ease: revealEase },
  },
};

export const mobileMenuPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
    y: -16,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: revealEase,
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -10,
    transition: { duration: 0.3, ease: revealEase },
  },
};

export const mobileMenuLinkGroupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

export const mobileMenuLinkVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -16,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: revealEase },
  },
};

export const mobileMenuLegalGroupVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: revealEase,
      staggerChildren: 0.05,
      delayChildren: 0.22,
    },
  },
};

import type { Variants } from "framer-motion";

import { revealEase } from "@/lib/navbar-animation";

export const heroImageVariants: Variants = {
  hidden: {
    scale: 1.28,
    y: 56,
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.08, ease: revealEase, delay: 0.14 },
  },
};

export const heroCurtainVariants: Variants = {
  hidden: { y: "0%" },
  visible: {
    y: "-100%",
    transition: { duration: 0.92, ease: revealEase },
  },
};

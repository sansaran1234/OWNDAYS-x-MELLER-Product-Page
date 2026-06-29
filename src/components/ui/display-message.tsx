"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type DisplayMessageProps = {
  message: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  barClassName?: string;
  align?: "center" | "left";
  size?: "hero" | "section";
  reveal?: boolean;
  revealDelay?: number;
  revealOnce?: boolean;
};

const sizeStyles = {
  hero: {
    container: "w-full max-w-[420px] max-[768px]:w-fit",
    bar: "top-2 left-[5px] h-[78px] w-[415px] max-w-[calc(100%-5px)] max-[768px]:!h-[3rem] max-[768px]:top-[20px]",
    text: "text-[64px] md:text-[110px] md:leading-[110px]",
  },
  section: {
    container: "w-auto max-w-none",
    bar: "top-3 left-[6px] h-[80px] md:h-[114px] ",
    text: "text-[56px] max-[768px]:text-[106px] md:text-[160px] md:leading-[160px]",
  },
} as const;

const revealEase = [0.22, 1, 0.36, 1] as const;

const barVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0.45 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.72, ease: revealEase },
  },
};

const charsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.06,
    },
  },
};

const charVariants: Variants = {
  hidden: { y: "115%", opacity: 0, rotateX: -32 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.58, ease: revealEase },
  },
};

function RevealCharacters({ message }: { message: string }) {
  return (
    <motion.span
      className="inline-flex flex-wrap perspective-[900px]"
      variants={charsContainerVariants}
      aria-label={message}
    >
      {message.split("").map((char, index) => (
        <span key={`${char}-${index}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block origin-bottom"
            variants={charVariants}
            aria-hidden
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function DisplayMessage({
  message,
  as: Tag = "p",
  className,
  barClassName,
  align = "center",
  size = "hero",
  reveal = false,
  revealDelay = 0,
  revealOnce = true,
}: DisplayMessageProps) {
  const shouldReduceMotion = useReducedMotion();
  const styles = sizeStyles[size];
  const textClassName = cn(
    "font-display relative block leading-none font-bold text-[#ff6723]",
    styles.text,
    align === "center" ? "text-center" : "text-left",
  );

  const containerClassName = cn(
    "relative inline-block",
    styles.container,
    align === "center" && "mx-auto",
    className,
  );

  if (!reveal || shouldReduceMotion) {
    return (
      <div className={containerClassName}>
        <div
          className={cn("absolute bg-black", styles.bar, barClassName)}
          aria-hidden
        />
        <Tag className={textClassName}>{message}</Tag>
      </div>
    );
  }

  return (
    <motion.div
      className={containerClassName}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: revealOnce, amount: 0.35 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: revealDelay,
            staggerChildren: 0.18,
          },
        },
      }}
    >
      <motion.div
        className={cn(
          "absolute origin-left bg-black",
          styles.bar,
          barClassName,
        )}
        variants={barVariants}
        aria-hidden
      />
      <Tag className={textClassName}>
        <RevealCharacters message={message} />
      </Tag>
    </motion.div>
  );
}

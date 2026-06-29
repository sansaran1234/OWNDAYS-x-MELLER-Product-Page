"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { DisplayMessage } from "@/components/ui/display-message";
import { heroCurtainVariants, heroImageVariants } from "@/lib/hero-animation";

export function ProductsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.2]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#ff6723]">
      <div className="relative mx-auto h-[420px] w-full md:h-[633px]">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 origin-center"
            style={
              shouldReduceMotion
                ? undefined
                : {
                    y: imageY,
                    scale: imageScale,
                  }
            }
          >
            <motion.div
              className="absolute inset-0"
              initial={shouldReduceMotion ? false : "hidden"}
              animate={shouldReduceMotion ? undefined : "visible"}
              variants={heroImageVariants}
            >
              <Image
                src="/images/figma/hero.webp"
                alt=""
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </motion.div>
          </motion.div>

          {!shouldReduceMotion && (
            <motion.div
              className="pointer-events-none absolute inset-0 z-10 bg-[#ff6723]"
              initial="hidden"
              animate="visible"
              variants={heroCurtainVariants}
              aria-hidden
            />
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-5">
          <motion.div
            className="flex w-full max-w-[420px] justify-center"
            style={shouldReduceMotion ? undefined : { y: titleY }}
          >
            <DisplayMessage
              message="PRODUCTS"
              as="h1"
              reveal
              revealDelay={0.5}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

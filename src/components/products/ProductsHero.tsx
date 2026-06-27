"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#ff6723]"
    >
      <div className="relative mx-auto h-[420px] w-full md:h-[633px]">
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
          <Image
            src="/images/figma/hero.webp"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[260px] z-10 flex justify-center px-5">
        <motion.div
          className="relative w-full max-w-[412px]"
          style={shouldReduceMotion ? undefined : { y: titleY }}
        >
          <div className="absolute inset-x-0 top-4 h-[78px] bg-black" aria-hidden />
          <h1 className="relative text-center font-display text-[64px] font-bold leading-none text-[#ff6723] md:text-[110px] md:leading-[110px]">
            PRODUCTS
          </h1>
        </motion.div>
      </div>
    </section>
  );
}

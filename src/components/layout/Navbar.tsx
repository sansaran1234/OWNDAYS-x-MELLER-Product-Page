"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/products";
import {
  headerVariants,
  linkVariants,
  logoVariants,
  menuVariants,
  navVariants,
  rowVariants,
} from "@/lib/navbar-animation";

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [isOverProductGrid, setIsOverProductGrid] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const header = headerRef.current;
    const productGrid = document.getElementById("product-grid");
    if (!header || !productGrid) return;

    let frame = 0;

    const updateNavbarTheme = () => {
      const navHeight = header.offsetHeight;
      const gridTop = productGrid.getBoundingClientRect().top;
      setIsOverProductGrid(gridTop <= navHeight);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateNavbarTheme);
    };

    updateNavbarTheme();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const innerClassName = `mx-auto flex max-w-[1300px] items-center justify-between px-5 duration-300 xl:px-2 ${
    isOverProductGrid
      ? "py-4 max-[768px]:py-2 duration-300 md:py-[10px]"
      : "py-6 max-[768px]:py-4 duration-300 md:py-[25px]"
  }`;

  const headerClassName = `fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
    isOverProductGrid ? "bg-[#ff6723]" : "bg-transparent"
  }`;

  if (shouldReduceMotion) {
    return (
      <header ref={headerRef} className={headerClassName}>
        <div className={innerClassName}>
          <Link
            href="/"
            className="relative block h-[52px] w-[220px] md:w-[351px]"
          >
            <Image
              src="/images/common/logo-header.svg"
              alt="OWNDAYS × MELLER"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-[50px] md:flex"
            aria-label="Main"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href ?? "#"}
                className={`text-[15px] tracking-[0.7px] text-white uppercase transition-opacity hover:opacity-70 ${
                  link.active ? "font-bold" : "font-medium"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            type="button"
            variant="ghost"
            size="menu"
            className="relative md:hidden"
            aria-label="Open menu"
          >
            <Image
              src="/images/common/hamburger.svg"
              alt=""
              fill
              className="object-contain"
            />
          </Button>
        </div>
      </header>
    );
  }

  return (
    <motion.header
      ref={headerRef}
      className={headerClassName}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <motion.div
        className={innerClassName}
        variants={rowVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={logoVariants}>
          <Link
            href="/"
            className="relative block h-[52px] w-[220px] md:w-[351px]"
          >
            <Image
              src="/images/common/logo-header.svg"
              alt="OWNDAYS × MELLER"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </motion.div>

        <motion.nav
          className="hidden items-center gap-[50px] md:flex"
          aria-label="Main"
          variants={navVariants}
        >
          {navLinks.map((link) => (
            <motion.span
              key={link.label}
              variants={linkVariants}
              className="inline-block"
            >
              <Link
                href={link.href ?? "#"}
                className={`text-[15px] tracking-[0.7px] text-white uppercase transition-opacity hover:opacity-70 ${
                  link.active ? "font-bold" : "font-medium"
                }`}
              >
                {link.label}
              </Link>
            </motion.span>
          ))}
        </motion.nav>

        <motion.div variants={menuVariants} className="md:hidden">
          <Button
            type="button"
            variant="ghost"
            size="menu"
            className="relative"
            aria-label="Open menu"
          >
            <Image
              src="/images/common/hamburger.svg"
              alt=""
              fill
              className="object-contain"
            />
          </Button>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}

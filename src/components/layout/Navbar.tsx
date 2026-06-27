"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/products";

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [isOverProductGrid, setIsOverProductGrid] = useState(false);

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

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
        isOverProductGrid ? "bg-[#ff6723]" : "bg-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-[1300px] items-center justify-between px-5 md:px-0 duration-300 
        ${isOverProductGrid ? "py-4 md:py-[10px] duration-300" : "py-6 md:py-[25px] duration-300"}`}>
        <Link href="/" className="relative block h-[52px] w-[220px] md:w-[351px]">
          <Image
            src="/images/common/logo-header.svg"
            alt="OWNDAYS × MELLER"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-[50px] md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[15px] uppercase tracking-[0.7px] text-white transition-opacity hover:opacity-70 ${
                "active" in link && link.active ? "font-bold" : "font-medium"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative h-5 w-6 md:hidden"
          aria-label="Open menu"
        >
          <Image
            src="/images/common/hamburger.svg"
            alt=""
            fill
            className="object-contain"
          />
        </button>
      </div>
    </header>
  );
}

"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { footerLegalLinks, navLinks } from "@/data/products";
import {
  mobileMenuLegalGroupVariants,
  mobileMenuLinkGroupVariants,
  mobileMenuLinkVariants,
  mobileMenuOverlayVariants,
  mobileMenuPanelVariants,
} from "@/lib/mobile-menu-animation";

type MobileNavMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MobileNavMenu({ open, onOpenChange }: MobileNavMenuProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  if (typeof document === "undefined") {
    return null;
  }

  const menu = (
    <AnimatePresence mode="wait">
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-[5px] md:hidden"
            variants={
              shouldReduceMotion ? undefined : mobileMenuOverlayVariants
            }
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            exit={shouldReduceMotion ? undefined : "exit"}
            onClick={() => onOpenChange(false)}
          />

          <motion.div
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-[17px] top-0 right-0 bottom-0 left-0 z-[61] flex h-full w-full flex-col rounded-[10px] bg-black md:hidden"
            variants={shouldReduceMotion ? undefined : mobileMenuPanelVariants}
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            exit={shouldReduceMotion ? undefined : "exit"}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute top-[15px] right-[15px] flex size-[42px] cursor-pointer items-center justify-center text-[#ff6723] transition-opacity hover:opacity-70"
              onClick={() => onOpenChange(false)}
            >
              <X className="size-8 stroke-[2.5px]" aria-hidden />
            </button>

            <div className="flex flex-1 flex-col px-10 pt-[80px] pb-10">
              <motion.nav
                aria-label="Main"
                className="flex flex-col gap-[25px] text-lg font-bold tracking-[0.7px] text-[#ff6723] uppercase"
                variants={
                  shouldReduceMotion ? undefined : mobileMenuLinkGroupVariants
                }
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.label}
                    variants={
                      shouldReduceMotion ? undefined : mobileMenuLinkVariants
                    }
                  >
                    <Link
                      href={link.href ?? "#"}
                      className="transition-opacity hover:opacity-70"
                      onClick={() => onOpenChange(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <motion.nav
                aria-label="Legal"
                className="mt-[60px] flex flex-col gap-[15px] text-[11px] tracking-[0.7px] text-[#ff6723] uppercase"
                variants={
                  shouldReduceMotion ? undefined : mobileMenuLegalGroupVariants
                }
              >
                {footerLegalLinks.map((link, index) => (
                  <motion.span
                    key={link.label}
                    variants={
                      shouldReduceMotion ? undefined : mobileMenuLinkVariants
                    }
                    className={index === 0 ? "font-medium" : "font-bold"}
                  >
                    {link.label}
                  </motion.span>
                ))}
              </motion.nav>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );

  return createPortal(menu, document.body);
}

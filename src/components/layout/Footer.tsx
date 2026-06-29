import Image from "next/image";
import Link from "next/link";
import { footerLegalLinks, footerNavLinks } from "@/data/products";
import { ChevronRight } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-black text-[#ff6723]">
      <div className="mx-auto">
        <div className="h-px bg-[#ff6723]" aria-hidden />

        <div className="grid md:grid-cols-[65fr_35fr]">
          <div className="px-5 pt-12 pb-10 max-[768px]:p-0 md:px-[70px] md:pt-[69px] md:pb-16">
            <nav
              className="flex flex-col gap-5 text-lg font-bold tracking-[0.7px] uppercase max-[768px]:gap-0"
              aria-label="Footer"
            >
              {footerNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href ?? "#"}
                  className="border-b-[#ff6723] last:border-b-0 hover:opacity-70 max-[768px]:flex max-[768px]:items-center max-[768px]:justify-between max-[768px]:border-b max-[768px]:px-4 max-[768px]:py-4"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="min-[768px]:hidden" />
                </Link>
              ))}
            </nav>

            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block max-[768px]:hidden md:mt-[58px]"
              aria-label="Instagram"
            >
              <span className="relative block size-6">
                <Image
                  src="/images/figma/icons/instagram.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </span>
            </Link>
          </div>

          <div className="flex min-h-[200px] flex-col items-center justify-center border-t border-[#ff6723] px-5 py-12 max-[768px]:min-h-[120px] max-[768px]:flex-row max-[768px]:justify-between max-[426px]:flex-col max-[426px]:items-center max-[426px]:gap-4 md:min-h-[320px] md:border-t-0 md:border-l md:py-0">
            <div className="inline-flex items-center gap-3">
              <span className="relative block size-8 shrink-0">
                <Image
                  src="/images/figma/icons/cart.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </span>
              <span className="text-[21px] font-medium tracking-[0.7px] uppercase">
                ONLINE STORE
              </span>
            </div>

            <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium tracking-[0.7px] uppercase max-[768px]:mt-0">
              OWNDAYS.COM
              <span className="relative block size-4">
                <Image
                  src="/images/figma/icons/external.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#ff6723] px-5 py-4 max-[768px]:p-0 md:px-[70px] md:py-[15px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <nav className="flex flex-wrap gap-x-10 gap-y-2 text-[13px] tracking-[0.7px] uppercase max-[768px]:flex-col max-[768px]:items-start max-[768px]:justify-center max-[768px]:gap-4 max-[768px]:p-4">
              {footerLegalLinks.map((link, index) => (
                <span
                  key={link.label}
                  className={index === 0 ? "font-medium" : "font-bold"}
                >
                  {link.label}
                </span>
              ))}
            </nav>

            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block max-[768px]:mt-0 max-[768px]:px-4 max-[768px]:pb-4 min-[768px]:hidden md:mt-[58px]"
              aria-label="Instagram"
            >
              <span className="relative block size-6">
                <Image
                  src="/images/figma/icons/instagram.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </span>
            </Link>

            <p className="text-xs normal-case max-[768px]:border-t max-[768px]:border-[#ff6723] max-[768px]:p-4 max-[768px]:text-center md:text-right">
              COPYRIGHT (C) OWNDAYS co., ltd. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

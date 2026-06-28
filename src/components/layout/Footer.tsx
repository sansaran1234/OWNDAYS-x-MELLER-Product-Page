import Image from "next/image";
import Link from "next/link";
import { footerLegalLinks, footerNavLinks } from "@/data/products";

export function Footer() {
  return (
    <footer className="bg-black text-[#ff6723]">
      <div className="mx-auto">
        <div className="h-px bg-[#ff6723]" aria-hidden />

        <div className="grid md:grid-cols-[65fr_35fr]">
          <div className="px-5 pt-12 pb-10 md:px-[70px] md:pt-[69px] md:pb-16">
            <nav
              className="flex flex-col gap-5 text-lg font-bold tracking-[0.7px] uppercase"
              aria-label="Footer"
            >
              {footerNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href ?? "#"}
                  className="hover:opacity-70"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="https://www.instagram.com/owndays/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block md:mt-[58px]"
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

          <div className="flex min-h-[200px] flex-col items-center justify-center border-t border-[#ff6723] px-5 py-12 md:min-h-[320px] md:border-t-0 md:border-l md:py-0">
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

            <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium tracking-[0.7px] uppercase">
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

        <div className="border-t border-[#ff6723] px-5 py-4 md:px-[70px] md:py-[15px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <nav className="flex flex-wrap gap-x-10 gap-y-2 text-[13px] tracking-[0.7px] uppercase">
              {footerLegalLinks.map((link, index) => (
                <span
                  key={link.label}
                  className={index === 0 ? "font-medium" : "font-bold"}
                >
                  {link.label}
                </span>
              ))}
            </nav>

            <p className="text-xs normal-case md:text-right">
              COPYRIGHT (C) OWNDAYS co., ltd. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

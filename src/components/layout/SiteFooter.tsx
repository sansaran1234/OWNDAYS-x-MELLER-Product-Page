import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  footerLegalLinks,
  footerNavLinks,
  onlineStoreHref,
  owndaysHref,
} from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="bg-black text-[#ff6723]">
      <div className="mx-auto max-w-[1440px] px-5 pb-0 pt-16 md:px-[70px] md:pt-[68px]">
        <div className="grid gap-12 border-t border-white/20 md:grid-cols-[1fr_auto] md:gap-8">
          <div>
            <nav className="flex flex-col gap-5 text-lg font-bold uppercase tracking-[0.7px]">
              {footerNavLinks.map((link) => (
                <Link key={link.label} href={link.href} className="hover:opacity-70">
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="https://www.instagram.com/owndays/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block"
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

          <div className="md:text-right">
            <div className="mb-6 flex items-center gap-3 md:justify-end">
              <span className="relative block size-8 shrink-0">
                <Image
                  src="/images/figma/icons/cart.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </span>
              <p className="text-[21px] font-medium uppercase tracking-[0.7px]">
                ONLINE STORE
              </p>
            </div>

            <Link
              href={owndaysHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.7px] hover:opacity-70"
            >
              OWNDAYS.COM
              <span className="relative block size-4">
                <Image
                  src="/images/figma/icons/external.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-white/20 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-xs uppercase tracking-[0.7px] md:text-[13px]">
            {footerLegalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:opacity-70">
                {link.label}
              </Link>
            ))}
          </div>

          <Button variant="onlineStore" size="store" asChild>
            <Link href={onlineStoreHref} target="_blank" rel="noopener noreferrer">
              ONLINE STORE
            </Link>
          </Button>

          <p className="text-[12px] normal-case md:text-right">
            COPYRIGHT (C) OWNDAYS co., ltd. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

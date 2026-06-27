import Image from "next/image";
import Link from "next/link";
import { onlineStoreHref } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-5 py-16 md:px-10 md:py-20">
        <Link
          href={onlineStoreHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 border border-white px-10 py-4 text-xs font-medium tracking-[0.25em] text-white transition-colors hover:bg-white hover:text-black"
        >
          ONLINE STORE
          <span className="relative block h-3 w-3 transition-transform group-hover:translate-x-0.5">
            <Image
              src="/images/common/arrow-right.svg"
              alt=""
              fill
              className="object-contain"
            />
          </span>
        </Link>
      </div>
    </footer>
  );
}

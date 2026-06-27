import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/products";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 bg-transparent w-full">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-[72px] md:px-10">
        <Link href="/" className="relative block h-5 w-[180px] md:h-6 md:w-[220px]">
          <Image
            src="/images/common/logo-header.svg"
            alt="OWNDAYS × MELLER"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-[0.2em] text-white transition-opacity hover:opacity-70"
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

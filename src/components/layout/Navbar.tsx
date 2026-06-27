import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/products";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between px-5 py-6 md:px-0 md:py-[25px]">
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

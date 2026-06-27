import Image from "next/image";

export function ProductsHero() {
  return (
    <section className="relative bg-[#ff6723]">
      <div className="relative mx-auto h-[420px] w-full overflow-hidden md:h-[633px]">
        <Image
          src="/images/figma/hero.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="80vw"
        />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[260px] z-10 w-full max-w-[412px] -translate-x-1/2 px-5 md:top-[260px]">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-x-0 top-4 h-[78px] bg-black" aria-hidden />
          <h1 className="relative font-display text-[64px] font-bold leading-none text-[#ff6723] md:text-[110px] md:leading-[110px]">
            PRODUCTS
          </h1>
        </div>
      </div>
    </section>
  );
}

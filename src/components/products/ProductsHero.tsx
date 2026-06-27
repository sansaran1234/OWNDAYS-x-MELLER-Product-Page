import Image from "next/image";

export function ProductsHero() {
  return (
    <section className="relative bg-black">
      <div className="relative mx-auto aspect-[375/280] w-full md:aspect-[1400/600]">
        <Image
          src="/images/products/header-sp.webp"
          alt="PRODUCTS"
          fill
          className="object-cover md:hidden"
          priority
          sizes="100vw"
        />
        <Image
          src="/images/products/header-pc.webp"
          alt="PRODUCTS"
          fill
          className="hidden object-cover md:block"
          priority
          sizes="100vw"
        />
      </div>

      <div className="mx-auto bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[67px]">
        <h1 className="text-center text-3xl font-bold text-[#FF6723] md:text-[90px] mt-[-27px]">
          PRODUCTS
        </h1>
      </div>
    </section>
  );
}

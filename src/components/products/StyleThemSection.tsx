import Image from "next/image";
import { styleGallery } from "@/data/products";

export function StyleThemSection() {
  return (
    <section className="overflow-hidden bg-[#ff6723] pb-0">
      <div className="mx-auto max-w-[1440px] px-5 pt-10 lg:px-[70px] lg:pt-16">
        <div className="relative mb-6 lg:mb-10">
          <div className="absolute left-0 top-7 h-[78px] w-[280px] bg-black md:top-8 md:h-[112px] md:w-[422px]" aria-hidden />
          <h2 className="relative font-display text-[56px] font-bold leading-none text-[#ff6723] md:text-[160px] md:leading-[160px]">
            HOW TO
          </h2>
        </div>

        <div className="relative mb-10 lg:mb-14">
          <div className="absolute left-0 top-7 h-[78px] w-[420px] bg-black md:top-8 md:h-[112px] md:w-[665px]" aria-hidden />
          <p className="relative font-display text-[56px] font-bold leading-none text-[#ff6723] md:text-[160px] md:leading-[160px]">
            STYLE THEM
          </p>
        </div>
      </div>

      <div className="overflow-x-auto pb-0">
        <div className="flex w-max min-w-full gap-0">
          {styleGallery.map((item) => (
            <article key={item.id} className="relative h-[420px] w-[320px] shrink-0 md:h-[611px] md:w-[405px]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="405px"
              />
              <button
                type="button"
                aria-label={`Expand ${item.alt}`}
                className="absolute bottom-0 right-0 flex size-[70px] items-center justify-center bg-[#ff6723]"
              >
                <span className="relative block size-[47px]">
                  <Image
                    src="/images/figma/icons/plus.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

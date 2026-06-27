import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { marqueeGallery } from "@/data/marquee-gallery";

type SectionHeadingProps = {
  children: string;
  barClassName: string;
};

type MarqueeGalleryItemProps = {
  src: string;
  alt: string;
};

function SectionHeading({ children, barClassName }: SectionHeadingProps) {
  return (
    <div className="relative inline-block">
      <div
        className={`absolute top-7 left-[6px] h-[78px] bg-black md:top-8 md:h-[112px] ${barClassName}`}
        aria-hidden
      />
      <h2 className="font-display relative text-[56px] leading-none font-bold text-[#ff6723] md:text-[160px] md:leading-[160px]">
        {children}
      </h2>
    </div>
  );
}

function MarqueeGalleryItem({ src, alt }: MarqueeGalleryItemProps) {
  return (
    <article className="relative h-[420px] w-[320px] shrink-0 md:h-[611px] md:w-[405px]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="405px" />
      <Button
        type="button"
        variant="icon"
        size="icon"
        aria-label={`Expand ${alt}`}
        className="absolute right-0 bottom-0"
      >
        <span className="relative block size-[47px]">
          <Image
            src="/images/figma/icons/plus.svg"
            alt=""
            fill
            className="object-contain"
          />
        </span>
      </Button>
    </article>
  );
}

export function MarqueeSection() {
  return (
    <section className="overflow-hidden bg-[#ff6723] pb-0">
      <div className="px-5 pt-10 lg:px-[70px] lg:pt-16">
        <SectionHeading barClassName="w-[280px] md:w-[422px]">
          HOW TO
        </SectionHeading>
      </div>

      <div className="relative mt-6 lg:mt-10">
        <div className="relative z-20 px-5 lg:px-[70px]">
          <SectionHeading barClassName="w-[320px] md:w-[665px]">
            STYLE THEM
          </SectionHeading>
        </div>

        <div className="-mt-12 md:-mt-16 lg:-mt-20">
          <Marquee pauseOnHover={false} repeat={2} className="[--duration:60s]">
            {marqueeGallery.map((item) => (
              <MarqueeGalleryItem key={item.id} src={item.src} alt={item.alt} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

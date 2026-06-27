import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DisplayMessage } from "@/components/ui/display-message";
import { Marquee } from "@/components/ui/marquee";
import { marqueeGallery } from "@/data/marquee-gallery";

type MarqueeGalleryItemProps = {
  src: string;
  alt: string;
};

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
      <div className="relative mt-6 lg:mt-10">
        <div className="relative z-20 flex flex-col gap-0 px-5 lg:px-[70px]">
          <DisplayMessage
            message="HOW TO"
            as="h2"
            size="section"
            align="left"
            barClassName="w-[280px] md:w-[422px]"
            reveal
          />
          <DisplayMessage
            message="STYLE THEM"
            as="h2"
            size="section"
            align="left"
            barClassName="w-[320px] md:w-[665px]"
            reveal
            revealDelay={0.12}
          />
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

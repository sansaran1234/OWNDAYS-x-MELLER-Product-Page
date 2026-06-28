import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <article className="border-3 border-transparent bg-white" aria-hidden>
      <div className="relative aspect-[472/359] bg-[#f7f7f7]">
        <Skeleton className="absolute inset-6 rounded-none bg-[#dddddd]" />
      </div>

      <div className="flex items-end justify-between gap-4 px-[18px] pt-5 pb-[38px]">
        <div className="min-w-0 flex-1">
          <Skeleton className="h-[40px] w-[72%] md:h-[53px]" />
          <Skeleton className="mt-3 h-4 w-[55%]" />
        </div>

        <div className="flex shrink-0 flex-col items-end gap-4">
          <div className="flex items-center gap-[3px]">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                className="size-[38px] rounded-full bg-[#dddddd]"
              />
            ))}
          </div>
          <Skeleton className="h-6 w-24" />
        </div>
      </div>
    </article>
  );
}

import { cn } from "@/lib/utils";

type NotFoundDataProps = {
  message: string;
  className?: string;
};

export function NotFoundData({ message, className }: NotFoundDataProps) {
  return (
    <p className={cn("col-span-full py-20 text-center text-white", className)}>
      {message}
    </p>
  );
}

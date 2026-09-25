import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/utils";

type PageSectionProps = ComponentPropsWithoutRef<"section">;

export function PageSection({ className, ...props }: PageSectionProps) {
  return (
    <section
      className={cn(
        "relative flex flex-col justify-start px-10",
        "scroll-mt-24 gap-7 py-[clamp(2rem,8.5svh,10.75rem)]",
        "md:scroll-mt-20 md:gap-10 lg:gap-26",
        className,
      )}
      {...props}
    />
  );
}

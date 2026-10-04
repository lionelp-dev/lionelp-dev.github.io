import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../../lib/utils";

type PageSectionProps = ComponentPropsWithoutRef<"section"> & {
  contentClassName?: string;
};

export const PageSection = forwardRef<HTMLElement, PageSectionProps>(
  ({ className, contentClassName, children, ...props }, ref) => (
    <section ref={ref} className={cn("relative w-full", className)} {...props}>
      <div
        className={cn(
          "mx-auto flex h-full w-full max-w-[1680px] flex-col justify-start px-4.75 md:px-10",
          "gap-7 py-[var(--section-y-padding)] md:gap-10 lg:gap-26",
          contentClassName,
        )}
      >
        {children}
      </div>
    </section>
  ),
);

PageSection.displayName = "PageSection";

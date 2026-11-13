import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../../lib/utils";

type PageSectionProps = ComponentPropsWithoutRef<"section"> & {
  contentClassName?: string;
};

export const PageSection = forwardRef<HTMLElement, PageSectionProps>(
  ({ className, contentClassName, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "relative w-full scroll-mt-(--section-scroll-offset)",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto flex h-full w-full max-w-[89vw] lg:max-w-[78.385vw] flex-col justify-start gap-7 py-(--section-y-padding) md:gap-10",
          contentClassName,
        )}
      >
        {children}
      </div>
    </section>
  ),
);

PageSection.displayName = "PageSection";

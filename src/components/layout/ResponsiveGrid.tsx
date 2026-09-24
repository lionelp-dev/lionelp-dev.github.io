import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/utils";

type ResponsiveGridProps = ComponentPropsWithoutRef<"div"> & {
  columns?: "one" | "two" | "responsive";
  spacing?: "portfolio" | "compact";
};

export function ResponsiveGrid({
  className,
  columns = "one",
  spacing = "portfolio",
  ...props
}: ResponsiveGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-stretch",
        spacing === "portfolio" && "gap-y-9.75 md:gap-y-19",
        spacing === "compact" && "gap-4 md:gap-[clamp(16px,1.6vw,24px)]",
        columns === "two" && "xl:grid-cols-2",
        columns === "responsive" && "md:grid-cols-2",
        className,
      )}
      {...props}
    />
  );
}

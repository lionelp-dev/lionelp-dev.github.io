import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/utils";

type SectionHeaderProps = ComponentPropsWithoutRef<"header">;

export function SectionHeader({ className, ...props }: SectionHeaderProps) {
  return (
    <header className={cn("flex flex-col gap-0.5", className)} {...props} />
  );
}

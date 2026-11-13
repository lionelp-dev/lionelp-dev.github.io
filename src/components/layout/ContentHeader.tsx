import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/utils";

type ContentHeaderRootProps = ComponentPropsWithoutRef<"header">;
type ContentHeaderSlotProps = ComponentPropsWithoutRef<"div">;

function ContentHeaderRoot({ className, ...props }: ContentHeaderRootProps) {
  return <header className={cn("flex flex-col gap-5", className)} {...props} />;
}

function ContentHeaderTitle({ className, ...props }: ContentHeaderSlotProps) {
  return (
    <div
      className={cn("flex min-w-0 flex-col", className)}
      data-slot="content-header-title"
      {...props}
    />
  );
}

function ContentHeaderDescription({
  className,
  ...props
}: ContentHeaderSlotProps) {
  return (
    <div
      className={cn("min-w-0 font-light", className)}
      data-slot="content-header-description"
      {...props}
    />
  );
}

export const ContentHeader = Object.assign(ContentHeaderRoot, {
  Root: ContentHeaderRoot,
  Title: ContentHeaderTitle,
  Description: ContentHeaderDescription,
});

import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/utils";

const contentHeaderVariants = cva("flex flex-col", {
  variants: {
    variant: {
      section: "gap-3 [&>[data-slot=content-header-eyebrow]]:-mb-2",
      content: "gap-4.5",
    },
  },
  defaultVariants: {
    variant: "section",
  },
});

type ContentHeaderRootProps = ComponentPropsWithoutRef<"header"> &
  VariantProps<typeof contentHeaderVariants>;
type ContentHeaderSlotProps = ComponentPropsWithoutRef<"div">;

function ContentHeaderRoot({
  className,
  variant,
  ...props
}: ContentHeaderRootProps) {
  return (
    <header
      className={cn(contentHeaderVariants({ variant }), className)}
      data-variant={variant}
      {...props}
    />
  );
}

function ContentHeaderEyebrow({ className, ...props }: ContentHeaderSlotProps) {
  return (
    <div className={className} data-slot="content-header-eyebrow" {...props} />
  );
}

function ContentHeaderTitle({ className, ...props }: ContentHeaderSlotProps) {
  return (
    <div
      className={cn("min-w-0", className)}
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
      className={cn("min-w-0", className)}
      data-slot="content-header-description"
      {...props}
    />
  );
}

export const ContentHeader = Object.assign(ContentHeaderRoot, {
  Root: ContentHeaderRoot,
  Eyebrow: ContentHeaderEyebrow,
  Title: ContentHeaderTitle,
  Description: ContentHeaderDescription,
});

import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      "hero-title":
        "flex flex-col font-normal font-serif-display text-5xl text-base-content leading-[0.855] tracking-[-0.08975em] md:text-7xl lg:text-[11em]",
      "section-title":
        "font-bold font-serif-display text-4xl text-base-content/85 leading-9.25 -tracking-[0.0575em] md:text-5xl md:leading-tight",
      "footer-title":
        "flex flex-col font-normal font-serif-display text-2xl text-secondary-content leading-9 tracking-[-0.0775em] md:text-[clamp(3.75rem,6.75vw,5.75rem)] md:leading-19.75",
      "project-hero-title":
        "font-bold font-serif-display text-5xl text-base-content leading-18.75 tracking-[-0.0975em] md:text-6xl lg:text-[clamp(3.75rem,5.75vw,5.75rem)]",
      "project-title":
        "card-title flex w-full items-end font-bold text-base-content/85 leading-tight tracking-[-0.0675em] md:text-3xl",
      "feature-title":
        "text-base-content/85 text-xl leading-tight tracking-[-0.0425em] md:text-3xl",
      body: "font-normal leading-normal",
      "body-sm": "font-normal leading-normal",
      "section-subtitle":
        "font-normal text-base-content/70 leading-normal tracking-[-0.04975em] md:text-2xl",
      meta: "font-normal text-base text-base-content/80 leading-tight tracking-[-0.0275em]",
      label: "leading-tight",
      caption: "font-normal leading-tight",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>;

type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: TypographyVariant;
  children?: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const defaultElements: Record<TypographyVariant, ElementType> = {
  "hero-title": "h1",
  "section-title": "h2",
  "footer-title": "h2",
  "project-hero-title": "h2",
  "project-title": "h3",
  "feature-title": "h3",
  body: "p",
  "body-sm": "p",
  "section-subtitle": "p",
  meta: "p",
  label: "span",
  caption: "span",
};

export function Typography<T extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
  ...props
}: TypographyProps<T>) {
  const Component = as ?? defaultElements[variant];

  return (
    <Component
      className={typographyVariants({ variant, className })}
      {...props}
    >
      {children}
    </Component>
  );
}

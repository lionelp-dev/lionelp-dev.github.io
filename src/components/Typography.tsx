import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      "hero-title":
        "flex flex-col font-serif-display font-normal text-5xl leading-[0.855] tracking-[-0.08975em] text-base-content md:text-7xl lg:text-[11em]",
      "section-title":
        "font-serif-display font-bold text-4xl leading-9.25 -tracking-[0.0575em] text-base-content/85 md:text-5xl md:leading-tight",
      "footer-title":
        "flex flex-col font-serif-display font-normal text-2xl leading-9 tracking-[-0.0775em] text-secondary-content md:text-[clamp(3.75rem,6.75vw,5.75rem)] md:leading-19.75",
      "project-hero-title":
        "font-serif-display text-5xl font-bold leading-18.75 tracking-[-0.0975em] text-base-content md:text-6xl lg:text-[clamp(3.75rem,5.75vw,5.75rem)]",
      "project-title":
        "card-title flex w-full font-bold items-end leading-tight tracking-[-0.0675em] text-base-content/85 md:text-3xl",
      "feature-title":
        "text-xl leading-tight tracking-[-0.0425em] text-base-content/85 md:text-3xl",
      body: "font-normal leading-normal",
      "body-sm": "font-normal leading-normal",
      "section-subtitle":
        "font-normal leading-normal tracking-[-0.04975em] text-base-content/70 md:text-2xl",
      meta: "font-normal leading-tight tracking-[-0.0275em] text-base text-base-content/80",
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
    <Component className={typographyVariants({ variant, className })} {...props}>
      {children}
    </Component>
  );
}

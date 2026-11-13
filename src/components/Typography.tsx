import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

const typographyVariants = cva("text-inherit", {
  variants: {
    variant: {
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      h5: "",
      h6: "",
      p1: "md:text-(length:--font-size-5xl) font-light text-base-content/70 leading-(--leading-5xl) tracking-(--tracking-sm)",
      p2: "md:text-(length:--font-size-4xl) text-base-content leading-(--leading-6xl) tracking-(--tracking-2xs)",
      p3: "md:text-(length:--font-size-2xl) text-base-content/95 leading-(--leading-6xl) tracking-(--tracking-xs)",
      p4: "text-(length:--font-size-lg) text-base-content/75 leading-(--leading-7xl) tracking-(--tracking-sm)",
      p5: "text-(length:--font-size-md) text-base-content leading-(--leading-7xl) tracking-(--tracking-2xs)",
      p6: "text-(length:--font-size-sm) text-base-content/60 leading-(--leading-4xl) tracking-(--tracking-3xs)",
      p7: "text-(length:--font-size-xs) text-base-content/60 leading-(--leading-4xl) tracking-(--tracking-3xs)",
      eyebrow:
        "text-(length:--font-size-3xl) font-light text-base-content/60 uppercase leading-(--leading-6xl) tracking-(--tracking-2xs)",
    },
    font: {
      sans: "font-sans",
      serif: "font-serif-display",
    },
  },
  compoundVariants: [
    {
      variant: "h1",
      font: "serif",
      class:
        "text-(length:--font-size-8xl) sm:text-(length:--font-size-9-5xl) lg:text-(length:--font-size-11xlbis) font-bold leading-(--leading-base) tracking-(--tracking-xl)",
    },
    {
      variant: "h2",
      font: "serif",
      class:
        "text-(length:--font-size-9xlbis) font-extrabold leading-(--leading-base) tracking-(--tracking-xl)",
    },
    {
      variant: "h3",
      font: "serif",
      class:
        "text-(length:--font-size-7xl) md:text-(length:--font-size-9xl) font-extrabold leading-(--leading-base) tracking-(--tracking-2xl)",
    },
    {
      variant: "h4",
      font: "serif",
      class:
        "text-(length:--font-size-7xl) font-extrabold leading-(--leading-md) tracking-(--tracking-xl)",
    },
    {
      variant: "h5",
      font: "serif",
      class:
        "text-(length:--font-size-3xl) font-light leading-(--leading-xl) tracking-(--tracking-sm)",
    },
    {
      variant: "h6",
      font: "serif",
      class:
        "text-(length:--font-size-2xl) font-light leading-(--leading-xl) tracking-(--tracking-sm)",
    },
    {
      variant: "h1",
      font: "sans",
      class:
        "text-(length:--font-size-9xlbis) font-extralight leading-(--leading-xs) tracking-(--tracking-lg)",
    },
    {
      variant: "h2",
      font: "sans",
      class:
        "text-(length:--font-size-6xl) font-light text-base-content/90! leading-(--leading-base) tracking-(--tracking-sm)",
    },
    {
      variant: "h3",
      font: "sans",
      class:
        "text-(length:--font-size-5xl) font-light leading-(--leading-sm) tracking-(--tracking-sm) text-base-content/95",
    },
    {
      variant: "h4",
      font: "sans",
      class:
        "text-(length:--font-size-4xl) font-light leading-(--leading-xl) tracking-(--tracking-sm)",
    },
    {
      variant: "h5",
      font: "sans",
      class:
        "text-(length:--font-size-2xl) leading-(--leading-xl) tracking-(--tracking-2xs)",
    },
    {
      variant: "h6",
      font: "sans",
      class:
        "text-(length:--font-size-xl) leading-(--leading-xl) tracking-(--tracking-3xs)",
    },
  ],
  defaultVariants: {
    variant: "p3",
    font: "sans",
  },
});

type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>;
type TypographyFont = NonNullable<
  VariantProps<typeof typographyVariants>["font"]
>;

type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: TypographyVariant;
  font?: TypographyFont;
  children?: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const defaultElements: Record<TypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "span",
  h4: "h3",
  h5: "h5",
  h6: "h6",
  p1: "p",
  p2: "p",
  p3: "p",
  p4: "p",
  eyebrow: "p",
  p5: "p",
  p6: "span",
  p7: "span",
};

export function Typography<T extends ElementType = "p">({
  as,
  variant = "p3",
  font = "sans",
  className,
  children,
  ...props
}: TypographyProps<T>) {
  const Component = as ?? defaultElements[variant];

  return (
    <Component
      className={typographyVariants({
        variant,
        font,
        className,
      })}
      {...props}
    >
      {children}
    </Component>
  );
}

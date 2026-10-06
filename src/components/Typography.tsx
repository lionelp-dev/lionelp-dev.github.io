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
      p1: "md:text-(length:--font-size-7xl) font-light text-base-content/70 leading-(--leading-lg) tracking-(--tracking-sm)",
      p2: "md:text-(length:--font-size-4xl) font-light text-base-content/85 leading-(--leading-5xl) tracking-(--tracking-xs)",
      p3: "md:text-(length:--font-size-3xl) font-light text-base-content/80 leading-(--leading-6xl) tracking-(--tracking-xs)",
      p4: "text-(length:--font-size-2xl) text-base-content/85 leading-(--leading-6xl) tracking-(--tracking-xs)",
      p5: "text-(length:--font-size-lg) text-base-content leading-(--leading-6xl) tracking-(--tracking-2xs)",
      p6: "text-(length:--font-size-sm) text-base-content/60 leading-(--leading-4xl)",
      eyebrow:
        "text-(length:--font-size-5xl) font-light text-base-content/60 uppercase leading-(--leading-6xl) tracking-(--tracking-xs)",
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
        "text-(length:--font-size-12xl) font-bold leading-(--leading-xs) tracking-(--tracking-xl)",
    },
    {
      variant: "h2",
      font: "serif",
      class:
        "text-(length:--font-size-11xl) font-extrabold leading-(--leading-sm) tracking-(--tracking-2xl)",
    },
    {
      variant: "h3",
      font: "serif",
      class:
        "text-(length:--font-size-10xl) font-extrabold leading-(--leading-sm) tracking-(--tracking-2xl)",
    },
    {
      variant: "h4",
      font: "serif",
      class:
        "text-(length:--font-size-9xl) font-extrabold leading-(--leading-sm) tracking-(--tracking-2xl)",
    },
    {
      variant: "h5",
      font: "serif",
      class:
        "text-(length:--font-size-6xl) font-light leading-(--leading-xl) tracking-(--tracking-sm)",
    },
    {
      variant: "h1",
      font: "sans",
      class:
        "text-(length:--font-size-10xl) font-extralight leading-(--leading-xs) tracking-(--tracking-lg)",
    },
    {
      variant: "h2",
      font: "sans",
      class:
        "text-(length:--font-size-9xl) font-light leading-(--leading-base) tracking-(--tracking-sm)",
    },
    {
      variant: "h3",
      font: "sans",
      class:
        "text-(length:--font-size-8xl) font-light leading-(--leading-sm) tracking-(--tracking-md)",
    },
    {
      variant: "h4",
      font: "sans",
      class:
        "text-(length:--font-size-7xl) font-light leading-(--leading-sm) tracking-(--tracking-md)",
    },
    {
      variant: "h5",
      font: "sans",
      class:
        "text-(length:--font-size-5xl) font-light leading-(--leading-xl) tracking-(--tracking-sm)",
    },
  ],
  defaultVariants: {
    variant: "p4",
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
  p1: "p",
  p2: "p",
  p3: "p",
  p4: "p",
  eyebrow: "p",
  p5: "p",
  p6: "span",
};

export function Typography<T extends ElementType = "p">({
  as,
  variant = "p4",
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

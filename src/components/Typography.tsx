import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      "hero-title":
        "flex flex-col font-normal font-serif-display text-5xl text-base-content leading-[0.8] tracking-[-0.08975em] md:text-7xl lg:text-[11em]",
      "section-title":
        "font-bold font-serif-display text-4xl text-base-content/85 leading-9.25 md:leading-15 -tracking-[0.0575em] md:text-6xl  lg:leading-tight",
      "footer-title":
        "flex flex-col font-normal font-serif-display text-4xl text-secondary-content leading-9 tracking-[-0.0775em] md:text-6xl lg:text-[clamp(3.75rem,6.75vw,5.75rem)] md:leading-19.75",
      "project-hero-title":
        "font-bold font-serif-display text-5xl text-base-content leading-17.75 tracking-[-0.0975em] md:text-6xl lg:text-[clamp(3.75rem,4.75vw,6rem)]",
      "exploration-project-title":
        "font-bold font-serif-display text-5xl text-base-content leading-none tracking-[-0.0775em] md:text-6xl lg:text-[clamp(3.75rem,4.75vw,6rem)]",
      "project-title":
        "card-title flex w-full items-end font-bold text-base-content/85 leading-tight tracking-[-0.0675em] md:text-3xl",
      "feature-title":
        "text-base-content/85 text-xl leading-tight tracking-[-0.0425em] md:text-3xl",
      "hero-intro":
        "font-normal text-base-content/85 text-xl leading-tight tracking-[-0.0425em] md:text-4xl",
      "hero-description":
        "font-normal text-base-content/70 leading-normal tracking-[-0.03775em] md:text-2xl",
      body: "font-normal leading-normal tracking-[-0.0375em]",
      "body-sm": "font-normal leading-normal",
      "body-lg":
        "font-normal text-base-content/70 leading-normal tracking-[-0.04975em] md:text-2xl",
      "body-lg-compact":
        "font-normal text-base-content/70 leading-normal tracking-[-0.03975em] md:text-2xl",
      "body-md":
        "font-normal text-base-content/70 leading-normal tracking-[-0.04975em] md:text-lg",
      "body-md-wide":
        "font-normal text-base-content/70 leading-normal tracking-[-0.0375em] md:text-xl",
      "mission-description":
        "font-normal text-base-content/70 leading-normal tracking-[-0.03575em] md:text-xl",
      "mission-title":
        "text-base-content/85 text-xl leading-tight tracking-[-0.0175em] md:text-3xl",
      "section-subtitle":
        "font-normal text-base-content/70 leading-normal tracking-[-0.0375em] md:text-3xl",
      subtitle:
        "block font-normal font-serif-display text-[clamp(4rem,12vw,7rem)] text-base-content leading-[0.9] tracking-[-0.06em]",
      meta: "font-normal text-base text-base-content/80 leading-tight tracking-[-0.0275em]",
      "meta-lg":
        "font-normal text-base text-base-content/80 leading-tight tracking-[-0.0275em] md:text-2xl",
      "project-period":
        "font-normal text-base-content/85 text-xl leading-tight tracking-[-0.0425em] md:text-3xl",
      "project-card-name": "font-normal text-2xl leading-tight md:text-4xl",
      "project-card-aside":
        "font-normal text-base text-base-content/80 leading-tight tracking-[-0.0375em]",
      "caption-muted": "font-normal text-base-content/60 text-sm leading-5.5",
      "footer-description":
        "font-normal leading-normal tracking-[-0.03475em] md:text-2xl",
      "action-label": "font-medium leading-tight",
      "mission-action-label":
        "font-normal text-base text-base-content/75 leading-tight tracking-[-0.01em] group-hover:text-accent/80 md:font-semibold",
      "navigation-label":
        "font-normal text-base-content/70 text-sm leading-none tracking-[-0.002em] group-hover:text-base-content",
      "mobile-navigation-label":
        "font-bold text-base-content/75 text-sm leading-tight group-hover:text-base-content",
      "status-label": "font-normal text-secondary tracking-[-0.0375em]",
      "browser-caption":
        "font-normal text-base-content/70 text-xs leading-none",
      "badge-label": "text-base-content/75 leading-tight",
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
  "exploration-project-title": "h2",
  "project-title": "h3",
  "feature-title": "h3",
  "hero-intro": "p",
  "hero-description": "p",
  body: "p",
  "body-sm": "p",
  "body-lg": "p",
  "body-lg-compact": "p",
  "body-md": "p",
  "body-md-wide": "p",
  "mission-description": "p",
  "mission-title": "h3",
  "section-subtitle": "p",
  subtitle: "p",
  meta: "p",
  "meta-lg": "p",
  "project-period": "p",
  "project-card-name": "span",
  "project-card-aside": "span",
  "caption-muted": "span",
  "footer-description": "p",
  "action-label": "span",
  "mission-action-label": "span",
  "navigation-label": "span",
  "mobile-navigation-label": "span",
  "status-label": "span",
  "browser-caption": "span",
  "badge-label": "span",
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

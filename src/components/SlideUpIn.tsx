import { type PropsWithChildren } from "react";
import { cn } from "../lib/utils";

type SlideUpInProps = PropsWithChildren<{
  as?: "div" | "span";
  className?: string;
  duration?: number;
  delay?: number;
  variant?: "slide-up" | "blur";
}>;

export function SlideUpIn({
  as: Element = "div",
  children,
  className,
  duration: _duration,
  delay: _delay,
  variant: _variant,
}: SlideUpInProps) {
  return (
    <Element className={cn("relative", Element === "span" && "block", className)}>
      {children}
    </Element>
  );
}

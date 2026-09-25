import {
  type PropsWithChildren,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "../lib/utils";

type SlideUpInProps = PropsWithChildren<{
  as?: "div" | "span";
  className?: string;
  duration?: number;
  delay?: number;
}>;

export function SlideUpIn({
  as: Element = "div",
  children,
  className,
  duration = 400,
  delay = 200,
}: SlideUpInProps) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.15 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Element
      ref={elementRef as RefObject<never>}
      className={cn("relative overflow-hidden", className)}
    >
      <Element
        className={cn(
          Element === "span" && "block",
          isVisible && "animate-[slide-up-in_ease-in-out_both]",
        )}
        style={
          isVisible
            ? {
                animationDuration: `${duration}ms`,
                animationDelay: `${delay}ms`,
              }
            : {
                opacity: 0,
                filter: "blur(8px)",
                transform: "translateY(100%)",
              }
        }
      >
        {children}
      </Element>
    </Element>
  );
}

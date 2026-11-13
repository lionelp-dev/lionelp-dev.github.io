import {
  createContext,
  type ComponentPropsWithoutRef,
  type ReactNode,
  useContext,
  useRef,
} from "react";
import { useActiveSlideIndex } from "../hooks/useActiveSlideIndex";
import { cn } from "../lib/utils";

type CarouselContextValue = {
  activeIndex: number;
  slideCount: number;
  scrollDistanceMultiplier: number;
};

const CarouselContext = createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("ScrollCarousel components must be used inside Root");
  }
  return context;
}

type RootProps = ComponentPropsWithoutRef<"div"> & {
  slideCount: number;
  scrollDistanceMultiplier?: number;
};

function Root({
  slideCount,
  scrollDistanceMultiplier = 1,
  children,
  ...props
}: RootProps) {
  const ref = useRef<HTMLDivElement>(null);
  const activeIndex = useActiveSlideIndex(
    ref,
    slideCount,
    scrollDistanceMultiplier,
  );

  if (slideCount === 0) return null;

  return (
    <CarouselContext.Provider
      value={{ activeIndex, slideCount, scrollDistanceMultiplier }}
    >
      <div ref={ref} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function Sticky({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "relative sticky top-[calc(var(--section-scroll-offset)+var(--section-y-padding))] h-[calc(100svh-var(--section-scroll-offset)-var(--section-y-padding))] min-h-0",
        className,
      )}
      {...props}
    />
  );
}

function Active({
  children,
}: {
  children: (activeIndex: number) => ReactNode;
}) {
  const { activeIndex } = useCarousel();
  return children(activeIndex);
}

type IndicatorProps = Omit<ComponentPropsWithoutRef<"ol">, "children">;

function Indicator({ className, ...props }: IndicatorProps) {
  const { activeIndex, slideCount } = useCarousel();
  return (
    <ol
      className={cn(
        "absolute top-1/2 -left-10 flex -translate-y-1/2 flex-col items-center gap-2.5",
        className,
      )}
      {...props}
    >
      {Array.from({ length: slideCount }, (_, index) => (
        <li
          key={index}
          aria-current={index === activeIndex ? "step" : undefined}
        >
          <span
            className={cn(
              "block w-2 rounded-full bg-secondary transition-[height,opacity] duration-300",
              index === activeIndex ? "h-10 opacity-100" : "h-2 opacity-30",
            )}
            aria-hidden="true"
          />
          <span className="sr-only">{index + 1}</span>
        </li>
      ))}
    </ol>
  );
}

function Spacer() {
  const { slideCount, scrollDistanceMultiplier } = useCarousel();
  return (
    <div
      aria-hidden="true"
      style={{ height: `${slideCount * scrollDistanceMultiplier * 100}svh` }}
    />
  );
}

export const ScrollCarousel = { Root, Sticky, Active, Indicator, Spacer };

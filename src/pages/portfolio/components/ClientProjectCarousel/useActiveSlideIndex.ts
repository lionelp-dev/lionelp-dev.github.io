import { type RefObject, useEffect, useState } from "react";

function getActiveSlideIndex(section: HTMLElement, slideCount: number) {
  const { height, top } = section.getBoundingClientRect();
  const scrollableHeight = height - window.innerHeight;
  const scrollProgress =
    scrollableHeight > 0
      ? Math.min(Math.max(-top / scrollableHeight, 0), 1)
      : 0;

  return Math.min(slideCount - 1, Math.floor(scrollProgress * slideCount));
}

export function useActiveSlideIndex(
  sectionRef: RefObject<HTMLElement | null>,
  slideCount: number,
) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slideCount === 0) {
      return;
    }

    let animationFrameId: number | undefined;

    const updateActiveSlide = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const nextIndex = getActiveSlideIndex(section, slideCount);

      setActiveIndex((currentIndex) =>
        currentIndex === nextIndex ? currentIndex : nextIndex,
      );
    };

    const handleScroll = () => {
      if (animationFrameId !== undefined) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = undefined;
        updateActiveSlide();
      });
    };

    updateActiveSlide();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [sectionRef, slideCount]);

  return activeIndex;
}

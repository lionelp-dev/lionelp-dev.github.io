import { type RefObject, useEffect, useState } from "react";

function getActiveSlideIndex(section: HTMLElement, slideCount: number) {
  const scrollDistance = Math.max(0, -section.getBoundingClientRect().top);
  const slideIndex = Math.floor(scrollDistance / window.innerHeight);

  return Math.min(slideCount - 1, slideIndex);
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
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [sectionRef, slideCount]);

  return activeIndex;
}

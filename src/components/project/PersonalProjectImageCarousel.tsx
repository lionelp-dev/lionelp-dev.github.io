import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import type { PersonalProjectFeature } from "../../types/projects";

const SLIDE_DURATION = 7_000;

type PersonalProjectImageCarouselProps = {
  features: PersonalProjectFeature[];
  projectName: string;
  className?: string;
  imageClassName?: string;
};

export function PersonalProjectImageCarousel({
  features,
  projectName,
  className,
  imageClassName,
}: PersonalProjectImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDocumentVisible, setIsDocumentVisible] = useState(
    () => document.visibilityState === "visible",
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const updateDocumentVisibility = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    document.addEventListener("visibilitychange", updateDocumentVisibility);
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      document.removeEventListener(
        "visibilitychange",
        updateDocumentVisibility,
      );
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setActiveIndex(0);
      return;
    }

    if (!isDocumentVisible || features.length < 2) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % features.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, features.length, isDocumentVisible, prefersReducedMotion]);

  if (features.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-xl border border-base-content/15 bg-base-200 shadow-sm",
          className,
        )}
        role="img"
        aria-label={`Aperçu de ${projectName} : ${features[activeIndex]?.imageAlt}`}
      >
        {features.map((feature, index) => (
          <img
            aria-hidden="true"
            className={cn(
              "absolute inset-0 size-full object-cover object-center transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none",
              index === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0",
              imageClassName,
            )}
            key={feature.id}
            src={feature.image}
            alt=""
            loading="eager"
          />
        ))}
      </div>
      <ol
        className="mt-4 mr-4 flex shrink-0 items-center gap-2 self-end"
        aria-label={`Progression de l’aperçu ${projectName}`}
      >
        {features.map((feature, index) => (
          <li
            key={feature.id}
            aria-current={index === activeIndex ? "step" : undefined}
          >
            <span
              className={cn(
                "block h-2 rounded-full bg-secondary transition-[width,opacity] duration-300 motion-reduce:transition-none",
                index === activeIndex ? "w-10 opacity-100" : "w-2 opacity-30",
              )}
              aria-hidden="true"
            />
            <span className="sr-only">{feature.title}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

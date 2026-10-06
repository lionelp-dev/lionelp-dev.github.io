import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { NavigationItem } from "./navigation.config";

type NavigationSectionId = Extract<
  NavigationItem,
  { kind: "anchor" }
>["sectionId"];

type PortfolioSection = {
  elementId: string;
  navigationSectionId: NavigationSectionId;
};

const portfolioSections: readonly PortfolioSection[] = [
  { elementId: "home", navigationSectionId: "home" },
  {
    elementId: "projets-personnels",
    navigationSectionId: "projets-personnels",
  },
  {
    elementId: "explorations-techniques",
    navigationSectionId: "explorations-techniques",
  },
  {
    elementId: "realisations-clients",
    navigationSectionId: "realisations-clients",
  },
  {
    elementId: "complementary-activities",
    navigationSectionId: "realisations-clients",
  },
  { elementId: "contact", navigationSectionId: "contact" },
];

export function useNavigationState() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const [hash, setHash] = useState(getCurrentHash);
  const [currentSection, setCurrentSection] = useState(() =>
    getSectionFromHash(getCurrentHash()),
  );
  const pendingSectionRef = useRef<NavigationSectionId | null>(null);

  useEffect(() => {
    const syncHash = () => {
      const nextHash = getCurrentHash();
      const nextSection = getSectionFromHash(nextHash);

      pendingSectionRef.current = nextSection;
      setHash(nextHash);
      setCurrentSection(nextSection);
    };

    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    if (pathname !== "/portfolio") {
      pendingSectionRef.current = null;
      return;
    }

    let animationFrameId: number | undefined;
    let resumeDetectionTimeoutId: number | undefined;

    const updateCurrentSection = () => {
      animationFrameId = undefined;

      if (pendingSectionRef.current) {
        window.clearTimeout(resumeDetectionTimeoutId);
        resumeDetectionTimeoutId = window.setTimeout(() => {
          pendingSectionRef.current = null;
          setCurrentSection(getSectionAtTopBar());
        }, 150);
        return;
      }

      setCurrentSection(getSectionAtTopBar());
    };

    const requestSectionUpdate = () => {
      if (animationFrameId !== undefined) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateCurrentSection);
    };

    window.addEventListener("scroll", requestSectionUpdate, { passive: true });
    window.addEventListener("resize", requestSectionUpdate);
    requestSectionUpdate();

    return () => {
      window.removeEventListener("scroll", requestSectionUpdate);
      window.removeEventListener("resize", requestSectionUpdate);

      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId);
      }

      window.clearTimeout(resumeDetectionTimeoutId);
    };
  }, [pathname]);

  const isActive = (item: NavigationItem) =>
    pathname === "/portfolio" && currentSection === item.sectionId;

  return { pathname, hash, isActive };
}

function getSectionAtTopBar(): NavigationSectionId | null {
  const topBarBottom = document.querySelector("header")?.getBoundingClientRect()
    .bottom;
  const threshold = Math.max(0, (topBarBottom ?? 0) + 1);
  let activeSection: NavigationSectionId | null = null;

  for (const section of portfolioSections) {
    const element = document.getElementById(section.elementId);
    const activationThreshold =
      section.elementId === "contact"
        ? Math.max(threshold, window.innerHeight / 2)
        : threshold;

    if (
      element &&
      element.getBoundingClientRect().top <= activationThreshold
    ) {
      activeSection = section.navigationSectionId;
    }
  }

  return activeSection;
}

function getCurrentHash() {
  return typeof window === "undefined" ? "" : window.location.hash;
}

function getSectionFromHash(hash: string): NavigationSectionId | null {
  const section = hash.split("#").at(-1);
  const mappedSection = portfolioSections.find(
    ({ elementId }) => elementId === section,
  );

  return mappedSection?.navigationSectionId ?? null;
}

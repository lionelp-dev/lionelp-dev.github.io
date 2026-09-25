import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { NavigationItem } from "./navigation.config";

export function useNavigationState() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const [hash, setHash] = useState(getCurrentHash);
  const currentSection = getSectionFromHash(hash);

  useEffect(() => {
    const syncHash = () => setHash(getCurrentHash());

    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const isActive = (item: NavigationItem) =>
    item.kind === "route"
      ? pathname === item.to
      : pathname === "/portfolio" && currentSection === item.sectionId;

  return { pathname, hash, isActive };
}

function getCurrentHash() {
  return typeof window === "undefined" ? "" : window.location.hash;
}

function getSectionFromHash(hash: string) {
  const section = hash.split("#").at(-1);
  return section && !section.startsWith("/") ? section : "home";
}

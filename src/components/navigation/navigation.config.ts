export const navigationItems = [
  { kind: "anchor", label: "Accueil", sectionId: "home" },
  {
    kind: "anchor",
    label: "Projet personnel",
    sectionId: "personal-projects",
  },
  { kind: "anchor", label: "Projets clients", sectionId: "client-projects" },
  {
    kind: "route",
    label: "Explorations technologiques",
    to: "/tech-watch",
  },
  { kind: "anchor", label: "Contact", sectionId: "contact" },
] as const;

export type NavigationItem = (typeof navigationItems)[number];

export function getNavigationKey(item: NavigationItem) {
  return item.kind === "anchor" ? item.sectionId : item.to;
}

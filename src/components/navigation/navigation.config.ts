export const navigationItems = [
  { kind: "anchor", label: "Accueil", sectionId: "home", anchorId: "home" },
  {
    kind: "anchor",
    label: "Projets personnels",
    sectionId: "projets-personnels",
    anchorId: "mealo-planner",
  },
  {
    kind: "anchor",
    label: "Explorations techniques",
    sectionId: "explorations-techniques",
    anchorId: "explorations-techniques",
  },
  {
    kind: "anchor",
    label: "Réalisations clients",
    sectionId: "realisations-clients",
    anchorId: "realisations-clients",
  },
  { kind: "anchor", label: "Contact", sectionId: "contact", anchorId: "contact" },
] as const;

export type NavigationItem = (typeof navigationItems)[number];

export function getNavigationKey(item: NavigationItem) {
  return item.sectionId;
}

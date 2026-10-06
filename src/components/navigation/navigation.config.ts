export const navigationItems = [
  { kind: "anchor", label: "Accueil", sectionId: "home" },
  {
    kind: "anchor",
    label: "Projets personnels",
    sectionId: "projets-personnels",
  },
  {
    kind: "anchor",
    label: "Explorations techniques",
    sectionId: "explorations-techniques",
  },
  {
    kind: "anchor",
    label: "Réalisations clients",
    sectionId: "realisations-clients",
  },
  { kind: "anchor", label: "Contact", sectionId: "contact" },
] as const;

export type NavigationItem = (typeof navigationItems)[number];

export function getNavigationKey(item: NavigationItem) {
  return item.sectionId;
}

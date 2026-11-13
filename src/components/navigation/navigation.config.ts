export const navigationItems = [
  {
    kind: "anchor",
    label: "À propos",
    sectionId: "profil",
    anchorId: "profil",
  },
  {
    kind: "anchor",
    label: "Projet principal",
    sectionId: "projets-personnels",
    anchorId: "mealo-planner",
  },
  {
    kind: "anchor",
    label: "Projets personnels",
    sectionId: "explorations-techniques",
    anchorId: "explorations-techniques",
  },
  {
    kind: "anchor",
    label: "Réalisations freelance",
    sectionId: "realisations-clients",
    anchorId: "realisations-clients",
  },
  {
    kind: "anchor",
    label: "Me contacter",
    sectionId: "contact",
    anchorId: "contact",
  },
] as const;

export type NavigationItem = (typeof navigationItems)[number];

export function getNavigationKey(item: NavigationItem) {
  return item.sectionId;
}

import type {
  ComplementaryMission,
  FreelanceProject,
  TechWatchProject,
} from "../types/projects";
import beyondDressImage from "../assets/beyond-dress-desktop.jpg";
import beyondStoreImage from "../assets/beyond-store-desktop.jpg";
import hairelookingImage from "../assets/hairelooking-desktop.jpg";
import whiscoImage from "../assets/whisco-desktop.jpg";

export const freelanceProjects: FreelanceProject[] = [
  {
    name: "Whisco",
    currentName: "Sinamary",
    description:
      "Site vitrine WordPress consacré à une marque de boissons artisanales.",
    image: whiscoImage,
    period: "Avril 2023",
    type: "Site vitrine",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript", "PHP"],
    links: [
      {
        label: "Voir le site",
        url: "https://sinamary.fr/",
      },
      {
        label: "Figma",
        url: "https://www.figma.com/proto/NVv0nMz7tAeQV5jBYyOShC/Whisco?node-id=1-2&p=f&t=m9MHD5x4KsX1dWKA-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      },
    ],
  },
  {
    name: "Beyond Store",
    description:
      "E-commerce PrestaShop bilingue dédié aux extensions capillaires, perruques et accessoires.",
    image: beyondStoreImage,
    period: "Avril 2019 - novembre 2020",
    type: "Boutique e-commerce",
    technologies: ["PrestaShop", "HTML", "CSS", "JavaScript", "PHP"],
    links: [
      {
        label: "Voir le site",
        url: "http://web.archive.org/web/20241120035734/https://beyond-store.com/en/",
      },
      {
        label: "Figma",
        url: "https://www.figma.com/proto/oUrPw9nZRkjr3uSsntR1My/Beyond-Store?node-id=1-2&t=TdZmKyt0IV35lkPz-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
      },
    ],
  },
  {
    name: "Beyond Dress",
    description: "E-commerce PrestaShop de prêt-à-porter féminin.",
    image: beyondDressImage,
    period: "Octobre 2014 - mars 2015",
    type: "Boutique e-commerce",
    technologies: ["PrestaShop", "HTML", "CSS", "JavaScript", "PHP"],
    links: [
      {
        label: "Voir le site",
        url: "https://web.archive.org/web/20160110110512/http://beyond-dress.fr/",
      },
      {
        label: "Figma",
        url: "https://www.figma.com/proto/B77LHUfMs2yWE2mGsu9kDm/Beond-Dress?node-id=2-2&t=nVAGomRbwpgXnkfi-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
      },
    ],
  },
  {
    name: "Hairelooking",
    description:
      "E-commerce PrestaShop spécialisé dans les extensions de cheveux naturels et le matériel de pose.",
    image: hairelookingImage,
    period: "Novembre 2013 - avril 2014",
    type: "Boutique e-commerce",
    technologies: ["PrestaShop", "HTML", "CSS", "JavaScript", "PHP"],
    links: [
      {
        label: "Voir le site",
        url: "https://hairelooking.fr/",
      },
    ],
  },
];

export const complementaryMissions: ComplementaryMission[] = [
  {
    name: "Webmastering",
    description:
      "Mises à jour de contenus, suivi technique et amélioration continue de sites.",
    links: [],
  },
  {
    name: "Infographie",
    description:
      "Création de supports visuels adaptés aux besoins de communication.",
    links: [
      {
        label: "Voir la présentation",
        url: "https://www.figma.com/proto/WbTkAoy5rM72lfoFLLOqxS/Infographie?node-id=1-2&t=YFOmAWaIrMCea3X3-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
      },
    ],
  },
  {
    name: "Maintenance",
    description:
      "Corrections, optimisations et surveillance du bon fonctionnement applicatif.",
    links: [],
  },
  {
    name: "Photographie",
    description: " ",
    links: [
      {
        label: "Voir la présentation",
        url: "https://www.figma.com/proto/WvyneaQGDa0Onzy1zchzQf/Photographie?node-id=2-2&p=f&t=zQfUwOdxxz1TAcdu-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
      },
    ],
  },
];

export const techWatchProjects: TechWatchProject[] = [
  {
    name: "Meteo",
    description:
      "Application météo full-stack pour pratiquer Django, React et Inertia.",
    repositoryUrl: "https://github.com/lionelp-dev/Meteo",
    technologies: [
      "React",
      "TypeScript",
      "Inertia.js",
      "Python",
      "Django",
      "SQLite",
    ],
  },
  {
    name: "RecipeBookAdonisJs",
    description:
      "Carnet de recettes construit pour explorer l’écosystème AdonisJS.",
    repositoryUrl: "https://github.com/lionelp-dev/RecipeBookAdonisJs",
    technologies: [
      "React",
      "TypeScript",
      "Inertia.js",
      "AdonisJS",
      "Lucid ORM",
      "SQLite",
    ],
  },
  {
    name: "RecipeBookSymfony",
    description:
      "Version Symfony centrée sur API Platform et une architecture API moderne.",
    repositoryUrl:
      "https://github.com/lionelp-dev/RecipeBookSymfony/tree/architecture/api-platform-react",
    technologies: [
      "React",
      "TypeScript",
      "PHP",
      "Symfony",
      "API Platform",
      "Doctrine ORM",
      "SQLite",
    ],
  },
  {
    name: "RecipeBookAspNetCore",
    description:
      "Implémentation ASP.NET Core pour comparer une stack C# et Angular.",
    repositoryUrl: "https://github.com/lionelp-dev/RecipeBookAspNetCore",
    technologies: [
      "Angular",
      "TypeScript",
      "C#",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQLite",
    ],
  },
  {
    name: "RecipeBookSpringBoot",
    description:
      "Version Java Spring Boot pour évaluer Spring Data JPA avec Vue.",
    repositoryUrl: "https://github.com/lionelp-dev/RecipeBookSpringBoot",
    technologies: [
      "Vue.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "SQLite",
    ],
  },
];

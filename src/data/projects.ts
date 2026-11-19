const beyondDressImage = `${import.meta.env.BASE_URL}beyond-dress-desktop.jpg`;
const beyondDressImage2 = `${import.meta.env.BASE_URL}beyond-dress-desktop-2.png`;
const beyondDressImage3 = `${import.meta.env.BASE_URL}beyond-dress-desktop-3.png`;
const beyondStoreImage = `${import.meta.env.BASE_URL}beyond-store-desktop.jpg`;
const beyondStoreImage2 = `${import.meta.env.BASE_URL}beyond-store-desktop-2.png`;
const beyondStoreImage3 = `${import.meta.env.BASE_URL}beyond-store-desktop-3.png`;
const beyondStoreImage4 = `${import.meta.env.BASE_URL}beyond-store-desktop-4.png`;
const hairelookingImage = `${import.meta.env.BASE_URL}hairelooking-desktop.jpg`;
const mealoPlannerImage = `${import.meta.env.BASE_URL}mealo-planner.png`;
const meteoImage = `${import.meta.env.BASE_URL}meteo.png`;
const aiPreviewImage = `${import.meta.env.BASE_URL}product-preview-2.png`;
const shoppingListPreviewImage = `${import.meta.env.BASE_URL}product-preview-3.png`;
const recipeBookAdonisImage = `${import.meta.env.BASE_URL}recipe_book_adonis_js.png`;
const soneparLibellesImage = `${import.meta.env.BASE_URL}sonepar-libelles.png`;
const whiscoImage = `${import.meta.env.BASE_URL}whisco-desktop.jpg`;
const whiscoImage2 = `${import.meta.env.BASE_URL}whisco-desktop-2.png`;

import type {
  ComplementaryMission,
  FreelanceProject,
  OverviewItem,
  PersonalProject,
  TechWatchProject,
} from "../types/projects";

export const personalProject: PersonalProject = {
  name: "Mealo Planner",
  subtitle: "De l’idée du repas à la liste de courses.",
  description:
    "Une application web qui aide à organiser ses repas au quotidien, à découvrir de nouvelles recettes grâce à l’IA et à simplifier les courses, seul ou à plusieurs.",
  highlights: [
    "Découverte de recettes assistée par IA (LangChain / LangGraph)",
    "Planification de menus et listes de courses optimisées",
    "Application multi-tenant (espaces partagés, rôles)",
    "Qualité logicielle : tests, CI/CD",
  ],
  features: [
    {
      id: "recipes",
      title: "Découverte de recettes à l'aide de l’IA",
      description:
        "Trouver de nouvelles idées de repas grâce à l’intelligence artificielle et conserver ses recettes préférées dans son carnet.",
      details: [
        {
          label: "Une problématique rencontrée",
          description:
            "La génération successive des recettes aurait pris trop de temps pour le lot initial de la démonstration et les suggestions du mode découverte. Le coût des illustrations était aussi à prendre en compte : environ 0,03 $ par image, soit 0,30 $ pour dix recettes illustrées.",
        },
        {
          label: "La solution mise en place",
          description:
            "Pour réduire cette attente, j’ai développé avec AdonisJS un microservice Node.js qui s’appuie sur LangChain et LangGraph pour orchestrer les traitements d’IA et lancer les appels aux API en parallèle. La disponibilité de ces bibliothèques dans l’écosystème Node.js a avant tout guidé ce choix.",
        },
        {
          label: "Les résultats obtenus",
          description:
            "L’exécution concurrente des appels a ainsi permis de réduire les délais de génération, tandis que le choix du modèle d’images a fait passer le coût d’environ 0,03 $ à 0,003 $ par image, soit une baisse d’environ 90 %. Un lot de dix recettes illustrées revient donc à 0,03 $ au lieu de 0,30 $, et chaque nouvelle suggestion illustrée à 0,003 $.",
        },
      ],
      image: aiPreviewImage,
      imageAlt:
        "Découverte et gestion des recettes avec l’IA dans Mealo Planner",
    },
    {
      id: "meal-planning",
      title: "Planification hebdomadaire",
      description:
        "Composer les repas de la semaine selon ses critères, puis ajuster le planning au fil des envies.",
      details: [
        {
          label: "Une problématique rencontrée",
          description:
            "Le planning reposait initialement sur l’IA. Je souhaitais toutefois mieux contrôler les règles de sélection et de répartition des recettes, et pouvoir les vérifier par des tests.",
        },
        {
          label: "La solution mise en place",
          description:
            "J’ai remplacé la génération par IA par un algorithme déterministe qui applique des contraintes explicites, comme les ingrédients communs entre les recettes. Le planning obtenu reste modifiable : l’utilisateur peut ajuster les repas proposés.",
        },
        {
          label: "Ce que j’en retiens",
          description:
            "Pour organiser ce planning, des règles métier explicites se sont révélées plus adaptées que la génération par IA. L’IA conserve sa place dans la découverte de nouvelles recettes.",
        },
      ],
      image: mealoPlannerImage,
      imageAlt: "Planification hebdomadaire dans Mealo Planner",
    },
    {
      id: "shopping-list",
      title: "Liste de courses automatique",
      description:
        "Retrouver les ingrédients des repas planifiés dans une seule liste et suivre ses achats, sans ressaisie.",
      details: [
        {
          label: "Une contrainte à prendre en compte",
          description:
            "Pour réunir les ingrédients de plusieurs recettes, il faut reconnaître leurs équivalences et n’additionner que les quantités compatibles.",
        },
        {
          label: "La solution mise en place",
          description:
            "La liste est générée à partir du planning. Les ingrédients sont normalisés et leurs équivalences prises en compte pour regrouper les quantités compatibles. Des tests vérifient les calculs et les principaux cas d’usage.",
        },
        {
          label: "Les résultats obtenus",
          description:
            "Les besoins des différentes recettes sont regroupés automatiquement. L’utilisateur n’a plus à reporter les ingrédients ni à additionner lui-même les quantités compatibles.",
        },
      ],
      image: shoppingListPreviewImage,
      imageAlt: "Liste de courses dans Mealo Planner",
    },
  ],
  closingSections: [
    {
      label: "Bilan",
      title: "Ce que j’ai appris",
      description:
        "La planification m’a appris à mieux distinguer ce qui relève de règles métier et ce qui bénéficie de l’IA. Pour sélectionner et répartir les repas selon des contraintes explicites, un algorithme déterministe s’est révélé plus adapté.",
    },
    {
      label: "Perspectives",
      title: "La suite",
      description:
        "La prochaine piste envisagée est le batch cooking : organiser la préparation des repas à partir du planning, en tenant compte des temps de cuisson et du matériel disponible.",
    },
  ],
  demoQrCode: "/mealo-demo-qr-code.png",
  period: "Un projet que j’aimerais vous présenter",
  type: "Application web",
  technologies: [
    "React",
    "TypeScript",
    "Inertia.js",
    "PHP",
    "Laravel",
    "AdonisJS",
    "LangGraph",
    "LangChain",
    "PostgreSQL",
    "Tests",
    "Analyse statique",
    "Intégration continue",
  ],
  links: [
    {
      label: "Voir le code source",
      url: "https://github.com/lionelp-dev/Mealo",
    },
    {
      label: "Essayer la démo",
      url: "https://mealo.lioneldev.fr/demo/LtMUhxAYiog",
    },
  ],
};

export const architectureItems: OverviewItem[] = [
  {
    title: "Frontend",
    technologies: [
      "React",
      "TypeScript",
      "Inertia.js",
      "Tailwind CSS",
      "Radix UI",
      "daisyUI",
      "TanStack Form",
      "Zod",
    ],
  },
  {
    title: "Backend",
    technologies: [
      "PHP",
      "Laravel",
      "PostgreSQL",
      "SQLite",
      "Spatie Laravel Data",
      "Spatie Laravel Permissions",
    ],
  },
  {
    title: "Microservice IA",
    technologies: [
      "Node.js",
      "AdonisJS",
      "API REST",
      "LangGraph",
      "LangChain",
      "OpenRouter",
      "openai/gpt-4o-mini",
      "openai/gpt-image-2",
    ],
  },
];
export const freelanceProjects: FreelanceProject[] = [
  {
    name: "Whisco",
    currentName: "Sinamary",
    description:
      "Site vitrine sous WordPress pour présenter une marque de boissons artisanales et ses produits.",
    images: [whiscoImage, whiscoImage2],
    imageBackgroundColor: "#fbedcf",
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
      "Boutique e-commerce bilingue sous PrestaShop, spécialisée dans les extensions capillaires, les perruques et les accessoires.",
    images: [
      beyondStoreImage,
      beyondStoreImage2,
      beyondStoreImage3,
      beyondStoreImage4,
    ],
    imageBackgroundColor: "#e8ece7",
    period: "Août 2019 - Janvier 2021",
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
    description:
      "Boutique e-commerce sous PrestaShop, spécialisée dans le prêt-à-porter féminin.",
    images: [beyondDressImage, beyondDressImage2, beyondDressImage3],
    imageBackgroundColor: "#f7e6ec",
    period: "Octobre 2014 - Mars 2015",
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
      "Développement d’une boutique e-commerce sous PrestaShop, dédiée aux extensions de cheveux naturels et au matériel de pose.",
    images: [hairelookingImage],
    imageBackgroundColor: "#eeeae2",
    period: "Novembre 2013 - Avril 2014",
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
    name: "Maintenance",
    description:
      "Suivi technique, corrections, mises à jour et optimisations pour préserver la performance, la sécurité et la stabilité des sites.",
    links: [],
  },
  {
    name: "Webmastering",
    description:
      "Administration des contenus, suivi technique et amélioration continue pour garantir des sites fiables, cohérents et toujours à jour.",
    links: [],
  },
  {
    name: "Infographie",
    description:
      "Conception de supports visuels clairs et cohérents pour valoriser une marque et renforcer l’impact de sa communication.",
    links: [
      {
        label: "Voir la présentation",
        url: "https://www.figma.com/proto/WbTkAoy5rM72lfoFLLOqxS/Infographie?node-id=1-2&t=YFOmAWaIrMCea3X3-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
      },
    ],
  },
  {
    name: "Photographie",
    description:
      "Prises de vue et retouches de produits, de lieux et de projets pour créer des contenus adaptés aux supports numériques.",
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
    name: "Sonepar Libellés",
    title: "Gestion libellés audit habilitation",
    description:
      "Un projet pédagogique pour mieux comprendre le travail d’une équipe de développeurs chez Sonepar chargée de la gestion des habilitations autour de l’ERP Infor M3.",
    cardImage: soneparLibellesImage,
    repositoryUrl: "https://github.com/lionelp-dev/sonepar_libelles",
    technologies: [
      "Angular",
      "TypeScript",
      "Python",
      "Django",
      "Django REST Framework",
      "SQLite",
    ],
  },
  {
    name: "AdonisJS",
    title: "Carnet de recette",
    description:
      "Développement d’une même application dans différents environnements techniques afin d’élargir mes compétences en développement full stack.",
    cardImage: recipeBookAdonisImage,
    showLatestCommit: false,
    repositoryUrl: "https://github.com/lionelp-dev/RecipeBookAdonisJs",
    projectUrl: "https://github.com/lionelp-dev#carnet-de-recettes",
    technologies: [
      "Django",
      "AdonisJS",
      "Symfony",
      "ASP.NET Core",
      "Spring Boot",
    ],
  },
];

export const weatherProject: TechWatchProject = {
  name: "Météo",
  description:
    "Application météo développée pour pratiquer Django, React et Inertia.",
  image: meteoImage,
  repositoryUrl: "https://github.com/lionelp-dev/Meteo",
  technologies: [
    "React",
    "TypeScript",
    "Inertia.js",
    "Python",
    "Django",
    "SQLite",
  ],
};

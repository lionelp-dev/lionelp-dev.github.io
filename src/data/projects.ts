import beyondDressImage from "../assets/beyond-dress-desktop.jpg";
import beyondDressImage2 from "../assets/beyond-dress-desktop-2.png";
import beyondDressImage3 from "../assets/beyond-dress-desktop-3.png";
import beyondStoreImage from "../assets/beyond-store-desktop.jpg";
import beyondStoreImage2 from "../assets/beyond-store-desktop-2.png";
import beyondStoreImage3 from "../assets/beyond-store-desktop-3.png";
import beyondStoreImage4 from "../assets/beyond-store-desktop-4.png";
import hairelookingImage from "../assets/hairelooking-desktop.jpg";
import mealoPlannerImage from "../assets/mealo-planner.png";
import meteoImage from "../assets/meteo.png";
import aiPreviewImage from "../assets/product-preview-2.png";
import shoppingListPreviewImage from "../assets/product-preview-3.png";
import recipeBookAdonisImage from "../assets/recipe_book_adonis_js.png";
import recipeBookDotNetImage from "../assets/recipe_book_dot_net.png";
import recipeBookSpringBootImage from "../assets/recipe_book_spring_boot.png";
import recipeBookSymfonyImage from "../assets/recipe_book_symphony.png";
import whiscoImage from "../assets/whisco-desktop.jpg";
import whiscoImage2 from "../assets/whisco-desktop-2.png";
import type {
  ComplementaryMission,
  FreelanceProject,
  PersonalProject,
  TechWatchProject,
} from "../types/projects";

export const personalProject: PersonalProject = {
  name: "Mealo Planner",
  subtitle: "De l’idée du repas à la liste de courses.",
  description:
    "Une application de planification des repas de la semaine qui permet de découvrir des recettes grâce à de l’IA, d’organiser ses repas seul ou à plusieurs et de générer automatiquement une liste de courses à partir de ceux-ci.",
  features: [
    {
      id: "recipes",
      title: "Découverte de recettes à l’aide de l’IA",
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

export const freelanceProjects: FreelanceProject[] = [
  {
    name: "Whisco",
    currentName: "Sinamary",
    description:
      "Site vitrine WordPress consacré à une marque de boissons artisanales.",
    images: [whiscoImage, whiscoImage2],
    imageBackgroundColor: "#fbedcf",
    period: "avril 2023",
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
    images: [
      beyondStoreImage,
      beyondStoreImage2,
      beyondStoreImage3,
      beyondStoreImage4,
    ],
    imageBackgroundColor: "#e8ece7",
    period: "août 2019 - janvier 2021",
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
    images: [beyondDressImage, beyondDressImage2, beyondDressImage3],
    imageBackgroundColor: "#f7e6ec",
    period: "octobre 2014 - mars 2015",
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
    images: [hairelookingImage],
    imageBackgroundColor: "#eeeae2",
    period: "novembre 2013 - avril 2014",
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
      "Corrections, optimisations et évolutions pour assurer le bon fonctionnement du site.",
    links: [],
  },
  {
    name: "Webmastering",
    description:
      "Mise à jour des contenus, suivi technique et amélioration continue.",
    links: [],
  },
  {
    name: "Infographie",
    description: "Création de supports visuels pour la communication.",
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
      "Prises de vues produits et reportages pour alimenter les supports web.",
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
    name: "AdonisJS",
    description:
      "API REST et interface serveur-rendue pour gérer mes recettes.",
    image: recipeBookAdonisImage,
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
    name: "Django",
    description:
      "Implémentation full-stack classique avec Django, React et Inertia.js.",
    repositoryUrl: "https://github.com/lionelp-dev/RecipeBookDjango",
    technologies: [
      "React",
      "TypeScript",
      "Inertia.js",
      "Python",
      "Django",
      "Django ORM",
      "SQLite",
    ],
  },
  {
    name: "Symfony",
    description: "Implémentation full-stack avec une approche classique.",
    image: recipeBookSymfonyImage,
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
    name: "ASP.NET Core",
    description:
      "Exploration de l’écosystème Microsoft et de son outillage moderne.",
    image: recipeBookDotNetImage,
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
    name: "Spring Boot",
    description: "Version orientée API avec une structure claire et modulaire.",
    image: recipeBookSpringBootImage,
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

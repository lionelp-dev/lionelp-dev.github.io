export const siteConfig = {
  contactEmail: "lionel.piquionne@gmail.com",
  githubUrl: "https://github.com/lionelp-dev",
  linkedinUrl: "https://www.linkedin.com/in/lionelp-dev/",
} as const;

export const trainingProfiles = {
  liveCampus: {
    availabilityLabel: "Disponible en alternance",
    degreeName: "Mastère Développeur Full Stack & IA",
    schoolName: "LiveCampus",
    cfaName: "CFA LiveCampus",
    period: "Depuis oct. 2026 — aujourd’hui",
    status: "Formation en cours",
    description:
      "Acquisition de compétences en développement et sécurisation d’applications Full Stack : ReactJS, Node.js, PHP, Symfony, API, SQL & NoSQL, CI/CD, Docker, DevSecOps, Security by Design, Pentest, analyse de risques, stratégie du SI, management et gestion de projet.",
    currentTrainingIntro:
      "Actuellement en formation continue dans le cadre d’un",
    search: {
      lead: "Je recherche activement une entreprise",
      description:
        "en Île-de-France afin de poursuivre ma formation en alternance.",
    },
    footer: {
      intro: "Actuellement en formation continue dans le cadre d’un",
      conclusion:
        "je recherche activement une entreprise pour poursuivre ma formation en alternance.",
    },
    cv: {
      fileName: "cv.pdf",
      downloadName: "CV-Lionel-Piquionne.pdf",
    },
  },
  cfaInsta: {
    availabilityLabel: "Disponible en alternance",
    degreeName: "Mastère Architecte des systèmes d’information",
    schoolName: "CFA INSTA",
    cfaName: "CFA INSTA",
    period: "À partir de nov. 2026",
    status: "Recherche d'alternance",
    description:
      "Acquisition de compétences en architecture logicielle, développement applicatif et sécurité web : .NET, Node.js, JavaScript, Java, Python, Django, API et SOA, cloud, CI/CD, qualité logicielle, Big Data, intelligence artificielle, management et gestion de projet.",
    currentTrainingIntro: "Admis au",
    search: {
      lead: "Je recherche une alternance",
      description:
        "me permettant de contribuer à vos projets professionnels tout en continuant à approfondir mes compétences.",
    },
    footer: {
      intro: "Admis au",
      conclusion:
        "je recherche une alternance me permettant de contribuer à vos projets professionnels tout en continuant à approfondir mes compétences.",
    },
    cv: {
      fileName: "cv-cfa-insta.pdf",
      downloadName: "CV-Lionel-Piquionne-CFA-INSTA.pdf",
    },
  },
} as const;

export type TrainingProfileKey = keyof typeof trainingProfiles;

// Changer cette valeur pour basculer tous les textes et le CV associé.
export const activeTrainingProfile: TrainingProfileKey = "cfaInsta";

export const trainingConfig = trainingProfiles[activeTrainingProfile];

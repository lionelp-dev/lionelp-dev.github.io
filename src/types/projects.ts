export type ProjectLink = {
  label: string;
  url: string;
};

export type FreelanceProjectImages =
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string];

export type FreelanceProject = {
  name: string;
  currentName?: string;
  description: string;
  images: FreelanceProjectImages;
  imageBackgroundColor: string;
  period?: string;
  type: string;
  technologies: string[];
  links: ProjectLink[];
};

export type PersonalProject = {
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  features: PersonalProjectFeature[];
  closingSections: PersonalProjectClosingSection[];
  demoQrCode?: string;
  period?: string;
  type: string;
  technologies: string[];
  links: ProjectLink[];
};

export type PersonalProjectFeature = {
  id: string;
  title: string;
  description?: string;
  details: PersonalProjectFeatureDetail[];
  image: string;
  imageAlt: string;
};

export type PersonalProjectFeatureDetail = {
  label: string;
  description: string;
};

export type PersonalProjectClosingSection = {
  label: string;
  title: string;
  description: string;
};

export type ComplementaryMission = {
  name: string;
  description: string;
  links: ProjectLink[];
};

export type TechWatchProject = {
  name: string;
  title?: string;
  description: string;
  image?: string;
  cardImage?: string;
  showLatestCommit?: boolean;
  repositoryUrl: string;
  projectUrl?: string;
  technologies: string[];
};

export type OverviewItem = {
  title: string;
  description?: string;
  technologies?: string[];
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type FreelanceProject = {
  name: string;
  currentName?: string;
  description: string;
  image: string;
  period?: string;
  type: string;
  technologies: string[];
  links: ProjectLink[];
};

export type PersonalProject = {
  name: string;
  description: string;
  image: string;
  demoQrCode?: string;
  period?: string;
  type: string;
  technologies: string[];
  links: ProjectLink[];
};

export type ComplementaryMission = {
  name: string;
  description: string;
  links: ProjectLink[];
};

export type TechWatchProject = {
  name: string;
  description: string;
  image?: string;
  repositoryUrl: string;
  technologies: string[];
};

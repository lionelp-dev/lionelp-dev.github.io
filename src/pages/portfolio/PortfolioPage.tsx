import {
  complementaryMissions,
  freelanceProjects,
  personalProjects,
} from "../../data/projects";
import { PageHero } from "../../components/PageHero";
import { Typography } from "../../components/Typography";
import { FreelanceCard } from "./components/FreelanceCard";
import { MissionCard } from "./components/MissionCard";
import { PersonalProjectCard } from "./components/PersonalProjectCard";
import { Divider } from "../../components/layout/Divider";
import { PageSection } from "../../components/layout/PageSection";
import { ResponsiveGrid } from "../../components/layout/ResponsiveGrid";
import { SectionHeader } from "../../components/layout/SectionHeader";

export function PortfolioPage() {
  return (
    <>
      <PageHero />
      <PageSection
        id="personal-projects"
        aria-labelledby="personal-projects-title"
      >
        <SectionHeader>
          <Typography
            as="h2"
            id="personal-projects-title"
            variant="section-title"
          >
            Projet personnel
          </Typography>
          <Typography as="p" variant="section-subtitle">
            Conception et développement d’applications web full-stack.
          </Typography>
        </SectionHeader>
        <ResponsiveGrid>
          {personalProjects.map((project) => (
            <PersonalProjectCard key={project.name} project={project} />
          ))}
        </ResponsiveGrid>
        <Divider />
      </PageSection>

      <PageSection
        id="client-projects"
        aria-labelledby="client-projects-title"
      >
        <SectionHeader>
          <Typography
            as="h2"
            id="client-projects-title"
            variant="section-title"
          >
            Projets clients
          </Typography>

          <Typography as="p" variant="section-subtitle">
            Une sélection de projets réalisés pour mes clients.
          </Typography>
        </SectionHeader>
        <ResponsiveGrid columns="two">
          {freelanceProjects.map((project) => (
            <FreelanceCard key={project.name} project={project} />
          ))}
        </ResponsiveGrid>
        <Divider />
      </PageSection>

      <PageSection
        id="complementary-activities"
        aria-labelledby="complementary-activities-title"
      >
        <SectionHeader>
          <Typography as="p" variant="section-subtitle">
            Autres savoir-faire mobilisés au cours de mes projets en freelance.
          </Typography>
        </SectionHeader>
        <div className="divide-y divide-base-content/15 border-y border-base-content/15 mb-[clamp(2rem,4.5svh,10.75rem)]">
          {complementaryMissions.map((mission, index) => (
            <MissionCard
              key={mission.name}
              mission={mission}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
        <Divider />
      </PageSection>
    </>
  );
}

import { Divider } from "../../components/layout/Divider";
import { PageSection } from "../../components/layout/PageSection";
import { ResponsiveGrid } from "../../components/layout/ResponsiveGrid";
import { SectionHeader } from "../../components/layout/SectionHeader";
import { PageHero } from "../../components/PageHero";
import { SlideUpIn } from "../../components/SlideUpIn";
import { Typography } from "../../components/Typography";
import {
  complementaryMissions,
  freelanceProjects,
  personalProjects,
} from "../../data/projects";
import { FreelanceCard } from "./components/FreelanceCard";
import { MissionCard } from "./components/MissionCard";
import { PersonalProjectCard } from "./components/PersonalProjectCard";

export function PortfolioPage() {
  return (
    <>
      <PageHero />
      <PageSection
        id="personal-projects"
        aria-labelledby="personal-projects-title"
      >
        <SlideUpIn>
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
        </SlideUpIn>
        <ResponsiveGrid>
          {personalProjects.map((project, index) => (
            <SlideUpIn key={project.name} delay={150 + index * 75}>
              <PersonalProjectCard project={project} />
            </SlideUpIn>
          ))}
        </ResponsiveGrid>
        <Divider />
      </PageSection>

      <PageSection id="client-projects" aria-labelledby="client-projects-title">
        <SlideUpIn>
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
        </SlideUpIn>
        <ResponsiveGrid columns="two">
          {freelanceProjects.map((project, index) => (
            <SlideUpIn key={project.name} delay={150 + index * 75}>
              <FreelanceCard project={project} />
            </SlideUpIn>
          ))}
        </ResponsiveGrid>
        <Divider />
      </PageSection>

      <PageSection
        id="complementary-activities"
        aria-labelledby="complementary-activities-title"
      >
        <SlideUpIn>
          <SectionHeader>
            <Typography
              as="h2"
              id="complementary-activities-title"
              variant="section-title"
            >
              Autres savoir-faire
            </Typography>
            <Typography as="p" variant="section-subtitle">
              Autres savoir-faire mobilisés au cours de mes projets en
              freelance.
            </Typography>
          </SectionHeader>
        </SlideUpIn>
        <div className="mb-[clamp(2rem,4.5svh,10.75rem)] divide-y divide-base-content/15 border-base-content/15 border-y">
          {complementaryMissions.map((mission, index) => (
            <SlideUpIn key={mission.name} delay={150 + index * 75}>
              <MissionCard
                mission={mission}
                number={String(index + 1).padStart(2, "0")}
              />
            </SlideUpIn>
          ))}
        </div>
        <Divider />
      </PageSection>
    </>
  );
}

import { PageSection } from "../../../components/layout/PageSection";
import { ResponsiveGrid } from "../../../components/layout/ResponsiveGrid";
import { SectionHeader } from "../../../components/layout/SectionHeader";
import { SlideUpIn } from "../../../components/SlideUpIn";
import { Typography } from "../../../components/Typography";
import { personalProjects } from "../../../data/projects";
import { PersonalProjectCard } from "./PersonalProjectCard";

export function PersonalProjectsSection() {
  return (
    <PageSection id="mealo-planner" aria-labelledby="projets-personnels-title">
      <SlideUpIn>
        <SectionHeader className="scroll-mt-[var(--section-scroll-offset)]">
          <Typography
            as="h2"
            id="projets-personnels-title"
            variant="section-title"
          >
            Projets personnels
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
    </PageSection>
  );
}

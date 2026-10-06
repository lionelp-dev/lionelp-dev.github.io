import { ContentHeader } from "../layout/ContentHeader";
import { ResponsiveGrid } from "../layout/ResponsiveGrid";
import { SlideUpIn } from "../SlideUpIn";
import { Typography } from "../Typography";
import type { FreelanceProject } from "../../types/projects";
import { FreelanceCard } from "../FreelanceCard";

type MobileClientProjectsProps = {
  projects: FreelanceProject[];
};

export function MobileClientProjects({ projects }: MobileClientProjectsProps) {
  return (
    <div className="flex flex-col gap-7 md:gap-12 lg:hidden">
      <SlideUpIn>
        <ContentHeader.Root variant="section">
          <ContentHeader.Title>
            <Typography
              as="h2"
              id="realisations-clients-title"
              variant="h3"
              font="serif"
            >
              Autres réalisations
            </Typography>
          </ContentHeader.Title>
          <ContentHeader.Description>
            <Typography as="p" variant="p1">
              Une sélection de sites e-commerce et vitrines réalisés en
              freelance.
            </Typography>
          </ContentHeader.Description>
        </ContentHeader.Root>
      </SlideUpIn>
      <ResponsiveGrid columns="two">
        {projects.map((project, index) => (
          <SlideUpIn key={project.name} delay={150 + index * 75}>
            <FreelanceCard project={project} />
          </SlideUpIn>
        ))}
      </ResponsiveGrid>
    </div>
  );
}

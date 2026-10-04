import { PageSection } from "../../components/layout/PageSection";
import { ResponsiveGrid } from "../../components/layout/ResponsiveGrid";
import { SectionHeader } from "../../components/layout/SectionHeader";
import { SlideUpIn } from "../../components/SlideUpIn";
import { Typography } from "../../components/Typography";
import { techWatchProjects } from "../../data/projects";
import { TechWatchCard } from "./components/TechWatchCard";

export function TechWatchPage() {
  return (
    <PageSection aria-labelledby="technical-explorations-title">
      <SlideUpIn>
        <SectionHeader>
          <Typography
            as="h1"
            id="technical-explorations-title"
            variant="section-title"
          >
            Explorations technologiques
          </Typography>
          <Typography as="p" variant="section-subtitle">
            Projets personnels pour explorer, comparer et suivre l'évolution des
            technologies.
          </Typography>
        </SectionHeader>
      </SlideUpIn>
      <ResponsiveGrid
        columns="responsive"
        aria-label="Projets d'explorations techniques"
        className="gap-4 lg:gap-25"
      >
        {techWatchProjects.map((project, index) => (
          <SlideUpIn key={project.name} delay={250 + index * 75}>
            <TechWatchCard project={project} />
          </SlideUpIn>
        ))}
      </ResponsiveGrid>
    </PageSection>
  );
}

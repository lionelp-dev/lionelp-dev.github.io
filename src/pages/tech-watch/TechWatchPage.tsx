import { PageSection } from "../../components/layout/PageSection";
import { ResponsiveGrid } from "../../components/layout/ResponsiveGrid";
import { SectionHeader } from "../../components/layout/SectionHeader";
import { Typography } from "../../components/Typography";
import { techWatchProjects } from "../../data/projects";
import { TechWatchCard } from "./components/TechWatchCard";

export function TechWatchPage() {
  return (
    <PageSection aria-labelledby="technical-explorations-title">
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
      <ResponsiveGrid
        columns="responsive"
        spacing="compact"
        aria-label="Projets d'explorations techniques"
      >
        {techWatchProjects.map((project) => (
          <TechWatchCard key={project.name} project={project} />
        ))}
      </ResponsiveGrid>
    </PageSection>
  );
}

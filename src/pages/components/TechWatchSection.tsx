import { ContentHeader } from "../../components/layout/ContentHeader";
import { PageSection } from "../../components/layout/PageSection";
import { ProjectImage } from "../../components/project/ProjectImage";
import { SlideUpIn } from "../../components/SlideUpIn";
import { Typography } from "../../components/Typography";
import { techWatchProjects } from "../../data/projects";
import { ImplementationRow } from "./ImplementationRow";
import { useLatestCommitDates } from "./useLatestCommitDates";
import { useProjectsSortedByLatestCommit } from "./useProjectsSortedByLatestCommit";

export function TechWatchSection() {
  const [featuredProject] = techWatchProjects;
  const latestCommitDates = useLatestCommitDates(techWatchProjects);
  const projectsSortedByDate = useProjectsSortedByLatestCommit(
    techWatchProjects,
    latestCommitDates,
  );

  if (!featuredProject) {
    return null;
  }

  return (
    <PageSection
      id="explorations-techniques"
      className="paper-surface tech-watch-surface"
      aria-labelledby="explorations-techniques-title"
      contentClassName="gap-14 md:gap-18 lg:gap-0"
    >
      <SlideUpIn>
        <ContentHeader.Root variant="section">
          <ContentHeader.Eyebrow>
            <Typography as="p" variant="eyebrow">
              Explorations techniques
            </Typography>
          </ContentHeader.Eyebrow>
          <ContentHeader.Title>
            <Typography
              as="h2"
              id="explorations-techniques-title"
              variant="h3"
              font="serif"
            >
              Développement dans d’autres écosystèmes
            </Typography>
          </ContentHeader.Title>
          <ContentHeader.Description>
            <Typography as="p" variant="h2">
              Une même application de gestion de recettes, réimplémentée dans
              divers environnements.
            </Typography>
          </ContentHeader.Description>
        </ContentHeader.Root>
      </SlideUpIn>
      <SlideUpIn delay={150}>
        <article className="grid items-center gap-9 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
          <ContentHeader.Root variant="content" className="lg:pr-8">
            <ContentHeader.Title>
              <Typography as="h2" variant="h2" font="serif">
                Carnet de recette
              </Typography>
            </ContentHeader.Title>
            <ContentHeader.Description>
              <Typography as="p" variant="h2">
                Une même application de gestion de recettes, réimplémentée dans
                divers environnements.
              </Typography>
            </ContentHeader.Description>
          </ContentHeader.Root>
          {featuredProject.image ? (
            <div className="hover-3d hover-3d-subtle hover-3d-subtle-primary w-full">
              <ProjectImage
                src={featuredProject.image}
                title={featuredProject.name}
                className="aspect-video h-auto rounded-md"
                imageClassName="object-top"
              />
              {Array.from({ length: 8 }, (_, index) => (
                <div key={index} aria-hidden="true" />
              ))}
            </div>
          ) : null}
        </article>
      </SlideUpIn>
      <section aria-labelledby="implementations-title">
        <SlideUpIn delay={225}>
          <div className="mb-4 flex items-center gap-4">
            <Typography as="h2" id="implementations-title" variant="h2">
              Les implémentations
            </Typography>
            <span className="h-px w-8 bg-base-content/20" aria-hidden="true" />
          </div>
        </SlideUpIn>
        <div>
          {projectsSortedByDate.map(({ project, latestCommitDate }, index) => (
            <SlideUpIn key={project.name} delay={275 + index * 75}>
              <ImplementationRow
                project={project}
                latestCommitDate={latestCommitDate}
                isFirst={index === 0}
                isLast={index === projectsSortedByDate.length - 1}
              />
            </SlideUpIn>
          ))}
        </div>
      </section>
    </PageSection>
  );
}

import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { GitHubIcon } from "../../../components/GitHubIcon";
import { Divider } from "../../../components/layout/Divider";
import { PageSection } from "../../../components/layout/PageSection";
import { SectionHeader } from "../../../components/layout/SectionHeader";
import { ProjectBadges } from "../../../components/project/ProjectBadges";
import { ProjectImage } from "../../../components/project/ProjectImage";
import { SlideUpIn } from "../../../components/SlideUpIn";
import { Typography } from "../../../components/Typography";
import { techWatchProjects } from "../../../data/projects";
import { cn } from "../../../lib/utils";
import { fetchLatestCommitDate } from "../../../services/github";
import type { TechWatchProject } from "../../../types/projects";

type ImplementationRowProps = {
  project: TechWatchProject;
  latestCommitDate?: string;
  isFirst: boolean;
  isLast: boolean;
};

function LastCommitDate({ latestCommitDate }: { latestCommitDate?: string }) {
  if (!latestCommitDate) {
    return null;
  }

  return (
    <Typography as="p" variant="caption-muted" className="whitespace-nowrap">
      Dernier commit :{" "}
      {new Intl.DateTimeFormat("fr-FR", {
        month: "long",
        year: "numeric",
      }).format(new Date(latestCommitDate))}
    </Typography>
  );
}

function ImplementationRow({
  project,
  latestCommitDate,
  isFirst,
  isLast,
}: ImplementationRowProps) {
  return (
    <article
      className={cn(
        "grid gap-5 py-7 md:grid-cols-[1fr_4fr_1fr_1fr] md:items-center md:gap-7 md:py-8",
        !isFirst && "border-base-content/15 border-t",
        isLast && "border-base-content/15 border-b",
      )}
    >
      <Typography as="h3" variant="feature-title" className="w-fit">
        {project.name}
      </Typography>
      {project.technologies.length > 0 ? (
        <div className="border-base-content/20 md:border-l md:pl-7">
          <ProjectBadges
            badges={project.technologies}
            highlightedBadgeVariant="soft"
            className="badge-sm"
          />
        </div>
      ) : null}
      <div className="border-base-content/20 md:col-start-3 md:border-l md:pl-7">
        <LastCommitDate latestCommitDate={latestCommitDate} />
      </div>
      <a
        className="inline-flex w-fit items-center gap-2 border-base-content/20 no-underline md:col-start-4 md:border-l md:pl-7"
        href={project.repositoryUrl}
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon className="size-4 text-base-content" />
        <Typography as="span" variant="body">
          Voir sur GitHub
        </Typography>
        <ArrowRight className="size-4 stroke-[2]" aria-hidden="true" />
      </a>
    </article>
  );
}

type TechWatchSectionProps = {
  headingLevel?: "h1" | "h2";
};

export function TechWatchSection({
  headingLevel = "h1",
}: TechWatchSectionProps) {
  const [featuredProject] = techWatchProjects;
  const [latestCommitDates, setLatestCommitDates] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    const controller = new AbortController();

    void Promise.all(
      techWatchProjects.map(async (project) => {
        try {
          const date = await fetchLatestCommitDate(
            project.repositoryUrl,
            controller.signal,
          );

          return [project.repositoryUrl, date] as const;
        } catch (error: unknown) {
          if (!(error instanceof DOMException && error.name === "AbortError")) {
            console.error(
              `Unable to fetch the latest commit date for ${project.repositoryUrl}`,
              error,
            );
          }

          return undefined;
        }
      }),
    ).then((dates) => {
      if (!controller.signal.aborted) {
        setLatestCommitDates(
          Object.fromEntries(
            dates.filter(
              (date): date is readonly [string, string] => date !== undefined,
            ),
          ),
        );
      }
    });

    return () => controller.abort();
  }, []);

  const projectsSortedByDate = useMemo(
    () =>
      techWatchProjects
        .map((project, index) => ({
          project,
          index,
          latestCommitDate: latestCommitDates[project.repositoryUrl],
        }))
        .sort((first, second) => {
          const firstTime = first.latestCommitDate
            ? Date.parse(first.latestCommitDate)
            : Number.NEGATIVE_INFINITY;
          const secondTime = second.latestCommitDate
            ? Date.parse(second.latestCommitDate)
            : Number.NEGATIVE_INFINITY;

          return secondTime - firstTime || first.index - second.index;
        }),
    [latestCommitDates],
  );

  if (!featuredProject) {
    return null;
  }

  return (
    <PageSection
      id="explorations-techniques"
      className="paper-surface"
      aria-labelledby="explorations-techniques-title"
      contentClassName="gap-14 md:gap-18 lg:gap-0"
    >
      <SlideUpIn>
        <SectionHeader>
          <Typography
            as={headingLevel}
            id="explorations-techniques-title"
            variant="section-title"
          >
            Explorations technologiques
          </Typography>
          <Typography as="p" variant="section-subtitle">
            Une même application de gestion de recettes, déclinée dans plusieurs
            environnements pour comparer les approches et les outils.
          </Typography>
        </SectionHeader>
      </SlideUpIn>
      <SlideUpIn delay={150}>
        <article className="grid items-center gap-9 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
          <div className="flex flex-col items-start gap-6 lg:pr-8">
            <Typography as="h2" variant="exploration-project-title">
              Recipe Book
            </Typography>
            <Typography as="p" variant="body-lg-compact">
              Une même application de gestion de recettes, réimplémentée dans
              plusieurs environnements afin d’en comparer les approches et les
              outils.
            </Typography>
          </div>
          {featuredProject.image ? (
            <div className="hover-3d hover-3d-subtle hover-3d-subtle-primary w-full">
              <ProjectImage
                src={featuredProject.image}
                title={featuredProject.name}
                className="aspect-video h-auto rounded-md"
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
            <Typography
              as="h2"
              id="implementations-title"
              variant="section-subtitle"
            >
              Les implémentations
            </Typography>
            <span className="h-px w-8 bg-base-content/20" aria-hidden="true" />
          </div>
        </SlideUpIn>
        <div aria-label="Implémentations du livre de recettes">
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
      <Divider />
    </PageSection>
  );
}

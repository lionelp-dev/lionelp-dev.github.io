import { ArrowRight } from "lucide-react";
import { GitHubIcon } from "../../components/GitHubIcon";
import { ProjectBadges } from "../../components/project/ProjectBadges";
import { Typography } from "../../components/Typography";
import { cn } from "../../lib/utils";
import type { TechWatchProject } from "../../types/projects";
import { LastCommitDate } from "./LastCommitDate";

type ImplementationRowProps = {
  project: TechWatchProject;
  latestCommitDate?: string;
  isFirst: boolean;
  isLast: boolean;
};

export function ImplementationRow({
  project,
  latestCommitDate,
  isFirst,
  isLast,
}: ImplementationRowProps) {
  return (
    <article
      className={cn(
        "grid gap-x-5 gap-y-6 py-7 sm:grid-cols-[minmax(8rem,1fr)_minmax(0,2fr)] sm:gap-y-7 lg:grid-cols-[1fr_4fr_1fr_1fr] lg:items-center lg:gap-7 lg:py-8",
        !isFirst && "border-base-content/15 border-t",
        isLast && "border-base-content/15 border-b",
      )}
    >
      <Typography as="h3" variant="h3" className="w-fit">
        {project.name}
      </Typography>
      {project.technologies.length > 0 ? (
        <div className="border-base-content/20 sm:border-l sm:pl-5 lg:pl-7">
          <ProjectBadges
            badges={project.technologies}
            highlightedBadgeVariant="soft"
            className="badge-sm"
          />
        </div>
      ) : null}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:col-span-2 lg:contents">
        <div className="lg:col-start-3 lg:border-l lg:pl-7">
          <LastCommitDate latestCommitDate={latestCommitDate} />
        </div>
        <a
          className="inline-flex w-fit items-center gap-2 no-underline lg:col-start-4 lg:border-l lg:pl-7"
          href={project.repositoryUrl}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className="size-4 text-base-content" />
          <Typography as="span" variant="p4">
            Voir sur GitHub
          </Typography>
          <ArrowRight className="size-4 stroke-[2]" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

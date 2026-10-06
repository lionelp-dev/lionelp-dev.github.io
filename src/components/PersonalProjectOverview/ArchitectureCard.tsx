import { ProjectBadges } from "../project/ProjectBadges";
import { Typography } from "../Typography";
import type { OverviewItem } from "./types";

type ArchitectureCardProps = OverviewItem & {
  bordered?: boolean;
};

export function ArchitectureCard({
  title,
  description,
  technologies,
  bordered = false,
}: ArchitectureCardProps) {
  return (
    <article
      className={`flex flex-col gap-6.25 md:px-6 md:last:pr-0 md:first:pl-0 ${bordered ? "md:border-base-content/15 md:border-l" : ""}`}
    >
      <Typography as="h4" variant="h3">
        {title}
      </Typography>
      {technologies ? (
        <ProjectBadges
          badges={technologies}
          className="badge-sm md:badge-md gap-y-5"
        />
      ) : (
        <Typography
          as="p"
          variant="p6"
          className="text-[clamp(1rem,1.1vw,1.2rem)] leading-[1.5]"
        >
          {description}
        </Typography>
      )}
    </article>
  );
}

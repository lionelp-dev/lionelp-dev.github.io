import { ProjectBadges } from "../project/ProjectBadges";
import { Typography } from "../Typography";
import type { OverviewItem } from "./types";

export function ArchitectureGrid({ items }: { items: OverviewItem[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-3 md:gap-0">
      {items.map(({ title, description, technologies }) => (
        <article
          className={`flex flex-col gap-6.25 md:px-6 md:last:pr-0 md:first:pl-0`}
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
      ))}
    </div>
  );
}

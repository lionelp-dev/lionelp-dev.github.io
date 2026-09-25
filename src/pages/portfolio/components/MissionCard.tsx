import { ArrowRight } from "lucide-react";
import { Typography } from "../../../components/Typography";
import type { ComplementaryMission } from "../../../types/projects";

type MissionCardProps = {
  mission: ComplementaryMission;
  number: string;
};

export function MissionCard({ mission }: MissionCardProps) {
  const primaryLink = mission.links[0];

  return (
    <article
      className={`group relative grid grid-cols-1 items-center gap-x-3.5 gap-y-2.25 px-4.75 py-6.25 text-base-content transition-colors md:gap-y-3 md:px-8 md:py-6.25 lg:grid-cols-[3fr_8fr_2fr] lg:gap-5 lg:gap-x-9 lg:px-17 lg:py-7.75 ${
        primaryLink ? "hover:bg-base-content/[0.03]" : ""
      }`}
    >
      <Typography
        as="h3"
        variant="feature-title"
        className="flex w-fit items-baseline gap-8.75 tracking-[-0.0175em]"
      >
        {mission.name}
      </Typography>

      {mission.description.trim() ? (
        <Typography
          as="p"
          variant="body"
          className="font-normal text-base-content/70 tracking-[-0.03575em] max-lg:col-start-1 max-lg:col-end-4 max-lg:row-start-2 md:text-xl"
        >
          {mission.description}
        </Typography>
      ) : (
        <span aria-hidden="true" />
      )}

      {primaryLink && (
        <div className="col-start-1 row-start-4 mt-1.75 flex flex-wrap items-center justify-start gap-3.5 max-lg:col-end-4 md:col-start-3 md:row-1 lg:justify-end">
          <a
            className="inline-flex w-fit items-center gap-1.5 text-base text-base-content/75 leading-tight tracking-[-0.01em] no-underline transition-colors after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 group-hover:text-accent/80 md:font-semibold"
            href={primaryLink.url}
            rel="noreferrer"
            target="_blank"
          >
            <Typography as="span" variant="label">
              {primaryLink.label}
            </Typography>
            <ArrowRight
              className="size-4.25 flex-none transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      )}
    </article>
  );
}

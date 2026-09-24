import { ArrowRight } from "lucide-react";
import type { ComplementaryMission } from "../../../types/projects";
import { Typography } from "../../../components/Typography";

type MissionCardProps = {
  mission: ComplementaryMission;
  number: string;
};

export function MissionCard({ mission }: MissionCardProps) {
  const primaryLink = mission.links[0];

  return (
    <article
      className={`group relative grid gap-y-2.25 md:gap-y-3 gap-x-3.5 lg:gap-x-9  grid-cols-1 px-4.75 md:px-8 lg:px-17 py-6.25 md:py-6.25 lg:py-7.75 text-base-content  lg:grid-cols-[3fr_8fr_2fr] items-center lg:gap-5 transition-colors ${
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
          className="text-base-content/70 md:text-xl max-lg:row-start-2 max-lg:col-start-1 max-lg:col-end-4 font-normal tracking-[-0.03575em]"
        >
          {mission.description}
        </Typography>
      ) : (
        <span aria-hidden="true" />
      )}

      {primaryLink && (
        <div className="flex flex-wrap col-start-1 md:col-start-3 md:row-1  max-lg:col-end-4 mt-1.75 row-start-4 justify-start  items-center gap-3.5 lg:justify-end">
          <a
            className="inline-flex w-fit items-center gap-1.5 text-base md:font-semibold leading-tight text-base-content/75 tracking-[-0.01em] no-underline transition-colors group-hover:text-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent after:absolute after:inset-0"
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

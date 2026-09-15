import { ArrowRight } from "lucide-react";
import type { ComplementaryMission } from "../../../types/projects";

type MissionCardProps = {
  mission: ComplementaryMission;
  number: string;
};

export function MissionCard({ mission, number }: MissionCardProps) {
  const primaryLink = mission.links[0];

  return (
    <article
      className={`group relative grid gap-y-2.25 md:gap-y-3 gap-x-3.5 lg:gap-x-9 px-4.75 md:px-8 lg:pl-8 lg:pr-18 py-6.25 md:py-6.25 lg:py-7.75 text-base-content grid-cols-[auto_1fr] lg:grid-cols-[3fr_8fr_2fr] items-center lg:gap-5 transition-colors ${
        primaryLink ? "hover:bg-base-content/[0.03]" : ""
      }`}
    >
      <h3 className="flex items-baseline gap-8.75 text-xl leading-tight tracking-[-0.0175em] font-normal text-base-content/85 md:text-3xl">
        <span
          className="font-serif-display flex-none text-2xl leading-none tracking-[-0.035em] text-base-content/40 md:text-3xl"
          aria-hidden="true"
        >
          {number}
        </span>
        {mission.name}
      </h3>

      {mission.description.trim() ? (
        <p className="leading-normal text-base-content/70 md:text-xl font-normal tracking-[-0.03575em] ">
          {mission.description}
        </p>
      ) : (
        <span aria-hidden="true" />
      )}

      {primaryLink && (
        <div className="flex flex-wrap max-lg:col-start-3 mt-1.75 max-lg:row-start-1 max-lg:col-end-3 items-center gap-3.5 lg:justify-end">
          <a
            className="inline-flex w-fit items-center gap-1.5 text-base md:font-semibold leading-tight text-base-content/75 tracking-[-0.01em] no-underline transition-colors group-hover:text-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent after:absolute after:inset-0"
            href={primaryLink.url}
            rel="noreferrer"
            target="_blank"
          >
            <span>{primaryLink.label}</span>
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

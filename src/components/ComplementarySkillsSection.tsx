import { ArrowRight } from "lucide-react";
import { complementaryMissions } from "../data/projects";
import type { ComplementaryMission } from "../types/projects";
import { PageSection } from "./layout/PageSection";
import { SlideUpIn } from "./SlideUpIn";
import { Typography } from "./Typography";

function MissionItem({ mission }: { mission: ComplementaryMission }) {
  const presentationLink = mission.links[0];

  return (
    <article className="relative flex h-full min-h-52 flex-col overflow-hidden rounded-box border border-base-content/12 bg-base-100 p-6 text-base-content md:p-7 lg:p-10">
      <Typography as="h3" variant="h4" font="serif" className="relative z-10">
        {mission.name}
      </Typography>

      {mission.description.trim() ? (
        <Typography
          as="p"
          variant="p3"
          className="relative font-light z-10 mt-5 max-w-2xl text-base-content/75"
        >
          {mission.description}
        </Typography>
      ) : null}

      {presentationLink ? (
        <div className="relative z-10 mt-auto pt-6">
          <a
            className="group/link inline-flex w-fit items-center gap-2 text-base-content no-underline transition-colors after:absolute after:inset-0 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
            href={presentationLink.url}
            rel="noreferrer"
            target="_blank"
          >
            <Typography as="span" variant="p4" className="font-medium">
              {presentationLink.label}
            </Typography>
            <ArrowRight
              className="size-4.5 flex-none transition-transform group-hover/link:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      ) : null}
    </article>
  );
}

export function ComplementarySkillsSection() {
  return (
    <PageSection
      id="complementary-activities"
      className="scroll-mt-(--section-scroll-offset)"
      contentClassName="pt-0!"
    >
      <div className="grid gap-x-4 gap-y-6 lg:gap-x-6 lg:gap-y-8 xl:grid-cols-2">
        {complementaryMissions.map((mission, index) => (
          <SlideUpIn
            key={mission.name}
            delay={150 + index * 75}
            className="h-full"
          >
            <MissionItem mission={mission} />
          </SlideUpIn>
        ))}
      </div>
    </PageSection>
  );
}

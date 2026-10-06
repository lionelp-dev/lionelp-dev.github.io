import { useRef } from "react";
import type { PersonalProject } from "../types/projects";
import { useActiveSlideIndex } from "./ClientProjectCarousel/useActiveSlideIndex";
import { DesktopPersonalProjectFeatures } from "./PersonalProjectFeatures/DesktopPersonalProjectFeatures";
import { MobilePersonalProjectFeatures } from "./PersonalProjectFeatures/MobilePersonalProjectFeatures";
import { Typography } from "./Typography";

type PersonalProjectFeaturesProps = {
  project: PersonalProject;
  projectId: string;
};

export function PersonalProjectFeatures({
  project,
  projectId,
}: PersonalProjectFeaturesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const activeIndex = useActiveSlideIndex(
    sectionRef,
    project.features.length,
    1.25,
  );
  const activeFeature = project.features[activeIndex];

  return (
    <section
      id={`${projectId}-features`}
      ref={sectionRef}
      className="scroll-mt-(--section-scroll-offset)"
      aria-labelledby={`${projectId}-features-title`}
    >
      <div className="lg:sticky lg:top-(--section-scroll-offset) lg:flex lg:h-[calc(100svh-var(--section-scroll-offset))] lg:flex-col lg:gap-10 lg:bg-base-100 lg:pt-10 lg:pb-[clamp(2rem,4svh,3rem)]">
        <Typography
          as="h3"
          id={`${projectId}-features-title`}
          variant="h2"
          className="flex shrink-0 items-center gap-4 after:h-px after:flex-1 after:bg-base-content/15"
        >
          Quelques fonctionnalités et choix techniques
        </Typography>

        {activeFeature ? (
          <div className="hidden min-h-0 lg:flex lg:flex-1">
            <DesktopPersonalProjectFeatures
              activeFeature={activeFeature}
              activeIndex={activeIndex}
              features={project.features}
              projectId={projectId}
            />
          </div>
        ) : null}
      </div>

      <MobilePersonalProjectFeatures
        features={project.features}
        projectId={projectId}
      />

      {activeFeature
        ? project.features
            .slice(1)
            .map((feature) => (
              <div
                aria-hidden="true"
                className="hidden h-[125svh] lg:block"
                key={feature.id}
              />
            ))
        : null}
      {activeFeature ? (
        <div aria-hidden="true" className="hidden h-[125svh] lg:block" />
      ) : null}
    </section>
  );
}

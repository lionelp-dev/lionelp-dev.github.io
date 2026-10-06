import { useMemo, useRef } from "react";
import { createProjectSlides } from "../../components/ClientProjectCarousel/createProjectSlides";
import { DesktopClientProjects } from "../../components/ClientProjectCarousel/DesktopClientProjects";
import { MobileClientProjects } from "../../components/ClientProjectCarousel/MobileClientProjects";
import { useActiveSlideIndex } from "../../components/ClientProjectCarousel/useActiveSlideIndex";
import { ContentHeader } from "../../components/layout/ContentHeader";
import { PageSection } from "../../components/layout/PageSection";
import { MissionCard } from "../../components/MissionCard";
import { SlideUpIn } from "../../components/SlideUpIn";
import { Typography } from "../../components/Typography";
import { complementaryMissions, freelanceProjects } from "../../data/projects";

export function ClientProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const slides = useMemo(() => createProjectSlides(freelanceProjects), []);
  const activeIndex = useActiveSlideIndex(sectionRef, slides.length);
  const activeSlide = slides[activeIndex];

  return (
    <PageSection
      ref={sectionRef}
      id="realisations-clients"
      contentClassName="lg:pt-0"
    >
      <MobileClientProjects projects={freelanceProjects} />
      <DesktopClientProjects
        activeIndex={activeIndex}
        activeSlide={activeSlide}
        slides={slides}
      />
      <SlideUpIn>
        <ContentHeader.Root variant="section">
          <ContentHeader.Title>
            <Typography as="h2" variant="h2">
              Autres compétences mobilisées <br /> au cours de mon activité en
              freelance.
            </Typography>
          </ContentHeader.Title>
        </ContentHeader.Root>
      </SlideUpIn>

      <div className="divide-y divide-base-content/15 border-base-content/15 border-y">
        {complementaryMissions.map((mission, index) => (
          <SlideUpIn key={mission.name} delay={150 + index * 75}>
            <MissionCard
              mission={mission}
              number={String(index + 1).padStart(2, "0")}
            />
          </SlideUpIn>
        ))}
      </div>
    </PageSection>
  );
}

import { ContentHeader } from "../layout/ContentHeader";
import { SlideUpIn } from "../SlideUpIn";
import { Typography } from "../Typography";
import { ProjectDetails } from "./ProjectDetails";
import { ProjectPreview } from "./ProjectPreview";
import { ProjectsProgress } from "./ProjectsProgress";
import type { ProjectSlide } from "./types";

type DesktopClientProjectsProps = {
  activeIndex: number;
  activeSlide?: ProjectSlide;
  slides: ProjectSlide[];
};

export function DesktopClientProjects({
  activeIndex,
  activeSlide,
  slides,
}: DesktopClientProjectsProps) {
  if (!activeSlide) {
    return null;
  }

  return (
    <div className="hidden lg:block">
      <div className="relative sticky top-0 h-[100vh]">
        <div className="flex h-full flex-col gap-13 pt-[var(--section-y-padding)]">
          <SlideUpIn>
            <ContentHeader.Root variant="section">
              <ContentHeader.Eyebrow>
                <Typography as="p" variant="eyebrow">
                  Autres réalisations
                </Typography>
              </ContentHeader.Eyebrow>
              <ContentHeader.Title>
                <Typography
                  as="h2"
                  id="realisations-clients-carousel-title"
                  variant="h3"
                  font="serif"
                >
                  Conception et développement
                </Typography>
              </ContentHeader.Title>
              <ContentHeader.Description>
                <Typography as="p" variant="h2">
                  Une sélection de sites e-commerce et vitrines réalisés en
                  freelance
                </Typography>
              </ContentHeader.Description>
            </ContentHeader.Root>
          </SlideUpIn>
          <div className="grid w-full grid-rows-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(8rem,2fr)] lg:grid-rows-1 lg:gap-15">
            <ProjectPreview
              slide={activeSlide}
              isFirstSlide={activeIndex === 0}
            />
            <ProjectDetails project={activeSlide.project} />
          </div>
        </div>
        <ProjectsProgress activeIndex={activeIndex} slides={slides} />
      </div>
      {slides.slice(1).map((slide) => (
        <div
          aria-hidden="true"
          className="h-[100vh]"
          key={`${slide.project.name}-${slide.imageIndex}`}
        />
      ))}
      <div aria-hidden="true" className="h-[100vh]" />
    </div>
  );
}

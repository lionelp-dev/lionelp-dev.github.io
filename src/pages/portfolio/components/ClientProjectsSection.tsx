import { cva, type VariantProps } from "class-variance-authority";
import { useMemo, useRef } from "react";
import { Divider } from "../../../components/layout/Divider";
import { PageSection } from "../../../components/layout/PageSection";
import { ResponsiveGrid } from "../../../components/layout/ResponsiveGrid";
import { SectionHeader } from "../../../components/layout/SectionHeader";
import { SlideUpIn } from "../../../components/SlideUpIn";
import { Typography } from "../../../components/Typography";
import { freelanceProjects } from "../../../data/projects";
import { CarouselHeader } from "./ClientProjectCarousel/CarouselHeader";
import { createProjectSlides } from "./ClientProjectCarousel/createProjectSlides";
import { ProjectDetails } from "./ClientProjectCarousel/ProjectDetails";
import { ProjectPreview } from "./ClientProjectCarousel/ProjectPreview";
import { useActiveSlideIndex } from "./ClientProjectCarousel/useActiveSlideIndex";
import { FreelanceCard } from "./FreelanceCard";

const clientProjectsSectionVariants = cva(
  "transition-colors duration-500 ease-in-out",
  {
    variants: {
      project: {
        whisco:
          "bg-[#fbedcf] dark:bg-[#3c3121] [html[data-theme=business]_&]:bg-[#3c3121]",
        beyondStore:
          "bg-[#e8ece7] dark:bg-[#29342c] [html[data-theme=business]_&]:bg-[#29342c]",
        beyondDress:
          "bg-[#f7e6ec] dark:bg-[#3f2932] [html[data-theme=business]_&]:bg-[#3f2932]",
        hairelooking:
          "bg-[#eeeae2] dark:bg-[#332d28] [html[data-theme=business]_&]:bg-[#332d28]",
      },
    },
  },
);

const projectVariantByName: Record<
  string,
  NonNullable<VariantProps<typeof clientProjectsSectionVariants>["project"]>
> = {
  Whisco: "whisco",
  "Beyond Store": "beyondStore",
  "Beyond Dress": "beyondDress",
  Hairelooking: "hairelooking",
};

const isProjectBackgroundEnabled = false;

export function ClientProjectsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const slides = useMemo(() => createProjectSlides(freelanceProjects), []);
  const activeIndex = useActiveSlideIndex(carouselRef, slides.length);
  const activeSlide = slides[activeIndex];

  return (
    <PageSection
      id="client-projects"
      className={clientProjectsSectionVariants({
        project:
          isProjectBackgroundEnabled && activeSlide
            ? projectVariantByName[activeSlide.project.name]
            : undefined,
      })}
    >
      <div className="flex flex-col gap-7 md:gap-12 lg:hidden">
        <SlideUpIn>
          <SectionHeader>
            <Typography
              as="h2"
              id="client-projects-title"
              variant="section-title"
            >
              Projets clients
            </Typography>
            <Typography as="p" variant="section-subtitle">
              Une sélection de projets réalisés pour mes clients.
            </Typography>
          </SectionHeader>
        </SlideUpIn>
        <ResponsiveGrid columns="two">
          {freelanceProjects.map((project, index) => (
            <SlideUpIn key={project.name} delay={150 + index * 75}>
              <FreelanceCard project={project} />
            </SlideUpIn>
          ))}
        </ResponsiveGrid>
      </div>
      {activeSlide && (
        <div ref={carouselRef} className="hidden lg:block">
          <div className="sticky top-0 flex h-[100vh] flex-col justify-start gap-13 pt-[12.75vh]">
            <CarouselHeader />
            <div className="grid w-full grid-rows-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-[minmax(0,3.5fr)_minmax(8rem,1.775fr)] lg:grid-rows-1 lg:gap-15">
              <ProjectPreview
                slide={activeSlide}
                isFirstSlide={activeIndex === 0}
              />
              <ProjectDetails project={activeSlide.project} />
            </div>
          </div>
          {slides.slice(1).map((slide) => (
            <div
              aria-hidden="true"
              className="h-[100vh]"
              key={`${slide.project.name}-${slide.imageIndex}`}
            />
          ))}
        </div>
      )}
      <Divider />
    </PageSection>
  );
}

import { ExternalLink } from "lucide-react";
import { useMemo } from "react";
import { freelanceProjects } from "../data/projects";
import { Hover3D } from "./Hover3D";
import { ContentHeader } from "./layout/ContentHeader";
import { PageSection } from "./layout/PageSection";
import { ResponsiveGrid } from "./layout/ResponsiveGrid";
import { ProjectCard } from "./ProjectCard";
import { BrowserFrame } from "./project/BrowserFrame";
import { ProjectBadges } from "./project/ProjectBadges";
import { ScrollCarousel } from "./ScrollCarousel";
import { SlideUpIn } from "./SlideUpIn";
import { Typography } from "./Typography";

function ClientProjectsHeader() {
  return (
    <ContentHeader.Root>
      <ContentHeader.Title>
        <Typography as="p" variant="eyebrow">
          Une sélection de mes réalisations en freelance
        </Typography>
        <Typography as="h2" variant="h3" font="serif">
          Conception et développement web
        </Typography>
      </ContentHeader.Title>
      <ContentHeader.Description>
        <Typography as="p" variant="p2" className="max-w-5xl">
          Des sites vitrines et e-commerce conçus et développés sur mesure pour
          répondre aux besoins de mes clients, de la conception de l’interface
          jusqu’à la mise en ligne et à la maintenance.
        </Typography>
      </ContentHeader.Description>
    </ContentHeader.Root>
  );
}

export function ClientProjectsSection() {
  const slides = useMemo(
    () =>
      freelanceProjects.flatMap((project) =>
        project.images.map((image, imageIndex) => ({
          project,
          image,
          imageIndex,
        })),
      ),
    [],
  );

  return (
    <PageSection
      id="realisations-clients"
      className="scroll-mt-(--section-scroll-offset)"
      contentClassName="pb-0!"
    >
      <ScrollCarousel.Root
        className="hidden lg:block"
        slideCount={slides.length}
      >
        <ScrollCarousel.Sticky>
          <div className="flex  min-h-0 flex-col gap-14.5">
            <ClientProjectsHeader />
            <ScrollCarousel.Active>
              {(activeIndex) => {
                const activeSlide = slides[activeIndex];
                if (!activeSlide) return null;
                return (
                  <div className="grid min-h-0 items-start w-full grid-rows-[minmax(0,1fr)_auto] gap-6 lg:grid-cols-[minmax(0,3.75fr)_minmax(8rem,2fr)] lg:grid-rows-1 lg:gap-12">
                    <Hover3D className="h-full max-h-[min(56svh,48rem)] w-full max-w-7xl lg:w-[98%] lg:justify-self-start">
                      <BrowserFrame
                        title={
                          <SlideUpIn
                            as="span"
                            key={activeSlide.project.name}
                            delay={0}
                            duration={250}
                            variant="blur"
                          >
                            <Typography
                              as="span"
                              variant="p6"
                              className="text-base-content/70 text-xs! leading-none!"
                            >
                              {activeSlide.project.name}
                            </Typography>
                          </SlideUpIn>
                        }
                      >
                        <div className="min-h-0 flex-1 overflow-hidden rounded-lg">
                          <SlideUpIn
                            key={`${activeSlide.project.name}-${activeSlide.imageIndex}`}
                            delay={250}
                            duration={350}
                            variant="blur"
                            className="h-full [&>div]:h-full"
                          >
                            <img
                              className="size-full object-cover object-top"
                              src={activeSlide.image}
                              alt={`Aperçu ${activeSlide.imageIndex + 1}/${activeSlide.project.images.length} du projet ${activeSlide.project.name}`}
                              loading={activeIndex === 0 ? "eager" : "lazy"}
                            />
                          </SlideUpIn>
                        </div>
                      </BrowserFrame>
                    </Hover3D>
                    <div className="flex pt-13 min-w-0 flex-col items-start justify-center gap-[clamp(1.5rem,3svh,2.5rem)]">
                      <div className="flex flex-col gap-5.75">
                        <div className="flex flex-col gap-3.75">
                          <div className="flex flex-col gap-6.25">
                            <div className="flex flex-col gap-2">
                              <SlideUpIn
                                key={`${activeSlide.project.name}-type`}
                                delay={0}
                              >
                                <Typography as="p" variant="eyebrow">
                                  {activeSlide.project.type}
                                </Typography>
                              </SlideUpIn>
                              <SlideUpIn
                                key={`${activeSlide.project.name}-title`}
                                delay={75}
                              >
                                <Typography as="h2" variant="h3" font="serif">
                                  {activeSlide.project.name}
                                </Typography>
                              </SlideUpIn>
                              {activeSlide.project.currentName ? (
                                <SlideUpIn
                                  key={`${activeSlide.project.name}-current-name`}
                                  delay={75}
                                >
                                  <Typography as="p" variant="p3">
                                    Aujourd&apos;hui{" "}
                                    {activeSlide.project.currentName}
                                  </Typography>
                                </SlideUpIn>
                              ) : null}
                            </div>
                            {activeSlide.project.period ? (
                              <SlideUpIn
                                key={`${activeSlide.project.name}-period`}
                                delay={150}
                              >
                                <Typography as="p" variant="p2">
                                  {activeSlide.project.period}
                                </Typography>
                              </SlideUpIn>
                            ) : null}
                          </div>
                          <SlideUpIn
                            key={`${activeSlide.project.name}-description`}
                            delay={225}
                          >
                            <Typography
                              as="p"
                              variant="p2"
                              className="font-light"
                            >
                              {activeSlide.project.description}
                            </Typography>
                          </SlideUpIn>
                        </div>
                      </div>

                      <SlideUpIn
                        key={`${activeSlide.project.name}-badges`}
                        delay={375}
                      >
                        <ProjectBadges
                          badges={activeSlide.project.technologies}
                          className="badge-sm"
                        />
                      </SlideUpIn>
                      <SlideUpIn
                        key={`${activeSlide.project.name}-actions`}
                        delay={300}
                        className="w-full"
                      >
                        <div className="card-actions grid w-full grid-cols-2 gap-2.75">
                          {activeSlide.project.links.map((link) => (
                            <a
                              className="btn btn-soft inline-flex w-full items-center gap-1.5 whitespace-nowrap rounded-full leading-(--leading-xl) no-underline"
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              key={`${activeSlide.project.name}-${link.label}`}
                            >
                              <ExternalLink aria-hidden="true" />
                              <Typography as="span">{link.label}</Typography>
                            </a>
                          ))}
                        </div>
                      </SlideUpIn>
                    </div>
                  </div>
                );
              }}
            </ScrollCarousel.Active>
          </div>
          <ScrollCarousel.Indicator aria-label="Progression des réalisations" />
        </ScrollCarousel.Sticky>
        <ScrollCarousel.Spacer />
      </ScrollCarousel.Root>

      <div className="flex flex-col gap-7 md:gap-12 lg:hidden">
        <ClientProjectsHeader />
        <ResponsiveGrid columns="two">
          {freelanceProjects.map((project, index) => (
            <SlideUpIn key={project.name} delay={150 + index * 75}>
              {
                <ProjectCard
                  title={project.name}
                  titlePrefix={project.type}
                  titleAside={
                    project.currentName
                      ? `Aujourd'hui ${project.currentName}`
                      : undefined
                  }
                  meta={project.period}
                  description={project.description}
                  image={project.images[0]}
                  imageCaption={project.name}
                  badges={project.technologies}
                  links={project.links}
                />
              }
            </SlideUpIn>
          ))}
        </ResponsiveGrid>
      </div>
    </PageSection>
  );
}

import { Check, ExternalLink } from "lucide-react";
import { architectureItems, personalProject } from "../data/projects";
import { GitHubIcon } from "./GitHubIcon";
import { Hover3D } from "./Hover3D";
import { ContentHeader } from "./layout/ContentHeader";
import { PageSection } from "./layout/PageSection";
import { PersonalProjectImageCarousel } from "./project/PersonalProjectImageCarousel";
import { ProjectBadges } from "./project/ProjectBadges";
import { ProjectDemoQrCode } from "./project/ProjectDemoQrCode";
import { Typography } from "./Typography";

export function PersonalProjectsSection() {
  const [sourceCodeLink, demoLink] = personalProject.links;

  return (
    <PageSection
      id="mealo-planner"
      className="scroll-mt-(--section-scroll-offset)  flex flex-col"
    >
      <div className="flex flex-col gap-10">
        <ContentHeader.Root>
          <ContentHeader.Title>
            <Typography as="p" variant="eyebrow">
              Mon projet principal
            </Typography>
            <Typography
              as="h2"
              id="projets-personnels-title"
              variant="h3"
              font="serif"
            >
              <span className="block">
                Concevoir et développer
                <br />
                une application web
              </span>
            </Typography>
          </ContentHeader.Title>
          <ContentHeader.Description>
            <Typography as="p" variant="p2" className="max-w-5xl">
              À travers ce projet, je travaille aussi bien sur la conception des
              interfaces que sur la logique métier, l'architecture et les tests.
              Au fil de son évolution, les problématiques que je rencontre
              m'amènent à réfléchir à mes choix techniques et à faire évoluer
              les solutions mises en place.
            </Typography>
          </ContentHeader.Description>
        </ContentHeader.Root>
        <article className="flex min-w-0 flex-col text-base-content gap-5">
          <div className="grid gap-13 gap-y-10 lg:grid-cols-24 lg:items-stretch">
            <div className="flex min-w-0 flex-col items-start gap-10 lg:order-1 lg:col-span-9 lg:pt-5">
              <div className="flex w-full flex-col gap-4 md:gap-6.75">
                <div className="flex w-full flex-col gap-4 md:gap-2.75">
                  <ContentHeader.Root className="w-full">
                    <ContentHeader.Title>
                      <Typography
                        as="h3"
                        id="mealo-planner-title"
                        variant="h2"
                        font="serif"
                        className="ml-[-0.0975em] max-w-none whitespace-nowrap"
                      >
                        Mealo
                        <br />
                        Planner
                      </Typography>
                    </ContentHeader.Title>
                    <ContentHeader.Description>
                      <div className="flex flex-col gap-7">
                        <Typography as="p" variant="p2">
                          {personalProject.description}
                        </Typography>
                        <div className="flex flex-col gap-6.75">
                          <ul className="flex flex-col gap-3.25">
                            {personalProject.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="flex items-start gap-2.5"
                              >
                                <span
                                  className="mt-0.5 grid size-4.5 flex-none place-items-center rounded-full bg-secondary/10 text-secondary ring-1 ring-secondary/15"
                                  aria-hidden="true"
                                >
                                  <Check className="size-3 stroke-[2.5]" />
                                </span>
                                <Typography as="span" variant="p3">
                                  {highlight}
                                </Typography>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </ContentHeader.Description>
                  </ContentHeader.Root>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {sourceCodeLink ? (
                  <a
                    className="btn btn-md btn-soft inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full leading-tight no-underline"
                    href={sourceCodeLink.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon className="size-6 flex-none" />
                    <Typography as="span">{sourceCodeLink.label}</Typography>
                  </a>
                ) : null}

                {demoLink ? (
                  <a
                    className="btn btn-md btn-secondary inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full leading-tight no-underline"
                    href={demoLink.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink
                      className="size-6 flex-none"
                      aria-hidden="true"
                    />
                    <Typography as="span">{demoLink.label}</Typography>
                  </a>
                ) : null}
              </div>
            </div>
            <div className="relative min-w-0 lg:order-2 lg:col-span-15 ">
              <Hover3D className="w-full">
                <PersonalProjectImageCarousel
                  features={personalProject.features}
                  projectName={personalProject.name}
                  className="aspect-[8/5]"
                  imageClassName="object-left-top"
                  indicatorClassName="lg:mt-9 lg:mr-0 lg:self-center"
                />
              </Hover3D>
              {personalProject.demoQrCode ? (
                <ProjectDemoQrCode
                  src={personalProject.demoQrCode}
                  projectName={personalProject.name}
                  className="absolute -right-6 -bottom-2 z-20 w-[20.625rem] shadow-md"
                />
              ) : null}
            </div>
          </div>

          <section className="flex flex-col gap-6">
            <Typography as="h3" variant="h3" font="sans">
              Architecture de l'application
            </Typography>
            <div className="grid gap-x-8 gap-y-10 md:gap-y-12 xl:grid-cols-3 xl:gap-x-10">
              {architectureItems.map(({ title, description, technologies }) => (
                <article
                  key={title}
                  className="flex min-w-0 flex-col gap-5 md:gap-6.25"
                >
                  <Typography as="h4" variant="h4">
                    {title}
                  </Typography>
                  {technologies ? (
                    <ProjectBadges
                      badges={technologies}
                      className="badge-sm md:badge-md"
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
          </section>

          {/*
        <section
          id="mealo-planner-features"
          aria-label="Quelques fonctionnalités et choix techniques"
        >
          <Typography
            as="h3"
            id="mealo-planner-features-title-mobile"
            variant="h2"
            className="mb-20 flex items-center gap-4 after:h-px after:flex-1 after:bg-base-content/15 lg:hidden"
          >
            Quelques fonctionnalités et choix techniques
          </Typography>
                <ScrollCarousel.Root
            className="hidden lg:block"
            slideCount={personalProject.features.length}
            scrollDistanceMultiplier={1.25}
          >
            <ScrollCarousel.Sticky className="flex flex-col gap-8">
              <Typography
                as="h3"
                id="mealo-planner-features-title"
                variant="h2"
                className="flex shrink-0 items-center gap-4 after:h-px after:flex-1 after:bg-base-content/15"
              >
                Quelques fonctionnalités et choix techniques
              </Typography>

              <ScrollCarousel.Active>
                {(activeIndex) => {
                  const activeFeature = personalProject.features[activeIndex];
                  if (!activeFeature) return null;
                  return (
                    <article
                      className="grid  min-w-0 gap-6.75 lg:h-[75%] lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,1.40fr)] lg:gap-x-12"
                      aria-labelledby={`mealo-planner-feature-desktop-${activeFeature.id}`}
                    >
                      <div className="min-w-0 pt-5">
                        <div
                          className={`flex max-w-152 flex-col lg:max-w-none lg:max-w-none h-full`}
                        >
                          {activeFeature.details.map((detail) => (
                            <SlideUpIn
                              key={`${activeFeature.id}-${detail.label}`}
                              delay={150}
                              className="lg:flex-1 flex-start "
                            >
                              <div className="flex flex-col justify-center gap-1.75 lg:gap-4.5">
                                <div>
                                  <Typography as="p" variant="h3">
                                    {detail.label}
                                  </Typography>
                                </div>
                                <Typography
                                  as="p"
                                  variant="p3"
                                  className="whitespace-pre-line"
                                >
                                  {detail.description}
                                </Typography>
                              </div>
                            </SlideUpIn>
                          ))}
                        </div>
                      </div>
                      <div className="flex min-w-0 flex-col gap-y-[clamp(2rem,3svh,2.5rem)] lg:h-full">
                        <ContentHeader.Root className="min-w-0">
                          <ContentHeader.Title>
                            <SlideUpIn
                              key={`${activeFeature.id}-title`}
                              delay={0}
                            >
                              <Typography
                                as="h3"
                                id={`mealo-planner-feature-desktop-${activeFeature.id}`}
                                variant="h3"
                                font="serif"
                                className="ml-[-0.0975em]"
                              >
                                {activeFeature.title}
                              </Typography>
                            </SlideUpIn>
                          </ContentHeader.Title>
                        </ContentHeader.Root>
                        <Hover3D className="w-full lg:h-[clamp(27rem,30.6vw,36rem)]">
                          <ProjectImage
                            src={activeFeature.image}
                            title={activeFeature.title}
                            alt={activeFeature.imageAlt}
                            caption={activeFeature.title}
                            previewAnimation="blur"
                            className="aspect-video lg:aspect-auto lg:h-full"
                            imageClassName="object-contain object-center"
                          />
                        </Hover3D>
                      </div>
                    </article>
                  );
                }}
              </ScrollCarousel.Active>
              <ScrollCarousel.Indicator />
            </ScrollCarousel.Sticky>
            <ScrollCarousel.Spacer />
          </ScrollCarousel.Root>



 <div className="relative flex w-full flex-col gap-10 lg:hidden">
            <div className="flex min-h-0 flex-col gap-15">
              {personalProject.features.map((feature) => (
                <article
                  key={feature.id}
                  className="grid min-w-0 gap-6.75 lg:h-[70%] lg:grid-cols-[minmax(20rem,1.45fr)_minmax(0,0.95fr)] lg:gap-x-10"
                  aria-labelledby={`mealo-planner-feature-${feature.id}`}
                >
                  <div className="flex min-w-0 flex-col gap-y-[clamp(2rem,3svh,2.5rem)] lg:order-1 lg:h-full">
                    <ContentHeader.Root className="min-w-0">
                      <ContentHeader.Title>
                        <SlideUpIn key={`${feature.id}-title`} delay={0}>
                          <Typography
                            as="h3"
                            id={`mealo-planner-feature-${feature.id}`}
                            variant="h3"
                            font="serif"
                            className="ml-[-0.0975em]"
                          >
                            {feature.title}
                          </Typography>
                        </SlideUpIn>
                      </ContentHeader.Title>
                    </ContentHeader.Root>
                    {
                      <Hover3D className="w-full lg:h-[clamp(27rem,30.6vw,36rem)]">
                        <ProjectImage
                          src={feature.image}
                          title={feature.title}
                          alt={feature.imageAlt}
                          caption={feature.title}
                          previewAnimation="blur"
                          className="aspect-video lg:aspect-auto lg:h-full"
                          imageClassName="object-contain object-center"
                        />
                      </Hover3D>
                    }
                  </div>
                  <div className="min-w-0 lg:order-2">
                    <div
                      className={`flex max-w-152 flex-col lg:max-w-none lg:max-w-none h-full`}
                    >
                      {feature.details.map((detail) => (
                        <SlideUpIn
                          key={`${feature.id}-${detail.label}`}
                          delay={150}
                          className="lg:flex-1 flex-start "
                        >
                          <div className="flex flex-col justify-center gap-1.5 lg:gap-3">
                            <div>
                              <Typography as="p" variant="h5">
                                {detail.label}
                              </Typography>
                            </div>
                            <Typography
                              as="p"
                              variant="p3"
                              className="whitespace-pre-line"
                            >
                              {detail.description}
                            </Typography>
                          </div>
                        </SlideUpIn>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
                */}
        </article>
      </div>
    </PageSection>
  );
}

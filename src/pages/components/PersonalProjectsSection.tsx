import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import { useActiveSlideIndex } from "../../components/ClientProjectCarousel/useActiveSlideIndex";
import { DesktopPersonalProjectFeatures } from "../../components/PersonalProjectFeatures/DesktopPersonalProjectFeatures";
import { MobilePersonalProjectFeatures } from "../../components/PersonalProjectFeatures/MobilePersonalProjectFeatures";
import { GitHubIcon } from "../../components/GitHubIcon";
import { ContentHeader } from "../../components/layout/ContentHeader";
import { PageSection } from "../../components/layout/PageSection";
import { ArchitectureGrid } from "../../components/PersonalProjectOverview/ArchitectureGrid";
import { architectureItems } from "../../components/PersonalProjectOverview/architectureItems";
import { PersonalProjectImageCarousel } from "../../components/project/PersonalProjectImageCarousel";
import { ProjectDemoQrCode } from "../../components/project/ProjectDemoQrCode";
import { SlideUpIn } from "../../components/SlideUpIn";
import { Typography } from "../../components/Typography";
import { personalProject } from "../../data/projects";

export function PersonalProjectsSection() {
  const projectId = personalProject.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const [sourceCodeLink, demoLink] = personalProject.links;
  const sectionRef = useRef<HTMLElement>(null);
  const activeIndex = useActiveSlideIndex(sectionRef, personalProject.features.length, 1.25);
  const activeFeature = personalProject.features[activeIndex];

  return (
    <PageSection id="mealo-planner" aria-labelledby="projets-personnels-title">
      <SlideUpIn>
        <ContentHeader.Root
          className="scroll-mt-(--section-scroll-offset)"
        >
          <ContentHeader.Title>
            <Typography as="p" variant="eyebrow">
              Projets personnels
            </Typography>
            <Typography
              as="h2"
              id="projets-personnels-title"
              variant="h3"
              font="serif"
            >
              <span className="block">
                Conception et développement
                <br />
                d’applications web
              </span>
            </Typography>
          </ContentHeader.Title>
        </ContentHeader.Root>
      </SlideUpIn>
      <article className="flex min-w-0 flex-col text-base-content">
        <div className="grid gap-13 gap-y-10 lg:grid-cols-24 lg:items-center">
          <div className="flex min-w-0 flex-col items-start gap-10 lg:order-1 lg:col-span-9">
            <div className="flex w-full flex-col gap-4 md:gap-6.75">
              <div className="flex w-full flex-col gap-4 md:gap-3.75">
                <ContentHeader.Root className="w-full">
                  <ContentHeader.Title>
                    <Typography
                      as="h3"
                      id={`${projectId}-title`}
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
                    <Typography as="p" variant="p2">
                      {personalProject.description}
                    </Typography>
                  </ContentHeader.Description>
                </ContentHeader.Root>
              </div>

              <div className="flex flex-wrap items-start gap-3">
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

            {personalProject.demoQrCode ? (
              <ProjectDemoQrCode
                src={personalProject.demoQrCode}
                projectName={personalProject.name}
              />
            ) : null}
          </div>

          <div className="relative min-w-0 lg:order-2 lg:col-span-15">
            <div className="hover-3d hover-3d-subtle hover-3d-subtle-primary w-full">
              <PersonalProjectImageCarousel
                features={personalProject.features}
                projectName={personalProject.name}
                className="aspect-video lg:min-h-96 xl:min-h-152"
                imageClassName="object-left-top"
              />
              {Array.from({ length: 8 }, (_, index) => (
                <div key={index} aria-hidden="true" />
              ))}
            </div>
          </div>
        </div>

        <section
          className="flex flex-col gap-8 pb-11 pt-1"
          aria-labelledby="technologies-du-projet-title"
        >
          <Typography
            as="h3"
            id="technologies-du-projet-title"
            variant="h2"
            className="flex items-center gap-4 after:h-px after:flex-1 after:bg-base-content/15"
          >
            Les technologies utilisées pour ce projet
          </Typography>
          <ArchitectureGrid items={architectureItems} />
        </section>

        <section
          id={`${projectId}-features`}
          ref={sectionRef}
          className="scroll-mt-(--section-scroll-offset)"
          aria-labelledby={`${projectId}-features-title`}
        >
          <div className="lg:sticky lg:top-(--section-scroll-offset) lg:flex lg:h-[calc(100svh-var(--section-scroll-offset))] lg:flex-col lg:gap-10 lg:bg-base-100 ">
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
                  features={personalProject.features}
                  projectId={projectId}
                />
              </div>
            ) : null}
          </div>

          <MobilePersonalProjectFeatures
            features={personalProject.features}
            projectId={projectId}
          />

          {activeFeature
            ? personalProject.features
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

      </article>
    </PageSection>
  );
}

import { ExternalLink, Smartphone } from "lucide-react";
import { GitHubIcon } from "../../components/GitHubIcon";
import { ContentHeader } from "../../components/layout/ContentHeader";
import { PageSection } from "../../components/layout/PageSection";
import { PersonalProjectFeatures } from "../../components/PersonalProjectFeatures";
import { ArchitectureGrid } from "../../components/PersonalProjectOverview/ArchitectureGrid";
import { architectureItems } from "../../components/PersonalProjectOverview/architectureItems";
import { PersonalProjectImageCarousel } from "../../components/project/PersonalProjectImageCarousel";
import { SlideUpIn } from "../../components/SlideUpIn";
import { Typography } from "../../components/Typography";
import { personalProject } from "../../data/projects";

export function PersonalProjectsSection() {
  const projectId = personalProject.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const [sourceCodeLink, demoLink] = personalProject.links;

  return (
    <PageSection id="mealo-planner" aria-labelledby="projets-personnels-title">
      <SlideUpIn>
        <ContentHeader.Root
          variant="section"
          className="scroll-mt-(--section-scroll-offset)"
        >
          <ContentHeader.Eyebrow>
            <Typography as="p" variant="eyebrow">
              Projets personnels
            </Typography>
          </ContentHeader.Eyebrow>
          <ContentHeader.Title>
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
                <ContentHeader.Root variant="content" className="w-full">
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
              <aside className="hidden w-fit items-center gap-3 rounded-lg border border-base-content/10 bg-base-100 p-1.25 pr-2 lg:flex">
                <div className="flex size-32 flex-none items-center justify-center rounded-md bg-white p-1">
                  <img
                    className="size-full"
                    src={personalProject.demoQrCode}
                    alt={`QR code de la démo ${personalProject.name}`}
                  />
                </div>

                <div className="min-w-0 max-w-45 pr-2.5">
                  <Typography as="p" variant="p5">
                    <Smartphone
                      className="mr-1 inline size-6 stroke-[2.1] align-[-0.1875em]"
                      aria-hidden="true"
                    />
                    Scannez le QR code pour tester Mealo sur votre téléphone.
                  </Typography>
                </div>
              </aside>
            ) : null}
          </div>

          <div className="relative min-w-0 pb-10 lg:order-2 lg:col-span-15 lg:pb-10">
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
          className="flex flex-col gap-8"
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

        <PersonalProjectFeatures
          project={personalProject}
          projectId={projectId}
        />
      </article>
    </PageSection>
  );
}

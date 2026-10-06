import { ExternalLink } from "lucide-react";
import type { PersonalProject } from "../../types/projects";
import { GitHubIcon } from "../GitHubIcon";
import { ContentHeader } from "../layout/ContentHeader";
import { Typography } from "../Typography";
import { OverviewLink } from "./OverviewLink";

export function ProjectDemo({ project }: { project: PersonalProject }) {
  const demoLink = project.links.find(
    (link) => !link.url.includes("github.com"),
  );
  const sourceLink = project.links.find((link) =>
    link.url.includes("github.com"),
  );

  return (
    <div className="flex flex-col gap-14 lg:gap-18">
      <section className="flex flex-col gap-6 rounded-4xl bg-base-200/70 px-10 py-10 md:px-16 md:py-12">
        <ContentHeader.Root variant="content" className="w-full">
          <ContentHeader.Title>
            <Typography
              as="h3"
              variant="h2"
              font="serif"
              className="ml-[-0.0975em] max-w-none"
            >
              <span className="md:whitespace-nowrap">
                Et bien d’autres fonctionnalités
              </span>
              <br />à découvrir dans la démo
            </Typography>
          </ContentHeader.Title>
          <ContentHeader.Description>
            <Typography as="p" variant="h2">
              Espaces collaboratifs, partage des listes de courses et des
              recettes, etc.
            </Typography>
          </ContentHeader.Description>
        </ContentHeader.Root>
        <div className="flex items-start gap-3">
          {demoLink ? (
            <OverviewLink href={demoLink.url} label={demoLink.label} primary>
              <ExternalLink className="size-6" aria-hidden="true" />
            </OverviewLink>
          ) : null}
          {sourceLink ? (
            <OverviewLink href={sourceLink.url} label={sourceLink.label}>
              <GitHubIcon className="size-6" />
            </OverviewLink>
          ) : null}
        </div>
      </section>
    </div>
  );
}

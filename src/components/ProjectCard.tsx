import { ExternalLink, type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { cn } from "../lib/utils";
import type { ProjectLink } from "../types/projects";
import {
  ProjectActions,
  type ProjectActionTone,
} from "./project/ProjectActions";
import { ProjectBadges } from "./project/ProjectBadges";
import { ProjectImage } from "./project/ProjectImage";
import { Typography } from "./Typography";

type ProjectCardProps = {
  title: string;
  titlePrefix?: string;
  titleAside?: string;
  meta?: string;
  description?: string;
  image?: string;
  imagePosition?: "left" | "right" | "top";
  imageContainerClassName?: string;
  imageContainerStyle?: CSSProperties;
  imageCaption?: string;
  badges?: string[];
  highlightedBadgeVariant?: "secondary" | "soft";
  links?: ProjectLink[];
  linkIcon?: LucideIcon;
  actionsVariant?: "client" | "default";
};

export function ProjectCard({
  title,
  titlePrefix,
  titleAside,
  meta,
  description,
  image,
  imagePosition = "left",
  imageContainerClassName,
  imageContainerStyle,
  imageCaption,
  badges = [],
  highlightedBadgeVariant = "soft",
  links = [],
  linkIcon: LinkIcon = ExternalLink,
  actionsVariant = "default",
}: ProjectCardProps) {
  const hasLinks = links.length > 0;
  const actionLinks: Array<ProjectLink & { tone: ProjectActionTone }> =
    links.map((link) => ({
      ...link,
      tone: "soft",
    }));

  return (
    <article className="card">
      <div
        className={cn(
          `grid h-full items-center text-base-content`,
          image &&
            imagePosition === "left" &&
            "lg:grid-cols-[56%_minmax(0,1fr)]",
          image &&
            imagePosition === "right" &&
            "lg:grid-cols-[minmax(0,1fr)_58%]",
        )}
      >
        {image && (imagePosition === "left" || imagePosition === "top") ? (
          <ProjectImage
            src={image}
            title={title}
            className={cn(
              imagePosition === "top" &&
                "aspect-video !h-auto rounded-b-none border-x-0 border-t-0",
              imageContainerClassName,
            )}
            style={imageContainerStyle}
            caption={imageCaption}
          />
        ) : null}

        <div
          className={`flex h-full w-full min-w-0 flex-col items-start justify-center gap-y-3.75 px-1 lg:px-8.75 py-3.75 text-left`}
        >
          <div className="flex w-full flex-col items-start gap-y-3.75">
            <div className="flex w-full flex-col items-start gap-2.75">
              <div className="flex w-full flex-col items-start gap-0.5">
                {titlePrefix && (
                  <Typography as="p" variant="meta">
                    {titlePrefix}
                  </Typography>
                )}
                <Typography
                  as="h3"
                  variant="project-title"
                  className="gap-2.25"
                >
                  <span className="inline-flex min-w-0 flex-wrap items-baseline justify-start gap-x-2 font-normal">
                    <Typography
                      as="span"
                      variant="label"
                      className="text-2xl md:text-4xl"
                    >
                      {title}
                    </Typography>
                  </span>
                  {titleAside && (
                    <span className="pb-0.5 text-left font-normal text-base text-base-content/80 leading-tight tracking-[-0.0375em]">
                      <Typography as="span" variant="label">
                        {titleAside}
                      </Typography>
                    </span>
                  )}
                </Typography>
                {meta && (
                  <Typography as="p" variant="meta">
                    {meta}
                  </Typography>
                )}
              </div>
              {description && (
                <Typography
                  as="p"
                  variant="body"
                  className="line-clamp-2 text-base-content/70 tracking-[-0.04975em] md:text-lg"
                >
                  {description}
                </Typography>
              )}
            </div>
            {badges.length > 0 ? (
              <ProjectBadges
                badges={badges}
                highlightedBadgeVariant={highlightedBadgeVariant}
                className="badge-sm md:badge-md"
              />
            ) : null}
          </div>
          {hasLinks ? (
            <ProjectActions
              title={title}
              links={actionLinks}
              icon={LinkIcon}
              variant={actionsVariant}
            />
          ) : (
            <div className="card-actions w-full" aria-hidden="true" />
          )}
        </div>
        {image && imagePosition === "right" ? (
          <ProjectImage
            src={image}
            title={title}
            className={imageContainerClassName}
            style={imageContainerStyle}
            caption={imageCaption}
          />
        ) : null}
      </div>
    </article>
  );
}

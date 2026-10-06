import { ExternalLink, type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { cn } from "../lib/utils";
import type { ProjectLink } from "../types/projects";
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
}: ProjectCardProps) {
  const hasLinks = links.length > 0;

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
                "!h-auto aspect-video rounded-b-none border-x-0 border-t-0",
              imageContainerClassName,
            )}
            style={imageContainerStyle}
            caption={imageCaption}
          />
        ) : null}

        <div
          className={`flex h-full w-full min-w-0 flex-col items-start justify-center gap-y-3.75 px-1 py-3.75 text-left lg:px-8.75`}
        >
          <div className="flex w-full flex-col items-start gap-y-3.75">
            <div className="flex w-full flex-col items-start gap-2.75">
              <div className="flex w-full flex-col items-start gap-0.5">
                {titlePrefix && (
                  <Typography as="p" variant="p5">
                    {titlePrefix}
                  </Typography>
                )}
                <Typography
                  as="h3"
                  variant="h4"
                  className="flex-col items-start gap-1"
                >
                  <Typography as="span" variant="h3">
                    {title}
                  </Typography>
                  {titleAside && (
                    <Typography as="span" variant="p5">
                      {titleAside}
                    </Typography>
                  )}
                </Typography>
                {meta && (
                  <Typography as="p" variant="p5">
                    {meta}
                  </Typography>
                )}
              </div>
              {description && (
                <Typography as="p" variant="p2" className="line-clamp-2">
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
            <div className="card-actions grid w-full grid-cols-2 gap-2.75">
              {links.map((link) => (
                <a
                  className="btn btn-soft inline-flex w-full items-center gap-1.5 whitespace-nowrap rounded-full no-underline leading-(--leading-xl)"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  key={`${title}-${link.label}`}
                >
                  <LinkIcon aria-hidden="true" />
                  <Typography as="span">{link.label}</Typography>
                </a>
              ))}
            </div>
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

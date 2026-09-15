import { useState } from "react";
import { ExternalLink, type LucideIcon } from "lucide-react";
import type { ProjectLink } from "../types/projects";

type ProjectCardProps = {
  title: string;
  titleAside?: string;
  projectNumber?: number | string;
  meta?: string;
  description?: string;
  image?: string;
  titleIcon?: LucideIcon;
  badges?: string[];
  highlightedBadgeVariant?: "secondary" | "soft";
  links?: ProjectLink[];
  linkIcon?: LucideIcon;
  paddingClassName?: string;
};

export function ProjectCard({
  title,
  titleAside,
  meta,
  description,
  image,
  badges = [],
  highlightedBadgeVariant = "secondary",
  links = [],
  linkIcon: LinkIcon = ExternalLink,
}: ProjectCardProps) {
  const hasLinks = links.length > 0;

  return (
    <article className="card">
      <div
        className={`grid h-full items-center text-base-content ${
          image ? "sm:grid-cols-[58%_minmax(0,1fr)]" : ""
        }`}
      >
        {image ? <ProjectImage src={image} title={title} /> : null}

        <div className="min-w-0 h-full w-full flex flex-col items-start justify-center gap-y-3.75 py-3.75 px-8.75 text-left">
          <div className="flex w-full flex-col items-start gap-y-3.75 ">
            <div className="flex w-full flex-col items-start gap-2.75 ">
              <div className="flex w-full flex-col items-start gap-0.5 ">
                <h3 className="card-title flex w-full font-bold items-end gap-2.25 leading-tight tracking-[-0.0675em] text-base-content/85 md:text-3xl">
                  <span className="font-normal inline-flex min-w-0 flex-wrap items-baseline justify-start gap-x-2">
                    <span>{title}</span>
                  </span>
                  {titleAside && (
                    <span className="text-left text-base-content/80 pb-0.5 text-base tracking-[-0.0375em] font-normal leading-tight ">
                      {titleAside}
                    </span>
                  )}
                </h3>
                {meta && (
                  <p className="tracking-[-0.0275em] text-base text-left leading-tight text-base-content/80">
                    {meta}
                  </p>
                )}
              </div>
              {description && (
                <p className="leading-normal text-base-content/70 md:text-lg font-normal tracking-[-0.04975em]">
                  {description}
                </p>
              )}
            </div>
            {badges.length > 0 ? (
              <BadgeList
                badges={badges}
                highlightedBadgeVariant={highlightedBadgeVariant}
              />
            ) : null}
          </div>
          <div
            className="card-actions w-full items-center justify-start gap-x-2.75"
            aria-hidden={hasLinks ? undefined : true}
          >
            {hasLinks
              ? links.map((link) => (
                  <ProjectAction
                    key={`${title}-${link.label}`}
                    link={link}
                    icon={LinkIcon}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectImage({ src, title }: { src: string; title: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-full w-full rounded-xl overflow-hidden border border-base-content/15 bg-base-200 shadow-sm">
      {!isLoaded ? (
        <div className="skeleton absolute inset-0 h-full w-full" />
      ) : null}
      <img
        className={`h-full w-full object-cover object-center transition-opacity duration-200 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={src}
        alt={`Aperçu du projet ${title}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
    </div>
  );
}

function BadgeList({
  badges,
  highlightedBadgeVariant,
}: {
  badges: string[];
  highlightedBadgeVariant: "secondary" | "soft";
}) {
  const highlightedBadgeClass =
    highlightedBadgeVariant === "soft" ? "badge-soft" : " badge-secondary";

  return (
    <ul
      className="flex w-full flex-wrap justify-start gap-2.5 gap-x-2.25"
      aria-label="Catégories et technologies"
    >
      {badges.map((badge, index) => (
        <li
          className={`badge badge-soft rounded-full text-base-content/75 text-xs badge-sm md:badge-lg ${
            index === 0 ? highlightedBadgeClass : "badge-soft"
          }`}
          key={badge}
        >
          {badge}
        </li>
      ))}
    </ul>
  );
}

function ProjectAction({
  link,
  icon: Icon,
}: {
  link: ProjectLink;
  icon: LucideIcon;
}) {
  return (
    <a
      className="inline-flex btn  btn-soft w-fit items-center gap-1.5 font-normal px-6.25 leading-tight text-base-content no-underline"
      href={link.url}
      target="_blank"
      rel="noreferrer"
    >
      <Icon
        className="size-3.75 flex-none stroke-[2.1] mb-0.5"
        aria-hidden="true"
      />
      <span className="">{link.label}</span>
    </a>
  );
}

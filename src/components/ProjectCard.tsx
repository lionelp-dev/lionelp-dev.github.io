import { useState } from "react";
import { ExternalLink, type LucideIcon } from "lucide-react";
import type { ProjectLink } from "../types/projects";

type ProjectCardProps = {
  title: string;
  titleAside?: string;
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
  titleIcon: TitleIcon,
  badges = [],
  highlightedBadgeVariant = "secondary",
  links = [],
  linkIcon: LinkIcon = ExternalLink,
  paddingClassName = "pl-4 pr-4.5 py-3.5",
}: ProjectCardProps) {
  const hasLinks = links.length > 0;

  return (
    <article className="card overflow-hidden rounded-2xl border border-base-content/10 bg-base-100 shadow-sm ">
      <div
        className={`grid h-full items-center ${paddingClassName} text-base-content ${
          image
            ? "sm:grid-cols-[43.5%_minmax(0,1fr)] sm:grid-rows-[1fr_auto] gap-x-5.75"
            : ""
        }`}
      >
        {image ? <ProjectImage src={image} title={title} /> : null}

        <div className="min-w-0 h-full flex flex-col justify-between pt-2.25 pb-1.75  gap-y-3.5">
          <div className="flex flex-col gap-y-2.75">
            <div className="flex flex-col gap-0.75 ">
              <h3 className="card-title flex w-full flex-wrap items-center gap-x-2  font-bold leading-tight tracking-normal text-base-content md:text-md">
                <span className="inline-flex min-w-0 items-center gap-2.25">
                  {TitleIcon ? (
                    <span className="inline-grid size-9 pb-0.75 flex-none place-items-center">
                      <TitleIcon className="size-7" aria-hidden="true" />
                    </span>
                  ) : null}
                  <span>{title}</span>
                </span>
                {titleAside ? (
                  <span className="self-end text-secondary pb-[1.5px] text-right text-sm font-medium leading-tight ">
                    {titleAside}
                  </span>
                ) : null}
              </h3>
              {meta ? (
                <p className=" text-sm font-medium leading-tight text-base-content/70">
                  {meta}
                </p>
              ) : null}
              {description ? (
                <p className="  w-full text-sm  leading-normal text-base-content/70">
                  {description}
                </p>
              ) : null}
            </div>
            {badges.length > 0 ? (
              <BadgeList
                badges={badges}
                highlightedBadgeVariant={highlightedBadgeVariant}
              />
            ) : null}
          </div>
          <div
            className={`card-actions items-center justify-start gap-x-2 ${
              image ? "sm:col-start-2" : ""
            }`}
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
    <div className="relative h-full w-full overflow-hidden   rounded-xl sm:row-span-2">
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
    highlightedBadgeVariant === "soft" ? "badge-soft" : "badge-secondary";

  return (
    <ul
      className="flex  flex-wrap gap-2.5"
      aria-label="Catégories et technologies"
    >
      {badges.map((badge, index) => (
        <li
          className={`badge rounded-full pb-[0.5px] badge-sm ${
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
      className="inline-flex btn btn-sm btn-soft w-fit items-center gap-1.5 font-medium leading-tight text-base-content no-underline"
      href={link.url}
      target="_blank"
      rel="noreferrer"
    >
      <Icon className="size-3.75 flex-none stroke-[2.1]" aria-hidden="true" />
      <span className="text-xs">{link.label}</span>
    </a>
  );
}

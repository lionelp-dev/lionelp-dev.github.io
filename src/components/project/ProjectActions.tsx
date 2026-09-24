import type { LucideIcon } from "lucide-react";
import { Typography } from "../Typography";
import type { ProjectLink } from "../../types/projects";

type ProjectActionsProps = {
  title: string;
  links: ProjectLink[];
  icon: LucideIcon;
};

export function ProjectActions({ title, links, icon: Icon }: ProjectActionsProps) {
  return (
    <div className="card-actions w-full items-center justify-start gap-x-2.75">
      {links.map((link) => (
        <a
          className="btn btn-soft inline-flex w-fit items-center gap-1.5 px-6.25 font-normal leading-tight text-base-content no-underline"
          href={link.url}
          target="_blank"
          rel="noreferrer"
          key={`${title}-${link.label}`}
        >
          <Icon className="mb-0.5 size-3.75 flex-none stroke-[2.1]" aria-hidden="true" />
          <Typography as="span" variant="label">
            {link.label}
          </Typography>
        </a>
      ))}
    </div>
  );
}

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Typography } from "../Typography";
import type { ProjectLink } from "../../types/projects";

type ProjectActionsProps = {
  title: string;
  links: ProjectLink[];
  icon: LucideIcon;
  variant?: "default" | "hero";
  renderIcon?: (link: ProjectLink) => ReactNode;
};

export function ProjectActions({
  title,
  links,
  icon: Icon,
  variant = "default",
  renderIcon,
}: ProjectActionsProps) {
  return (
    <div
      className={
        variant === "hero"
          ? "mt-1 flex w-full max-w-[35rem] flex-col gap-5 md:flex-row-reverse"
          : "card-actions w-full items-center justify-start gap-x-2.75"
      }
    >
      {links.map((link) => (
        <a
          className={
            variant === "hero"
              ? `btn inline-flex w-full items-center gap-2 font-bold leading-tight no-underline md:flex-1 md:py-5.75 ${
                  link.url.includes("github.com")
                    ? "btn-soft"
                    : "btn-secondary"
                }`
              : "btn btn-soft inline-flex w-fit items-center gap-1.5 px-6.25 font-normal leading-tight text-base-content no-underline"
          }
          href={link.url}
          target="_blank"
          rel="noreferrer"
          key={`${title}-${link.label}`}
        >
          {renderIcon ? (
            renderIcon(link)
          ) : (
            <Icon
              className={
                variant === "hero"
                  ? "size-5.75 flex-none"
                  : "mb-0.5 size-3.75 flex-none stroke-[2.1]"
              }
              aria-hidden="true"
            />
          )}
          <Typography as="span" variant="label">
            {link.label}
          </Typography>
        </a>
      ))}
    </div>
  );
}

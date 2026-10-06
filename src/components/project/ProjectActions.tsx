import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { ProjectLink } from "../../types/projects";
import { Typography } from "../Typography";

const projectActionsVariants = cva("", {
  variants: {
    variant: {
      client: "flex gap-5",
      default: "card-actions w-full items-center justify-start gap-x-2.75",
      hero: " mt-1 flex w-full max-w-[35rem] flex-col gap-5 md:flex-row-reverse",
    },
    fullWidth: {
      false: "w-fit",
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const projectActionVariants = cva("btn", {
  variants: {
    variant: {
      client: "rounded-full no-underline whitespace-nowrap",
      default:
        "btn-soft inline-flex w-fit items-center gap-1.5 text-base-content leading-tight no-underline",
      hero: "rounded-full  btn-xl whitespace-nowrap inline-flex w-full items-center gap-2 leading-tight no-underline md:flex-1",
    },
    fullWidth: {
      true: "w-full flex-1",
    },
    tone: {
      secondary: "btn-secondary",
      soft: "btn-soft",
    },
  },
});

export type ProjectActionTone = "secondary" | "soft";

type ProjectActionLink = ProjectLink & {
  tone: ProjectActionTone;
};

type ProjectActionsProps = {
  title: string;
  links: ProjectActionLink[];
  icon: LucideIcon;
  variant?: VariantProps<typeof projectActionsVariants>["variant"];
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
      className={projectActionsVariants({
        variant,
        fullWidth: variant === "client" ? links.length > 1 : undefined,
      })}
    >
      {links.map((link) => (
        <a
          className={projectActionVariants({
            variant,
            fullWidth: variant === "client" ? links.length > 1 : undefined,
            tone: link.tone,
          })}
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
                  : variant === "client"
                    ? "size-4 flex-none stroke-[2.1]"
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

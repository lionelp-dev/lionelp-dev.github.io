import { cva } from "class-variance-authority";
import { Typography } from "../Typography";

type BadgeTone = "primary" | "secondary" | "info" | "soft";
type ProjectBadgesVariant = "default";

type ProjectBadgesProps = {
  badges: string[];
  badgeTextClassName?: string;
  className?: string;
  badgeTone?: BadgeTone;
  highlightedBadgeVariant?: BadgeTone;
  variant?: ProjectBadgesVariant;
};

const projectBadgesVariants = cva("flex flex-wrap max-md:overflow-hidden ", {
  variants: {
    variant: {
      default: "w-full justify-start gap-3.5 gap-x-2.25",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const projectBadgeVariants = cva("badge rounded-full", {
  variants: {
    variant: {
      default: "",
    },
    tone: {
      primary: "badge-primary",
      secondary: "badge-secondary text-base-content",
      info: "badge-info",
      soft: "badge-soft",
    },
  },
  defaultVariants: {
    variant: "default",
    tone: "soft",
  },
});

function getBadgeTone(
  variant: ProjectBadgesVariant,
  index: number,
  badgeTone?: BadgeTone,
  highlightedBadgeVariant?: BadgeTone,
): BadgeTone {
  if (badgeTone) {
    return badgeTone;
  }

  switch (variant) {
    case "default":
      return index === 0 ? (highlightedBadgeVariant ?? "soft") : "soft";
  }
}

export function ProjectBadges({
  badges,
  badgeTextClassName,
  className,
  badgeTone,
  highlightedBadgeVariant,
  variant = "default",
}: ProjectBadgesProps) {
  return (
    <ul
      className={projectBadgesVariants({ variant })}
      aria-label="Catégories et technologies"
    >
      {badges.map((badge, index) => {
        const tone = getBadgeTone(
          variant,
          index,
          badgeTone,
          highlightedBadgeVariant,
        );

        return (
          <li
            className={projectBadgeVariants({
              variant,
              tone,
              className,
            })}
            key={`${badge}-${index}`}
          >
            <Typography
              as="span"
              variant="badge-label"
              className={
                badgeTextClassName ??
                (tone === "primary"
                  ? "text-primary-content"
                  : tone === "secondary"
                    ? "text-secondary-content"
                    : tone === "info"
                      ? "text-info-content"
                      : undefined)
              }
            >
              {badge}
            </Typography>
          </li>
        );
      })}
    </ul>
  );
}

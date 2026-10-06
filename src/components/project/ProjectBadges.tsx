import { cva } from "class-variance-authority";
import { Typography } from "../Typography";

type BadgeTone = "secondary" | "soft";
type ProjectBadgesVariant = "default";

type ProjectBadgesProps = {
  badges: string[];
  className?: string;
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
      secondary: "badge-secondary",
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
  highlightedBadgeVariant?: BadgeTone,
): BadgeTone {
  switch (variant) {
    case "default":
      return index === 0 ? (highlightedBadgeVariant ?? "soft") : "soft";
  }
}

export function ProjectBadges({
  badges,
  className,
  highlightedBadgeVariant,
  variant = "default",
}: ProjectBadgesProps) {
  return (
    <ul
      className={projectBadgesVariants({ variant })}
      aria-label="Catégories et technologies"
    >
      {badges.map((badge, index) => (
        <li
          className={projectBadgeVariants({
            variant,
            tone: getBadgeTone(variant, index, highlightedBadgeVariant),
            className,
          })}
          key={`${badge}-${index}`}
        >
          <Typography as="span" variant="badge-label">
            {badge}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

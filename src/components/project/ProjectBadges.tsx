import { Typography } from "../Typography";

type ProjectBadgesProps = {
  badges: string[];
  highlightedBadgeVariant: "secondary" | "soft";
  variant?: "default" | "hero";
};

export function ProjectBadges({
  badges,
  highlightedBadgeVariant,
  variant = "default",
}: ProjectBadgesProps) {
  const highlightedBadgeClass =
    highlightedBadgeVariant === "soft" ? "badge-soft" : "badge-secondary";

  return (
    <ul
      className={
        variant === "hero"
          ? "flex max-w-[35rem] flex-wrap gap-2.75"
          : "flex w-full flex-wrap justify-start gap-2.5 gap-x-2.25"
      }
      aria-label="Catégories et technologies"
    >
      {badges.map((badge, index) => (
        <li
          className={
            variant === "hero"
              ? "badge badge-soft rounded-full text-xs text-base-content/75 md:badge-lg"
              : `badge badge-soft rounded-full text-xs text-base-content/75 badge-sm md:badge-lg ${
                  index === 0 ? highlightedBadgeClass : "badge-soft"
                }`
          }
          key={badge}
        >
          <Typography as="span" variant="label">
            {badge}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

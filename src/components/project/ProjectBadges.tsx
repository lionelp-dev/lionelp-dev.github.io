import { Typography } from "../Typography";

type ProjectBadgesProps = {
  badges: string[];
  highlightedBadgeVariant: "secondary" | "soft";
};

export function ProjectBadges({
  badges,
  highlightedBadgeVariant,
}: ProjectBadgesProps) {
  const highlightedBadgeClass =
    highlightedBadgeVariant === "soft" ? "badge-soft" : "badge-secondary";

  return (
    <ul
      className="flex w-full flex-wrap justify-start gap-2.5 gap-x-2.25"
      aria-label="Catégories et technologies"
    >
      {badges.map((badge, index) => (
        <li
          className={`badge badge-soft rounded-full text-xs text-base-content/75 badge-sm md:badge-lg ${
            index === 0 ? highlightedBadgeClass : "badge-soft"
          }`}
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

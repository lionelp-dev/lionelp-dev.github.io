import {
  BrainCircuit,
  Boxes,
  Braces,
  Code2,
  Database,
  GitPullRequest,
  Network,
  PackageCheck,
  Server,
  Sparkles,
  TestTube2,
  Waypoints,
} from "lucide-react";
import type { ComponentType } from "react";
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
  showTechnologyIcons?: boolean;
  variant?: ProjectBadgesVariant;
};

type TechnologyIcon = {
  color: string;
  asset?: string;
  fallback?: ComponentType<{ className?: string }>;
};

const technologyIcons: Record<string, TechnologyIcon> = {
  React: { asset: "react", color: "#61DAFB" },
  TypeScript: { asset: "typescript", color: "#3178C6" },
  "Inertia.js": { asset: "inertia", color: "#9553E9" },
  "Tailwind CSS": { asset: "tailwindcss", color: "#06B6D4" },
  "Radix UI": { asset: "radixui", color: "#161618" },
  daisyUI: { asset: "daisyui", color: "#5A0EF8" },
  DaisyUI: { asset: "daisyui", color: "#5A0EF8" },
  "TanStack Form": { asset: "tanstack", color: "#FF4154" },
  Zod: { asset: "zod", color: "#3E67B1" },
  PHP: { asset: "php", color: "#777BB4" },
  Laravel: { asset: "laravel", color: "#FF2D20" },
  PostgreSQL: { asset: "postgresql", color: "#4169E1" },
  SQLite: { asset: "sqlite", color: "#003B57" },
  "Spatie Laravel Data": { color: "#FF4A00", fallback: PackageCheck },
  "Spatie Laravel Permissions": { color: "#FF4A00", fallback: PackageCheck },
  "Node.js": { asset: "nodedotjs", color: "#5FA04E" },
  AdonisJS: { asset: "adonisjs", color: "#5A45FF" },
  "API REST": { color: "#0EA5E9", fallback: Waypoints },
  LangGraph: { color: "#1C3C3C", fallback: Network },
  LangChain: { asset: "langchain", color: "#1C3C3C" },
  OpenRouter: { asset: "openrouter", color: "#4D7CFE" },
  "openai/gpt-4o-mini": { color: "#10A37F", fallback: Sparkles },
  "openai/gpt-image-2": { color: "#10A37F", fallback: Sparkles },
  Angular: { asset: "angular", color: "#DD0031" },
  Python: { asset: "python", color: "#3776AB" },
  Django: { asset: "django", color: "#092E20" },
  "Django REST Framework": { color: "#A30000", fallback: Server },
  Symfony: { asset: "symfony", color: "#000000" },
  "ASP.NET Core": { asset: "dotnet", color: "#512BD4" },
  "Spring Boot": { asset: "springboot", color: "#6DB33F" },
  WordPress: { asset: "wordpress", color: "#21759B" },
  HTML: { asset: "html5", color: "#E34F26" },
  CSS: { asset: "css", color: "#663399" },
  JavaScript: { asset: "javascript", color: "#F7DF1E" },
  PrestaShop: { asset: "prestashop", color: "#DF0067" },
  Tests: { color: "#22C55E", fallback: TestTube2 },
  "Analyse statique": { color: "#8B5CF6", fallback: Braces },
  "Intégration continue": { color: "#F97316", fallback: GitPullRequest },
  SQL: { color: "#64748B", fallback: Database },
  "Intégration d’API IA": { color: "#8B5CF6", fallback: BrainCircuit },
  "Laravel AI SDK": { asset: "laravel", color: "#FF2D20" },
  Vitest: { asset: "vitest", color: "#6E9F18" },
  Pest: { color: "#8B5CF6", fallback: TestTube2 },
  PHPUnit: { color: "#777BB4", fallback: TestTube2 },
  Docker: { asset: "docker", color: "#2496ED" },
  "GitHub Actions": { asset: "githubactions", color: "#2088FF" },
  GitLab: { asset: "gitlab", color: "#FC6D26" },
  Git: { asset: "git", color: "#F05032" },
};

function TechnologyBadgeIcon({ technology }: { technology: string }) {
  const technologyIcon = technologyIcons[technology];

  if (!technologyIcon) {
    return (
      <Code2
        className="size-4 flex-none text-base-content/55"
        aria-hidden="true"
      />
    );
  }

  if (technologyIcon.asset) {
    return (
      <span
        aria-hidden="true"
        className="size-4 flex-none bg-base-content/55"
        style={{
          mask: `url(${import.meta.env.BASE_URL}technology-icons/${technologyIcon.asset}.svg) center / contain no-repeat`,
          WebkitMask: `url(${import.meta.env.BASE_URL}technology-icons/${technologyIcon.asset}.svg) center / contain no-repeat`,
        }}
      />
    );
  }

  const FallbackIcon = technologyIcon.fallback ?? Boxes;

  return (
    <FallbackIcon
      className="size-4 flex-none text-base-content/55"
      aria-hidden="true"
    />
  );
}

const projectBadgesVariants = cva("flex flex-wrap max-md:overflow-hidden", {
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
  showTechnologyIcons = true,
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
            {showTechnologyIcons ? (
              <TechnologyBadgeIcon technology={badge} />
            ) : null}
            <Typography
              as="span"
              className={
                badgeTextClassName ??
                (tone === "primary"
                  ? "text-primary-content"
                  : tone === "secondary"
                    ? "text-secondary-content"
                    : tone === "info"
                      ? "text-info-content"
                      : "text-base-content/75")
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

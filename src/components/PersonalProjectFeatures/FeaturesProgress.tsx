import type { PersonalProjectFeature } from "../../types/projects";

type FeaturesProgressProps = {
  features: PersonalProjectFeature[];
  activeIndex: number;
};

export function FeaturesProgress({
  features,
  activeIndex,
}: FeaturesProgressProps) {
  return (
    <ol
      className="absolute top-1/2 -left-10 flex -translate-y-1/2 flex-col items-center gap-2.5"
      aria-label="Progression des fonctionnalités"
    >
      {features.map((feature, index) => (
        <li
          key={feature.id}
          aria-current={index === activeIndex ? "step" : undefined}
        >
          <span
            className={`block w-2 rounded-full bg-secondary transition-[height,opacity] duration-300 ${index === activeIndex ? "h-10 opacity-100" : "h-2 opacity-30"}`}
            aria-hidden="true"
          />
          <span className="sr-only">
            {index + 1}. {feature.title}
          </span>
        </li>
      ))}
    </ol>
  );
}

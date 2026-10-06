import type { ProjectSlide } from "./types";

type ProjectsProgressProps = {
  activeIndex: number;
  slides: ProjectSlide[];
};

export function ProjectsProgress({
  activeIndex,
  slides,
}: ProjectsProgressProps) {
  return (
    <ol
      className="absolute top-1/2 -left-10 flex -translate-y-1/2 flex-col items-center gap-2.5"
      aria-label="Progression des réalisations"
    >
      {slides.map((slide, index) => (
        <li
          key={`${slide.project.name}-${slide.imageIndex}`}
          aria-current={index === activeIndex ? "step" : undefined}
        >
          <span
            className={`block w-2 rounded-full bg-secondary transition-[height,opacity] duration-300 ${index === activeIndex ? "h-10 opacity-100" : "h-2 opacity-30"}`}
            aria-hidden="true"
          />
          <span className="sr-only">
            {index + 1}. {slide.project.name}
          </span>
        </li>
      ))}
    </ol>
  );
}

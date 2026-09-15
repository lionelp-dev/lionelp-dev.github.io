import { techWatchProjects } from "../../data/projects";
import { TechWatchCard } from "./components/TechWatchCard";

const gridClass =
  "grid grid-cols-1 items-stretch gap-4 md:gap-[clamp(16px,1.6vw,24px)]";
const responsiveGridClass = `${gridClass} md:grid-cols-2 xl:grid-cols-3`;
const sectionHeaderClass = "flex flex-col gap-1.25";
const sectionTitleClass =
  "font-serif-display text-4xl font-bold leading-9.25 md:leading-tight -tracking-[0.03em] text-base-content md:text-5xl";
const sectionClass =
  "flex lg:min-h-[min(89svh,65rem)] py-[clamp(2rem,4.75svh,8rem)] lg:pt-[clamp(4rem,6.75svh,8rem)] flex-col justify-start gap-7 md:gap-10 lg:gap-17";

export function TechWatchPage() {
  return (
    <section
      className={sectionClass}
      aria-labelledby="technical-explorations-title"
    >
      <div className={sectionHeaderClass}>
        <h1 id="technical-explorations-title" className={sectionTitleClass}>
          Explorations techniques
        </h1>
        <p className="leading-normal text-base-content/70 md:text-base">
          Projets personnels pour explorer, comparer et suivre l'évolution des
          technologies.
        </p>
      </div>
      <section
        className={responsiveGridClass}
        aria-label="Projets d'explorations techniques"
      >
        {techWatchProjects.map((project) => (
          <TechWatchCard key={project.name} project={project} />
        ))}
      </section>
    </section>
  );
}

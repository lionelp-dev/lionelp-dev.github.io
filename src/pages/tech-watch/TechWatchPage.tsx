import { techWatchProjects } from "../../data/projects";
import { TechWatchCard } from "./components/TechWatchCard";

const gridClass =
  "grid grid-cols-1 items-stretch gap-4 md:gap-[clamp(16px,1.6vw,24px)]";
const responsiveGridClass = `${gridClass} md:grid-cols-2`;
const sectionHeaderClass = "flex flex-col gap-0.5";
const sectionTitleClass =
  "font-serif-display text-4xl font-bold leading-9.25 md:leading-tight -tracking-[0.0575em] text-base-content/85 md:text-5xl";
const sectionSubtitleClass =
  "leading-normal text-base-content/70 md:text-2xl font-normal tracking-[-0.04975em]";
const sectionClass =
  "relative scroll-mt-24 flex py-[clamp(2rem,8.5svh,10.75rem)] flex-col justify-start gap-7 md:scroll-mt-20 md:gap-10 lg:gap-26";

export function TechWatchPage() {
  return (
    <section
      className={sectionClass}
      aria-labelledby="technical-explorations-title"
    >
      <div className={sectionHeaderClass}>
        <h1 id="technical-explorations-title" className={sectionTitleClass}>
          Explorations technologiques
        </h1>
        <p className={sectionSubtitleClass}>
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

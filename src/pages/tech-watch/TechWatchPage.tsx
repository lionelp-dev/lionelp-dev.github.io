import { PageHero } from "../../components/PageHero";
import { techWatchProjects } from "../../data/projects";
import { TechWatchCard } from "./components/TechWatchCard";

const gridClass =
  "grid grid-cols-1 items-stretch gap-4 md:gap-[clamp(16px,1.6vw,24px)]";
const responsiveGridClass = `${gridClass} md:grid-cols-2 xl:grid-cols-3`;

export function TechWatchPage() {
  return (
    <>
      <PageHero
        title="Explorations techniques"
        description="Projets personnels pour explorer, comparer et suivre l'évolution des technologies."
      />

      <section
        className={responsiveGridClass}
        aria-label="Projets d'explorations techniques"
      >
        {techWatchProjects.map((project) => (
          <TechWatchCard key={project.name} project={project} />
        ))}
      </section>
    </>
  );
}

import { PageHero } from "../../components/PageHero";
import { complementaryMissions, freelanceProjects } from "../../data/projects";
import { FreelanceCard } from "./components/FreelanceCard";
import { MissionCard } from "./components/MissionCard";

const gridClass = "grid grid-cols-1 items-stretch gap-x-7 gap-y-5 ";
const twoColumnGridClass = `${gridClass} xl:grid-cols-2 `;

export function RealisationsPage() {
  return (
    <>
      <PageHero
        title="Réalisations freelance"
        description="Sélection de projets réalisés pour mes clients."
      />

      <section className={twoColumnGridClass} aria-label="Projets freelance">
        {freelanceProjects.map((project) => (
          <FreelanceCard key={project.name} project={project} />
        ))}
      </section>

      <section aria-labelledby="missions-title">
        <h2
          id="missions-title"
          className="mt-7 mb-5 text-xl font-bold leading-tight tracking-normal text-base-content md:text-2xl"
        >
          Missions complémentaires
        </h2>
        <div className={twoColumnGridClass}>
          {complementaryMissions.map((mission) => (
            <MissionCard key={mission.name} mission={mission} />
          ))}
        </div>
      </section>
    </>
  );
}

import {
  complementaryMissions,
  freelanceProjects,
  personalProjects,
} from "../../data/projects";
import { FreelanceCard } from "./components/FreelanceCard";
import { MissionCard } from "./components/MissionCard";
import { PersonalProjectCard } from "./components/PersonalProjectCard";

const gridClass = "grid grid-cols-1 items-stretch gap-y-9.75 md:gap-y-16";
const twoColumnGridClass = `${gridClass} xl:grid-cols-2`;

const sectionHeaderClass = "flex flex-col gap-1";

const sectionTitleClass =
  "font-serif-display text-4xl font-bold leading-9.25 md:leading-tight -tracking-[0.0575em] text-base-content/85 md:text-5xl";

const sectionSubtitleClass =
  "leading-normal text-base-content/70 md:text-lg tracking-[-0.0325em]";

const sectionClass =
  "flex  py-[clamp(2rem,7.5svh,4.75rem)] flex-col justify-start gap-7 md:gap-10 lg:gap-24";

export function PortfolioPage() {
  return (
    <>
      <section
        id="personal-projects-section"
        className={sectionClass}
        aria-labelledby="personal-projects-title"
      >
        <div className={sectionHeaderClass}>
          <h2 id="personal-projects-title" className={sectionTitleClass}>
            Projets personnels
          </h2>
          <p className={sectionSubtitleClass}>
            Conception et développement d’applications web full-stack.
          </p>
        </div>
        <div className={gridClass}>
          {personalProjects.map((project) => (
            <PersonalProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section
        id="client-projects-section"
        className={sectionClass}
        aria-labelledby="client-projects-title"
      >
        <div className={sectionHeaderClass}>
          <h2 id="client-projects-title" className={sectionTitleClass}>
            Réalisations freelance
          </h2>

          <p className={sectionSubtitleClass}>
            Sélection de projets réalisés pour mes clients.
          </p>
        </div>
        <div className={twoColumnGridClass}>
          {freelanceProjects.map((project, index) => (
            <FreelanceCard
              key={project.name}
              project={project}
              projectNumber={index + 1}
            />
          ))}
        </div>
      </section>

      <section
        id="complementary-activities-section"
        className={`${sectionClass} pb-[clamp(2rem,20.75svh,15rem)]`}
        aria-labelledby="complementary-activities-title"
      >
        <div className={sectionHeaderClass}>
          <h2 id="complementary-activities-title" className={sectionTitleClass}>
            Activités complémentaires
          </h2>
          <p className={sectionSubtitleClass}>
            Des savoir-faire complémentaires mobilisés au fil des projets.
          </p>
        </div>
        <div className="divide-y divide-base-content/15 border-y border-base-content/15">
          {complementaryMissions.map((mission, index) => (
            <MissionCard
              key={mission.name}
              mission={mission}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </section>
    </>
  );
}

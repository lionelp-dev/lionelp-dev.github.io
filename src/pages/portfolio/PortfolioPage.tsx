import {
  complementaryMissions,
  freelanceProjects,
  personalProjects,
} from "../../data/projects";
import { PageHero } from "../../components/PageHero";
import { FreelanceCard } from "./components/FreelanceCard";
import { MissionCard } from "./components/MissionCard";
import { PersonalProjectCard } from "./components/PersonalProjectCard";

const gridClass = "grid grid-cols-1 items-stretch gap-y-9.75 md:gap-y-19";
const twoColumnGridClass = `${gridClass} xl:grid-cols-2`;

const sectionHeaderClass = "flex flex-col gap-0.5";

const sectionTitleClass =
  "font-serif-display text-4xl font-bold leading-9.25 md:leading-tight -tracking-[0.0575em] text-base-content/85 md:text-5xl";

const sectionSubtitleClass =
  "leading-normal text-base-content/70 md:text-2xl font-normal tracking-[-0.04975em]";

const sectionClass =
  "relative scroll-mt-24 flex py-[clamp(2rem,8.5svh,10.75rem)] flex-col justify-start gap-7 md:scroll-mt-20 md:gap-10 lg:gap-26";

export function PortfolioPage() {
  return (
    <>
      <PageHero />
      <section
        id="personal-projects"
        className={sectionClass}
        aria-labelledby="personal-projects-title"
      >
        <div className={sectionHeaderClass}>
          <h2 id="personal-projects-title" className={sectionTitleClass}>
            Projet personnel
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
        <span
          className="absolute bottom-0 left-0 h-px w-full bg-base-content/15"
          aria-hidden="true"
        />
      </section>

      <section
        id="client-projects"
        className={sectionClass}
        aria-labelledby="client-projects-title"
      >
        <div className={sectionHeaderClass}>
          <h2 id="client-projects-title" className={sectionTitleClass}>
            Projets clients
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
        <span
          className="absolute bottom-0 left-0 h-px w-full bg-base-content/15"
          aria-hidden="true"
        />
      </section>

      <section
        id="complementary-activities"
        className={`${sectionClass}`}
        aria-labelledby="complementary-activities-title"
      >
        <div className={sectionHeaderClass}>
          <h2 id="complementary-activities-title" className={sectionTitleClass}>
            Au-delà du code
          </h2>
          <p className={sectionSubtitleClass}>
            Autres savoir-faire mobilisés au fil des projets.
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
        <span
          className="absolute bottom-0 left-0 h-px w-full bg-base-content/15"
          aria-hidden="true"
        />
      </section>
    </>
  );
}

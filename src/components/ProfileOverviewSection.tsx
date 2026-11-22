import { trainingConfig } from "../config/site";
import { ContentHeader } from "./layout/ContentHeader";
import { PageSection } from "./layout/PageSection";
import { ProjectBadges } from "./project/ProjectBadges";
import { SlideUpIn } from "./SlideUpIn";
import { Typography } from "./Typography";

type JourneyStep = {
  period: string;
  status?: string;
  title?: string;
  description?: string;
};

const skillGroups = [
  {
    title: "Langages",
    skills: ["TypeScript", "JavaScript", "PHP", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "Tailwind CSS", "Radix UI", "DaisyUI", "Zod"],
  },
  {
    title: "Backend, API & données",
    skills: [
      "Laravel",
      "AdonisJS",
      "Node.js",
      "API REST",
      "PostgreSQL",
      "SQLite",
      "SQL",
    ],
  },
  {
    title: "IA générative & orchestration",
    skills: ["LangGraph", "LangChain", "Laravel AI SDK", "OpenRouter"],
  },
  {
    title: "Tests, qualité & DevOps",
    skills: [
      "Vitest",
      "Pest",
      "PHPUnit",
      "Git",
      "GitLab",
      "GitHub Actions",
      "Docker",
    ],
  },
];

const journey: JourneyStep[] = [
  {
    period: trainingConfig.period,
    status: trainingConfig.status,
    title: `${trainingConfig.degreeName} — ${trainingConfig.schoolName}`,
    description: trainingConfig.description,
  },
  {
    period: "Nov. 2013 — Jan. 2021",
    status: "Expérience",
    title: "Développeur web — freelance",
    description: "Lionel Piquionne · Île-de-France, France",
  },
  {
    period: "Sept. 2014 — sept. 2015",
    status: "Diplôme",
    title: "Licence Pro — Développeur web des systèmes d'information",
    description: "Université de Strasbourg · Île-de-France, France",
  },
  {
    period: "Mars 2014 — mai 2014",
    status: "Expérience",
    title: "Assistant d’un chargé d’affaires — Pôles Data Center",
    description: "Bouygues Énergies et Services · Île-de-France, France",
  },
  {
    period: "Sept. 2011 — sept. 2014",
    status: "Diplôme",
    title: "DUT Génie électrique et informatique industrielle",
    description: "Université Sorbonne Paris 13 · Épinay-Villetaneuse, France.",
  },
];

export function ProfileOverviewSection() {
  return (
    <PageSection
      id="profil"
      aria-label="Profil"
      className="section-alternate-bg"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <iframe
          srcDoc={`<!doctype html><html><head><style>html,body{width:100%;height:100%;margin:0;overflow:hidden}img{width:100%;height:100%;display:block;object-fit:cover}</style></head><body><img src="${import.meta.env.BASE_URL}profile.jpg" alt="" /></body></html>`}
          className="aspect-[0.85] w-32 flex-none rounded-2xl border-0 sm:w-42"
        />
        <ContentHeader.Root className="min-w-0 pt-3.5">
          <ContentHeader.Title>
            <Typography as="p" variant="eyebrow">
              À propos de moi
            </Typography>
            <Typography
              as="h2"
              id="projets-personnels-title"
              variant="h3"
              font="serif"
            >
              <span className="block">Parcours et compétences</span>
            </Typography>
          </ContentHeader.Title>
          <ContentHeader.Description>
            <div className="max-w-4xl space-y-4">
              <Typography as="p" variant="p2">
                Après une licence professionnelle en développement web et
                plusieurs années en freelance, j’ai progressivement développé
                mes compétences pour aller au-delà de la réalisation de sites
                web et m’orienter vers la conception d’applications et d’autres
                solutions techniques.
              </Typography>
            </div>
          </ContentHeader.Description>
        </ContentHeader.Root>
      </div>
      <SlideUpIn>
        <section
          className="flex flex-col gap-8"
          aria-label="Parcours et compétences techniques"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(20rem,1fr)_minmax(0,1.125fr)] lg:gap-20">
            <section
              className="flex min-w-0 flex-col gap-6 lg:order-1"
              aria-labelledby="journey-title"
            >
              <Typography as="h3" id="journey-title" variant="eyebrow">
                Mon parcours
              </Typography>
              <ol
                className="relative flex flex-col gap-5 before:absolute before:top-5 before:right-[0.3125rem] before:bottom-5 before:hidden before:w-px before:bg-base-content/15 md:before:block"
                aria-label="Parcours"
              >
                {journey.map(
                  ({ period, status, title, description }, index) => (
                    <li
                      key={`${period}-${status}`}
                      className="relative md:pr-10"
                    >
                      <span
                        className="absolute top-5 right-0 hidden size-2.5 rounded-full border border-secondary/60 bg-base-100 ring-4 ring-base-100 md:block"
                        aria-hidden="true"
                      />
                      <div
                        className={`flex flex-col gap-1.5 rounded-xl px-6.25 py-5 pb-5.5 ${
                          index === 0 ? "bg-secondary/6" : ""
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-2 py-1">
                          {status && status.startsWith("Pause dans") ? (
                            <Typography
                              as="span"
                              variant="p4"
                              className="tracking-(--tracking-md)!"
                            >
                              {status}
                            </Typography>
                          ) : status ? (
                            <span
                              className={`badge-xs badge flex items-center gap-1.5 rounded-2xl ${
                                index === 0
                                  ? "badge-secondary"
                                  : "bg-secondary/8"
                              }`}
                              style={
                                index === 0
                                  ? { paddingRight: "1.75em" }
                                  : undefined
                              }
                            >
                              <Typography
                                as="span"
                                variant="p3"
                                className="font-semibold! text-base-content/70"
                              >
                                {status}
                              </Typography>
                              {index === 0 ? (
                                <span
                                  className="size-1.5 animate-pulse rounded-full bg-success motion-reduce:animate-none"
                                  aria-hidden="true"
                                />
                              ) : null}
                            </span>
                          ) : null}
                          <Typography
                            as="time"
                            variant="p4"
                            className="tracking-(--tracking-md)!"
                          >
                            {period}
                          </Typography>
                        </div>
                        {title ? (
                          <Typography as="h3" variant="h4">
                            {title}
                          </Typography>
                        ) : null}
                        {description ? (
                          <Typography
                            as="p"
                            variant="p3"
                            className="font-light whitespace-pre-line"
                          >
                            {description}
                          </Typography>
                        ) : null}
                      </div>
                    </li>
                  ),
                )}
              </ol>
            </section>

            <aside
              className="flex min-w-0 flex-col gap-6 lg:order-2"
              aria-labelledby="skills-title"
            >
              <Typography as="h3" id="skills-title" variant="eyebrow">
                Mes compétences
              </Typography>
              <div className="flex flex-col gap-12">
                {skillGroups.map(({ title, skills }) => (
                  <article key={title}>
                    <div className="min-w-0 flex flex-col gap-2">
                      <Typography as="h3" variant="h4">
                        {title}
                      </Typography>
                      <div className="mt-4">
                        <ProjectBadges
                          badges={skills}
                          className="badge-md bg-secondary/8"
                          badgeTextClassName="font-normal text-base-content/75"
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </SlideUpIn>
    </PageSection>
  );
}

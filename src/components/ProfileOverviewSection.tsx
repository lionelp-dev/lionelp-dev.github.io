import { trainingConfig } from "../config/site";
import { ContentHeader } from "./layout/ContentHeader";
import { PageSection } from "./layout/PageSection";
import { ProjectBadges } from "./project/ProjectBadges";
import { SlideUpIn } from "./SlideUpIn";
import { Typography } from "./Typography";

type JourneyStep = {
  period: string;
  status: string;
  title: string;
  description: string;
};

const skillGroups = [
  {
    title: "Langages",
    skills: ["TypeScript", "JavaScript", "PHP", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Radix UI", "DaisyUI", "Zod"],
  },
  {
    title: "Backend, API & données",
    skills: [
      "Laravel",
      "Node.js",
      "AdonisJS",
      "API REST",
      "PostgreSQL",
      "SQLite",
      "SQL",
    ],
  },
  {
    title: "IA générative & orchestration",
    skills: [
      "LangGraph",
      "LangChain",
      "Intégration d’API IA",
      "Laravel AI SDK",
      "OpenRouter",
    ],
  },
  {
    title: "Tests, qualité & DevOps",
    skills: [
      "Vitest",
      "Pest",
      "PHPUnit",
      "Docker",
      "GitHub Actions",
      "GitLab",
      "Git",
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
    period: "Oct. 2014 — avr. 2023",
    status: "Expérience",
    title: "Développeur web freelance",
    description:
      "Conception, développement et maintenance de sites e-commerce et vitrine avec PrestaShop et WordPress.",
  },
  {
    period: "Sept. 2014 — sept. 2015",
    status: "Diplôme",
    title: "Licence Pro - Développement Web des Systèmes d’Information",
    description: "Université de Strasbourg · Île-de-France, France",
  },
  {
    period: "Mars 2014 — mai 2014",
    status: "Expérience",
    title: "Assistant d’un chargé d’affaires — Pôles Data Center",
    description:
      "Bouygues Énergies et Services · Île-de-France, France\nChiffrages, études techniques, devis, achats, commandes et suivi des prestataires.",
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
      <ContentHeader.Root>
        <ContentHeader.Title>
          <Typography as="p" variant="eyebrow">
            A propos de moi
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
          <Typography as="p" variant="p2" className="max-w-4xl">
            Un parcours construit entre réalisations freelance et projets
            personnels, qui m’a progressivement amené de la création de sites
            web au développement d’applications full stack.
          </Typography>
        </ContentHeader.Description>
      </ContentHeader.Root>
      <SlideUpIn>
        <section
          className="flex flex-col gap-8"
          aria-label="Parcours et compétences techniques"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(18rem,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
            <aside
              className="flex min-w-0 flex-col gap-6"
              aria-labelledby="skills-title"
            >
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

            <section
              className="flex min-w-0 flex-col gap-6"
              aria-labelledby="journey-title"
            >
              <ol
                className="relative flex flex-col gap-5 before:absolute before:top-5 before:bottom-5 before:left-[0.3125rem] before:hidden before:w-px before:bg-base-content/15 md:before:block"
                aria-label="Parcours"
              >
                {journey.map(
                  ({ period, status, title, description }, index) => (
                    <li key={title} className="relative md:pl-8">
                      <span
                        className="absolute top-5 left-0 hidden size-2.5 rounded-full border border-secondary/60 bg-base-100 ring-4 ring-base-100 md:block"
                        aria-hidden="true"
                      />
                      <div
                        className={`flex flex-col gap-1.5 rounded-xl px-6.25 py-5 pb-5.5 ${
                          index === 0 ? "bg-secondary/6" : ""
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-2 py-1">
                          <span
                            className={`badge-xs badge flex items-center gap-1.5 rounded-2xl ${
                              index === 0 ? "badge-secondary" : "bg-secondary/8"
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
                          <Typography
                            as="time"
                            variant="p4"
                            className="tracking-(--tracking-md)!"
                          >
                            {period}
                          </Typography>
                        </div>
                        <Typography as="h3" variant="h4">
                          {title}
                        </Typography>
                        <Typography
                          as="p"
                          variant="p3"
                          className="font-light whitespace-pre-line"
                        >
                          {description}
                        </Typography>
                      </div>
                    </li>
                  ),
                )}
              </ol>
            </section>
          </div>
        </section>
      </SlideUpIn>
    </PageSection>
  );
}

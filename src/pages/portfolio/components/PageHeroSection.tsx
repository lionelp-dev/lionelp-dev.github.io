import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "../../../components/GitHubIcon";
import { PageSection } from "../../../components/layout/PageSection";
import { ProjectBadges } from "../../../components/project/ProjectBadges";
import { SlideUpIn } from "../../../components/SlideUpIn";
import { Typography } from "../../../components/Typography";
import { siteConfig } from "../../../config/site";

const heroClass =
  "relative flex flex-col items-start gap-80 !justify-center !h-[min(75svh,900px)] lg:!h-[min(95svh,1100px)] !pt-[clamp(3.5rem,18svh,14rem)] !py-[clamp(3.5rem,13svh,14rem)] md:gap-7";

export function PageHeroSection() {
  return (
    <PageSection
      id="home"
      className="hero-surface scroll-mt-[var(--section-scroll-offset)] lg:-mt-[62px]"
      contentClassName={heroClass}
      aria-labelledby="page-title"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-9.75">
          <div className="flex flex-col gap-3.75">
            <Typography
              as="p"
              variant="hero-intro"
              className="flex flex-col gap-1"
            >
              <SlideUpIn as="span" delay={250} duration={700}>
                <span className="flex flex-row gap-1">
                  Hello, je m'appelle Lionel Piquionne
                  <span role="img" aria-label="main qui salue">
                    👋
                  </span>
                </span>
              </SlideUpIn>
            </Typography>
            <div className="flex flex-col gap-7.75">
              <Typography
                id="page-title"
                variant="hero-title"
                className="-ml-[0.0975em]"
              >
                <SlideUpIn as="span" delay={350}>
                  <span>
                    Développeur
                    <br />
                    full stack & IA
                  </span>
                </SlideUpIn>
              </Typography>
              <SlideUpIn as="div" delay={400}>
                <ProjectBadges
                  badges={[
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Laravel",
                    "PHP",
                    "Python",
                    "LangChain",
                    "LangGraph",
                  ]}
                  badgeTextClassName="text-secondary!"
                  badgeTone="soft"
                  className="badge-sm md:badge-md"
                />
              </SlideUpIn>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-12">
          <SlideUpIn as="span" delay={500}>
            <Typography
              as="p"
              variant="status-label"
              className="badge md:badge-lg badge-soft pl-8! w-full gap-3.75 whitespace-nowrap rounded-full md:w-fit"
            >
              <span
                className="size-2.25 animate-pulse rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              Actuellement à la recherche d’une alternance de deux ans en
              Île-de-France.
            </Typography>
          </SlideUpIn>
          <SlideUpIn as="div" delay={550}>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                className="btn btn-secondary btn-sm rounded-full md:btn-lg"
                href="#/portfolio#mealo-planner"
              >
                <ArrowUpRight className="size-3.75 flex-none stroke-[2.1]" />
                <Typography as="span" variant="label">
                  Découvrir mes projets
                </Typography>
              </a>
              <a
                className="btn btn-ghost btn-sm rounded-full border border-secondary/35 bg-base-100 text-secondary hover:border-secondary/55 hover:bg-base-200 md:btn-lg"
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="size-3.75 flex-none" />
                <Typography as="span" variant="label">
                  Voir mon GitHub
                </Typography>
              </a>
            </div>
          </SlideUpIn>
        </div>
      </div>
    </PageSection>
  );
}

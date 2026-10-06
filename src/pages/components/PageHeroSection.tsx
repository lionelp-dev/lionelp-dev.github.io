import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import cvFile from "../../assets/cv.pdf";
import { GitHubIcon } from "../../components/GitHubIcon";
import { PageSection } from "../../components/layout/PageSection";
import { ProjectBadges } from "../../components/project/ProjectBadges";
import { SlideUpIn } from "../../components/SlideUpIn";
import { Typography } from "../../components/Typography";
import { siteConfig } from "../../config/site";

export function PageHeroSection() {
  return (
    <PageSection
      id="home"
      className="hero-surface scroll-mt-(--section-scroll-offset) lg:-mt-15.5"
      contentClassName="relative flex flex-col items-start gap-80 !justify-center !h-[min(75svh,900px)] lg:!h-[min(95svh,1100px)] !pt-[clamp(3.5rem,18svh,14rem)] !py-[clamp(3.5rem,13svh,14rem)] md:gap-7"
      aria-labelledby="page-title"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-9.75">
          <div className="flex flex-col gap-3.75">
            <SlideUpIn as="span" delay={250} duration={700}>
              <Typography as="p" variant="h2" className="flex flex-col gap-1">
                <span className="flex flex-row gap-1">
                  Hello, je m'appelle Lionel Piquionne
                  <span role="img" aria-label="main qui salue">
                    👋
                  </span>
                </span>
              </Typography>
            </SlideUpIn>
            <div className="flex flex-col gap-7.75">
              <Typography
                id="page-title"
                variant="h1"
                font="serif"
                className="ml-[-0.0975em]"
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
          <div className="flex flex-wrap items-center gap-2.5">
            <SlideUpIn as="span" delay={500}>
              <Typography
                as="p"
                variant="p4"
                className="badge md:badge-lg badge-soft gap-3.75 whitespace-nowrap rounded-full font-normal! text-secondary tracking-(--tracking-xs)"
              >
                <span
                  className="size-2 animate-pulse rounded-full bg-green-600"
                  aria-hidden="true"
                />
                Actuellement à la recherche d’une alternance de deux ans en
                Île-de-France.
              </Typography>
            </SlideUpIn>
          </div>
          <SlideUpIn as="div" delay={550}>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                className="btn btn-secondary btn-md rounded-full"
                href="#/portfolio#mealo-planner"
              >
                <ArrowUpRight className="size-6 flex-none" />
                <Typography as="span" className="text-secondary-content">
                  Découvrir mes projets
                </Typography>
              </a>
              <a
                className="btn btn-soft btn-md rounded-full"
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="size-6 flex-none" />
                <Typography as="span">Voir mon GitHub</Typography>
              </a>
              <a
                className="btn btn-soft btn-md rounded-full"
                href={cvFile}
                download="CV-Lionel-Piquionne.pdf"
              >
                <ArrowDownToLine className="size-5 flex-none" />
                <Typography as="span">Télécharger mon CV</Typography>
              </a>
            </div>
          </SlideUpIn>
        </div>
      </div>
    </PageSection>
  );
}

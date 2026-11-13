import {
  ArrowDownToLine,
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { siteConfig, trainingConfig } from "../config/site";
import { GitHubIcon } from "./GitHubIcon";
import { PageSection } from "./layout/PageSection";
import { SlideUpIn } from "./SlideUpIn";
import { Typography } from "./Typography";

export function PageHeroSection() {
  return (
    <PageSection
      id="home"
      className="lg:-mt-15"
      contentClassName="relative z-10 flex !h-auto min-h-0 flex-col items-start !justify-start !gap-0 py-21! pt-30!"
      aria-labelledby="page-title"
    >
      <div className="flex w-full flex-col">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Typography as="p" variant="p1">
                <SlideUpIn as="span" delay={250} duration={700}>
                  <span className="flex flex-row gap-1">
                    Hello, je m'appelle Lionel Piquionne
                    <span role="img" aria-label="main qui salue">
                      👋
                    </span>
                  </span>
                </SlideUpIn>
              </Typography>
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
            </div>
            <SlideUpIn as="div" delay={425}>
              <Typography as="p" variant="p2" className="font-light max-w-4xl">
                Ce qui me passionne, c'est de transformer des besoins métier en
                applications ou en solutions techniques, en travaillant aussi
                bien sur les interfaces que sur la logique métier. Je
                m'intéresse également à l'architecture, aux tests ainsi qu'aux
                usages et à l'intégration de l'intelligence artificielle.
              </Typography>
            </SlideUpIn>
          </div>
          <SlideUpIn as="div" delay={500}>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                className="btn btn-secondary btn-md rounded-full"
                href="#/portfolio#mealo-planner"
              >
                <ArrowUpRight className="size-5 flex-none" />
                Découvrir mes projets
              </a>

              <a
                className="btn btn-soft btn-md rounded-full"
                href={`${import.meta.env.BASE_URL}${trainingConfig.cv.fileName}`}
                download={trainingConfig.cv.downloadName}
              >
                <ArrowDownToLine className="size-5 flex-none" />
                Télécharger mon CV
              </a>
              <a
                className="btn btn-soft btn-md rounded-full"
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="size-5 flex-none" />
                Voir mon GitHub
              </a>
            </div>
          </SlideUpIn>
        </div>
        <SlideUpIn
          as="div"
          delay={550}
          className="w-full xl:absolute xl:-bottom-30 xl:right-0 xl:max-w-sm"
        >
          <aside
            className="flex w-full flex-col rounded-3xl border border-base-content/10 bg-base-100/85 p-7 shadow-[0_1.5rem_4rem_rgb(32_41_106/0.1)] backdrop-blur-sm md:p-6 md:pl-8.5"
            aria-label="Recherche d’alternance"
          >
            <div className="flex items-center gap-3">
              <span
                className="size-2.5 flex-none rounded-full animate-pulse bg-success"
                aria-hidden="true"
              />
              <Typography
                as="p"
                variant="p4"
                className=" text-success! text-extrabold! uppercase"
              >
                {trainingConfig.availabilityLabel}
              </Typography>
            </div>

            <div className="mt-6 flex min-w-0 items-start gap-4">
              <div className="flex min-w-0 flex-col gap-2">
                <Typography as="p" variant="p4">
                  {trainingConfig.currentTrainingIntro}{" "}
                  <strong>{trainingConfig.degreeName}</strong> au{" "}
                  {trainingConfig.cfaName}.
                </Typography>
              </div>
              <span className="grid size-11 flex-none place-items-center rounded-xl bg-secondary/8 text-secondary ring-1 ring-secondary/10">
                <GraduationCap className="size-6" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-6 flex min-w-0 items-start gap-4 border-base-content/10 border-t pt-6">
              <div className="flex min-w-0 flex-col gap-2">
                <Typography as="p" variant="p4">
                  <strong>{trainingConfig.search.lead}</strong>{" "}
                  {trainingConfig.search.description}
                </Typography>
              </div>
              <span className="grid size-11 flex-none place-items-center rounded-xl bg-secondary/8 text-secondary ring-1 ring-secondary/10">
                <ArrowLeftRight className="size-5.5" aria-hidden="true" />
              </span>
            </div>

            <a
              className="btn btn-secondary btn-md group mt-7 w-full justify-center gap-4 rounded-full"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              <Typography as="span" className="text-secondary-content!">
                Me contacter
              </Typography>
              <ArrowRight
                className="size-5 flex-none transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </aside>
        </SlideUpIn>
      </div>
    </PageSection>
  );
}

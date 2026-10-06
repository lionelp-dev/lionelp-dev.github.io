import { PageSection } from "../../../components/layout/PageSection";
import { MailIcon } from "../../../components/MailIcon";
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
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-9.75">
          <div className="flex flex-col gap-3.75">
            <Typography
              as="p"
              variant="hero-intro"
              className="flex flex-col gap-1"
            >
              <SlideUpIn as="span" delay={250}>
                <span className="flex flex-row gap-1">
                  Hello, je m'appelle Lionel Piquionne
                  <span role="img" aria-label="main qui salue">
                    👋
                  </span>
                </span>
              </SlideUpIn>
              <SlideUpIn as="span" delay={300}>
                <Typography
                  as="span"
                  variant="hero-description"
                  className="flex flex-col"
                ></Typography>
              </SlideUpIn>
            </Typography>
            <div className="flex flex-col gap-6.75">
              <Typography
                id="page-title"
                variant="hero-title"
                className="-ml-[0.0975em]"
              >
                <SlideUpIn as="span" delay={350}>
                  <span>
                    Développeur
                    <br />
                    full-stack
                  </span>
                </SlideUpIn>
              </Typography>
              <SlideUpIn as="div" delay={400}>
                <ProjectBadges
                  badges={["React", "TypeScript", "Node.js", "Laravel", "PHP"]}
                  className="badge-sm md:badge-md"
                />
              </SlideUpIn>
              <Typography
                as="p"
                variant="hero-description"
                className="flex flex-col"
              >
                <SlideUpIn as="span" delay={450}>
                  <span>
                    Je développe des applications web de la logique métier aux
                    interfaces, <br />
                    avec une attention portée aux tests et à la qualité du code.
                  </span>
                </SlideUpIn>
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4.25 md:flex-row">
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
          <SlideUpIn as="span" delay={550}>
            <a
              className="btn btn-secondary rounded-full md:btn-lg"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              <MailIcon className="size-4 transition-transform group-hover:scale-110" />
              <Typography as="span" variant="label">
                Me contacter
              </Typography>
            </a>
          </SlideUpIn>
        </div>
      </div>
    </PageSection>
  );
}

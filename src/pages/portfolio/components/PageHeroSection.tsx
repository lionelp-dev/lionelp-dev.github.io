import { PageSection } from "../../../components/layout/PageSection";
import { Divider } from "../../../components/layout/Divider";
import { MailIcon } from "../../../components/MailIcon";
import { SlideUpIn } from "../../../components/SlideUpIn";
import { Typography } from "../../../components/Typography";
import { siteConfig } from "../../../config/site";

const heroClass =
  "relative flex flex-col items-start gap-80 !justify-center !h-[min(70svh,1000px)] lg:!h-[min(90svh,1000px)] !py-[clamp(2rem,8.5svh,10.75rem)] md:gap-7";

export function PageHeroSection() {
  return (
    <PageSection
      id="home"
      className="scroll-mt-[var(--section-scroll-offset)]"
      contentClassName={heroClass}
      aria-labelledby="page-title"
    >
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-9.75">
          <div className="flex flex-col gap-3.75">
            <Typography
              as="p"
              variant="hero-intro"
              className="flex flex-col gap-1"
            >
              <SlideUpIn as="span" delay={250}>
                <span className="flex flex-row gap-1">
                  Hello, je m'appelle Lionel
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
                >
                  je me spécialise en tant que
                </Typography>
              </SlideUpIn>
            </Typography>
            <div className="flex flex-col gap-6.75">
              <Typography
                id="page-title"
                variant="hero-title"
                className="-ml-[0.0975em]"
              >
                <SlideUpIn as="span" delay={350}>
                  <span>Développeur web</span>
                </SlideUpIn>
                <SlideUpIn as="span" delay={400}>
                  <span>full-stack</span>
                </SlideUpIn>
              </Typography>
              <Typography
                as="p"
                variant="hero-description"
                className="flex flex-col"
              >
                <SlideUpIn as="span" delay={450}>
                  <span>
                    Je m’appuie sur plusieurs années d’expérience en freelance
                    dans la réalisation de sites e-commerce et vitrines.
                  </span>
                </SlideUpIn>
                <span></span>
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4.25 md:flex-row">
          <SlideUpIn as="span" delay={500}>
            <Typography
              as="p"
              variant="status-label"
              className="badge md:badge-lg badge-soft badge-secondary w-full gap-3.75 whitespace-nowrap rounded-full md:w-fit"
            >
              <span
                className="size-2.25 animate-pulse rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              À la recherche d’un contrat d’alternance
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
      <Divider />
    </PageSection>
  );
}

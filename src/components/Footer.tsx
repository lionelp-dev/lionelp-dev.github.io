import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  FileText,
  MapPin,
} from "lucide-react";
import { siteConfig, trainingConfig } from "../config/site";
import { GitHubIcon } from "./GitHubIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { LogoMark } from "./LogoMark";
import { MailIcon } from "./MailIcon";
import { navigationItems } from "./navigation/navigation.config";
import { SlideUpIn } from "./SlideUpIn";
import { Typography } from "./Typography";

const linkClassName = "inline-flex w-fit items-center gap-2";

export function Footer() {
  return (
    <footer
      id="contact"
      className="section-alternate-bg relative isolate scroll-mt-(--section-scroll-offset) overflow-hidden bg-base-100 pt-20 pb-1"
    >
      <div className="mx-auto grid w-full max-w-[89vw] px-7 sm:px-10 lg:max-w-[78.385vw] lg:grid-cols-[58.5%_41.5%] lg:px-0">
        <section className="min-w-0" aria-labelledby="contact-title">
          <div className="flex gap-6 h-full min-w-0 flex-col items-start">
            <div className="flex flex-col gap-5">
              <Typography as="h2" id="contact-title" variant="h3" font="serif">
                <SlideUpIn as="span" delay={150}>
                  Une opportunité
                  <br /> à me proposer&nbsp;?
                </SlideUpIn>
              </Typography>

              <SlideUpIn delay={300} className="max-w-[36rem]">
                <Typography
                  as="p"
                  variant="p3"
                  className="text-base-content/75"
                >
                  {trainingConfig.footer.intro}{" "}
                  <strong className="font-bold text-base-content">
                    {trainingConfig.degreeName}
                  </strong>{" "}
                  au <strong>{trainingConfig.cfaName}</strong>,{" "}
                  {trainingConfig.footer.conclusion}
                </Typography>
              </SlideUpIn>
            </div>

            <SlideUpIn delay={375} className="w-full sm:w-auto">
              <div className="flex w-full flex-wrap gap-2.5 sm:w-auto">
                <a
                  className="btn btn-soft btn-md dark:bg-base-300/80 dark:hover:bg-base-300 rounded-full"
                  href={`${import.meta.env.BASE_URL}${trainingConfig.cv.fileName}`}
                  download={trainingConfig.cv.downloadName}
                >
                  <ArrowDownToLine className="size-5 flex-none" />
                  Télécharger mon CV
                </a>
                <a
                  className="btn btn-secondary btn-md group w-full rounded-full gap-4 pl-10 sm:w-auto"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  <MailIcon className="size-5 shrink-0 " />
                  Me contacter
                  <ArrowRight
                    className="size-5 transition-transform -translate-x-1.95 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </SlideUpIn>
          </div>
        </section>

        <div className="mt-12 flex min-w-0 flex-col items-start gap-12 lg:mt-0 lg:grid lg:grid-cols-[49.4%_50.6%] lg:gap-0 lg:pt-11">
          <section aria-labelledby="footer-links-title">
            <SlideUpIn delay={225}>
              <Typography as="h2" id="footer-links-title" variant="h3">
                Liens utiles
              </Typography>
            </SlideUpIn>
            <nav
              className="mt-9 flex flex-col items-start gap-5"
              aria-label="Liens externes"
            >
              <SlideUpIn delay={300}>
                <a
                  className={linkClassName}
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon className="size-5 flex-none" />
                  <Typography as="span" variant="p3">
                    GitHub
                  </Typography>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </SlideUpIn>
              <SlideUpIn delay={375}>
                <a
                  className={linkClassName}
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon className="size-5 flex-none" />
                  <Typography as="span" variant="p3">
                    LinkedIn
                  </Typography>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </SlideUpIn>
              <SlideUpIn delay={450}>
                <a
                  className={linkClassName}
                  href={`${import.meta.env.BASE_URL}${trainingConfig.cv.fileName}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText className="size-5 flex-none" aria-hidden="true" />
                  <Typography as="span" variant="p3">
                    CV (PDF)
                  </Typography>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </SlideUpIn>
            </nav>
          </section>

          <section aria-labelledby="footer-contact-title">
            <SlideUpIn delay={300}>
              <Typography as="h2" variant="h3">
                Contact
              </Typography>
            </SlideUpIn>
            <address className="mt-9 flex flex-col gap-5 not-italic">
              <SlideUpIn delay={375}>
                <a
                  className="inline-flex items-center gap-5"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  <MailIcon className="size-5 shrink-0" />
                  <Typography as="span" variant="p3">
                    {siteConfig.contactEmail}
                  </Typography>
                </a>
              </SlideUpIn>
              <SlideUpIn delay={450}>
                <div className="inline-flex items-center gap-5">
                  <MapPin className="size-5 shrink-0" aria-hidden="true" />
                  <Typography as="span" variant="p3">
                    Île-de-France, France
                  </Typography>
                </div>
              </SlideUpIn>
            </address>
          </section>
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-[89vw] border-t border-base-content/20 lg:max-w-[78.385vw]">
        <div className="flex flex-col gap-5 py-4 pl-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-4">
            <LogoMark className="h-7 sm:h-7" />
            <p className="text-sm leading-5 tracking-tight text-base-content/80">
              © {new Date().getFullYear()} Lionel Piquionne — Développeur Full
              Stack &amp; IA
            </p>
          </div>

          <div className="flex items-center justify-between gap-6 sm:justify-end">
            <nav
              className="flex flex-wrap items-center gap-x-7 gap-y-2 text-sm tracking-tight"
              aria-label="Navigation du pied de page"
            >
              {navigationItems
                .filter((item) => item.sectionId !== "contact")
                .map((item) => (
                  <a
                    key={item.sectionId}
                    className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-base-content"
                    href={`#/portfolio#${item.anchorId}`}
                  >
                    {item.label}
                  </a>
                ))}
            </nav>

            <button
              className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-base-content/80 text-base-content transition-colors hover:bg-base-content hover:text-base-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-base-content"
              type="button"
              aria-label="Retour en haut de page"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

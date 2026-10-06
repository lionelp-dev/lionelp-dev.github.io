import { siteConfig } from "../config/site";
import { MailIcon } from "./MailIcon";
import { SlideUpIn } from "./SlideUpIn";
import { Typography } from "./Typography";

export function Footer() {
  return (
    <footer
      id="contact"
      className="flex scroll-mt-24 flex-col py-[var(--section-y-padding)]"
    >
      <div className="mx-auto flex w-[90vw] max-w-[1680px] flex-col gap-3.75 rounded-4xl bg-base-content px-8 py-10 text-secondary-content md:px-16 md:py-16">
        <div className="flex flex-col gap-3.75">
          <Typography as="h3" variant="footer-title" className="ml-[-0.0975em]">
            <SlideUpIn as="span" delay={150}>
              <span>Un poste à pourvoir</span>
            </SlideUpIn>
            <SlideUpIn as="span" delay={225}>
              <span>en alternance ?</span>
            </SlideUpIn>
          </Typography>
          <Typography as="p" variant="footer-description">
            <SlideUpIn as="span" delay={300}>
              <span>Je suis disponible dès octobre 2026</span>
            </SlideUpIn>
          </Typography>
        </div>

        <nav
          className="flex flex-wrap gap-3"
          aria-label="Liens de contact et réseaux"
        >
          <SlideUpIn delay={375}>
            <a
              className="btn btn-soft rounded-full px-6.75 pl-7.75"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              <MailIcon className="size-4 flex-none" />
              <Typography as="span" variant="label">
                {siteConfig.contactEmail}
              </Typography>
            </a>
          </SlideUpIn>
        </nav>
      </div>
    </footer>
  );
}

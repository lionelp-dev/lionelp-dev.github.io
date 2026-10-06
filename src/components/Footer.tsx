import { siteConfig } from "../config/site";
import { MailIcon } from "./MailIcon";
import { SlideUpIn } from "./SlideUpIn";
import { Typography } from "./Typography";

export function Footer() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="flex scroll-mt-24 flex-col gap-3 py-[clamp(2rem,9.5svh,5.75rem)]"
    >
      <div className="mx-auto flex w-[90vw] max-w-[1680px] flex-col gap-12 rounded-4xl bg-base-content px-9 py-18 text-secondary-content md:gap-14 md:px-30 md:py-30">
        <Typography as="h2" id="contact-title" variant="section-title">
          Contact
        </Typography>
        <div className="flex flex-col gap-4.75">
          <Typography as="h3" variant="footer-title" className="ml-[-0.0975em]">
            <SlideUpIn as="span" delay={150}>
              <span>Un poste à pourvoir</span>
            </SlideUpIn>
            <SlideUpIn as="span" delay={225}>
              <span>en alternance ?</span>
            </SlideUpIn>
          </Typography>
          <Typography
            as="p"
            variant="footer-description"
          >
            <SlideUpIn as="span" delay={300}>
              <span>Disponible dès octobre 2026</span>
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

import { MailIcon } from "./MailIcon";
import { Typography } from "./Typography";

const contactEmail = "lionelp.dev@gmail.com";

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 py-[clamp(2rem,9.5svh,5.75rem)] flex flex-col gap-3"
    >
      <div className="mx-auto flex w-[90vw] max-w-[1680px] flex-col gap-12 rounded-4xl bg-base-content px-9 py-18 text-secondary-content md:gap-14 md:px-23 md:py-25">
        <div className="flex flex-col gap-4.75">
          <Typography
            as="h2"
            variant="footer-title"
            className="ml-[-0.0975em]"
          >
            <span>Un poste à pourvoir</span>
            <span>en alternance ?</span>
          </Typography>
          <Typography
            as="p"
            variant="body"
            className="md:text-2xl tracking-[-0.03475em]"
          >
            <span>
              Disponible dès octobre 2026, au rythme de 1 semaine en formation /
              3 semaines en entreprise.
            </span>
          </Typography>
        </div>

        <nav
          className="flex flex-wrap gap-3"
          aria-label="Liens de contact et réseaux"
        >
          <a
            className="btn btn-soft px-6.75 pl-7.75 rounded-full"
            href={`mailto:${contactEmail}`}
          >
            <MailIcon className="size-4 flex-none" />
            <Typography as="span" variant="label">
              {contactEmail}
            </Typography>
          </a>
        </nav>
      </div>
    </footer>
  );
}

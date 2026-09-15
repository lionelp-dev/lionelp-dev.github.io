import { MailIcon } from "./MailIcon";

const contactEmail = "lionelp.dev@gmail.com";

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 py-[clamp(2rem,9.5svh,5.75rem)] flex flex-col gap-3"
    >
      <div className="mx-auto flex w-[90vw] max-w-[1680px] flex-col gap-12 rounded-4xl bg-base-content px-9 py-18 text-secondary-content md:gap-14 md:px-23 md:py-25">
        <div className="flex flex-col gap-4.75">
          <h2 className="flex flex-col font-serif-display font-normal leading-19.75 tracking-[-0.0775em] ml-[-0.0975em] md:text-6xl lg:text-[clamp(3.75rem,6.75vw,5.75rem)]">
            <span>Un poste à pourvoir</span>
            <span>en alternance ?</span>
          </h2>
          <p className="leading-normal md:text-2xl font-normal tracking-[-0.03475em]">
            <span>
              Disponible dès octobre 2026, au rythme de 1 semaine en formation /
              3 semaines en entreprise.
            </span>
          </p>
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
            <span>{contactEmail}</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}

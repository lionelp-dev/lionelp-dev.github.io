import { MailIcon } from "./MailIcon";

const heroClass =
  "relative flex flex-col items-start gap-80 justify-center h-[min(90svh,1000px)] md:gap-7";
const heroTitleClass =
  "flex flex-col font-serif-display -ml-[0.0975em] text-5xl font-normal leading-[0.855] tracking-[-0.08975em] text-base-content md:text-7xl lg:text-[11em]";
const heroTextClass =
  "flex flex-col leading-normal text-base-content/70 md:text-2xl font-normal tracking-[-0.04975em]";

export function PageHero() {
  return (
    <section
      id="hero-section"
      className={heroClass}
      aria-labelledby="page-title"
    >
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-9.75">
          <div className="flex-col flex gap-2.75">
            <p className="flex gap-1 text-xl leading-tight tracking-[-0.0425em] text-base-content/85 md:text-4xl">
              Hello, je m'appelle Lionel
              <span role="img" aria-label="main qui salue">
                👋
              </span>
            </p>
            <div className="flex flex-col gap-7.75">
              <h1 id="page-title" className={heroTitleClass}>
                <span>Développeur web</span>
                <span>full-stack</span>
              </h1>
              <p className={heroTextClass}>
                <span>
                  Issu de plusieurs années en freelance à réaliser des sites
                  e-commerce et des sites vitrines,
                </span>
                <span>
                  aujourd’hui je me spécialise dans le développement full-stack.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4.25">
          <p className="badge badge-lg badge-soft badge-secondary tracking-[-0.0375em] h-auto gap-3.75 rounded-full px-6.25 pr-7.75 font-normal text-secondary">
            <span
              className="size-2.25 animate-pulse rounded-full bg-success"
              aria-hidden="true"
            />
            À la recherche d’un contrat d’alternance
          </p>
          <a
            className="btn btn-lg btn-secondary rounded-full text-base pr-8.75 pl-8 gap-2.75 tracking-[-0.0375em] font-normal"
            href="mailto:lionelp.dev@gmail.com"
          >
            <MailIcon className="size-4 transition-transform group-hover:scale-110" />
            <span>Me contacter</span>
          </a>
        </div>
      </div>
      <span
        className="absolute bottom-0 left-0 h-px w-full bg-base-content/15"
        aria-hidden="true"
      />
    </section>
  );
}

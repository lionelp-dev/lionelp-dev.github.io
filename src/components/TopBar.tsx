import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { GitHubIcon } from "./GitHubIcon";
import { LogoMark } from "./LogoMark";
import { MailIcon } from "./MailIcon";
import { ThemeSwitch } from "./ThemeSwitch";
import { Typography } from "./Typography";

const portfolioNavigationItems = [
  { label: "Accueil", sectionId: "home" },
  { label: "Projet personnel", sectionId: "personal-projects" },
  { label: "Projets clients", sectionId: "client-projects" },
] as const;
const contactNavigationItem = { label: "Contact", sectionId: "contact" } as const;
const githubProfileUrl = "https://github.com/lionelp-dev";

export function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const [hash, setHash] = useState(() =>
    typeof window === "undefined" ? "" : window.location.hash,
  );

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = (target: string) => {
    if (target === "tech-watch") {
      return pathname === "/tech-watch";
    }

    return pathname === "/portfolio" && hash.endsWith(`#${target}`);
  };

  const desktopLinkClass = (active: boolean) =>
    `relative inline-flex h-full shrink-0 items-center text-sm tracking-[-0.002em] leading-none text-base-content/70 no-underline transition-colors hover:text-base-content ${
      active
        ? "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-base-content"
        : ""
    }`;

  return (
    <header className="sticky top-0 z-20 border-b border-base-content/10 bg-base-100/95 backdrop-blur">
      <nav
        className="relative mx-auto grid w-[90vw] max-w-[1600px] grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-3  py-3 sm:px-5 md:min-h-18 md:py-0"
        aria-label="Navigation principale"
      >
        <Link
          className="inline-flex min-w-0 items-center gap-3 text-base-content no-underline"
          to="/portfolio"
          aria-label="Retour au portfolio"
          onClick={() => setIsMenuOpen(false)}
        >
          <LogoMark />
        </Link>

        <div className="hidden h-full min-w-0 items-center justify-center gap-8 lg:absolute lg:left-1/2 lg:top-1/2 lg:flex lg:-translate-x-1/2 lg:-translate-y-1/2">
          {portfolioNavigationItems.map((link) => (
            <a
              className={desktopLinkClass(isActive(link.sectionId))}
              href={`#/portfolio#${link.sectionId}`}
              key={link.sectionId}
              aria-current={isActive(link.sectionId) ? "location" : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              <Typography as="span" variant="label">
                {link.label}
              </Typography>
            </a>
          ))}
          <Link
            className={desktopLinkClass(isActive("tech-watch"))}
            to="/tech-watch"
            aria-current={isActive("tech-watch") ? "page" : undefined}
          >
            <Typography as="span" variant="label">
              Explorations technologiques
            </Typography>
          </Link>
          <a
            className={desktopLinkClass(isActive(contactNavigationItem.sectionId))}
            href={`#/portfolio#${contactNavigationItem.sectionId}`}
            aria-current={
              isActive(contactNavigationItem.sectionId) ? "location" : undefined
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <Typography as="span" variant="label">
              {contactNavigationItem.label}
            </Typography>
          </a>
        </div>

        <div className="flex items-center gap-2.75 justify-end">
          <a
            className="btn btn-ghost btn-square hidden h-9 min-h-9 w-9 rounded-full border border-base-content/20 text-base-content transition-colors hover:border-base-content/35 hover:bg-base-200 sm:h-10 sm:min-h-10 sm:w-10 lg:inline-flex"
            href={`mailto:lionelp.dev@gmail.com`}
            aria-label="Envoyer un email"
            title="lionelp.dev@gmail.com"
          >
            <MailIcon className="size-5" />
          </a>
          <a
            className="btn btn-ghost btn-square hidden h-9 min-h-9 w-9 rounded-full border border-base-content/20 text-base-content transition-colors hover:border-base-content/35 hover:bg-base-200 sm:h-10 sm:min-h-10 sm:w-10 lg:inline-flex"
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Voir mon profil GitHub"
            title="GitHub"
          >
            <GitHubIcon className="size-5" />
          </a>
          <ThemeSwitch className="ml-6 h-9 w-18 sm:h-10 sm:w-[94px]" />
          <button
            className="btn btn-ghost btn-square h-9 min-h-9 w-9 rounded-full border border-base-content/20 text-base-content transition-colors hover:border-base-content/35 hover:bg-base-200 lg:hidden"
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen
                ? "Fermer le menu de navigation"
                : "Ouvrir le menu de navigation"
            }
            title={isMenuOpen ? "Fermer" : "Menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X className="size-5 stroke-[2]" aria-hidden="true" />
            ) : (
              <Menu className="size-5 stroke-[2]" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          className={`absolute top-full left-0 right-0 overflow-hidden bg-base-100/95 backdrop-blur transition-[max-height,opacity] duration-200 ease-out lg:hidden ${
            isMenuOpen
              ? "max-h-60 border-b border-base-content/10 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
          id="mobile-navigation"
        >
          <div className="flex h-full flex-col gap-1 border-t border-base-content/10 py-3">
            {portfolioNavigationItems.map((link) => (
              <a
                className="rounded-lg px-3 h-full py-3 text-sm font-bold leading-tight text-base-content/75 no-underline transition-colors hover:bg-base-200 hover:text-base-content"
                href={`#/portfolio#${link.sectionId}`}
                key={link.sectionId}
                onClick={() => setIsMenuOpen(false)}
              >
                <Typography as="span" variant="label">
                  {link.label}
                </Typography>
              </a>
            ))}
            <Link
              className="rounded-lg px-3 py-3 text-sm font-bold leading-tight text-base-content/75 no-underline transition-colors hover:bg-base-200 hover:text-base-content"
              to="/tech-watch"
              onClick={() => setIsMenuOpen(false)}
            >
              <Typography as="span" variant="label">
                Explorations technologiques
              </Typography>
            </Link>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-bold leading-tight text-base-content/75 no-underline transition-colors hover:bg-base-200 hover:text-base-content"
              href={`#/portfolio#${contactNavigationItem.sectionId}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <MailIcon className="size-5 flex-none" />
              <Typography as="span" variant="label">
                {contactNavigationItem.label}
              </Typography>
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-bold leading-tight text-base-content/75 no-underline transition-colors hover:bg-base-200 hover:text-base-content"
              href={`mailto:lionelp.dev@gmail.com`}
            >
              <MailIcon className="size-5 flex-none" />
              <Typography as="span" variant="label">
                Email
              </Typography>
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-bold leading-tight text-base-content/75 no-underline transition-colors hover:bg-base-200 hover:text-base-content"
              href={githubProfileUrl}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="size-5 flex-none" />
              <Typography as="span" variant="label">
                GitHub
              </Typography>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

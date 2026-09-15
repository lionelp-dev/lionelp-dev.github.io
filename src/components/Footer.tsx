import { useEffect, useRef } from "react";
import { GitHubIcon } from "./GitHubIcon";
import { LogoMark } from "./LogoMark";
import { MailIcon } from "./MailIcon";

const githubProfileUrl = "https://github.com/lionelp-dev";
const contactEmail = "lionelp.dev@gmail.com";

const scrollDurationMs = 600;

// easeOutCubic
const ease = (t: number) => 1 - (1 - t) ** 3;

export function Footer() {
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  function scrollToTop() {
    // Annule une animation déjà en cours pour repartir proprement au reclic.
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const start = window.scrollY;

    if (prefersReducedMotion || start === 0) {
      window.scrollTo(0, 0);
      return;
    }

    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / scrollDurationMs, 1);
      window.scrollTo(0, start * (1 - ease(progress)));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(step);
  }

  return (
    <footer className="border-t border-base-content/10">
      <div className="mx-auto flex w-[90vw] max-w-[1600px] justify-between gap-6 py-5 text-sm text-base-content/70 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-3 text-base-content no-underline transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            onClick={scrollToTop}
            aria-label="Revenir en haut de la page"
          >
            <LogoMark />
          </button>
        </div>

        <nav
          className="flex flex-wrap items-center gap-x-6.25 gap-y-3 font-normal tracking-[-0.0375em]"
          aria-label="Navigation secondaire"
        >
          <a
            className="inline-flex items-center gap-3.5 transition-colors hover:text-base-content"
            href={`mailto:${contactEmail}`}
          >
            <MailIcon className="size-4 flex-none" />
            <span>Contact</span>
          </a>
          <a
            className="inline-flex items-center gap-2 transition-colors hover:text-base-content"
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="size-4 flex-none" />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}

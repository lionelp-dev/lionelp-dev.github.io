import { useEffect, useState } from "react";
import { Typography } from "./Typography";

const MINIMUM_VISIBLE_TIME = 450;

export function SiteLoader() {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let animationFrame = 0;
    let isReady = false;
    const startedAt = performance.now();

    document.body.classList.add("is-site-loading");

    const advanceProgress = () => {
      setProgress((current) => {
        if (isReady) {
          return 100;
        }

        // The last few percent are reserved for the real browser load event.
        return Math.min(92, current + Math.max(1, (92 - current) * 0.08));
      });
      animationFrame = window.requestAnimationFrame(advanceProgress);
    };

    const finish = () => {
      if (isReady) return;

      isReady = true;
      window.cancelAnimationFrame(animationFrame);
      const elapsed = performance.now() - startedAt;
      const delay = Math.max(0, MINIMUM_VISIBLE_TIME - elapsed);

      window.setTimeout(() => {
        setProgress(100);
        window.setTimeout(() => setIsLeaving(true), 180);
        window.setTimeout(() => setIsVisible(false), 520);
      }, delay);
    };

    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const pageReady =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) =>
            window.addEventListener("load", () => resolve(), { once: true }),
          );

    void Promise.all([fontsReady, pageReady]).then(finish);
    advanceProgress();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      document.body.classList.remove("is-site-loading");
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.classList.remove("is-site-loading");
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`site-loader ${isLeaving ? "site-loader--leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Chargement du site : ${Math.round(progress)} %`}
    >
      <div className="site-loader__content">
        <Typography
          as="strong"
          variant="subtitle"
          className="site-loader__percentage"
        >
          {Math.round(progress)}%
        </Typography>
      </div>
    </div>
  );
}

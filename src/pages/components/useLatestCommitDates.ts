import { useEffect, useState } from "react";
import { fetchLatestCommitDate } from "../../services/github";
import type { TechWatchProject } from "../../types/projects";

export type LatestCommitDates = Record<string, string>;

function isAbortError(error: unknown) {
  return error instanceof DOMException && error.name === "AbortError";
}

export function useLatestCommitDates(projects: readonly TechWatchProject[]) {
  const [latestCommitDates, setLatestCommitDates] = useState<LatestCommitDates>(
    {},
  );

  useEffect(() => {
    const controller = new AbortController();

    setLatestCommitDates({});

    void Promise.all(
      projects.map(async (project) => {
        try {
          const date = await fetchLatestCommitDate(
            project.repositoryUrl,
            controller.signal,
          );

          return [project.repositoryUrl, date] as const;
        } catch (error: unknown) {
          if (!isAbortError(error)) {
            console.error(
              `Unable to fetch the latest commit date for ${project.repositoryUrl}`,
              error,
            );
          }

          return undefined;
        }
      }),
    ).then((dates) => {
      if (!controller.signal.aborted) {
        setLatestCommitDates(
          Object.fromEntries(
            dates.filter(
              (date): date is readonly [string, string] => date !== undefined,
            ),
          ),
        );
      }
    });

    return () => controller.abort();
  }, [projects]);

  return latestCommitDates;
}

import { useEffect, useMemo, useState } from "react";
import { techWatchProjects } from "../data/projects";
import { fetchLatestCommitDate } from "../services/github";

export function useTechWatchProjects() {
  const [latestCommitDates, setLatestCommitDates] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    const controller = new AbortController();

    void Promise.all(
      techWatchProjects.map(async (project) => {
        try {
          const date = await fetchLatestCommitDate(
            project.repositoryUrl,
            controller.signal,
          );
          return [project.repositoryUrl, date] as const;
        } catch (error: unknown) {
          if (!(error instanceof DOMException && error.name === "AbortError")) {
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
  }, []);

  return useMemo(
    () =>
      techWatchProjects
        .map((project, index) => ({
          project,
          index,
          latestCommitDate: latestCommitDates[project.repositoryUrl],
        }))
        .sort((first, second) => {
          const firstTime = first.latestCommitDate
            ? Date.parse(first.latestCommitDate)
            : Number.NEGATIVE_INFINITY;
          const secondTime = second.latestCommitDate
            ? Date.parse(second.latestCommitDate)
            : Number.NEGATIVE_INFINITY;
          return secondTime - firstTime || first.index - second.index;
        })
        .map(({ project, latestCommitDate }) => ({
          project,
          latestCommitDate,
        })),
    [latestCommitDates],
  );
}

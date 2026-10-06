import { useMemo } from "react";
import type { TechWatchProject } from "../../types/projects";
import type { LatestCommitDates } from "./useLatestCommitDates";

export type TechWatchProjectWithLatestCommit = {
  project: TechWatchProject;
  latestCommitDate?: string;
};

export function useProjectsSortedByLatestCommit(
  projects: readonly TechWatchProject[],
  latestCommitDates: LatestCommitDates,
) {
  return useMemo<TechWatchProjectWithLatestCommit[]>(
    () =>
      projects
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
    [latestCommitDates, projects],
  );
}

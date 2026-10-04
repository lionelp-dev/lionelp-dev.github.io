import type { FreelanceProject } from "../../../../types/projects";
import type { ProjectSlide } from "./types";

export function createProjectSlides(
  projects: FreelanceProject[],
): ProjectSlide[] {
  return projects.flatMap((project) =>
    project.images.map((image, imageIndex) => ({
      project,
      image,
      imageIndex,
    })),
  );
}

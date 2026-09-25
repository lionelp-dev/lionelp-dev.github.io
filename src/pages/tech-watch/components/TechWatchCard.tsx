import { FolderGit2 } from "lucide-react";
import { useEffect, useState } from "react";
import { ProjectCard } from "../../../components/ProjectCard";
import { fetchLatestCommitDate } from "../../../services/github";
import type { TechWatchProject } from "../../../types/projects";

type TechWatchCardProps = {
  project: TechWatchProject;
};

export function TechWatchCard({ project }: TechWatchCardProps) {
  const [latestCommitDate, setLatestCommitDate] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();

    fetchLatestCommitDate(project.repositoryUrl, controller.signal)
      .then((date) => setLatestCommitDate(date))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        console.error(
          `Unable to fetch the latest commit date for ${project.name}`,
          error,
        );
      });

    return () => controller.abort();
  }, [project.repositoryUrl]);

  const meta = latestCommitDate
    ? `Dernier commit : ${new Intl.DateTimeFormat("fr-FR", {
        month: "long",
        year: "numeric",
      }).format(new Date(latestCommitDate))}`
    : undefined;

  return (
    <ProjectCard
      title={project.name}
      meta={meta}
      description={project.description}
      image={project.image}
      imagePosition="right"
      badges={project.technologies}
      highlightedBadgeVariant="soft"
      links={[{ label: "Voir sur GitHub", url: project.repositoryUrl }]}
      linkIcon={FolderGit2}
    />
  );
}

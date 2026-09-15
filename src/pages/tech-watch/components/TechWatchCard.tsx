import { FolderGit2 } from "lucide-react";
import { ProjectCard } from "../../../components/ProjectCard";
import type { TechWatchProject } from "../../../types/projects";

type TechWatchCardProps = {
  project: TechWatchProject;
};

export function TechWatchCard({ project }: TechWatchCardProps) {
  return (
    <ProjectCard
      title={project.name}
      description={project.description}
      badges={project.technologies}
      highlightedBadgeVariant="soft"
      links={[{ label: "Voir sur GitHub", url: project.repositoryUrl }]}
      linkIcon={FolderGit2}
    />
  );
}

import { ProjectCard } from "../../../components/ProjectCard";
import type { FreelanceProject } from "../../../types/projects";

type FreelanceCardProps = {
  project: FreelanceProject;
  projectNumber: number;
};

export function FreelanceCard({ project, projectNumber }: FreelanceCardProps) {
  return (
    <ProjectCard
      title={project.name}
      titleAside={
        project.currentName ? `Aujourd'hui ${project.currentName}` : undefined
      }
      meta={project.period}
      description={project.description}
      image={project.image}
      projectNumber={projectNumber}
      badges={[project.type, ...project.technologies]}
      links={project.links}
    />
  );
}

import { ProjectCard } from "../../../components/ProjectCard";
import type { FreelanceProject } from "../../../types/projects";

type FreelanceCardProps = {
  project: FreelanceProject;
};

export function FreelanceCard({ project }: FreelanceCardProps) {
  return (
    <ProjectCard
      title={project.name}
      titleAside={
        project.currentName ? `Aujourd'hui ${project.currentName}` : undefined
      }
      meta={project.period}
      description={project.description}
      image={project.image}
      imageContainerClassName="px-6 py-5"
      imageContainerStyle={{ backgroundColor: project.imageBackgroundColor }}
      imageCaption={project.name}
      badges={[project.type, ...project.technologies]}
      links={project.links}
    />
  );
}

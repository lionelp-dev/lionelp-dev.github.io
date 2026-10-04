import { ExternalLink } from "lucide-react";
import {
  ProjectActions,
  type ProjectActionTone,
} from "../../../../components/project/ProjectActions";
import { ProjectBadges } from "../../../../components/project/ProjectBadges";
import { SlideUpIn } from "../../../../components/SlideUpIn";
import { Typography } from "../../../../components/Typography";
import type { FreelanceProject } from "../../../../types/projects";

type ProjectDetailsProps = {
  project: FreelanceProject;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const actionLinks: Array<
    FreelanceProject["links"][number] & { tone: ProjectActionTone }
  > = project.links.map((link) => ({
    ...link,
    tone: "soft",
  }));

  return (
    <div className="flex h-full min-w-0 flex-col items-start gap-10 pt-[11.75vh]">
      <div className="flex flex-col gap-5.75">
        <div className="flex flex-col gap-3.75">
          <div className="flex flex-col gap-6.25">
            <div className="flex flex-col gap-2">
              <SlideUpIn key={`${project.name}-type`} delay={0}>
                <Typography as="p" variant="meta">
                  {project.type}
                </Typography>
              </SlideUpIn>
              {project.currentName ? (
                <SlideUpIn key={`${project.name}-current-name`} delay={75}>
                  <Typography as="p" variant="meta">
                    Aujourd&apos;hui {project.currentName}
                  </Typography>
                </SlideUpIn>
              ) : null}
              <SlideUpIn key={`${project.name}-title`} delay={75}>
                <Typography as="h2" variant="project-hero-title">
                  {project.name}
                </Typography>
              </SlideUpIn>
            </div>
            {project.period ? (
              <SlideUpIn key={`${project.name}-period`} delay={150}>
                <Typography as="p" variant="meta" className="md:text-2xl">
                  {project.period}
                </Typography>
              </SlideUpIn>
            ) : null}
          </div>
          <SlideUpIn key={`${project.name}-description`} delay={225}>
            <Typography
              as="p"
              variant="body"
              className="text-base-content/70  md:text-xl"
            >
              {project.description}
            </Typography>
          </SlideUpIn>
        </div>
        <SlideUpIn key={`${project.name}-badges`} delay={300}>
          <ProjectBadges
            badges={project.technologies}
            className="badge-sm"
          />
        </SlideUpIn>
      </div>
      <SlideUpIn key={`${project.name}-actions`} delay={375} className="w-full">
        <ProjectActions
          title={project.name}
          links={actionLinks}
          icon={ExternalLink}
          variant="client"
        />
      </SlideUpIn>
    </div>
  );
}

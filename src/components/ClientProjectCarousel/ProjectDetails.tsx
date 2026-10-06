import { ExternalLink } from "lucide-react";
import { ProjectBadges } from "../project/ProjectBadges";
import { SlideUpIn } from "../SlideUpIn";
import { Typography } from "../Typography";
import type { FreelanceProject } from "../../types/projects";

type ProjectDetailsProps = {
  project: FreelanceProject;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="flex h-full min-w-0 flex-col items-start justify-center gap-10">
      <div className="flex flex-col gap-5.75">
        <div className="flex flex-col gap-3.75">
          <div className="flex flex-col gap-6.25">
            <div className="flex flex-col gap-2">
              <SlideUpIn key={`${project.name}-type`} delay={0}>
                <Typography as="p" variant="p5">
                  {project.type}
                </Typography>
              </SlideUpIn>
              <SlideUpIn key={`${project.name}-title`} delay={75}>
                <Typography as="h2" variant="h2" font="serif">
                  {project.name}
                </Typography>
              </SlideUpIn>
              {project.currentName ? (
                <SlideUpIn key={`${project.name}-current-name`} delay={75}>
                  <Typography as="p" variant="p5">
                    Aujourd&apos;hui {project.currentName}
                  </Typography>
                </SlideUpIn>
              ) : null}
            </div>
            {project.period ? (
              <SlideUpIn key={`${project.name}-period`} delay={150}>
                <Typography as="p" variant="p5" className="md:text-2xl">
                  {project.period}
                </Typography>
              </SlideUpIn>
            ) : null}
          </div>
          <SlideUpIn key={`${project.name}-description`} delay={225}>
            <Typography as="p" variant="p2">
              {project.description}
            </Typography>
          </SlideUpIn>
        </div>
      </div>
      <SlideUpIn key={`${project.name}-actions`} delay={300} className="w-full">
        <div className="card-actions grid w-full grid-cols-2 gap-2.75">
          {project.links.map((link) => (
            <a
              className="btn btn-soft inline-flex w-full items-center gap-1.5 whitespace-nowrap rounded-full no-underline leading-(--leading-xl)"
              href={link.url}
              target="_blank"
              rel="noreferrer"
              key={`${project.name}-${link.label}`}
            >
              <ExternalLink aria-hidden="true" />
              <Typography as="span">{link.label}</Typography>
            </a>
          ))}
        </div>
      </SlideUpIn>
      <SlideUpIn key={`${project.name}-badges`} delay={375}>
        <ProjectBadges badges={project.technologies} className="badge-lg" />
      </SlideUpIn>
    </div>
  );
}

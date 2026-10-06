import { BrowserFrame } from "../../../../components/project/BrowserFrame";
import { SlideUpIn } from "../../../../components/SlideUpIn";
import { Typography } from "../../../../components/Typography";
import type { ProjectSlide } from "./types";

type ProjectPreviewProps = {
  slide: ProjectSlide;
  isFirstSlide: boolean;
};

export function ProjectPreview({ slide, isFirstSlide }: ProjectPreviewProps) {
  const { image, imageIndex, project } = slide;

  return (
    <div className="hover-3d hover-3d-subtle hover-3d-subtle-primary h-[min(50vh,42rem)] w-full max-w-7xl lg:h-[min(60vh,45rem)]">
      <BrowserFrame
        title={
          <SlideUpIn
            as="span"
            key={project.name}
            delay={0}
            duration={250}
            variant="blur"
          >
            <Typography as="span" variant="browser-caption">
              {project.name}
            </Typography>
          </SlideUpIn>
        }
      >
        <div className="min-h-0 flex-1 overflow-hidden rounded-lg">
          <SlideUpIn
            key={`${project.name}-${imageIndex}`}
            delay={250}
            duration={350}
            variant="blur"
            className="h-full [&>div]:h-full"
          >
            <img
              className="size-full object-cover object-top"
              src={image}
              alt={`Aperçu ${imageIndex + 1}/${project.images.length} du projet ${project.name}`}
              loading={isFirstSlide ? "eager" : "lazy"}
            />
          </SlideUpIn>
        </div>
      </BrowserFrame>
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} aria-hidden="true" />
      ))}
    </div>
  );
}

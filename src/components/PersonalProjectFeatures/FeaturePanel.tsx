import type { PersonalProjectFeature } from "../../types/projects";
import { ContentHeader } from "../layout/ContentHeader";
import { ProjectImage } from "../project/ProjectImage";
import { SlideUpIn } from "../SlideUpIn";
import { Typography } from "../Typography";
import { FeatureDetails } from "./FeatureDetails";

type FeaturePanelProps = {
  feature: PersonalProjectFeature;
  projectId: string;
};

export function FeaturePanel({ feature, projectId }: FeaturePanelProps) {
  return (
    <article
      className="grid min-w-0 gap-6.75 p-3 lg:h-full lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,1.45fr)] lg:gap-x-10"
      aria-labelledby={`${projectId}-feature-${feature.id}`}
    >
      <div className="min-w-0">
        <FeatureDetails
          feature={feature}
          startIndex={0}
          delay={150}
          className="lg:max-w-none lg:gap-[clamp(0.75rem,1vw,1rem)]"
        />
      </div>

      <div className="flex min-w-0 flex-col gap-y-[clamp(2rem,3svh,2.5rem)] lg:h-full">
        <ContentHeader.Root variant="content" className="min-w-0">
          <ContentHeader.Title>
            <SlideUpIn key={`${feature.id}-title`} delay={0}>
              <Typography
                as="h3"
                id={`${projectId}-feature-${feature.id}`}
                variant="h2"
                font="serif"
                className="ml-[-0.0975em]"
              >
                {feature.title}
              </Typography>
            </SlideUpIn>
          </ContentHeader.Title>
        </ContentHeader.Root>
        <FeaturePreview feature={feature} />
      </div>
    </article>
  );
}

function FeaturePreview({ feature }: { feature: PersonalProjectFeature }) {
  return (
    <div className="hover-3d hover-3d-subtle hover-3d-subtle-primary w-full lg:h-[clamp(27rem,30.6vw,36rem)]">
      <ProjectImage
        src={feature.image}
        title={feature.title}
        alt={feature.imageAlt}
        caption={feature.title}
        previewAnimation="blur"
        className="aspect-video lg:aspect-auto lg:h-full"
        imageClassName="object-contain object-center"
      />
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} aria-hidden="true" />
      ))}
    </div>
  );
}

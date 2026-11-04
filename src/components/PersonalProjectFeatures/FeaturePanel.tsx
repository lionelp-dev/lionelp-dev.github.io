import type { PersonalProjectFeature } from "../../types/projects";
import { ContentHeader } from "../layout/ContentHeader";
import { ProjectImage } from "../project/ProjectImage";
import { SlideUpIn } from "../SlideUpIn";
import { Typography } from "../Typography";

type FeaturePanelProps = {
  feature: PersonalProjectFeature;
  projectId: string;
};

export function FeaturePanel({ feature, projectId }: FeaturePanelProps) {

  const details = feature.details.slice(0);

  return (
    <article
      className="grid min-w-0 gap-6.75 lg:h-[70%] lg:grid-cols-[minmax(20rem,1.45fr)_minmax(0,0.95fr)] lg:gap-x-10"
      aria-labelledby={`${projectId}-feature-${feature.id}`}
    >
      <div className="flex min-w-0 flex-col gap-y-[clamp(2rem,3svh,2.5rem)] lg:order-1 lg:h-full">
        <ContentHeader.Root className="min-w-0">
          <ContentHeader.Title>
            <SlideUpIn key={`${feature.id}-title`} delay={0}>
              <Typography
                as="h3"
                id={`${projectId}-feature-${feature.id}`}
                variant="h3"
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
      <div className="min-w-0 lg:order-2">
        <div
          className={`flex max-w-152 flex-col lg:max-w-none lg:max-w-none h-full`}
        >
          {details.map((detail) => (
            <SlideUpIn
              key={`${feature.id}-${detail.label}`}
              delay={150}
              className="lg:flex-1 flex-start "
            >
              <div className="flex flex-col justify-center gap-1.5 lg:gap-3">
                <div>
                  <Typography as="p" variant="h5">
                    {detail.label}
                  </Typography>
                </div>
                <Typography as="p" variant="p3" className="whitespace-pre-line">
                  {detail.description}
                </Typography>
              </div>
            </SlideUpIn>
          ))}
        </div>
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

import type { PersonalProjectFeature } from "../../types/projects";
import { SlideUpIn } from "../SlideUpIn";
import { Typography } from "../Typography";

type FeatureDetailsProps = {
  feature: PersonalProjectFeature;
  startIndex: number;
  endIndex?: number;
  delay: number;
  className: string;
};

export function FeatureDetails({
  feature,
  startIndex,
  endIndex,
  delay,
  className,
}: FeatureDetailsProps) {
  const details = feature.details.slice(startIndex, endIndex);

  return (
    <div
      className={`flex max-w-152 flex-col lg:max-w-none ${className} h-full`}
    >
      {details.map((detail) => (
        <SlideUpIn
          key={`${feature.id}-${detail.label}`}
          delay={delay}
          className="border-base-content/15 border-t py-6 first:border-t-0 first:pt-0 last:pb-0 lg:flex-1 lg:py-[clamp(1.5rem,2vw,2rem)] [&>div]:h-full"
        >
          <div className="flex h-full flex-col justify-center gap-1.5 lg:gap-3">
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
  );
}

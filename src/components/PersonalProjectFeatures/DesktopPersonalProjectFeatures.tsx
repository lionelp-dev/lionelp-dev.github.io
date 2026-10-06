import type { PersonalProjectFeature } from "../../types/projects";
import { FeaturePanel } from "./FeaturePanel";
import { FeaturesProgress } from "./FeaturesProgress";

type DesktopPersonalProjectFeaturesProps = {
  activeFeature: PersonalProjectFeature;
  activeIndex: number;
  features: PersonalProjectFeature[];
  projectId: string;
};

export function DesktopPersonalProjectFeatures({
  activeFeature,
  activeIndex,
  features,
  projectId,
}: DesktopPersonalProjectFeaturesProps) {
  return (
    <div className="relative flex w-full flex-col gap-10 lg:h-full lg:min-h-0 lg:gap-0">
      <div className="flex min-h-0 flex-col gap-18 lg:flex-1 lg:gap-0">
        <FeaturePanel feature={activeFeature} projectId={projectId} />
      </div>
      <FeaturesProgress features={features} activeIndex={activeIndex} />
    </div>
  );
}

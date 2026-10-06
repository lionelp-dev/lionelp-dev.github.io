import type { PersonalProjectFeature } from "../../types/projects";
import { FeaturePanel } from "./FeaturePanel";

type MobilePersonalProjectFeaturesProps = {
  features: PersonalProjectFeature[];
  projectId: string;
};

export function MobilePersonalProjectFeatures({
  features,
  projectId,
}: MobilePersonalProjectFeaturesProps) {
  return (
    <div className="relative flex w-full flex-col gap-10 lg:hidden">
      <div className="flex min-h-0 flex-col gap-15">
        {features.map((feature) => (
          <FeaturePanel
            feature={feature}
            projectId={projectId}
            key={feature.id}
          />
        ))}
      </div>
    </div>
  );
}

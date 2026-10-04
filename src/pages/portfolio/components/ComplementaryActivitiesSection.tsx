import { Divider } from "../../../components/layout/Divider";
import { PageSection } from "../../../components/layout/PageSection";
import { SectionHeader } from "../../../components/layout/SectionHeader";
import { SlideUpIn } from "../../../components/SlideUpIn";
import { Typography } from "../../../components/Typography";
import { complementaryMissions } from "../../../data/projects";
import { MissionCard } from "./MissionCard";

export function ComplementaryActivitiesSection() {
  return (
    <PageSection
      id="complementary-activities"
      aria-labelledby="complementary-activities-title"
    >
      <SlideUpIn>
        <SectionHeader>
          <Typography
            as="h2"
            id="complementary-activities-title"
            variant="section-title"
          >
            Autres savoir-faire
          </Typography>
          <Typography as="p" variant="section-subtitle">
            Autres savoir-faire mobilisés au cours de mes projets en freelance.
          </Typography>
        </SectionHeader>
      </SlideUpIn>
      <div className="mb-[clamp(2rem,4.5svh,10.75rem)] divide-y divide-base-content/15 border-base-content/15 border-y">
        {complementaryMissions.map((mission, index) => (
          <SlideUpIn key={mission.name} delay={150 + index * 75}>
            <MissionCard
              mission={mission}
              number={String(index + 1).padStart(2, "0")}
            />
          </SlideUpIn>
        ))}
      </div>
      <Divider />
    </PageSection>
  );
}

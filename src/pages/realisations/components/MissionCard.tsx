import {
  BriefcaseBusiness,
  Camera,
  Palette,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { ProjectCard } from "../../../components/ProjectCard";
import type { ComplementaryMission } from "../../../types/projects";

type MissionCardProps = {
  mission: ComplementaryMission;
};

const iconsByMission: Record<string, LucideIcon> = {
  Infographie: Palette,
  Maintenance: Wrench,
  Photographie: Camera,
  Webmastering: BriefcaseBusiness,
};

export function MissionCard({ mission }: MissionCardProps) {
  return (
    <ProjectCard
      title={mission.name}
      description={mission.description}
      titleIcon={iconsByMission[mission.name] ?? BriefcaseBusiness}
      links={mission.links}
      paddingClassName="pl-5 pr-5.5 py-5.5"
    />
  );
}

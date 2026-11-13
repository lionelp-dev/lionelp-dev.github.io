import { ClientProjectsSection } from "../components/ClientProjectsSection";
import { ComplementarySkillsSection } from "../components/ComplementarySkillsSection";
import { PageHeroSection } from "../components/PageHeroSection";
import { PersonalProjectsSection } from "../components/PersonalProjectsSection";
import { ProfileOverviewSection } from "../components/ProfileOverviewSection";
import { TechWatchSection } from "../components/TechWatchSection";

export function PortfolioPage() {
  return (
    <>
      <PageHeroSection />

      <ProfileOverviewSection />
      <PersonalProjectsSection />
      <TechWatchSection />
      <ClientProjectsSection />
      <ComplementarySkillsSection />
    </>
  );
}

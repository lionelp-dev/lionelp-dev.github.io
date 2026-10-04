import { ClientProjectsSection } from "./components/ClientProjectsSection";
import { ComplementaryActivitiesSection } from "./components/ComplementaryActivitiesSection";
import { PageHeroSection } from "./components/PageHeroSection";
import { PersonalProjectsSection } from "./components/PersonalProjectsSection";

export function PortfolioPage() {
  return (
    <>
      <PageHeroSection />
      <PersonalProjectsSection />
      <ClientProjectsSection />
      <ComplementaryActivitiesSection />
    </>
  );
}

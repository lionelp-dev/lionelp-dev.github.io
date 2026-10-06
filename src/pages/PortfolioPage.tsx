import { ClientProjectsSection } from "./components/ClientProjectsSection";
import { PageHeroSection } from "./components/PageHeroSection";
import { PersonalProjectsSection } from "./components/PersonalProjectsSection";
import { TechWatchSection } from "./components/TechWatchSection";

export function PortfolioPage() {
  return (
    <>
      <PageHeroSection />
      <PersonalProjectsSection />
      <TechWatchSection />
      <ClientProjectsSection />
    </>
  );
}

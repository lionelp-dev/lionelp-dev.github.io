import { useEffect } from "react";
import { ClientProjectsSection } from "../components/ClientProjectsSection";
import { ComplementarySkillsSection } from "../components/ComplementarySkillsSection";
import { PageHeroSection } from "../components/PageHeroSection";
import { PersonalProjectsSection } from "../components/PersonalProjectsSection";
import { ProfileOverviewSection } from "../components/ProfileOverviewSection";
import { TechWatchSection } from "../components/TechWatchSection";

export function PortfolioPage() {
  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    const section = sectionId ? document.getElementById(sectionId) : null;

    // The browser normally handles native fragments itself. This also covers
    // the initial React render, where the target element did not yet exist.
    section?.scrollIntoView();
  }, []);

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

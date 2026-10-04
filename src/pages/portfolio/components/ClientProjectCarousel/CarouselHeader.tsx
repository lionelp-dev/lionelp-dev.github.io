import { SectionHeader } from "../../../../components/layout/SectionHeader";
import { SlideUpIn } from "../../../../components/SlideUpIn";
import { Typography } from "../../../../components/Typography";

export function CarouselHeader() {
  return (
    <SlideUpIn>
      <SectionHeader>
        <Typography
          as="h2"
          id="client-projects-carousel-title"
          variant="section-title"
        >
          Projets clients
        </Typography>

        <Typography as="p" variant="section-subtitle">
          Une sélection de projets réalisés pour mes clients.
        </Typography>
      </SectionHeader>
    </SlideUpIn>
  );
}

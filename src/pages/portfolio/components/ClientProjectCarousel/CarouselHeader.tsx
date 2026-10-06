import { SectionHeader } from "../../../../components/layout/SectionHeader";
import { SlideUpIn } from "../../../../components/SlideUpIn";
import { Typography } from "../../../../components/Typography";

export function CarouselHeader() {
  return (
    <SlideUpIn>
      <SectionHeader>
        <Typography
          as="h2"
          id="realisations-clients-carousel-title"
          variant="section-title"
        >
          Autres réalisations
        </Typography>

        <Typography as="p" variant="section-subtitle">
          Une sélection de sites vitrines et e-commerce réalisés en freelance.
        </Typography>
      </SectionHeader>
    </SlideUpIn>
  );
}

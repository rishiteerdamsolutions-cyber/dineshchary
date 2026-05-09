import { BirthdayGate } from "./components/BirthdayGate";
import { Hero } from "./components/Hero";
import { FlipCarousel } from "./components/FlipCarousel";
import { HeritageStory } from "./components/HeritageStory";
import { FamilySection } from "./components/FamilySection";

const galleryImages = [
  "/images/gallery-1.jpeg",
  "/images/gallery-2.jpeg",
  "/images/gallery-3.jpeg",
  "/images/gallery-4.jpeg",
  "/images/gallery-5.jpeg",
];

export default function App() {
  return (
    <>
      <BirthdayGate />
      <div className="bg-rangoli min-h-screen">
        <Hero profileSrc="/images/gallery-1.jpeg" />
        <FlipCarousel images={galleryImages} intervalMs={4500} />
        <HeritageStory />
        <FamilySection
          cards={[
            {
              title: "Eldest sister & family",
              caption:
                "The guiding elder sister — grace, wisdom, and the first smiles that shaped our home.",
              imageSrc: "/images/gallery-2.jpeg",
            },
            {
              title: "Second sister & family",
              caption:
                "Warmth and laughter from the second pillar — celebrations made richer in her presence.",
              imageSrc: "/images/gallery-3.jpeg",
            },
            {
              title: "Third sister & family",
              caption:
                "The youngest sister’s nest — affectionate ties and cherished moments together.",
              imageSrc: "/images/gallery-4.jpeg",
            },
          ]}
        />
      </div>
    </>
  );
}

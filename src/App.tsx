import { BirthdayGate } from "./components/BirthdayGate";
import { Hero } from "./components/Hero";
import { FlipCarousel } from "./components/FlipCarousel";
import { HeritageStory } from "./components/HeritageStory";
import { ParentsSection } from "./components/ParentsSection";
import { AllSistersFamilySection } from "./components/AllSistersFamilySection";
import { FamilySection } from "./components/FamilySection";

const galleryImages = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
  "/images/gallery-5.png",
];

export default function App() {
  return (
    <>
      <BirthdayGate />
      <div className="bg-rangoli min-h-screen">
        <Hero profileSrc="/images/gallery-1.png" />
        <FlipCarousel images={galleryImages} intervalMs={4500} />
        <HeritageStory />
        <ParentsSection />
        <AllSistersFamilySection />
        <FamilySection
          cards={[
            {
              title: "Eldest sister & brother-in-law",
              caption:
                "The guiding elder sister and her husband — the first home we looked up to, full of grace, good counsel, and warm welcomes.",
              imageSrc: "/images/sister-1-family.png",
            },
            {
              title: "Second sister & brother-in-law",
              caption:
                "The second sister and her life partner — warmth, music in the kitchen, and celebrations that feel larger when they walk in.",
              imageSrc: "/images/sister-2-family.png",
            },
            {
              title: "Third sister & brother-in-law",
              caption:
                "The youngest sister and her husband — the nest that still hums with childhood stories and new traditions side by side.",
              imageSrc: "/images/sister-3-family.png",
            },
          ]}
        />
      </div>
    </>
  );
}

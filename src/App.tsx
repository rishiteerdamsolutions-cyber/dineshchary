import { BirthdayGate } from "./components/BirthdayGate";
import { SiteVideoBackground } from "./components/SiteVideoBackground";
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
      <SiteVideoBackground />
      <div className="relative z-10 min-h-screen">
        <Hero profileSrc="/images/gallery-1.png" />
        <FlipCarousel images={galleryImages} intervalMs={4500} />
        <ParentsSection />
        <HeritageStory />
        <AllSistersFamilySection />
        <FamilySection
          cards={[
            {
              title: "Paloju Ramya & Paloju Vijay",
              caption:
                "Eldest sister and brother-in-law — daughters Chaitra Varshini (elder) and Sri Deekshitha (younger); the first home we looked up to for grace and steady warmth.",
              imageSrc: "/images/sister-1-family.png",
            },
            {
              title: "Nandagiri Pranitha & Nandagiri Aditya",
              caption:
                "Second sister and brother-in-law — laughter that fills the room and celebrations that feel grander in their company.",
              imageSrc: "/images/sister-2-family.png",
            },
            {
              title: "Pamulaparthy Kavya Sri & Pamulaparthy Varun Raj",
              caption:
                "Third sister and brother-in-law — where childhood memories stay tender and new chapters shine brightly.",
              imageSrc: "/images/sister-3-family.png",
            },
          ]}
        />
      </div>
    </>
  );
}

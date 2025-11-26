import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { MissionVisionSection } from "@/components/MissionVisionSection";
import { MenuSection } from "@/components/MenuSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="min-h-screen">
          <Navigation />
          <main>
            <HeroSection />
            <StorySection />
            <WhyChooseSection />
            <MissionVisionSection />
            <MenuSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;

import { useState } from "react";
import { SEO } from "@/components/SEO";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HeroImageSection } from "@/components/HeroImageSection";
import { StorySection } from "@/components/StorySection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { MissionVisionSection } from "@/components/MissionVisionSection";
import { MenuSection } from "@/components/MenuSection";
import { DailySpecialSection } from "@/components/DailySpecialSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FranchiseSection } from "@/components/FranchiseSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <SEO
        title="Best Italian Restaurant in Nashik | Pasta, Lasagna & Italian Food"
        description="Italian Ecstasy is Nashik's best Italian restaurant. Authentic pasta, lasagna, mac n cheese & Indian-Italian fusion. Dine-in & delivery. College Road. Ecstasy in Every Bite."
        canonicalPath="/"
      />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="min-h-screen">
          <Navigation transparentOnHero />
          <main>
            <HeroImageSection />
            <HeroSection />
            <StorySection />
            <WhyChooseSection />
            <MissionVisionSection />
            <MenuSection />
            <DailySpecialSection />
            <TestimonialsSection />
            <FranchiseSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;

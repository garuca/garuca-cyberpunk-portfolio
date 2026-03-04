import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ServicesSection from "@/components/ServicesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background scanlines">
      <HeroSection />
      <TechStack />
      <ExperienceTimeline />
      <ServicesSection />
      <FooterSection />
    </div>
  );
};

export default Index;

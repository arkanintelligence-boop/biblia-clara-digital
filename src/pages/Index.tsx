import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import SolutionSection from "@/components/landing/SolutionSection";
import AudienceSection from "@/components/landing/AudienceSection";
import PlansSection from "@/components/landing/PlansSection";
import TransformationSection from "@/components/landing/TransformationSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import OfferBanner from "@/components/landing/OfferBanner";
import FakeNotifications from "@/components/landing/FakeNotifications";

const Index = () => {
  return (
    <main className="min-h-screen">
      <OfferBanner />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <AudienceSection />
      <PlansSection />
      <TransformationSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
      <FakeNotifications />
    </main>
  );
};

export default Index;
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortalGrid from "@/components/PortalGrid";
import DonateSection from "@/components/DonateSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyDonate from "@/components/StickyDonate";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PortalGrid />
      <DonateSection />
      <ContactSection />
      <Footer />
      <StickyDonate />
    </div>
  );
};

export default Index;

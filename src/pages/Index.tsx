import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";
import StickyDonate from "@/components/StickyDonate";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <WorkshopsSection />
      <BlogSection />
      <TestimonialsSection />
      <DonateSection />
      <Footer />
      <StickyDonate />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DonateSection from "@/components/DonateSection";
import CroatianPaymentBarcode from "@/components/CroatianPaymentBarcode";
import ContactSection from "@/components/ContactSection";
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
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-3">
              Doniraj izravno na račun
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Skenirajte HUB-3 barkod u mobilnom bankarstvu ili kopirajte podatke za uplatu.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <CroatianPaymentBarcode />
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
      <StickyDonate />
    </div>
  );
};

export default Index;

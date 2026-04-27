import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-28">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;

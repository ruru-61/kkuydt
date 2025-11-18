import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <MissionVision />
      <Events />
      <Gallery />
      <JoinSection />
      <Footer />
    </main>
  );
};

export default Index;

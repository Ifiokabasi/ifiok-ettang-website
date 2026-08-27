import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StoriesSection from "@/components/StoriesSection";
import NowSection from "@/components/NowSection";
import FieldnotesSection from "@/components/FieldnotesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-ink">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="hairline" />
      </div>
      <StoriesSection />
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="hairline" />
      </div>
      <NowSection />
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="hairline" />
      </div>
      <FieldnotesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

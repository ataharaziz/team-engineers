import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import ContactCTA from "@/components/home/ContactCTA";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialsPreview />
      <ContactCTA />

      <Footer />
    </>
  );
}
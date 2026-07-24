import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioCard from "@/components/ui/PortfolioCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import PageHero from "@/components/common/PageHero";
import PageIntro from "@/components/common/PageIntro";
import StatsSection from "@/components/common/StatsSection";

const projects = [
  {
    title: "Luxury Villa",
    category: "Residential",
    image: "/images/portfolio/villa.png",
  },
  {
    title: "Commercial Complex",
    category: "Commercial",
    image: "/images/portfolio/commercial.png",
  },
  {
    title: "Residential Apartments",
    category: "Residential",
    image: "/images/portfolio/apartments.png",
  },
  {
    title: "Corporate Office",
    category: "Commercial",
    image: "/images/portfolio/office.png",
  },
  {
    title: "Bridge Structure",
    category: "Infrastructure",
    image: "/images/portfolio/bridge.png",
  },
  {
    title: "Industrial Facility",
    category: "Industrial",
    image: "/images/portfolio/factory.png",
  },
];

const highlights = [
  "Residential Projects",
  "Commercial Buildings",
  "Industrial Facilities",
  "Structural Design",
  "Site Supervision",
  "Project Management",
];

export default function PortfolioPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}

      <PageHero
  title="Our Portfolio"
  description="Explore a selection of engineering projects that demonstrate our commitment to quality, precision and client satisfaction."
/>

      {/* Introduction */}

      <PageIntro
  title="Engineering Excellence Across Every Project"
  description="From residential homes to commercial developments and industrial facilities, Team Engineers delivers reliable engineering solutions tailored to every client's requirements."
/>

      {/* Projects */}

      <section className="section-spacing-sm surface-muted">
        <div className="container-custom">
          <div className="grid grid-gap md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
  <PortfolioCard
    key={project.title}
    title={project.title}
    category={project.category}
    image={project.image}
  />
))}
          </div>
        </div>
      </section>

      {/* Statistics */}

      <StatsSection
  items={[
    {
      value: "250+",
      label: "Completed Projects",
    },
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "100%",
      label: "Quality Commitment",
    },
    {
      value: "24/7",
      label: "Client Support",
    },
  ]}
/>

      {/* Expertise */}

      <section className="section-spacing-sm surface-muted">
        <div className="container-custom">
          <h2 className="heading-primary text-center text-4xl">
            Our Areas of Expertise
          </h2>

          <div className="h-3"></div>

          <div className="mt-14 grid grid-gap md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="card card-padding flex items-center gap-4"
              >
                <CheckCircle2
                    size={24}
                    className="text-primary flex-shrink-0"
                    />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="section-spacing-sm text-white">
        <div className="container-custom text-center">
          <h2 className="heading-primary text-4xl">
            Ready to Build With Confidence?
          </h2>

          <p className="container-custom text-center text-muted mx-auto mt-5 max-w-2xl text-lg">
            Let Team Engineers help transform your vision into a safe,
            efficient and successful project.
          </p>

          <div className="h-3"></div>

          <div className="mt-10">
            <PrimaryButton href="/contact">
                Contact Us
                <ArrowRight size={20} />
            </PrimaryButton>
          </div>
        </div>
      </section>

      <div className="h-3"></div>

      <Footer />
    </>
  );
}
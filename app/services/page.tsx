import {
  Building2,
  Compass,
  DraftingCompass,
  HardHat,
  ClipboardCheck,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/ui/ServiceCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import PageHero from "@/components/common/PageHero";
import PageIntro from "@/components/common/PageIntro";

const services = [
  {
    icon: Building2,
    title: "Residential Engineering",
    description:
      "Complete structural and civil engineering consultancy for villas, apartments and independent houses.",
  },
  {
    icon: DraftingCompass,
    title: "Structural Design",
    description:
      "Safe, efficient and code-compliant structural designs tailored to your project requirements.",
  },
  {
    icon: HardHat,
    title: "Construction Supervision",
    description:
      "Professional supervision to ensure quality, safety and timely project execution.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "Planning, scheduling and coordination from concept to project completion.",
  },
  {
    icon: Compass,
    title: "Site Planning",
    description:
      "Optimized layouts and engineering solutions for residential, commercial and industrial developments.",
  },
  {
    icon: Wrench,
    title: "Renovation & Structural Audits",
    description:
      "Assessment, strengthening and renovation of existing buildings to improve safety and longevity.",
  },
];

const process = [
  "Initial Consultation",
  "Site Visit & Assessment",
  "Planning & Design",
  "Engineering Approval",
  "Construction Support",
  "Project Completion",
];

const industries = [
  "Residential Buildings",
  "Commercial Buildings",
  "Industrial Facilities",
  "Educational Institutions",
  "Healthcare Projects",
  "Renovation & Redevelopment",
];

const benefits = [
  "Experienced Engineering Team",
  "Code-Compliant Designs",
  "Transparent Communication",
  "Quality Assurance",
  "Timely Project Delivery",
  "Client-Focused Solutions",
];

export default function ServicesPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}

      <PageHero
  title="Engineering Services"
  description="Comprehensive civil and structural engineering consultancy for residential, commercial and industrial developments."
/>

      {/* Introduction */}
      
      <PageIntro 
  title="Solutions Designed Around Your Project"
  description="Every project is unique. Our services are designed to provide practical engineering guidance, efficient structural solutions, and professional support from planning through execution."
/>

      {/* Services Grid */}

      <section className="section-spacing-sm surface-muted">
        <div className="container-custom">
          <div className="grid grid-gap md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
                <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process */}

      <section className="section-spacing-sm surface">
        <div className="container-custom">
          <h2 className="heading-primary text-center text-4xl">
            Our Engineering Process
          </h2>
<div className="h-4"></div>
          <div className="mt-14 grid grid-gap md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={step}
                className="card card-padding text-center"
              >
                <div className="brand-gradient mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}

      <section className="section-spacing-sm surface-muted">
        <div className="container-custom">
          <h2 className="heading-primary text-center text-4xl">
            Industries We Serve
          </h2>
<div className="h-3"></div>
          <div className="mt-14 grid grid-gap md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="card card-padding flex items-center gap-4"
              >
                <CheckCircle2
                    size={24}
                    className="text-primary flex-shrink-0"
                />
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="section-spacing-sm surface">
        <div className="container-custom">
          <h2 className="heading-primary text-center text-4xl">
            Why Clients Choose Us
          </h2>
<div className="h-3"></div>
          <div className="mt-14 grid grid-gap md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="card card-padding flex items-center gap-4"
              >
                <CheckCircle2
                    size={24}
                    className="text-primary flex-shrink-0"
                />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
 
      <section className="section-spacing text-white">
        <div className="container-custom text-center">
          <h2 className="heading-primary text-4xl">
            Ready to Discuss Your Project?
          </h2>

          <p className="container-custom text-center text-muted mx-auto mt-5 max-w-2xl text-lg">
            Contact Team Engineers to discuss your engineering requirements and
            receive professional guidance for your next project.
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

      <Footer />
    </>
  );
}
import { Star, CheckCircle2, ArrowRight } from "lucide-react";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestimonialCard from "@/components/ui/TestimonialCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import PageHero from "@/components/common/PageHero";
import PageIntro from "@/components/common/PageIntro";
import StatsSection from "@/components/common/StatsSection";

const testimonials = [
  {
    name: "Rohith Shetty",
    role: "Home Owner",
    review:
      "Team Engineers handled our residential project with outstanding professionalism. Their structural planning and guidance gave us complete confidence throughout construction.",
  },
  {
    name: "Anita Rao",
    role: "Business Owner",
    review:
      "Their commercial building consultancy exceeded our expectations. Every milestone was completed on schedule with excellent communication.",
  },
  {
    name: "Faisal Khan",
    role: "Property Investor",
    review:
      "The team provided practical engineering solutions that helped us optimize both cost and quality. Highly recommended.",
  },
  {
    name: "Naveen Kumar",
    role: "Developer",
    review:
      "Their attention to structural safety, documentation and technical accuracy made the entire project smooth and efficient.",
  },
  {
    name: "Priya Menon",
    role: "Architect",
    review:
      "Working alongside Team Engineers was a pleasure. Their collaboration and engineering expertise added tremendous value to the project.",
  },
  {
    name: "Ashraf Ali",
    role: "Industrial Client",
    review:
      "Professional, reliable and technically sound. We look forward to working with Team Engineers on future developments.",
  },
];

const trustPoints = [
  "Transparent Communication",
  "Engineering Expertise",
  "On-Time Delivery",
  "Quality Assurance",
  "Safety-First Approach",
  "Long-Term Client Relationships",
];

export default function TestimonialsPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}

      <PageHero
  title="Client Testimonials"
  description="Hear directly from the homeowners, businesses and developers who have trusted Team Engineers with their projects."
/>

      {/* Introduction */}

      <PageIntro
  title="Trusted by Clients Across Every Project"
  description="Every successful project is built on collaboration, technical excellence and a commitment to delivering reliable engineering solutions."
/>

      {/* Testimonials */}

      <section className="section-spacing-xs surface-muted">
        <div className="container-custom">
          <div className="grid grid-gap md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
        <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            role={testimonial.role}
            review={testimonial.review}
            />
        ))}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}

      <section className="section-spacing-sm surface">
        <div className="container-custom">
          <h2 className="heading-primary text-center text-4xl">
            Why Clients Trust Team Engineers
          </h2>

<div className="h-3"></div>

          <div className="mt-14 grid grid-gap md:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="card card-padding flex items-center gap-4"
              >
               <CheckCircle2
                size={24}
                className="text-primary flex-shrink-0"
                />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}

      <StatsSection
  items={[
    {
      value: "250+",
      label: "Projects Delivered",
    },
    {
      value: "100%",
      label: "Client Commitment",
    },
    {
      value: "15+",
      label: "Years of Experience",
    },
    {
      value: "24/7",
      label: "Professional Support",
    },
  ]}
/>

      {/* CTA */}

      <section className="section-spacing-sm text-white">
        <div className="container-custom text-center">
          <h2 className="heading-primary text-4xl">
            Let's Build Your Next Project
          </h2>

          <p className="container-custom text-center text-muted mx-auto mt-5 max-w-2xl text-lg">
            Join the many satisfied clients who have trusted Team Engineers to
            deliver dependable engineering solutions.
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
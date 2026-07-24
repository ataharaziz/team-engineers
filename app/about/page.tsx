import Image from "next/image";
import {
  Award,
  Target,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PrimaryButton from "@/components/ui/PrimaryButton";
import PageHero from "@/components/common/PageHero";
import StatsSection from "@/components/common/StatsSection";

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero Banner */}

      <PageHero
  title="About Team Engineers"
  description="Delivering professional civil and structural engineering consultancy with quality, precision and innovation."
/>

      {/* Company Story */}

      <section className="section-spacing surface">
        <div className="container-custom grid grid-gap-lg lg:grid-cols-2">

          <Image
            src="/images/about/about page.png"
            alt="About Team Engineers"
            width={700}
            height={550}
            className="rounded-2xl shadow-xl"
          />

          <div>

            <span className="text-sm font-semibold uppercase tracking-widest text-[#0D47A1]">
              Company Story
            </span>

            <h2 className="heading-primary mt-4 text-4xl">
              Building Better Structures Through Engineering Excellence
            </h2>

            <p className="text-muted mt-6 leading-8">
              Team Engineers provides comprehensive civil and structural
              engineering consultancy for residential, commercial and
              industrial developments. We focus on delivering safe,
              sustainable and cost-effective engineering solutions while
              maintaining the highest standards of quality and integrity.
            </p>

            <p className="text-muted mt-6 leading-8">
              Every project is approached with technical expertise,
              detailed planning and close collaboration with our clients.
            </p>

          </div>

        </div>
      </section>

      {/* Mission Vision Values */}

      <section className="section-spacing-sm surface-muted">
        <div className="container-custom">

          <div className="grid grid-gap md:grid-cols-3">

            <div className="card card-padding">
              <Target className="text-[#0D47A1]" size={42} />
              <h3 className="heading-primary mt-5 text-2xl">
                Mission
              </h3>
              <p className="text-muted mt-4 leading-7">
                Deliver dependable engineering solutions that exceed
                client expectations.
              </p>
            </div>

            <div className="card card-padding">
              <Award className="text-[#0D47A1]" size={42} />
              <h3 className="heading-primary mt-5 text-2xl">
                Vision
              </h3>
              <p className="text-muted mt-4 leading-7">
                Become one of the most trusted engineering consultancy
                firms in the region.
              </p>
            </div>

            <div className="card card-padding">
              <ShieldCheck className="text-[#0D47A1]" size={42} />
              <h3 className="heading-primary mt-5 text-2xl">
                Values
              </h3>
              <p className="text-muted mt-4 leading-7">
                Integrity, quality, safety, innovation and customer
                satisfaction guide every project.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}

      <section className="section-spacing-sm surface">
        <div className="container-custom">

          <h2 className="heading-primary text-center text-4xl">
            Why Choose Team Engineers
          </h2>

          <div className="section-gap grid grid-gap md:grid-cols-2">

            {[
              "Experienced Civil & Structural Engineers",
              "Innovative Engineering Solutions",
              "Transparent Project Management",
              "Quality & Safety Focused",
              "Timely Delivery",
              "Client-Centric Approach",
            ].map((item) => (
              <div
                key={item}
                className="card flex items-center gap-4 p-6"
              >
                <CheckCircle2 className="text-[#0D47A1]" />
                <span>{item}</span>
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
      label: "Projects Completed",
    },
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
    },
    {
      value: "24/7",
      label: "Support",
    },
  ]}
/>

      {/* CTA */}

      <section className="section-spacing-sm surface">
        <div className="container-custom text-center">

          <h2 className="heading-primary text-4xl">
            Ready to Start Your Project?
          </h2>

          <p className="container-custom text-center text-muted mx-auto mt-5 max-w-2xl text-lg">
            Let's discuss your engineering requirements and build
            something exceptional together.
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
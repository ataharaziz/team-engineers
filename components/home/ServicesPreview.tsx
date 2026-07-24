import {
  Building2,
  DraftingCompass,
  HardHat,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

const services = [
  {
    icon: Building2,
    title: "Residential Engineering",
    description:
      "Complete structural and civil engineering consultancy for homes, villas and apartments.",
  },
  {
    icon: DraftingCompass,
    title: "Structural Design",
    description:
      "Safe, code-compliant structural designs tailored to your project requirements.",
  },
  {
    icon: HardHat,
    title: "Construction Supervision",
    description:
      "Professional site supervision to ensure quality, safety and timely delivery.",
  },
];

export default function ServicesPreview() {
  return (
  <section className="section-spacing-sm">
    <div className="container-custom">

      <SectionHeading
  eyebrow="Our Services"
  title="Professional Engineering Services"
  description="We provide complete civil and structural engineering consultancy for residential, commercial and industrial developments."
  align="center"
/>
<div className="h-3"></div>

      <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      
      <div className="h-3"></div>
      <div className="mt-14 text-center">
        <PrimaryButton href="/services">
          View All Services
        </PrimaryButton>
      </div>

    </div>
  </section>
);
}
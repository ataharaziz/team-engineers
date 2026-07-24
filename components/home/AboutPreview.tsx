import Image from "next/image";
import { CheckCircle } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function AboutPreview() {
  return (
    <section className="section-spacing-sm bg-white">
    <div className="container-custom">
    <div className="grid items-start gap-20 lg:grid-cols-2">

        {/* ================= IMAGE ================= */}

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">

          <Image
            src="/images/about/about.png"
            alt="About Team Engineers"
            width={700}
            height={550}
            className="rounded-3xl shadow-2xl"
          />
        </div>
        </div>

        {/* ================= CONTENT ================= */}

        <div>

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-[#0D47A1]/10 bg-[#0D47A1]/5 px-5 py-2">

            <span className="h-2.5 w-2.5 rounded-full bg-[#0D47A1]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
              ABOUT TEAM ENGINEERS
            </span>

          </div>

          {/* Heading */}

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl">
            Building Excellence
            <br />
            Since Day One
          </h2>

          {/* Description */}

          <p className="mt-6 max-w-[620px] text-lg leading-8 text-gray-600">
            Team Engineers is a trusted civil and structural engineering
            consultancy delivering reliable, innovative and cost-effective
            solutions for residential, commercial and industrial projects.
            Every design is developed with precision, safety and long-term
            sustainability at its core.
          </p>

          {/* Features */}
            
          <div className="mt-10 flex flex-col gap-4">

            {[
              "Experienced Civil & Structural Engineers",
              "Innovative & Cost Effective Solutions",
              "Quality, Safety & Compliance",
              "Customer Satisfaction First",
            ].map((item) => (
              <div
                key={item}
                className="inline-flex w-fit items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4"
              >
                <CheckCircle
                  size={20}
                  className="mt-0.5 text-[#0D47A1]"
                />

                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}

          </div>

          {/* CTA */}

          
  <div className="h-3"></div>
  <div className="mt-8">
    <PrimaryButton>
      Learn More About Us
    </PrimaryButton>
  </div>

          </div>
          </div>
      </div>
    </section>
  );
}
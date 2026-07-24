import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import GoogleMap from "@/components/common/GoogleMap";

export default function ContactCTA() {
  return (
    <section className="section-spacing-sm">
      <div className="container-custom">

        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Build Something Great Together"
          description="Have a project in mind? Contact Team Engineers today for professional civil and structural engineering consultancy."
        />

        <div className="h-6"></div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[380px_1fr]">

          {/* Left Column */}

          <div>

            <div className="mb-8 flex items-start gap-4">
              <Phone
                className="mt-1 text-[#0D47A1]"
              />
              <div>
                <h3 className="font-semibold">
                  Phone
                </h3>

                <p>+91 9980314983</p>
              </div>
            </div>

            <div className="mb-8 flex items-start gap-4">
              <Mail
                className="mt-1 text-[#0D47A1]"
              />
              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <p>teamengineers20@gmail.com</p>
              </div>
            </div>

            <div className="mb-10 flex items-start gap-4">
              <MapPin
                className="mt-1 text-[#0D47A1]"
              />
              <div>
                <h3 className="font-semibold">
                  Office
                </h3>

                <p>
                  Bethel Complex, University Road,
                  <br />
                  Babbukatte, Mangaluru - 575017
                </p>
              </div>
            </div>

            <div className="h-6"></div>

              <div className="h-12 mt-12">
               <GoogleMap />
               </div>

          </div>

          {/* Right Column */}

          <div>

  <h2 className="heading-primary mb-6 text-3xl">
    Send Us a Message
  </h2>

  <ContactForm
    submitLabel="Send Message"
  />

</div>
         
        </div>

      </div>
    </section>
  );
}
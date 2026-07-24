import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/ContactForm";
import PageHero from "@/components/common/PageHero";
import PageIntro from "@/components/common/PageIntro";
import GoogleMap from "@/components/common/GoogleMap";

const faqs = [
  {
    question: "Do you handle residential projects?",
    answer:
      "Yes. We provide complete civil and structural engineering consultancy for residential homes, villas and apartment projects.",
  },
  {
    question: "Can you assist during construction?",
    answer:
      "Yes. We offer construction supervision, site visits and engineering support throughout the project lifecycle.",
  },
  {
    question: "Do you work on commercial projects?",
    answer:
      "Absolutely. We provide consultancy for commercial buildings, offices, retail spaces and industrial developments.",
  },
];

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}

      <PageHero
  title="Contact Team Engineers"
  description="We'd love to hear about your project. Reach out to us for professional civil and structural engineering consultancy."
/>

     
      {/* Contact Section */}

      <section className="section-spacing-sm surface-muted">
        <div className="container-custom grid grid-gap-lg lg:grid-cols-2">

          {/* Contact Details */}

          <div>

            <h2 className="heading-primary text-3xl">
              Contact Information
            </h2>

            <div className="mt-10 space-y-6">

              <div className="card card-padding flex items-start gap-4">
                <Phone
                    size={24}
                    className="text-primary flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+91 9980314983</p>
                </div>
              </div>

              <div className="card card-padding flex items-start gap-4">
                <Phone
  size={24}
  className="text-primary flex-shrink-0"
/>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>teamengineers20@gmail.com</p>
                </div>
              </div>

              <div className="card card-padding flex items-start gap-4">
                <Phone
  size={24}
  className="text-primary flex-shrink-0"
/>
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p>
                    Bethel Complex<br />
                    University Road<br />
                    Babbukatte<br />
                    Mangaluru - 575017
                  </p>
                </div>
              </div>

              <div className="card card-padding flex items-start gap-4">
                <Phone
  size={24}
  className="text-primary flex-shrink-0"
/>
                <div>
                  <h3 className="font-semibold">Office Hours</h3>
                  <p>Monday – Saturday</p>
                  <p>9:00 AM – 6:00 PM</p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div>
  <h2 className="heading-primary mb-8 text-3xl">
    Send Us a Message
  </h2>

  <ContactForm
    submitLabel="Send Message"
  />
</div>

        </div>
      </section>

      {/* Map Placeholder */}

      <section className="section-spacing-sm surface">
  <div className="container-custom">

    <h2 className="heading-primary mb-10 text-center text-4xl">
      Visit Our Office
    </h2>

    <GoogleMap />

  </div>
</section>

      {/* FAQ */}

      <section className="section-spacing-xs surface-muted">
        <div className="container-custom">

          <h2 className="heading-primary mb-14 text-center text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="card card-padding"
              >
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>

                <p className="text-muted mt-4 leading-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

const testimonials = [
  {
    name: "Rahul Shetty",
    role: "Home Owner",
    review:
      "Team Engineers exceeded our expectations with their professionalism, technical expertise, and timely delivery. Highly recommended.",
  },
  {
    name: "Anita Rao",
    role: "Business Owner",
    review:
      "Their structural consultancy and project guidance helped us complete our commercial building smoothly and confidently.",
  },
  {
    name: "Mohammed Imran",
    role: "Property Developer",
    review:
      "Excellent engineering consultancy with great attention to detail. The team was responsive throughout the project.",
  },
];

export default function TestimonialsPreview() {
  return (
    <section className="section-spacing-sm">
      <div className="container-custom">

        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="We take pride in building long-lasting relationships through quality engineering services and customer satisfaction."
        />

        <div className="h-3"></div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              review={testimonial.review}
            />
          ))}
        </div>
        <div className="h-3"></div>
        <div className="mt-14 rounded-lg min-w-[200px] h-12 text-center">
          <PrimaryButton href="/testimonials">
            Read More Reviews
          </PrimaryButton>
        </div>

      </div>
    </section>
  );
}
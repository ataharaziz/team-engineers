import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioCard from "@/components/ui/PortfolioCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

const projects = [
  {
    title: "Luxury Villa Project",
    category: "Residential",
    location: "Mangaluru, Karnataka",
    image: "/images/portfolio/villa.png",
  },
  {
    title: "Commercial Complex",
    category: "Commercial",
    location: "Bengaluru, Karnataka",
    image: "/images/portfolio/commercial.png",
  },
  {
    title: "Residential Apartments",
    category: "Residential",
    location: "Udupi, Karnataka",
    image: "/images/portfolio/apartments.png",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="section-spacing-sm bg-white">
      <div className="container-custom">

        <SectionHeading
          eyebrow="Our Portfolio"
          title="Projects That Define Us"
          description="A glimpse of some of the residential and commercial engineering projects successfully completed by Team Engineers."
        />

        <div className="h-3"></div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard
              key={project.title}
              image={project.image}
              title={project.title}
              category={project.category}
              location={project.location}
            />
          ))}
        </div>
        <div className="h-3"></div>
        <div className="mt-14 rounded-lg min-w-[200px] h-12 text-center">
          <PrimaryButton href="/portfolio">
            View All Projects
          </PrimaryButton>
        </div>

      </div>
    </section>
  );
}
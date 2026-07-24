import Image from "next/image";
import clsx from "clsx";
import { MapPin } from "lucide-react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  location?: string;
  className?: string;
}

export default function PortfolioCard({
  image,
  title,
  category,
  location,
  className,
}: PortfolioCardProps) {
  return (
    <article
      className={clsx(
        "group card card-hover overflow-hidden",
        className
      )}
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <Image
          src={image}
          alt={title}
          width={700}
          height={500}
          className="h-72 w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-110"
        />

        {/* Gradient Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-80" />

        {/* Category */}

        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0D47A1] shadow transition-all duration-300 group-hover:bg-[#0D47A1] group-hover:text-white">
          {category}
        </span>

      </div>

      {/* Content */}

      <div className="card-padding">

        <h3 className="heading-primary animate-default text-2xl group-hover:text-[#0D47A1]">
          {title}
        </h3>

        {location && (

          <div className="text-muted mt-5 flex items-center gap-2">

            <MapPin
  className="h-[18px] w-[18px] flex-shrink-0 text-[#0D47A1]"
/>

            <span>{location}</span>

          </div>

        )}

      </div>

    </article>
  );
}
import clsx from "clsx";
import { Quote, Star, UserCircle2 } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  review: string;
  rating?: number;
  className?: string;
}

export default function TestimonialCard({
  name,
  role,
  review,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={clsx(
        "group card card-padding card-hover flex h-full flex-col",
        className
      )}
    >
      {/* Header */}

      <div className="mb-8 flex items-start justify-between">

        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, index) => (
           <Star
            key={index}
            className="h-[18px] w-[18px] fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <Quote
            className="animate-default h-[42px] w-[42px] text-[#0D47A1]/15 transition-transform duration-300 ease-out group-hover:rotate-6 group-hover:text-[#0D47A1]/30"
        />

      </div>

      {/* Review */}

      <p className="text-muted flex-1 text-lg italic leading-8">
        “{review}”
      </p>

      {/* Footer */}

      <div className="mt-10 flex items-center gap-4 border-t border-gray-200 pt-6">

        <UserCircle2
  className="h-12 w-12 flex-shrink-0 text-[#0D47A1]"
/>

        <div>

          <h3 className="heading-primary text-lg">
            {name}
          </h3>

          <p className="text-muted text-sm">
            {role}
          </p>

        </div>

      </div>

    </article>
  );
}
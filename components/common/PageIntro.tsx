import React from "react";

interface PageIntroProps {
  title: string;
  description: string;
  badge?: string;
  className?: string;
}

export default function PageIntro({
  title,
  description,
  badge,
  className = "surface",
}: PageIntroProps) {
  return (
    <section className={`section-spacing ${className}`}>
  <div className="container-custom">
  <div className="flex flex-col items-center text-center">
    
    {badge && (
      <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {badge}
      </span>
    )}

    <h2 className="heading-primary max-w-5xl text-4xl lg:text-[3rem]">
      {title}
    </h2>

    <p className="text-muted mt-8 max-w-3xl text-lg leading-9 lg:text-xl">
      {description}
    </p>
    </div>
  </div>
</section>
  );
}
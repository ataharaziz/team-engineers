import React from "react";

interface PageHeroProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden section-spacing-sm text-white bg-gradient-to-r from-[#0B3D91] via-[#1565C0] to-[#1E88E5]">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_40%)]" />

  <div className="relative container-custom">
    <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
      {title}
    </h1>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
      {description}
    </p>

    {children && (
      <div className="mt-8">
        {children}
      </div>
    )}
  </div>
</section>
  );
}
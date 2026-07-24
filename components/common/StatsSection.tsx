import React from "react";

interface StatItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface StatsSectionProps {
  items: StatItem[];
  className?: string;
}

export default function StatsSection({
  items,
  className = "",
}: StatsSectionProps) {
  return (
    <section
      className={`brand-gradient section-spacing text-white ${className}`}
    >
      <div className="container-custom">
        <div className="grid grid-gap-lg text-center md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label}>
              {item.icon && (
                <div className="mb-4 flex justify-center">
                  {item.icon}
                </div>
              )}

              <h3 className="text-5xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-3 text-lg text-blue-100">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { ArrowRight } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface PageCTAProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  className?: string;
}

export default function PageCTA({
  title,
  description,
  buttonText,
  href,
  className = "brand-gradient",
}: PageCTAProps) {
  return (
    <section className={`section-spacing text-white ${className}`}>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center px-6 text-center">

        <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-white lg:text-[3rem]">
          {title}
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-blue-100 lg:text-xl">
          {description}
        </p>

        <div className="mt-12">
          <PrimaryButton href={href}>
            {buttonText}
            <ArrowRight size={20} />
          </PrimaryButton>
        </div>

      </div>
    </section>
  );
}
import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={clsx(
        "max-w-8xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      
      {eyebrow && (
        <div
          className={clsx(
            "mb-5 flex items-center gap-3",
            isCenter ? "justify-center" : "justify-start"
          )}
        >
          <span className="h-px w-12 bg-[#0D47A1]" />

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0D47A1]">
            {eyebrow}
          </span>

          <span className="h-px w-12 bg-[#0D47A1]" />
        </div>
      )}

      <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-8 text-lg leading-8 text-gray-600 md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
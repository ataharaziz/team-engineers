    import { LucideIcon } from "lucide-react";
    import clsx from "clsx";

    interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
    }

    export default function ServiceCard({
    icon: Icon,
    title,
    description,
    className,
    }: ServiceCardProps) {
    return (
        <article
            className={clsx(
                "group card card-padding card-hover flex h-full flex-col",
            className
            )}
        >
        {/* Accent Line */}

        <div className="mb-8 flex justify-center">
  <div className="h-1 w-16 rounded-full bg-[#0D47A1] transition-[width] duration-300 ease-out group-hover:w-24" />
</div>

        {/* Icon */}

        <div className="mb-8 flex justify-center">
  <div className="animate-default flex h-24 w-24 items-center justify-center rounded-2xl border border-[#0D47A1]/10 bg-[#0D47A1]/5 group-hover:scale-110 group-hover:bg-[#0D47A1]">
    <Icon
      className="h-10 w-10 text-[#0D47A1] transition-colors duration-300 group-hover:text-white"
    />
  </div>
</div>

        {/* Content */}
        <div className="h-3"></div>
        <div className="mt-10 flex flex-1 flex-col items-center text-center">
            <h3 className="heading-primary animate-default text-2xl group-hover:text-[#0D47A1]">
            {title}
            </h3>

            <p className="text-muted mt-5 max-w-[280px] flex-1 leading-8">
            {description}
            </p>
        </div>
        </article>
    );
    }
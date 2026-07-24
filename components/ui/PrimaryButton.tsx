import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const baseClasses =
  "inline-flex rounded-lg min-w-[180px] h-12 items-center justify-center rounded-2xl bg-gradient-to-b from-[#1565C0] to-[#0D47A1] px-8 text-base font-semibold tracking-[-0.01em] text-white shadow-[0_6px_18px_rgba(13,71,161,0.22)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:from-[#1976D2] hover:to-[#1565C0] hover:shadow-[0_10px_24px_rgba(13,71,161,0.28)] active:translate-y-0 active:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D47A1] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-[0_6px_18px_rgba(13,71,161,0.22)]";

export default function PrimaryButton({
  children,
  href,
  type = "button",
  onClick,
  className,
  fullWidth = false,
  disabled = false,
}: PrimaryButtonProps) {
  const classes = clsx(
    baseClasses,
    fullWidth && "w-full",
    className
  );

  if (href) {
    return (
  <Link href={href} className={classes}>
  {children}
</Link>
);
  }
  return (
    <button
  type={type}
  onClick={onClick}
  disabled={disabled}
  className={classes}
>
      {children}
    </button>
  );
}
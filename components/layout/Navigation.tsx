"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];



interface NavigationProps {
  mobile?: boolean;
  onClick?: () => void;
}

export default function Navigation({
  mobile = false,
  onClick,
}: NavigationProps) {
  const pathname = usePathname();
  return (
    <nav
  aria-label="Primary navigation"
  className={`${
    mobile
      ? "flex flex-col gap-2"
      : "hidden lg:flex items-center gap-10"
  }`}
>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onClick}
          className={`rounded-md px-4 py-3 font-medium transition
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[#0D47A1]
focus-visible:ring-offset-2
${
  pathname === item.href
    ? "font-semibold text-[#0D47A1]"
    : "text-gray-700 hover:text-[#0D47A1]"
}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
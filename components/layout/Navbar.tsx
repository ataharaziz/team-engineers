"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Navigation from "./Navigation";
import PrimaryButton from "../ui/PrimaryButton";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}

    <Link
  href="/"
  className="flex w-[320px] items-center"
>
  {/* Logo */}
  <div className="mr-3 flex-shrink-0">
    <Image
      src="/images/logo/logo.png"
      alt="Team Engineers Logo"
      width={54}
      height={54}
      priority
      className="h-[54px] w-[54px] object-contain"
    />
  </div>

  {/* Text */}
  <div className="flex flex-col justify-center">
    <h1 className="text-[24px] font-extrabold leading-none text-[#0D47A1]">
      TEAM ENGINEERS
    </h1>

    <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.30em] text-gray-500">
      CIVIL &amp; STRUCTURAL CONSULTANTS
    </p>
  </div>
</Link>

        {/* Desktop Navigation */}

        <Navigation />

        {/* Quote Button */}

        <PrimaryButton
            href="/contact"
            className="min-w-[200px]"
        >
        Request Quote
        </PrimaryButton>

        

        {/* Mobile Button */}

        <button
            type="button"
            className="rounded-md p-2 transition hover:bg-gray-100 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>



      {/* Mobile Menu */}

      {menuOpen && (
        <div
  id="mobile-navigation"
  className="border-t bg-white px-6 py-6 shadow-lg lg:hidden"
>
          <Navigation
            mobile
            onClick={() => setMenuOpen(false)}
          />

          <button className="mt-6 w-full rounded-lg bg-[#0D47A1] py-3 font-semibold text-white">
            Request Quote
          </button>
        </div>
      )}
    </header>
  );
}
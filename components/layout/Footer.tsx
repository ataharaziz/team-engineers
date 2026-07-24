import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container-custom py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>
            <h2 className="text-2xl font-bold">
              TEAM ENGINEERS
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Civil & Structural Consultants
            </p>

            <p className="mt-6 text-gray-300 leading-7 max-w-sm">
              Delivering reliable civil and structural engineering
              consultancy services with a commitment to quality,
              safety, innovation, and customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold tracking-wide text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3 text-gray-300 leading-7">

              <li>
                <Link
                    href="/"
                    className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
                    >
                    Home
                </Link>
              </li>

              <li>
                <Link
                    href="/"
                    className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
                    >
                    About
                </Link>
              </li>

              <li>
                <Link
                    href="/"
                    className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
                    >
                    Services
                </Link>
              </li>

              <li>
                <Link
                    href="/"
                    className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
                    >
                    Portfolio
                </Link>
              </li>

              <li>
                <Link
                    href="/"
                    className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
                    >
                    Testimonials
                </Link>
              </li>

              <li>
                <Link
                    href="/"
                    className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
                    >
                    Contact
                </Link>
              </li>

              
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-xl font-semibold tracking-wide text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-3 text-gray-300 leading-7">

              <li>Residential Projects</li>

              <li>Commercial Projects</li>

              <li>Structural Design</li>

              <li>Renovation</li>

              <li>Project Management</li>

            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold tracking-wide text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-[18px] w-[18px] flex-shrink-0 text-blue-400" />
                <a
                    href="tel:+919980314983"
                    className="text-gray-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
                    >
                    +91 9980314983
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-[18px] w-[18px] flex-shrink-0 text-blue-400" />
                <a
                    href="mailto:teamengineers20@gmail.com"
                    className="text-gray-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
                    >
                    teamengineers20@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-blue-400" size={18} />
                <span className="text-gray-300">
                  Bethel Complex,
                  <br />
                  University Road,
                  <br />
                  Babbukatte,
                  <br />
                  Mangaluru - 575017
                </span>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-700 pt-8 text-center text-sm leading-6 text-gray-400">
          © {new Date().getFullYear()} Team Engineers. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
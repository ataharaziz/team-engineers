import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#0D47A1] text-white">
      <div className="container-custom flex flex-col gap-2 py-2 text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 flex-shrink-0" />
            <span className="font-medium tracking-wide">
                +91 9980314983
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 flex-shrink-0" />
            <span className="font-medium tracking-wide">
                teamengineers20@gmail.com
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
            <a
                href="https://facebook.com/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="rounded-full p-1 transition-colors duration-200 hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D47A1]"
            >
            <FaFacebookF className="h-4 w-4" />
            </a>

            <a
                href="https://instagram.com/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="rounded-full p-1 transition-colors duration-200 hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D47A1]"
            >
            <FaInstagram className="h-4 w-4" />
            </a>

            <a
                href="https://linkedin.com/company/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="rounded-full p-1 transition-colors duration-200 hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D47A1]"
            >
            <FaLinkedinIn className="h-4 w-4" />
            </a>
        </div>
      </div>
    </div>
  );
}
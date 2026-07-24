import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teamengineers.com"), // Update with your real domain

  title: {
    default: "Team Engineers | Civil & Structural Consultants",
    template: "%s | Team Engineers",
  },

  description:
    "Complete Technical Solutions for better structures. Team Engineers provides civil engineering, structural design, project management, and construction consulting services.",

  applicationName: "Team Engineers",

  keywords: [
    "Civil Engineering",
    "Structural Engineering",
    "Construction",
    "Project Management",
    "Building Design",
    "Engineering Consultants",
  ],

  authors: [
    {
      name: "Team Engineers",
    },
  ],

  creator: "Team Engineers",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
  className={`${poppins.className} bg-white text-slate-900 antialiased`}
>
        {children}
      </body>
    </html>
  );
}
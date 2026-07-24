"use client";

import { FormEvent } from "react";
import PrimaryButton from "./PrimaryButton";

interface ContactFormProps {
  submitLabel?: string;
  className?: string;
}

export default function ContactForm({
  submitLabel = "Send Message",
  className = "",
}: ContactFormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Backend integration later
    console.log("Contact form submitted.");
  }

  return (
    <div className={`card card-padding ${className}`}>
      
      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">

          <div className="mb-2">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>

            <input
  id="name"
  name="name"
  type="text"
  autoComplete="name"
  placeholder="John Doe"
  required
  className="focus-brand animate-default h-10 w-full rounded-xl border border-gray-300 px-5 placeholder:text-gray-400"
/>
          </div>

          <div className="mb-2">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <input
  id="email"
  name="email"
  type="email"
  autoComplete="email"
  inputMode="email"
  placeholder="john@example.com"
  required
  className="focus-brand animate-default h-10 w-full rounded-xl border border-gray-300 px-5 py-4 placeholder:text-gray-400"
/>
          </div>

        </div>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">

          <div className="mb-2">
            <label
              htmlFor="phone"
              className="mb-3 block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>

            <input
  id="phone"
  name="phone"
  type="tel"
  autoComplete="tel"
  inputMode="tel"
  placeholder="+91 XXXXX XXXXX"
  className="focus-brand animate-default h-10 w-full rounded-xl border border-gray-300 px-5 py-4 placeholder:text-gray-400"
/>
          </div>

          <div className="mb-2">
            <label
              htmlFor="project"
              className="mb-3 block text-sm font-medium text-gray-700"
            >
              Project Type
            </label>

            <input
              id="project"
              type="text"
              placeholder="Residential / Commercial"
              className="focus-brand animate-default h-10 w-full rounded-xl border border-gray-300 px-5 py-4 placeholder:text-gray-400"
            />
          </div>

        </div>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">

  <div className="mb-2">
    <label
      htmlFor="plotSize"
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      Plot Size (sq ft)
    </label>

    <input
      id="plotSize"
      name="plotSize"
      type="number"
      inputMode="numeric"
      placeholder="e.g. 2400"
      className="focus-brand animate-default h-10 w-full rounded-xl border border-gray-300 px-5 py-4 placeholder:text-gray-400"
    />
  </div>

  <div className="mb-2">
    <label
      htmlFor="budget"
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      Estimated Budget
    </label>

    <input
      id="budget"
      name="budget"
      type="text"
      placeholder="Optional"
      className="focus-brand animate-default h-10 w-full rounded-xl border border-gray-300 px-5 py-4 placeholder:text-gray-400"
    />
  </div>

</div>

        <div className="mb-2">
          <label
            htmlFor="message"
            className="mb-3 block text-sm font-medium text-gray-700"
          >
            Project Details
          </label>

          <textarea
            id="message"
            rows={7}
            placeholder="Tell us about your project..."
            required
            className="focus-brand animate-default w-full rounded-xl border border-gray-300 px-5 py-4 placeholder:text-gray-400"
          />
        </div>

        <div className="pt-4">
  <PrimaryButton
    type="submit"
    fullWidth
  >
    {submitLabel}
  </PrimaryButton>
</div>
      </form>
    </div>
  );
}
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="h-3"></div>
      <div className="container-custom py-10 lg:py-14">
        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* ================= LEFT CONTENT ================= */}

          <div className="flex flex-col">

            {/* Hero Header */}

            <div>

              <div className="inline-flex items-center gap-3 rounded-full border border-[#0D47A1]/10 bg-[#0D47A1]/5 px-5 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0D47A1]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
                  BUILDING STRONGER TOMORROW
                </span>
              </div>

              <h1 className="mt-7 max-w-[650px] text-5xl font-extrabold leading-[1.05] tracking-[-0.03em] text-gray-900 lg:text-6xl">
                Engineering Solutions
                <br />
                <span className="text-[#0D47A1]">
                  Built on Experience
                </span>
                <br />
                &amp; Precision
              </h1>
            </div>

            {/* Description */}

            <div className="mt-8 max-w-[540px]">

              <p className="text-lg leading-8 text-gray-600">
                Professional civil and structural consultancy delivering
                innovative, safe and sustainable engineering solutions for
                residential, commercial and industrial developments across
                every stage of construction.
              </p>

            </div>

            {/* CTA Area */}

            
            <div className="h-3"></div>
              <div className="flex flex-wrap gap-5">

                <button className="inline-flex h-14 min-w-[210px] items-center justify-center rounded-xl bg-[#0D47A1] px-8 font-semibold text-white shadow-lg transition duration-300 hover:bg-[#1565C0]">
                  Request a Quote
                </button>

                <button className="inline-flex h-14 min-w-[210px] items-center justify-center rounded-xl border border-[#0D47A1] bg-white px-8 font-semibold text-[#0D47A1] transition duration-300 hover:bg-[#0D47A1] hover:text-white">
                  Our Services
                </button>

              </div>

            </div>

          

          {/* ================= RIGHT IMAGE ================= */}

          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="/images/hero/hero-construction.png"
                alt="Construction Site"
                width={900}
                height={700}
                priority
                className="h-auto w-full object-cover"
              />

            </div>

            {/* Floating Cards */}

            <div className="absolute left-6 top-8 rounded-2xl w-34 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-md">
              <div className="text-center text-xs font-bold text-[#0D47A1]">
                250+
              </div>

              <div className="mt-1 text-center text-xs font-semibold text-gray-600">
                Projects Completed
              </div>
            </div>

            <div className="absolute left-6 top-24 -translate-y-1/2 rounded-2xl w-34 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-md">
              <div className="text-center text-xs font-bold text-[#0D47A1]">
                18+
              </div>

              <div className="mt-1 text-center text-xs font-semibold text-gray-600">
                Years Experience
              </div>
            </div>

            <div className="absolute left-6 top-32 rounded-2xl w-34 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-md">
              <div className="text-center text-xs font-bold text-[#0D47A1]">
                100%
              </div>

              <div className="mt-1 text-center text-xs font-semibold text-gray-600">
                Client Focus
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
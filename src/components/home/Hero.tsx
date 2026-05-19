import Image from "next/image";

export default function Hero() {
  return (
    <>

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-black text-white">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1974&auto=format&fit=crop"
  alt="Luxury Decoration"
  fill
  priority
  className="object-cover"
/>
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>

        {/* LIGHT EFFECT */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/20 blur-[140px]"></div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 pt-28 pb-16 md:pt-40 md:pb-28 text-center">

          {/* TOP BADGE */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-medium text-yellow-300 backdrop-blur-xl">

            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400"></span>

            India’s Trusted Balloon Decoration Brand

          </div>

          {/* HEADING */}
          <h1 className="max-w-6xl bg-gradient-to-r from-white via-yellow-200 to-yellow-500 bg-clip-text text-4xl font-black leading-[0.95] tracking-tight text-transparent sm:text-6xl md:text-8xl">

            Premium Balloon
            <br />
            decorations

          </h1>

          {/* SUBTEXT */}
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-gray-300 md:text-xl">

            Premium balloon decoration services for birthdays, anniversaries, baby showers, proposals and surprise celebrations across India.
          </p>

          {/* FEATURES */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl">
              ⭐ 4.8 Rating
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl">
              🎈 3000+ Decorations
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl">
              ⚡ Same Day Setup
            </div>

          </div>

          {/* CITIES */}
          <p className="mt-8 text-sm font-medium tracking-wide text-yellow-400 md:text-base">

            Jaipur • Delhi • Gurgaon • Mumbai • Pune • Bangalore • Hyderabad

          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="https://wa.me/919602060414"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-500 px-4 py-2 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-white"
            >
              Book Your Decoration
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/20 px-4 py-2 font-semibold text-white transition duration-300 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              Explore Decorations
            </a>

          </div>

        </div>

      </section>

    </>
  );
}
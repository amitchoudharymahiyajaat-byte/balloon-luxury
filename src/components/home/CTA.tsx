export default function CTA() {
  return (
    <section className="bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 p-10 text-black md:p-16">

        <div className="max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em]">
            Book Your Decoration
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Make Your Celebration
            <br />
            Truly Unforgettable
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/70">
            Premium balloon decoration services available with same day setup
            across major cities in India.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://wa.me/919602060414"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              WhatsApp Now
            </a>

            <a
              href="tel:+919602060414"
              className="rounded-full border border-black/20 px-8 py-4 font-semibold transition hover:bg-black hover:text-white"
            >
              Call Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
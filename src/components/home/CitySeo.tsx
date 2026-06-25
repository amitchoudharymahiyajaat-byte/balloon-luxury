export default function CitySeo({
  city,
}: {
  city: string;
}) {
  return (
    <section className="bg-neutral-950 px-4 py-12 text-white sm:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
          {city} Balloon Decoration
        </p>

        <h2 className="mt-3 bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-2xl font-black text-transparent sm:text-4xl md:text-5xl">
          Luxury Balloon Decoration In {city}
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-neutral-300 sm:text-base">
          Event Wala Dost provides premium balloon decoration services across{" "}
          {city} for birthdays, anniversaries, baby showers, romantic surprises,
          welcome baby celebrations and proposal setups with same day decoration
          availability.
        </p>
      </div>
    </section>
  );
}

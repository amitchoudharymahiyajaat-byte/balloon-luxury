const cities = [
  {
    name: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Delhi",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1526481280695-3c4691f0e0d1?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Pune",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Cities() {
  return (
    <section
      id="cities"
      className="overflow-hidden bg-white py-20"
    >

      {/* TOP */}
      <div className="mb-12 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
          Our Cities
        </p>

        <h2 className="mt-3 text-4xl font-black md:text-6xl">
          Available Across India
        </h2>

      </div>

      {/* SLIDER */}
      <div className="relative">

        <div className="flex animate-slider gap-6 w-max">

          {[...cities, ...cities].map((city, index) => (

            <a
              key={index}
              href={`/${city.name.toLowerCase()}`}
              className="group relative h-[380px] w-[280px] overflow-hidden rounded-[32px] flex-shrink-0"
            >

              {/* IMAGE */}
              <img
                src={city.image}
                alt={city.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-6 text-white">

                <h3 className="text-3xl font-black">
                  {city.name}
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  Luxury Balloon Decoration
                </p>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}
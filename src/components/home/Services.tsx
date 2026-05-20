const services = [
  {
    title: "Birthday Decoration",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Anniversary Decoration",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Baby Shower",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Welcome Baby",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Romantic Room",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Proposal Setup",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Haldi Decoration",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Mehendi Decoration",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white via-blue-50 to-white px-6 py-24"
    >

      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="mb-14 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
            Decoration Categories
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl gradient-heading-secondary">
            Luxury Celebration Setups
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Premium balloon decoration services crafted for unforgettable
            celebrations and beautiful memories.
          </p>

        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => (

            <div
              key={service.title}
              className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-purple-300"
            >

              {/* IMAGE */}
              <div className="relative h-[300px] overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-2xl font-bold leading-snug text-gray-800">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Premium luxury decoration setup with professional styling.
                </p>

                {/* BUTTON */}
                <a
                  href="https://wa.me/919602060414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg"
                >
                  Book Now
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

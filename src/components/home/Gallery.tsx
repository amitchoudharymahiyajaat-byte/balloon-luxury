const galleryImages = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="overflow-hidden bg-white py-24"
    >

      {/* TOP */}
      <div className="mb-14 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
          Decoration Gallery
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl gradient-heading-tertiary">
          Luxury Celebration Moments
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-600">
          Explore our premium balloon decoration setups crafted
          for unforgettable celebrations.
        </p>

      </div>

      {/* AUTO SLIDER */}
      <div className="relative">

        <div className="flex w-max animate-gallery gap-6">

          {[...galleryImages, ...galleryImages].map((image, index) => (

            <div
              key={index}
              className="group relative h-[420px] w-[320px] flex-shrink-0 overflow-hidden rounded-[36px]"
            >

              {/* IMAGE */}
              <img
                src={image}
                alt="Decoration"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

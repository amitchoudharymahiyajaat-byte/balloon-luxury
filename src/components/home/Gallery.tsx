"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type TouchEvent,
} from "react";
import { getCitySlug, getGalleryMedia } from "../../lib/cityMedia";
import { trackGalleryOpen } from "../../lib/tracking";

export default function Gallery({ city = "" }: { city?: string }) {
  const citySlug = getCitySlug(city);
  const galleryImages = useMemo(
    () => getGalleryMedia(citySlug),
    [citySlug],
  );
  const galleryCount = galleryImages.length;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const activeImage =
    activeIndex === null ? null : galleryImages[activeIndex] ?? null;

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === null
        ? currentIndex
        : (currentIndex - 1 + galleryCount) % galleryCount,
    );
  }, [galleryCount]);

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === null
        ? currentIndex
        : (currentIndex + 1) % galleryCount,
    );
  }, [galleryCount]);

  useEffect(() => {
    if (activeIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX === null) return;

    const swipeDistance = event.changedTouches[0].clientX - touchStartX;

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) showPrevious();
      else showNext();
    }

    setTouchStartX(null);
  }

  return (
    <section
      id="gallery"
      className="overflow-hidden bg-white px-4 py-12 sm:px-6 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
            Decoration Gallery
          </p>

          <h2 className="mt-3 text-2xl font-black sm:text-4xl md:text-5xl gradient-heading-tertiary">
            Luxury Celebration Moments
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Explore our premium balloon decoration setups crafted for
            unforgettable celebrations.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                trackGalleryOpen(String(index + 1), {
                  city_slug: citySlug || undefined,
                });
              }}
              aria-label={`Open gallery image ${index + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[24px] bg-gray-100 shadow-sm transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-80 transition group-hover:opacity-60"></div>
            </motion.button>
          ))}
        </div>
      </div>

      {activeImage && activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image lightbox"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-6"
          onClick={closeLightbox}
          onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            aria-label="Close gallery lightbox"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-xl font-bold text-white backdrop-blur transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white"
          >
            X
          </button>

          <button
            type="button"
            aria-label="Show previous gallery image"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl font-bold text-white backdrop-blur transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white sm:left-6"
          >
            &lt;
          </button>

          <div
            className="relative h-[78vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              loading="lazy"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Show next gallery image"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl font-bold text-white backdrop-blur transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white sm:right-6"
          >
            &gt;
          </button>
        </div>
      ) : null}
    </section>
  );
}

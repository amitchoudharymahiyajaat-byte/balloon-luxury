"use client";

import { useState } from "react";
import FallbackImage from "../home/FallbackImage";

type GalleryImage = {
  src: string;
  alt: string;
};

type AnniversaryGalleryProps = {
  images: GalleryImage[];
};

export default function AnniversaryGallery({ images }: AnniversaryGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex] ?? images[0];

  return (
    <section className="bg-[#f8f3ff] px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
            Romantic Gallery
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            Romantic setups, styled for two
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[30px] bg-gray-100 shadow-xl shadow-purple-950/10 sm:min-h-[520px]">
            <FallbackImage
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-1 lg:overflow-visible lg:pb-0">
            {images.map((image, index) => {
              const selected = index === selectedIndex;

              return (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`relative h-24 w-32 shrink-0 overflow-hidden rounded-2xl border transition lg:h-[82px] lg:w-full ${
                    selected
                      ? "border-purple-600 ring-2 ring-purple-200"
                      : "border-white/70 opacity-80 hover:opacity-100"
                  }`}
                  aria-label={`Show romantic gallery image ${index + 1}`}
                >
                  <FallbackImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

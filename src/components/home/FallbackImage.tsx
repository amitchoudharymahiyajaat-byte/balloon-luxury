"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type FallbackImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
};

export default function FallbackImage({
  src,
  alt,
  fallbackSrc = "/images/placeholder.svg",
  unoptimized,
  ...props
}: FallbackImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const currentSrc = failedSrc === src ? fallbackSrc : src;
  const isFallback = currentSrc === fallbackSrc;

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      unoptimized={unoptimized || isFallback}
      onError={() => {
        if (!isFallback) setFailedSrc(src);
      }}
    />
  );
}

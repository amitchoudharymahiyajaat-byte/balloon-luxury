"use client";

import Image from "next/image";
import { getCityHero, getCitySlug, getHomeHero } from "../../lib/cityMedia";
import { trackBookingClick, trackWhatsAppClick } from "../../lib/tracking";
import { buildPageWhatsAppMessage, createWhatsAppUrl } from "../../lib/whatsapp";

export default function Hero({
  city = "India",
  backgroundImage,
}: {
  city?: string;
  backgroundImage?: string;
}) {
  const isHomepageHero = city === "India" && !backgroundImage;
  const homeHero = getHomeHero();
  const cityHero = getCityHero(getCitySlug(city));
  const heroImage = backgroundImage || (isHomepageHero ? homeHero.src : cityHero.src);
  const mobileHeroImage = homeHero.mobileSrc || homeHero.src;
  const heroAlt = isHomepageHero ? homeHero.alt : cityHero.alt;
  const whatsappMessage = buildPageWhatsAppMessage(
    isHomepageHero ? { page: "home" } : { page: "city", city },
  );

  return (
    <section className="relative isolate overflow-hidden bg-[#130d08] text-white">
      <div className="absolute inset-0">
        {isHomepageHero ? (
          <>
            <Image
              src={mobileHeroImage}
              alt={heroAlt}
              fill
              sizes="100vw"
              fetchPriority="high"
              className="block scale-[1.02] object-cover object-[center_30%] blur-[0.35px] brightness-[0.66] saturate-[0.96] transform-gpu sm:hidden"
            />
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              sizes="100vw"
              fetchPriority="high"
              className="hidden scale-[1.02] object-cover object-[center_42%] blur-[0.35px] brightness-[0.64] saturate-[0.96] transform-gpu sm:block"
            />
          </>
        ) : (
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            sizes="100vw"
            className="scale-[1.03] object-cover object-[center_34%] blur-[0.5px] brightness-[0.84] saturate-[1.02] transform-gpu sm:scale-[1.02] sm:object-center sm:blur-[0.75px] sm:brightness-[0.82]"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-black/32"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/68 via-black/22 to-black/58"></div>
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/64 via-black/24 to-transparent sm:h-56"></div>
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/68 via-black/22 to-transparent sm:h-72"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.16)_48%,rgba(0,0,0,0.42)_100%)]"></div>

      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[130px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_22%,rgba(245,158,11,0.24)_0%,rgba(245,158,11,0.11)_30%,transparent_62%)]"></div>

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[680px] sm:px-6 md:min-h-[720px] md:py-20 lg:min-h-[760px]">
        <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-2 text-xs font-medium text-yellow-300 backdrop-blur-xl sm:mb-6 sm:px-5 sm:text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400"></span>
          India&apos;s Trusted Balloon Decoration Brand
        </div>

        <h1 className="w-full max-w-[18rem] break-words bg-gradient-to-r from-white via-yellow-50 to-yellow-300 bg-clip-text text-[1.65rem] font-black leading-[1.04] tracking-tight text-transparent drop-shadow-[0_8px_24px_rgba(0,0,0,0.72)] min-[430px]:max-w-[20rem] min-[430px]:text-3xl sm:max-w-5xl sm:text-5xl sm:leading-[0.98] md:text-7xl">
          Premium Balloon
          <br />
          Decorations {city && `In ${city}`}
        </h1>

        <p className="mt-4 w-full max-w-[18rem] text-sm leading-relaxed text-white/90 drop-shadow-[0_4px_16px_rgba(0,0,0,0.78)] sm:max-w-2xl sm:text-base md:text-lg">
          Premium balloon decoration services for birthdays, anniversaries, baby
          showers, proposals and surprise celebrations across {city || "India"}.
        </p>

        <p className="mt-4 w-full max-w-[18rem] text-xs font-medium leading-relaxed tracking-wide text-yellow-300 drop-shadow-[0_3px_12px_rgba(0,0,0,0.62)] sm:max-w-2xl sm:text-base md:text-xl">
          Jaipur {"\u2022"} Delhi NCR {"\u2022"} Mumbai {"\u2022"} Pune{" "}
          {"\u2022"} Bangalore {"\u2022"} Hyderabad {"\u2022"} Chennai{" "}
          {"\u2022"} Kolkata
        </p>

        <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href={createWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackWhatsAppClick(`hero_book_${city}`);
              trackBookingClick(`hero_book_${city}`);
            }}
            className="w-full max-w-[16rem] rounded-full bg-yellow-500 px-4 py-2.5 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-white sm:w-auto sm:text-base"
          >
            Book Your Decoration
          </a>

          <a
            href="#services"
            className="w-full max-w-[16rem] rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black sm:w-auto sm:text-base"
          >
            Explore Decorations
          </a>
        </div>
      </div>
    </section>
  );
}

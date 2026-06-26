"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { trackExitOfferClaim, trackWhatsAppClick } from "../../lib/tracking";
import { buildPageWhatsAppMessage, createWhatsAppUrl } from "../../lib/whatsapp";

const whatsappUrl = createWhatsAppUrl(
  buildPageWhatsAppMessage({
    page: "general",
    message: "I want to claim the Rs. 500 decoration discount.",
  }),
);

function CelebrationBadge() {
  return (
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100 shadow-[0_18px_40px_rgba(236,72,153,0.18)] ring-1 ring-white">
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="h-10 w-10"
        fill="none"
      >
        <path
          d="M23 31c-5.2 0-9-4.1-9-9.7C14 15.9 17.7 12 23 12s9 3.9 9 9.3C32 26.9 28.2 31 23 31Z"
          stroke="#111827"
          strokeWidth="2.6"
        />
        <path
          d="M41 31c-5.2 0-9-4.1-9-9.7C32 15.9 35.7 12 41 12s9 3.9 9 9.3C50 26.9 46.2 31 41 31Z"
          stroke="#9d4edd"
          strokeWidth="2.6"
        />
        <path
          d="M32 39c-5.5 0-9.5-4.3-9.5-10.1 0-5.6 4-9.8 9.5-9.8s9.5 4.2 9.5 9.8C41.5 34.7 37.5 39 32 39Z"
          stroke="#f97316"
          strokeWidth="2.8"
        />
        <path d="M23 31c1.2 5 4.4 9.8 9 14" stroke="#111827" strokeWidth="2" />
        <path d="M41 31c-1.2 5-4.4 9.8-9 14" stroke="#9d4edd" strokeWidth="2" />
        <path d="M32 39v9" stroke="#f97316" strokeWidth="2" />
        <path d="M28 50h8" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M53 13v7M49.5 16.5h7M12 38v5M9.5 40.5h5"
          stroke="#ec4899"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const hasShownRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const maxScrollYRef = useRef(0);

  useEffect(() => {
    const showPopup = () => {
      if (hasShownRef.current) return;
      if (document.body.dataset.bookingPopupOpen === "true") return;
      hasShownRef.current = true;
      setOpen(true);
    };

    const handleMouseOut = (event: MouseEvent) => {
      if (window.innerWidth < 768) return;

      const isLeavingWindow = !event.relatedTarget;
      if (isLeavingWindow && event.clientY <= 24) {
        showPopup();
      }
    };

    const handleScroll = () => {
      if (window.innerWidth >= 768 || hasShownRef.current) return;

      const currentY = window.scrollY;
      const currentTime = Date.now();
      const lastY = lastScrollYRef.current;
      const lastTime = lastScrollTimeRef.current || currentTime;
      const deltaY = currentY - lastY;
      const deltaTime = Math.max(currentTime - lastTime, 1);
      const upwardVelocity = Math.abs(deltaY) / deltaTime;

      maxScrollYRef.current = Math.max(maxScrollYRef.current, currentY);

      if (maxScrollYRef.current > 320 && deltaY < -80 && upwardVelocity > 0.7) {
        showPopup();
      }

      lastScrollYRef.current = currentY;
      lastScrollTimeRef.current = currentTime;
    };

    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const mobileFallbackTimer = window.setTimeout(() => {
      if (window.innerWidth < 768) {
        showPopup();
      }
    }, 25000);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(mobileFallbackTimer);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.dataset.exitIntentPopupOpen = "true";

    return () => {
      delete document.body.dataset.exitIntentPopupOpen;
    };
  }, [open]);

  const closePopup = () => {
    hasShownRef.current = true;
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-title"
            className="relative w-full max-w-xl overflow-hidden rounded-[28px] border border-pink-100 bg-white p-6 text-center shadow-[0_30px_90px_rgba(15,23,42,0.28)] ring-1 ring-white/70 sm:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />

            <button
              type="button"
              onClick={closePopup}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-xl leading-none text-gray-500 shadow-sm transition hover:border-gray-300 hover:text-gray-950 active:scale-95"
              aria-label="Close offer popup"
            >
              x
            </button>

            <CelebrationBadge />

            <h2
              id="exit-intent-title"
              className="mx-auto mt-5 max-w-md text-3xl font-black leading-tight md:text-4xl"
              style={{
                background:
                  "linear-gradient(90deg, #ff6b6b 0%, #ffa500 28%, #4ecdc4 56%, #9d4edd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Wait! Your Celebration Just Got Better
            </h2>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-purple-600">
              Limited-Time Offer
            </p>

            <p className="mx-auto mt-3 max-w-sm rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-xl font-black leading-snug text-gray-950 shadow-inner">
              Get Flat Rs. 500 OFF Today on Balloon Decoration Booking
            </p>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              Book your balloon decoration today and claim this limited-time
              offer on WhatsApp.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackExitOfferClaim("exit_intent_popup");
                  trackWhatsAppClick("exit_intent_popup_claim");
                  closePopup();
                }}
                className="flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(16,185,129,0.28)] transition hover:scale-[1.02] hover:shadow-[0_18px_38px_rgba(16,185,129,0.34)] active:scale-[0.98]"
              >
                Claim on WhatsApp
              </a>

              <button
                type="button"
                onClick={closePopup}
                className="flex flex-1 items-center justify-center rounded-full border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm font-semibold text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 active:scale-[0.98]"
              >
                No Thanks
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

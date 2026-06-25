"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { trackExitOfferClaim, trackWhatsAppClick } from "../../lib/tracking";

const whatsappUrl =
  "https://wa.me/919602060414?text=Hi,%20I%20want%20to%20claim%20the%20Rs.%20500%20discount";

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
            className="w-full max-w-md overflow-hidden rounded-[28px] border border-white/70 bg-white p-6 text-center shadow-2xl sm:p-7"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-2xl">
              !
            </div>

            <h2
              id="exit-intent-title"
              className="text-3xl font-black tracking-tight text-gray-950"
            >
              Wait
            </h2>

            <p className="mx-auto mt-3 max-w-sm text-lg font-bold leading-snug text-gray-900">
              Get Flat Rs. 500 OFF Today on Balloon Decoration Booking
            </p>

            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
              Limited time offer for same day decoration bookings.
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
                className="flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
              >
                Claim on WhatsApp
              </a>

              <button
                type="button"
                onClick={closePopup}
                className="flex flex-1 items-center justify-center rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
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

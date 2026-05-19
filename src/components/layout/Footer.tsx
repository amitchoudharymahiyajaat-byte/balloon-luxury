export default function Footer() {
  return (
    <footer className="bg-neutral-950 px-6 py-20 text-white">

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">

        {/* BRAND */}
        <div>

          <h2 className="text-3xl font-black">
            EWD
          </h2>

          <p className="mt-4 leading-relaxed text-gray-400">
            Luxury balloon decoration services crafted for unforgettable celebrations across India.
          </p>

        </div>

        {/* SERVICES */}
        <div>

          <h3 className="text-lg font-bold">
            Services
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-gray-400">

            <a href="#">Birthday Decoration</a>

            <a href="#">Anniversary Decoration</a>

            <a href="#">Baby Shower</a>

            <a href="#">Proposal Setup</a>

          </div>

        </div>

        {/* CITIES */}
        <div>

          <h3 className="text-lg font-bold">
            Cities
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-gray-400">

            <a href="/jaipur">Jaipur</a>

            <a href="/delhi">Delhi</a>

            <a href="/gurgaon">Gurgaon</a>

            <a href="/mumbai">Mumbai</a>

          </div>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="text-lg font-bold">
            Contact
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-gray-400">

            <a href="tel:+919602060414">
              +91 9602060414
            </a>

            <a
              href="https://wa.me/919602060414"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>

            <p>
              Available 24×7 For Bookings
            </p>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="mx-auto mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-500">

        © 2026 Event Wala Dost. All rights reserved.

      </div>

    </footer>
  );
}
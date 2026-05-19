export default function StickyButtons() {
  return (

    <div className="fixed bottom-0 left-0 z-50 w-full md:hidden">

      <div className="grid grid-cols-3 bg-white border-t border-black/10 shadow-2xl">

        <a
          href="tel:+919602060414"
          className="flex items-center justify-center py-4 text-sm font-semibold border-r border-black/10"
        >
          📞 Call
        </a>

        <a
          href="https://wa.me/919602060414"
          target="_blank"
          className="flex items-center justify-center py-4 text-sm font-semibold border-r border-black/10 bg-green-50"
        >
          WhatsApp
        </a>

        <a
          href="#booking"
          className="flex items-center justify-center py-4 text-sm font-semibold bg-black text-white"
        >
          Book Now
        </a>

      </div>

    </div>
  );
}
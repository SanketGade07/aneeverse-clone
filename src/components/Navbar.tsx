export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* DARK NAVBAR GRADIENT */}
      <div className="absolute inset-0 bg-navbar-gradient pointer-events-none" />

      {/* NAVBAR CONTENT */}
      <div className="relative site-container h-20 flex items-center justify-between text-[#EBFAFE]">
        {/* LOGO */}
        <div className="text-[32px] font-bold tracking-[-0.06em] leading-none">aneeverse</div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium tracking-tight">
          <span className="flex items-center gap-1 cursor-pointer opacity-90 hover:opacity-100 transition">
            Services
            <Chevron />
          </span>

          <span className="flex items-center gap-1 cursor-pointer opacity-90 hover:opacity-100 transition">
            Portfolio
            <Chevron />
          </span>

          <span className="flex items-center gap-1 cursor-pointer opacity-90 hover:opacity-100 transition">
            Resources
            <Chevron />
          </span>

          <span className="cursor-pointer opacity-90 hover:opacity-100 transition">
            Pricing
          </span>
        </nav>

        {/* CTA BUTTONS */}
        <div className="flex items-center gap-4">
          <button className="px-7 py-2.5 rounded-full bg-[#EBFAFE] text-[#073742] text-[15px] font-bold hover:bg-white transition shadow-sm">
            Book a Call
          </button>
          
          <button className="px-7 py-2.5 rounded-full border border-[#EBFAFE]/30 text-[#EBFAFE] text-[15px] font-semibold hover:bg-[#EBFAFE]/10 transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

/* Chevron Icon */
function Chevron() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      className="opacity-70 mt-[1px]"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

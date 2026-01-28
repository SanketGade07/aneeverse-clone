import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#EBFAFE] shadow-md" : ""
      }`}
    >
      {/* DARK NAVBAR GRADIENT (Only show when NOT scrolled) */}
      <div 
        className={`absolute inset-0 bg-navbar-gradient pointer-events-none transition-opacity duration-300 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`} 
      />

      {/* NAVBAR CONTENT */}
      <div 
        className={`relative site-container h-20 flex items-center justify-between transition-colors duration-300 ${
          isScrolled ? "text-[#073742]" : "text-[#EBFAFE]"
        }`}
      >
        {/* LOGO */}
        <div className="text-[32px] font-bw-gradual font-extrabold tracking-[-0.06em] leading-none transition-colors duration-300">
          aneeverse
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium tracking-tight">
          <span className="flex items-center gap-1 cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
            Services
            <Chevron />
          </span>

          <span className="flex items-center gap-1 cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
            Portfolio
            <Chevron />
          </span>

          <span className="flex items-center gap-1 cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
            Resources
            <Chevron />
          </span>

          <span className="cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
            Pricing
          </span>
        </nav>

        {/* CTA BUTTONS */}
        <div className="flex items-center gap-4">
          <button 
            className={`px-7 py-2.5 rounded-full text-[15px] font-bold transition-all duration-300 shadow-sm ${
              isScrolled 
                ? "bg-[#073742] text-[#EBFAFE] hover:bg-[#0a4a58]" 
                : "bg-[#EBFAFE] text-[#073742] hover:bg-white"
            }`}
          >
            Book a Call
          </button>
          
          <button 
            className={`px-7 py-2.5 rounded-full border text-[15px] font-semibold transition-all duration-300 ${
              isScrolled 
                ? "border-[#073742]/30 text-[#073742] hover:bg-[#073742]/5" 
                : "border-[#EBFAFE]/30 text-[#EBFAFE] hover:bg-[#EBFAFE]/10"
            }`}
          >
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
      className={`transition-opacity duration-300 opacity-70 mt-[1px]`}
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

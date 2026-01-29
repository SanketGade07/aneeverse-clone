import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

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
        <div className="text-[28px] md:text-[32px] font-bw-gradual font-extrabold tracking-[-0.06em] leading-none transition-colors duration-300">
          aneeverse
        </div>

        {/* NAV LINKS (Desktop) */}
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

        {/* CTA BUTTONS (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
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


        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#EBFAFE] z-[60] flex flex-col p-6"
          >
            {/* MOBILE NAV HEADER */}
            <div className="flex items-center justify-between mb-12">
              <div className="text-[28px] font-bw-gradual font-extrabold tracking-[-0.06em] leading-none text-[#073742]">
                aneeverse
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#073742] p-2"
              >
                <X size={28} />
              </button>
            </div>

            {/* MOBILE NAV LINKS */}
            <nav className="flex flex-col gap-8 text-[18px] font-medium text-[#073742]">
              <div className="flex items-center justify-between cursor-pointer border-b border-[#073742]/10 pb-4">
                Services
                <Chevron color="#073742" />
              </div>
              <div className="flex items-center justify-between cursor-pointer border-b border-[#073742]/10 pb-4">
                Portfolio
              </div>
              <div className="flex items-center justify-between cursor-pointer border-b border-[#073742]/10 pb-4">
                Resources
                <Chevron color="#073742" />
              </div>
              <div className="flex items-center justify-between cursor-pointer border-b border-[#073742]/10 pb-4">
                Pricing
              </div>
            </nav>

            {/* MOBILE CTA BUTTONS */}
            <div className="mt-auto flex flex-col gap-4 pb-8">
              <button className="w-full bg-[#073742] text-[#EBFAFE] py-4 rounded-[20px] text-lg font-bold shadow-lg">
                Book a Call
              </button>
              <button className="w-full border border-[#073742]/20 text-[#073742] py-4 rounded-[20px] text-lg font-semibold bg-white/50">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* Chevron Icon */
function Chevron({ color }: { color?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-opacity duration-300 opacity-70 mt-[1px]`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke={color || "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


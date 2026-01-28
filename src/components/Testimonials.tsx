import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown, ArrowUpRight } from "lucide-react";

// Actual testimonial avatars
import navinoAvatar from "../assets/testimonials/navino.avif";
import vmcAvatar from "../assets/testimonials/Vmc.avif";
import jmVisaAvatar from "../assets/testimonials/jm-visa.avif";

// Project previews (reusing some work images where they match)
import jmVisaPreview from "../assets/our-works/jmvisa.avif";
import ecommercePreview from "../assets/our-works/bharathaksha.avif"; 
import vmcPreview from "../assets/our-works/boomi.avif";

// Company logos
import vmcLogo from "../assets/testimonials/testomonial-company-logos/vmc-logo.webp";
import jmVisaLogo from "../assets/testimonials/testomonial-company-logos/jm-visa-logo.avif";

const testimonials = [
  {
    id: 1,
    company: "NOVINO INKS PVT LTD",
    logo: null,
    quote: "The biggest win? The time we saved. AneeVerse built a stunning eCommerce site that truly reflects our brand. Abhijeet understood my paintings on a personal level he knew exactly what I wanted to express and brought it to life with unmatched customization and efficiency.",
    author: "Navin Agarwal",
    role: "Founder",
    avatar: navinoAvatar,
    projectPreview: ecommercePreview,
    projectTitle: "Transforming Digital..."
  },
  {
    id: 2,
    company: "VMC",
    logo: vmcLogo,
    quote: "AneeVerse brought fresh, fun ideas that made our creative work simple and engaging. They felt like a team of friends who truly cared about our vision, making them key to our expansion.",
    author: "Vikram Manghnani",
    role: "Founder, VMC",
    avatar: vmcAvatar,
    projectPreview: vmcPreview,
    projectTitle: "Building creative..."
  },
  {
    id: 3,
    company: "JM VISA SERVICES",
    logo: jmVisaLogo,
    quote: "AneeVerse redesigned our website, and the leads started flowing. Their smart blog and GMB strategies got us to #1 in Mumbai while cutting marketing costs. Best move we made.",
    author: "Amrita Thakar",
    role: "Founder, JM Visa Services",
    avatar: jmVisaAvatar,
    projectPreview: jmVisaPreview,
    projectTitle: "Scaling Lead Gen for JM..."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="bg-[#073742] py-24 relative overflow-hidden min-h-[700px] flex items-center">
      <div className="site-container w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 lg:pl-12">
          
          {/* Left Side: Avatar Navigation */}
          <div className="flex flex-col items-center gap-2 shrink-0 relative">
             {/* Small Top Avatar (Previous) */}
             <div className="w-32 h-32 rounded-full border-2 border-white/10 overflow-hidden shadow-2xl bg-black opacity-30 filter grayscale brightness-50 blur-[0.5px] transition-all duration-700 transform scale-75">
                <img src={testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length].avatar} alt="" className="w-full h-full object-cover" />
             </div>

             {/* Main Center Avatar */}
             <div className="w-40 h-40 rounded-full border-2 border-white/10 overflow-hidden
             shadow-2xl relative z-10 transition-all duration-700 bg-[#0b2d35]">
                <img src={current.avatar} alt={current.author} className="w-full h-full object-cover" />
             </div>

             {/* Small Bottom Avatar (Next) */}
             <div className="w-36 h-36 rounded-full border-2 border-white/10 overflow-hidden shadow-2xl bg-black opacity-30 filter grayscale brightness-50 blur-[0.5px] transition-all duration-700 transform scale-75">
                <img src={testimonials[(activeIndex + 1) % testimonials.length].avatar} alt="" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Center: Content area */}
          <div className="flex-1 text-white text-left">
            <div className="space-y-10">
              <div className="flex flex-col items-start gap-4">
                {current.company === "NOVINO INKS PVT LTD" ? (
                  <h4 className="text-2xl font-bold tracking-[0.1rem] uppercase opacity-90 font-sans text-white text-left">
                    {current.company}
                  </h4>
                ) : current.logo ? (
                  <img 
                    src={current.logo} 
                    alt={current.company} 
                    className={`w-auto object-contain opacity-100 ${
                      current.company === "VMC" ? "h-12" : "h-32"
                    } ${current.company === "JM VISA SERVICES" ? "brightness-0 invert" : ""}`} 
                  />
                ) : (
                  <h4 className="text-sm font-bold tracking-[0.3em] uppercase opacity-90 font-sans text-white text-left">
                    {current.company}
                  </h4>
                )}
              </div>
              
              <h2 
                className="text-3xl sm:text-4xl lg:text-[26px] font-bw-gradual font-extrabold max-w-[900px] text-left lg:mx-0 "
                style={{ lineHeight: "1.9rem", letterSpacing: "-0.025em", marginTop: "2rem" }}
              >
                "{current.quote}"
              </h2>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 pt-6">
                <div className="space-y-1 group">
                  <p className="text-2xl font-bold font-sans tracking-tight">{current.author}</p>
                  <p className="text-[#9CA3AF] font-sans font-medium text-base">{current.role}</p>
                </div>

                {/* Project Card */}
                <div className="bg-[#0b313a]/60 backdrop-blur-sm p-4 rounded-[22px] border border-white/10 flex items-center gap-5 min-w-[380px] transition-all hover:border-white/20 group cursor-pointer lg:mx-0">
                  <div className="w-[84px] h-[54px] rounded-xl overflow-hidden bg-black/40 shrink-0">
                    <img src={current.projectPreview} alt="Project" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                     <p className="text-[10px] font-bold text-[#2DC8E6] uppercase tracking-[0.1em] mb-1">{current.company}</p>
                     <p className="text-[15px] font-bold text-white/90 truncate">{current.projectTitle}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-all mr-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Navigation Buttons */}
          <div className="flex flex-col gap-8 scale-90 lg:scale-100">
            <button 
              onClick={prevTestimonial}
              className="w-[56px] h-[56px] rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all group"
              aria-label="Previous testimonial"
            >
              <ArrowUp className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-[56px] h-[56px] rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all group"
              aria-label="Next testimonial"
            >
              <ArrowDown className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;

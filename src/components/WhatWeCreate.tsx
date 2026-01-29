import React, { useRef, useEffect, useState } from 'react';

// Importing assets for the carousel
import img1 from "../assets/what-we-create/BRANDING SERVICES 1.jpg";
import img2 from "../assets/what-we-create/COPYWRITING 1.jpg";
import img3 from "../assets/what-we-create/EBOOK AND DIGITAL REPORT 1.jpg";
import img4 from "../assets/what-we-create/SEO OPTIMIZE 1.jpg";

const cardData = [
  {
    image: img1,
    title: "Platform Development",
    tags: ["WEB PLATFORMS", "CUSTOM DEVELOPMENT", "FULL-STACK SOLUTIONS"],
    heightClass: "h-[293px] sm:h-[427px]",
  },
  {
    image: img2,
    title: "n8n Workflows",
    tags: ["WORKFLOW AUTOMATION", "PROCESS OPTIMIZATION", "INTEGRATIONS"],
    heightClass: "h-[240px] sm:h-[350px]",
  },
  {
    image: img3,
    title: "Marketing Strategy",
    tags: ["BRAND AWARENESS", "CUSTOMER RETENTION", "MARKET RESEARCH"],
    heightClass: "h-[293px] sm:h-[427px]",
  },
  {
    image: img4,
    title: "UI, UX & Web Development",
    tags: ["USER INTERFACE", "USER EXPERIENCE", "WEB DEVELOPMENT"],
    heightClass: "h-[240px] sm:h-[350px]",
  },
];

const WhatWeCreate: React.FC = () => {
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = desktopScrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationFrameId: number;
    const scroll = () => {
      if (scrollContainer) {
        // Increment scroll position
        scrollContainer.scrollLeft += 0.5; // Speed adjustment

        // Infinite loop logic: when we reach the end of the first set of items, reset to start
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="bg-[#073742] py-20 overflow-hidden">
      {/* TEXT SECTION */}
      <div className="site-container flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 mb-12 md:mb-20 px-6 md:px-12 lg:px-24">
        <div className="flex-1 max-w-4xl">
          <h3 className="text-[#2DC8E6] text-[11px] sm:text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-8 font-bold">
            WHAT WE CREATE
          </h3>
          
          <h2 className="text-left font-bw-gradual font-bold text-white leading-[1.1] tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-[60px] uppercase">
            Everything You <br className="sm:hidden" />
            Need,
            <br className="lg:block" />
            In One{" "}
            <span className="font-accent text-[#2DC8E6] text-[28px] sm:text-[30px] md:text-[34px] lg:text-[39px] normal-case relative -top-1 sm:-top-5 lg:-top-7 inline-block -rotate-3 ml-1 lg:ml-3">
              Creative
            </span>
            <br />
            Platform
          </h2>
        </div>

        <div className="flex-shrink-0">
          <button className="bg-[#8dd7e8] hover:bg-[#a6e6f5] transition-all duration-300 text-[#042429] font-black py-3 px-8 sm:py-4 sm:px-10 rounded-full text-xs sm:text-sm md:text-base tracking-[0.1em] uppercase">
            Get Started
          </button>
        </div>
      </div>

      {/* CAROUSEL SECTION */}
      <div className="relative w-full">
        {/* Desktop Infinite Scroll + Manual Scroll */}
        <div 
          ref={desktopScrollRef}
          className="hidden lg:flex overflow-x-auto whitespace-nowrap items-start no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Double items for infinite loop seamlessness */}
          {[...cardData, ...cardData, ...cardData, ...cardData].map((card, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 mx-3 sm:mx-4 group flex flex-col w-[240px] sm:w-[350px]"
            >
              <div className={`relative overflow-hidden rounded-2xl shadow-2xl w-full ${card.heightClass} !min-h-0 bg-[#06353d]`}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="flex flex-col pt-6 pb-2">
                <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight mb-3 whitespace-normal">
                  {card.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 text-[10px] sm:text-xs text-white/80 bg-white/10 rounded-full font-medium uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile manual horizontal scroll */}
        <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 gap-5 scroll-smooth">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 group flex flex-col w-[280px] snap-center cursor-pointer"
            >
              <div className={`relative overflow-hidden rounded-2xl shadow-2xl w-full ${card.heightClass} !min-h-0 bg-[#06353d]`}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
              
              <div className="flex flex-col pt-6 pb-2">
                <h3 className="text-white text-xl font-bold leading-tight mb-3 whitespace-normal uppercase tracking-tight">
                  {card.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 text-[10px] text-white/80 bg-white/10 rounded-full font-medium uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default WhatWeCreate;

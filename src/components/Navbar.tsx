import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight, Sparkles, ShoppingBag, Globe, PenTool, Monitor, Search, BarChart3, Rocket, FileText, Code, Layout, Cpu, PieChart, ChevronRight, Users, PlayCircle, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import bharathakshaImg from "../assets/our-works/bharathaksha.avif";
import jmvisaImg from "../assets/our-works/jmvisa.avif";
import eazyVisasImg from "../assets/our-works/eazy-visas.avif";
import pathfinderImg from "../assets/our-works/pathfinder.avif";
import blogImg1 from "../assets/blog/Agency-vs-Freelancer-vs-In-House-1.avif";
import blogImg2 from "../assets/blog/How-to-Use-n8n-to-Collect-LinkedIn-Leads-1.avif";
import boomiImg from "../assets/our-works/boomi.avif";



const servicesData = [
  {
    category: "Creative Design",
    color: "bg-[#FFEBEC] text-[#FF4D5D]",
    items: [
      { title: "Graphic Design", desc: "Social media, branding, print", icon: PenTool },
      { title: "UI/UX Design", desc: "Web & mobile app interfaces", icon: Layout },
      { title: "Motion Graphics", desc: "2D/3D animations & videos", icon: PlayCircle },
    ]
  },
  {
    category: "Specialized Solutions",
    color: "bg-[#E6F7FF] text-[#0066FF]",
    items: [
      { title: "Web Development", desc: "React, Next.js, Framer", icon: Code },
      { title: "App Development", desc: "iOS & Android solutions", icon: Monitor },
      { title: "Custom Software", desc: "Tailored business tools", icon: Cpu },
    ]
  },
  {
    category: "AI & Automation",
    color: "bg-[#F3E8FF] text-[#7C3AED]",
    items: [
      { title: "AI Integration", desc: "Custom AI solutions & bots", icon: Sparkles },
      { title: "Workflow Automation", desc: "n8n, Zapier integrations", icon: Rocket },
    ],
    subCategory: {
      category: "Marketing",
      color: "bg-[#FFF7E6] text-[#FAAD14]",
      items: [
        { title: "SEO Optimization", desc: "Search engine visibility", icon: Search },
        { title: "Ad Campaigns", desc: "Performance marketing", icon: BarChart3 }
      ]
    }
  },
  {
    category: "Ecommerce Marketplace",
    color: "bg-[#E6FFFA] text-[#00BFA5]",
    items: [
      { title: "Store Setup", desc: "Shopify, Woo, Custom", icon: ShoppingBag },
      { title: "Product Strategy", desc: "Inventory & sales growth", icon: PieChart },
      { title: "Marketplace Management", desc: "Amazon, eBay, Etsy", icon: Globe },
    ]
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const [isResourcesHovered, setIsResourcesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const timeoutRef = useRef<any>(null);
  const portfolioTimeoutRef = useRef<any>(null);
  const resourcesTimeoutRef = useRef<any>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      setIsMobileServicesOpen(false);
      setIsMobilePortfolioOpen(false);
      setIsMobileResourcesOpen(false);
    }
  }, [isMenuOpen]);

  // Reset scroll position when any mobile tab is opened
  useEffect(() => {
    if (isMobileServicesOpen || isMobilePortfolioOpen || isMobileResourcesOpen) {
      if (mobileScrollRef.current) {
        mobileScrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [isMobileServicesOpen, isMobilePortfolioOpen, isMobileResourcesOpen]);

  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesHovered(true);
    setIsPortfolioHovered(false);
    setIsResourcesHovered(false);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
    }, 150);
  };

  const handlePortfolioEnter = () => {
    if (portfolioTimeoutRef.current) clearTimeout(portfolioTimeoutRef.current);
    setIsPortfolioHovered(true);
    setIsServicesHovered(false);
    setIsResourcesHovered(false);
  };

  const handlePortfolioLeave = () => {
    portfolioTimeoutRef.current = setTimeout(() => {
      setIsPortfolioHovered(false);
    }, 150);
  };

  const handleResourcesEnter = () => {
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    setIsResourcesHovered(true);
    setIsServicesHovered(false);
    setIsPortfolioHovered(false);
  };

  const handleResourcesLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setIsResourcesHovered(false);
    }, 150);
  };

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
        <nav className="hidden md:flex items-center gap-8 text-base font-medium tracking-tight h-full">
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <span className={`flex items-center gap-1 cursor-pointer transition-all duration-300 ${isServicesHovered ? "text-[#2DC8E6]" : "opacity-90 hover:opacity-100"}`}>
              Services
              <Chevron active={isServicesHovered} />
            </span>
          </div>

          <div 
            className="relative h-full flex items-center"
            onMouseEnter={handlePortfolioEnter}
            onMouseLeave={handlePortfolioLeave}
          >
            <span className={`flex items-center gap-1 cursor-pointer transition-all duration-300 ${isPortfolioHovered ? "text-[#2DC8E6]" : "opacity-90 hover:opacity-100"}`}>
              Portfolio
              <Chevron active={isPortfolioHovered} />
            </span>
          </div>

          <div 
            className="relative h-full flex items-center"
            onMouseEnter={handleResourcesEnter}
            onMouseLeave={handleResourcesLeave}
          >
            <span className={`flex items-center gap-1 cursor-pointer transition-all duration-300 ${isResourcesHovered ? "text-[#2DC8E6]" : "opacity-90 hover:opacity-100"}`}>
              Resources
              <Chevron active={isResourcesHovered} />
            </span>
          </div>

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

      {/* MEGA MENU & BACKDROP (Desktop) */}
      <AnimatePresence>
        {(isServicesHovered || isPortfolioHovered || isResourcesHovered) && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#073742]/20 backdrop-blur-[2px] z-40 mt-20"
              onMouseEnter={() => {
                setIsServicesHovered(false);
                setIsPortfolioHovered(false);
                setIsResourcesHovered(false);
              }}
            />
            
            {/* Services Mega Menu */}
            {isServicesHovered && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
                className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-2xl py-14 z-50"
              >
                <div className="site-container grid grid-cols-4 gap-12">
                  {servicesData.map((category, idx) => (
                    <div key={idx} className="space-y-10">
                      <div className="space-y-8">
                        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-bold text-[13px] tracking-tight ${category.color}`}>
                          {category.category}
                          <ArrowUpRight size={14} />
                        </div>
                        
                        <ul className="space-y-7">
                          {category.items.map((item, iIdx) => (
                            <li key={iIdx} className="group cursor-pointer">
                              <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                  <h4 className="text-[#073742] font-semibold text-[14px] leading-tight group-hover:text-[#2DC8E6] transition-colors">
                                    {item.title}
                                  </h4>
                                  <p className="text-[#073742]/50 text-[12px] leading-relaxed mt-1">
                                    {item.desc}
                                  </p>
                                </div>
                                <item.icon size={16} className="text-[#073742]/30 group-hover:text-[#2DC8E6] transition-colors mt-0.5 flex-shrink-0" />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {category.subCategory && (
                        <div className="space-y-8 pt-6 border-t border-[#073742]/5">
                          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-bold text-[13px] tracking-tight ${category.subCategory.color}`}>
                            {category.subCategory.category}
                            <ArrowUpRight size={14} />
                          </div>
                          <ul className="space-y-7">
                            {category.subCategory.items.map((item, iIdx) => (
                              <li key={iIdx} className="group cursor-pointer">
                                <div className="flex justify-between items-start gap-4">
                                  <div className="flex-1">
                                    <h4 className="text-[#073742] font-semibold text-[14px] leading-tight group-hover:text-[#2DC8E6] transition-colors">
                                      {item.title}
                                    </h4>
                                    <p className="text-[#073742]/50 text-[12px] leading-relaxed mt-1">
                                      {item.desc}
                                    </p>
                                  </div>
                                  <item.icon size={16} className="text-[#073742]/30 group-hover:text-[#2DC8E6] transition-colors mt-0.5 flex-shrink-0" />
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Portfolio Mega Menu */}
            {isPortfolioHovered && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onMouseEnter={handlePortfolioEnter}
                onMouseLeave={handlePortfolioLeave}
                className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-2xl py-14 z-50"
              >
                <div className="site-container">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 font-bold text-[#073742] text-lg">
                      Our Work
                      <ArrowUpRight size={20} />
                    </div>
                    <a href="/portfolio" className="text-[#073742]/60 hover:text-[#2DC8E6] text-sm font-medium transition-colors flex items-center gap-1">
                      View all projects
                      <ChevronRight size={16} />
                    </a>
                  </div>

                  <div className="grid grid-cols-4 gap-8">
                    {[
                      { title: "Bharathaksha Foundation", category: "tech", image: bharathakshaImg },
                      { title: "Jm Visa", category: "visa", image: jmvisaImg },
                      { title: "Eazy Visas", category: "visas", image: eazyVisasImg },
                      { title: "PathFinder", category: "NGO", image: pathfinderImg }
                    ].map((work, idx) => (
                      <div key={idx} className="group cursor-pointer">
                        <div className="relative h-[180px] rounded-xl overflow-hidden mb-4 bg-gray-100">
                          <img 
                            src={work.image} 
                            alt={work.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <h4 className="text-[#073742] font-semibold text-[15px] group-hover:text-[#2DC8E6] transition-colors">
                          {work.title}
                        </h4>
                        <p className="text-[#073742]/40 text-[13px] mt-1">
                          {work.category}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            {/* Resources Mega Menu */}
            {isResourcesHovered && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onMouseEnter={handleResourcesEnter}
                onMouseLeave={handleResourcesLeave}
                className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-2xl py-14 z-50"
              >
                <div className="site-container grid grid-cols-12 gap-12">
                  {/* Left Sidebar */}
                  <div className="col-span-3 space-y-8 border-r border-[#073742]/5 pr-12">
                    {[
                      { title: "Blog", desc: "Latest articles and insights", icon: FileText },
                      { title: "Customer Stories", desc: "Success stories from our clients", icon: Users },
                      { title: "Guides & Quizzes", desc: "Insights from marketing leaders", icon: BookOpen },
                      { title: "Video Library", desc: "Aneeverse's latest videos", icon: PlayCircle }
                    ].map((item, idx) => (
                      <div key={idx} className="group cursor-pointer flex justify-between items-start gap-3">
                        <div>
                          <h4 className="text-[#073742] font-semibold text-[15px] group-hover:text-[#2DC8E6] transition-colors">{item.title}</h4>
                          <p className="text-[#073742]/40 text-[13px] mt-1">{item.desc}</p>
                        </div>
                        <item.icon size={18} className="text-[#073742]/20 group-hover:text-[#2DC8E6] transition-colors mt-1" />
                      </div>
                    ))}
                  </div>

                  {/* Middle - Blog Samples */}
                  <div className="col-span-5 space-y-8">
                    <div className="flex items-center gap-2 font-bold text-[#073742] text-lg">
                      Blog
                      <ArrowUpRight size={20} />
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                      {[
                        { title: "Agency vs Freelancer vs In-House: 5 Reasons..", image: blogImg1 },
                        { title: "6 Reasons Why In-House Creative Teams Often Mis...", image: blogImg2 }
                      ].map((blog, idx) => (
                        <div key={idx} className="group cursor-pointer">
                          <div className="relative h-[160px] rounded-xl overflow-hidden mb-4 bg-gray-100">
                            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          </div>
                          <h4 className="text-[#073742] font-semibold text-[15px] group-hover:text-[#2DC8E6] transition-colors leading-tight">
                            {blog.title}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right - Customer Story */}
                  <div className="col-span-4 space-y-8">
                    <div className="flex items-center gap-2 font-bold text-[#073742] text-lg">
                      Customer Stories
                      <ArrowUpRight size={20} />
                    </div>
                    <div className="group cursor-pointer">
                      <div className="relative h-[180px] rounded-xl overflow-hidden mb-4 bg-gray-100">
                        <img src={boomiImg} alt="Customer Story" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <h4 className="text-[#073742] font-semibold text-[15px] group-hover:text-[#2DC8E6] transition-colors leading-tight">
                        How Boomi Revitalized Lead Generation by Tripling...
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

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

            {/* MOBILE NAV CONTENT */}
            <div 
              ref={mobileScrollRef}
              className="flex-1 overflow-y-auto no-scrollbar pt-2"
            >
              <nav className="flex flex-col gap-8 text-[18px] font-medium text-[#073742] pb-12">
                {/* SERVICES BLOCK */}
                <div className="space-y-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer border-b border-[#073742]/10 pb-4"
                    onClick={() => {
                      setIsMobileServicesOpen(!isMobileServicesOpen);
                      setIsMobilePortfolioOpen(false);
                      setIsMobileResourcesOpen(false);
                    }}
                  >
                    <span className="text-[#073742] font-semibold">Services</span>
                    <Chevron color="#073742" active={isMobileServicesOpen} />
                  </div>
                  
                  {isMobileServicesOpen && (
                    <div className="py-6 flex flex-col gap-10">
                      {servicesData.map((category, idx) => (
                        <div key={idx} className="space-y-6">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg font-bold text-[12px] tracking-tight ${category.color}`}>
                            {category.category}
                            <ArrowUpRight size={14} />
                          </div>
                          
                          <ul className="space-y-6">
                            {category.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                  <h4 className="text-[#073742] font-semibold text-[14px]">{item.title}</h4>
                                  <p className="text-[#073742]/50 text-[12px] mt-1 leading-snug">{item.desc}</p>
                                </div>
                                <item.icon size={16} className="text-[#073742]/30 mt-0.5" />
                              </li>
                            ))}
                          </ul>

                          {category.subCategory && (
                            <div className="pt-6 border-t border-[#073742]/5 space-y-6">
                              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg font-bold text-[12px] tracking-tight ${category.subCategory.color}`}>
                                {category.subCategory.category}
                                <ArrowUpRight size={14} />
                              </div>
                              <ul className="space-y-6">
                                {category.subCategory.items.map((item, iIdx) => (
                                  <li key={iIdx} className="flex justify-between items-start gap-4">
                                    <div className="flex-1">
                                      <h4 className="text-[#073742] font-semibold text-[14px]">{item.title}</h4>
                                      <p className="text-[#073742]/50 text-[12px] mt-1 leading-snug">{item.desc}</p>
                                    </div>
                                    <item.icon size={16} className="text-[#073742]/30 mt-0.5" />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* PORTFOLIO BLOCK */}
                <div className="space-y-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer border-b border-[#073742]/10 pb-4"
                    onClick={() => {
                      setIsMobilePortfolioOpen(!isMobilePortfolioOpen);
                      setIsMobileServicesOpen(false);
                      setIsMobileResourcesOpen(false);
                    }}
                  >
                    <span className="text-[#073742] font-semibold">Portfolio</span>
                    <Chevron color="#073742" active={isMobilePortfolioOpen} />
                  </div>
                </div>

                {/* RESOURCES BLOCK */}
                <div className="space-y-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer border-b border-[#073742]/10 pb-4"
                    onClick={() => {
                      setIsMobileResourcesOpen(!isMobileResourcesOpen);
                      setIsMobileServicesOpen(false);
                      setIsMobilePortfolioOpen(false);
                    }}
                  >
                    <span className="text-[#073742] font-semibold">Resources</span>
                    <Chevron color="#073742" active={isMobileResourcesOpen} />
                  </div>
                  
                  {isMobileResourcesOpen && (
                    <div className="py-8 flex flex-col gap-12">
                      <div className="flex flex-col gap-8">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col gap-1">
                            <span className="text-[#073742] font-bold text-[16px]">Blog</span>
                            <span className="text-[#073742]/50 text-[13px]">Latest articles and insights</span>
                          </div>
                          <FileText size={20} className="text-[#073742]/30" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col gap-1">
                            <span className="text-[#073742] font-bold text-[16px]">Customer Stories</span>
                            <span className="text-[#073742]/50 text-[13px]">Success stories from our clients</span>
                          </div>
                          <Users size={20} className="text-[#073742]/30" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col gap-1">
                            <span className="text-[#073742] font-bold text-[16px]">Guides & Quizzes</span>
                            <span className="text-[#073742]/50 text-[13px]">Insights from marketing leaders</span>
                          </div>
                          <BookOpen size={20} className="text-[#073742]/30" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col gap-1">
                            <span className="text-[#073742] font-bold text-[16px]">Video Library</span>
                            <span className="text-[#073742]/50 text-[13px]">Aneeverse's latest videos</span>
                          </div>
                          <PlayCircle size={20} className="text-[#073742]/30" />
                        </div>
                      </div>

                      <div className="space-y-6 pt-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-[#073742] font-black text-lg">Blog</h3>
                          <ArrowUpRight size={20} className="text-[#073742]" />
                        </div>
                        <div className="flex flex-col gap-8">
                          <div className="group space-y-3">
                            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-[#073742]/5">
                              <img src={blogImg1} alt="Agency vs Freelancer" className="w-full h-full object-cover" />
                            </div>
                            <h4 className="text-[#073742] font-bold text-[15px] leading-tight">Agency vs Freelancer vs In-House: 5 Reasons Why...</h4>
                          </div>
                          <div className="group space-y-3">
                            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-[#073742]/5">
                              <img src={blogImg2} alt="Creative Teams" className="w-full h-full object-cover" />
                            </div>
                            <h4 className="text-[#073742] font-bold text-[15px] leading-tight">6 Reasons Why In-House Creative Teams Often Misunderstand...</h4>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6 pt-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-[#073742] font-black text-lg">Customer Stories</h3>
                          <ArrowUpRight size={20} className="text-[#073742]" />
                        </div>
                        <div className="group space-y-3">
                          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-[#073742]/5">
                            <img src={boomiImg} alt="Boomi Case Study" className="w-full h-full object-cover" />
                          </div>
                          <h4 className="text-[#073742] font-bold text-[15px] leading-tight">How Boomi Revitalized Lead Generation by Tripling Conversion Rates</h4>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* PRICING LINK */}
                <div className="flex items-center justify-between cursor-pointer border-b border-[#073742]/10 pb-4">
                  <span className="text-[#073742] font-semibold">Pricing</span>
                </div>

                {/* MOBILE CTA BUTTONS (Now part of the scroll flow) */}
                <div className="flex flex-col gap-4 pt-4 pb-12">
                  <button className="w-full bg-[#073742] text-[#EBFAFE] py-4 rounded-[20px] text-lg font-bold shadow-lg">
                    Book a Call
                  </button>
                  <button className="w-full border border-[#073742]/20 text-[#073742] py-4 rounded-[20px] text-lg font-semibold bg-white/50">
                    Sign In
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* Chevron Icon */
function Chevron({ color, active }: { color?: string, active?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-all duration-300 ${active ? "rotate-180 opacity-100" : "opacity-70"} mt-[1px]`}
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


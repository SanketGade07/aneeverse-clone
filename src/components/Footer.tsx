import { useState } from 'react';
import { Instagram, Linkedin, Youtube, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import footerBg from '../assets/footer/footer2.avif';

const Footer = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const footerData = {
    services: [
      {
        title: "Creative Design",
        links: ["Ad Creative", "Presentation Design", "Branding System & Merchandise", "Ebook, Report & Print Design"]
      },
      {
        title: "Specialized Solutions",
        links: ["Platform Development", "UI, UX & Web Development", "Copywriting", "SEO & Blog Writing"]
      },
      {
        title: "AI & Automation",
        links: ["AI SEO (GEO) (AEO) (AIO)", "n8n Workflows", "Sales & Marketing Automation"]
      },
      {
        title: "Marketing",
        links: ["Marketing Strategy", "Email Design & Campaign"]
      }
    ],
    navigation: [
      {
        title: "Company",
        links: ["About Us", "Our Team", "Pricing", "Contact Us"]
      },
      {
        title: "Resources",
        links: ["Blog", "Customer Stories", "Our Works", "FAQ"]
      }
    ]
  };
  return (
    <footer className="relative w-full overflow-hidden bg-[#073742] text-white">
      {/* Background Image with Overlay */}
      <div className="absolute top-0 left-0 w-full h-[1200px] lg:h-full z-0 overflow-hidden">
        <img 
          src={footerBg} 
          alt="Footer Background" 
          className="w-full h-full object-cover opacity-60 lg:opacity-50 object-[center_30%] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#073742]/40 to-[#073742]"></div>
      </div>
      <div className="relative z-10 site-container pt-24 pb-12">
        {/* Top Section: CTA */}
        <div className="text-center mb-8">
          {/* h2: 48px Inter, sans-serif, color #FFFFFF, margin-bottom 32px */}
          <h2 
            className="font-sans text-2xl md:text-3xl lg:text-4xl 2xl:text-[48px] font-medium mb-4 md:mb-6 lg:mb-8 text-white italic"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            DESIGN, OPTIMIZE, ADVERTISE
          </h2>
          {/* span: 36px Rock Salt, cursive, color #F8923C, margin 8px 0px 0px */}
          <span 
            className="font-accent text-xl md:text-2xl lg:text-3xl xl:text-4xl block text-orange-400"
            style={{ color: '#F8923C', fontFamily: '"Rock Salt", cursive', margin: '8px 0px 0px' }}
          >
            WE GOT YOU COVERED.
          </span>
        </div>
        {/* Get Started Button */}
        <div className="flex justify-center mb-16">
          <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-10 rounded-full hover:bg-white hover:text-[#073742] transition-all duration-300 tracking-widest uppercase text-sm">
            GET STARTED
          </button>
        </div>
        {/* Middle Section: Links Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-12 gap-8">
          {/* Services Section - 8 columns */}
          <div className="lg:col-span-8">
            <h3 
              className="text-lg border-b pb-1 border-gray-200 font-semibold mb-4"
              style={{ fontFamily: 'Poppins, "Poppins Fallback"', fontSize: '18px' }}
            >
              Services
            </h3>
            
            <div className="grid grid-cols-2 gap-x-16 gap-y-8">
              <div className="space-y-8">
                {[footerData.services[0], footerData.services[2]].map((service, idx) => (
                  <div key={idx}>
                    <a 
                      href="#" 
                      className="font-medium mb-2 block text-white hover:text-[#2DC8E6] transition-colors inline-flex items-center gap-1"
                      style={{ fontFamily: 'Poppins, "Poppins Fallback"', fontSize: '16px' }}
                    >
                      {service.title}
                      <ArrowUpRight size={16} className="text-white" />
                    </a>
                    <ul className="space-y-2">
                      {service.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <a 
                            href="#" 
                            className="text-white/70 hover:text-white transition-colors"
                            style={{ fontFamily: 'Poppins, "Poppins Fallback"', fontSize: '14px' }}
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="space-y-8">
                {[footerData.services[1], footerData.services[3]].map((service, idx) => (
                  <div key={idx}>
                    <a 
                      href="#" 
                      className="font-medium mb-2 block text-white hover:text-[#2DC8E6] transition-colors inline-flex items-center gap-1"
                      style={{ fontFamily: 'Poppins, "Poppins Fallback"', fontSize: '16px' }}
                    >
                      {service.title}
                      <ArrowUpRight size={16} className="text-white" />
                    </a>
                    <ul className="space-y-2">
                      {service.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <a 
                            href="#" 
                            className="text-white/70 hover:text-white transition-colors"
                            style={{ fontFamily: 'Poppins, "Poppins Fallback"', fontSize: '14px' }}
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Navigation Section - 4 columns */}
          <div className="lg:col-span-4">
            <h3 
              className="text-lg border-b pb-1 border-gray-200 font-semibold mb-4"
              style={{ fontFamily: 'Poppins, "Poppins Fallback"', fontSize: '18px' }}
            >
              Navigation
            </h3>
            
            <div className="grid grid-cols-2 gap-8">
              {footerData.navigation.map((nav, idx) => (
                <div key={idx}>
                  <h4 
                    className="font-medium mb-2 text-white"
                    style={{ fontFamily: 'Poppins, "Poppins Fallback"', fontSize: '16px' }}
                  >
                    {nav.title}
                  </h4>
                  <ul className="space-y-2">
                    {nav.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <a 
                          href="#" 
                          className="text-white/70 hover:text-white transition-colors"
                          style={{ fontFamily: 'Poppins, "Poppins Fallback"', fontSize: '14px' }}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Accordion Section */}
        <div className="lg:hidden space-y-4">
          {/* Services Accordion */}
          <div className="border-b border-white/10">
            <button 
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex justify-between items-center py-4 text-white font-medium"
              style={{ fontFamily: 'Poppins, "Poppins Fallback"', fontSize: '18px' }}
            >
              Services
              {servicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pb-6"
                >
                  <div className="space-y-8">
                    {footerData.services.map((service, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-white mb-4" style={{ fontSize: '16px' }}>{service.title}</h4>
                        <ul className="space-y-3">
                          {service.links.map((link, lIdx) => (
                            <li key={lIdx}>
                              <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">{link}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Accordion */}
          <div className="border-b border-white/10">
            <button 
              onClick={() => setNavigationOpen(!navigationOpen)}
              className="w-full flex justify-between items-center py-4 text-white font-medium"
              style={{ fontFamily: 'Poppins, "Poppins Fallback"', fontSize: '18px' }}
            >
              Navigation
              {navigationOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <AnimatePresence>
              {navigationOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pb-6"
                >
                  <div className="grid grid-cols-2 gap-8">
                    {footerData.navigation.map((nav, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-white mb-4" style={{ fontSize: '16px' }}>{nav.title}</h4>
                        <ul className="space-y-3">
                          {nav.links.map((link, lIdx) => (
                            <li key={lIdx}>
                              <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">{link}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* Bottom Section: Branding & Social */}
        <div className="mt-12 lg:mt-16 pt-8 lg:border-t lg:border-white/20">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8 lg:gap-8">
            <div className="text-center lg:text-left space-y-2 order-1">
              <h2 
                className="text-[40px] lg:text-5xl font-bold tracking-tight text-white mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                aneeverse
              </h2>
              <p className="text-white/50 text-[10px] lg:text-xs tracking-wider uppercase font-medium">
                © 2025 Aneeverse. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-6 order-2 lg:order-2">
              <div className="flex flex-wrap justify-center gap-4 lg:gap-6 items-center">
                {["Privacy Policy", "Terms of Service", "Status page", "DMCA"].map((item, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="text-white/60 hover:text-white text-[12px] lg:text-sm transition-colors"
                    style={{ fontFamily: 'Poppins, "Poppins Fallback"' }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              
              <div className="flex gap-4 lg:gap-3 justify-center">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Youtube, href: "#" }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    className="w-10 h-10 lg:w-10 lg:h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white text-white hover:text-[#073742] transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
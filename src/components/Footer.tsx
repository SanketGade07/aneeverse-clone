import React from 'react';
import { Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import footerBg from '../assets/footer/footer2.avif';
const Footer: React.FC = () => {
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
      <div className="absolute inset-0 z-0">
        <img 
          src={footerBg} 
          alt="Footer Background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[#073742]/50"></div>
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
        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Services Section - 8 columns */}
          <div className="lg:col-span-8">
            {/* Services heading: 18px Poppins, border-bottom, padding-bottom 4px, margin-bottom 16px */}
            <h3 
              className="text-lg border-b pb-1 border-gray-200 font-semibold mb-4"
              style={{ fontFamily: 'Poppins, "Poppins Fallback"', fontSize: '18px' }}
            >
              Services
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {/* Left Column: Creative Design + AI & Automation */}
              <div className="space-y-8">
                {[footerData.services[0], footerData.services[2]].map((service, idx) => (
                  <div key={idx}>
                    {/* Category title: 16px Poppins, white, margin-bottom 8px */}
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
              {/* Right Column: Specialized Solutions + Marketing */}
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
        {/* Bottom Section: Branding & Social */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <h2 
                className="text-4xl md:text-5xl font-bold tracking-tight text-white"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                aneeverse
              </h2>
              <p className="text-white/50 text-xs tracking-wider">
                © 2025 Aneeverse. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex gap-6 flex-wrap items-center">
                {["Privacy Policy", "Terms of Service", "Status page", "DMCA"].map((item, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="text-white/60 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: 'Poppins, "Poppins Fallback"' }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Youtube, href: "#" }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white text-white hover:text-[#073742] transition-all duration-300"
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
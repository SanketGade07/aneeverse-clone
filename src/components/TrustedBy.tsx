import abhiImg from "../assets/abhi.avif";
import { PenTool, Clock, DollarSign, Headphones } from "lucide-react";

// Importing logos from the assets folder
import logo1 from "../assets/trust-company-logo/NishaRoadwayslogo8.avif";
import logo2 from "../assets/trust-company-logo/TigerTerrainlogo4.avif";
import logo3 from "../assets/trust-company-logo/aomnilogo10.avif";
import logo4 from "../assets/trust-company-logo/bharathakshafoundashionlogo11.avif";
import logo5 from "../assets/trust-company-logo/gilmoreoaklogo2.avif";
import logo6 from "../assets/trust-company-logo/mesmerizeindialogo5.avif";
import logo7 from "../assets/trust-company-logo/novinologo6.avif";
import logo8 from "../assets/trust-company-logo/opusclip7.avif";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

export default function TrustedBy() {
  return (
    <section className="bg-[#031418] pt-16 pb-32 overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0A3D48]/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="site-container">
        {/* Trusted By Heading */}
        <p className="text-[#FFFFFFE6] text-sm sm:text-base md:text-lg font-bold mb-6 tracking-tight">
          Trusted by the world's fastest growing startups and established brands.
        </p>

        {/* Infinite Scrolling Logos */}
        <div className="relative w-full overflow-hidden mb-8 lg:mb-32">
          <div className="flex animate-infinite-scroll whitespace-nowrap items-center w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center px-8 opacity-70 hover:opacity-100 transition-opacity duration-500"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-[36px] w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-only Horizontal Line */}
        <div className="lg:hidden w-full border-t border-white/20 mb-12" />





        {/* Bottom Text Section */}
        <div className="flex flex-col items-center text-center relative z-10 mb-10 sm:mb-12">
          <span className="text-[#88D7F0] text-xs sm:text-sm font-medium tracking-tight mb-4 uppercase">
            Human Creativity Supported by AI
          </span>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight max-w-3xl mx-auto tracking-tight">
            Real Minds, Smart<br className="hidden sm:block" />
            Tools, Exceptional<br className="hidden sm:block" />
            Design
          </h2>
        </div>

        {/* FEATURES GRID */}
        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 max-w-[1200px] mx-auto">
          {/* Main Quality Card - Left Side (1 Column) */}
          <div className="lg:col-span-1 bg-[#072d36] hover:bg-[#093540] rounded-[24px] p-8 flex flex-col border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] h-[544px] group cursor-pointer">
            <div className="flex flex-col h-full">
              <div className="relative h-[340px] w-full mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={abhiImg} 
                  alt="Quality guaranteed" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#FFFFFF] text-lg sm:text-xl lg:text-2xl font-bold mb-3 leading-tight">
                  Quality guaranteed by talent and process
                </h4>
                <p className="text-[#D1D5DB] text-xs sm:text-sm lg:text-base leading-relaxed">
                  Vetted creatives supported by processes and AI tools to deliver every time.
                </p>
              </div>
            </div>
          </div>

          {/* Utility Cards - Right Side (2 Columns in 2x2 Grid) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#072d36] hover:bg-[#093540] rounded-[24px] p-8 border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] flex flex-col h-[260px] group cursor-pointer">
              <div className="mb-6">
                <PenTool className="text-white w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#FFFFFF] text-lg sm:text-xl lg:text-2xl font-bold mb-3 leading-tight">
                  Spin up a creative team fast
                </h4>
                <p className="text-[#D1D5DB] text-xs sm:text-sm lg:text-base leading-relaxed">
                  Low complexity to build from scratch or plug into your current team.
                </p>
              </div>
            </div>

            <div className="bg-[#072d36] hover:bg-[#093540] rounded-[24px] p-8 border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] flex flex-col h-[260px] group cursor-pointer">
              <div className="mb-6">
                <Clock className="text-white w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#FFFFFF] text-lg sm:text-xl lg:text-2xl font-bold mb-3 leading-tight">
                  Reliable turnarounds
                </h4>
                <p className="text-[#D1D5DB] text-xs sm:text-sm lg:text-base leading-relaxed">
                  Average 24-hour first drafts, handled with consistency and care.
                </p>
              </div>
            </div>

            <div className="bg-[#072d36] hover:bg-[#093540] rounded-[24px] p-8 border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] flex flex-col h-[260px] group cursor-pointer">
              <div className="mb-6">
                <DollarSign className="text-white w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#FFFFFF] text-lg sm:text-xl lg:text-2xl font-bold mb-3 leading-tight">
                  Transparent pricing
                </h4>
                <p className="text-[#D1D5DB] text-xs sm:text-sm lg:text-base leading-relaxed">
                   Build a subscription that matches your current demands.
                </p>
              </div>
            </div>

            <div className="bg-[#072d36] hover:bg-[#093540] rounded-[24px] p-8 border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] flex flex-col h-[260px] group cursor-pointer">
              <div className="mb-6">
                <Headphones className="text-white w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#FFFFFF] text-lg sm:text-xl lg:text-2xl font-bold mb-3 leading-tight">
                  Human support, always on
                </h4>
                <p className="text-[#D1D5DB] text-xs sm:text-sm lg:text-base leading-relaxed">
                  Never get stuck on a request. Our support team is here 24/5 to support you and your success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Abhi Card + 2x2 Grid Side by Side Horizontal Scroll */}
        <div className="lg:hidden relative z-10 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4">
          <div className="flex gap-4 w-max">
            {/* Abhi Card */}
            <div className="flex-shrink-0 w-[300px] min-h-[420px] bg-[#072d36] rounded-xl p-6 flex flex-col border border-white/5 snap-center">
              <div className="relative h-[220px] w-full mb-4 overflow-hidden rounded-lg">
                <img 
                  src={abhiImg} 
                  alt="Quality guaranteed" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#FFFFFF] text-[20px] font-bold mb-3 leading-tight">
                  Quality guaranteed by talent and process
                </h3>
                <p className="text-gray-300 text-[14px] leading-relaxed">
                  Vetted creatives supported by processes and AI tools to deliver every time.
                </p>
              </div>
            </div>

            {/* Utility Cards - Vertical Stack in Horizontal Scroll */}
            <div className="flex-shrink-0 flex flex-col gap-4 snap-center">
              {/* Utility Card 1 */}
              <div className="w-[300px] h-[200px] bg-[#072d36] rounded-xl p-6 flex flex-col items-start border border-white/5">
                <div className="mb-3">
                  <PenTool className="text-white w-8 h-8" />
                </div>
                <h4 className="text-[#FFFFFF] text-[18px] font-bold mb-3 leading-tight">
                  Spin up a creative team fast
                </h4>
                <p className="text-gray-300 text-[12px] leading-relaxed">
                  Low complexity to build from scratch or plug into your current team.
                </p>
              </div>

              {/* Utility Card 2 */}
              <div className="w-[300px] h-[200px] bg-[#072d36] rounded-xl p-6 flex flex-col items-start border border-white/5">
                <div className="mb-3">
                  <Clock className="text-white w-8 h-8" />
                </div>
                <h4 className="text-[#FFFFFF] text-[18px] font-bold mb-3 leading-tight">
                  Reliable turnarounds
                </h4>
                <p className="text-gray-300 text-[12px] leading-relaxed">
                  Average 24-hour first drafts, handled with consistency and care.
                </p>
              </div>
            </div>

            {/* Utility Cards - Second Column */}
            <div className="flex-shrink-0 flex flex-col gap-4 snap-center">
              {/* Utility Card 3 */}
              <div className="w-[300px] h-[200px] bg-[#072d36] rounded-xl p-6 flex flex-col items-start border border-white/5">
                <div className="mb-3">
                  <DollarSign className="text-white w-8 h-8" />
                </div>
                <h4 className="text-[#FFFFFF] text-[18px] font-bold mb-3 leading-tight">
                  Transparent pricing
                </h4>
                <p className="text-gray-300 text-[12px] leading-relaxed">
                  Build a subscription that matches your current demands.
                </p>
              </div>

              {/* Utility Card 4 */}
              <div className="w-[300px] h-[200px] bg-[#072d36] rounded-xl p-6 flex flex-col items-start border border-white/5">
                <div className="mb-3">
                  <Headphones className="text-white w-8 h-8" />
                </div>
                <h4 className="text-[#FFFFFF] text-[18px] font-bold mb-3 leading-tight">
                  Human support, always on
                </h4>
                <p className="text-gray-300 text-[12px] leading-relaxed">
                  Never get stuck on a request. Our support team is here 24/5.
                </p>
              </div>
            </div>





          </div>
        </div>





      </div>
    </section>
  );
}


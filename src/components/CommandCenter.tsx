import card1Img from "../assets/command-center/1card.avif";
import card2Img from "../assets/command-center/2card.avif";
import card3Img from "../assets/command-center/3card.avif";
import card4Img from "../assets/command-center/5card.avif";

const CommandCenter = () => {
  const cards = [
    {
      number: "1",
      title: "Submit your idea",
      description: "Use our simple request form to submit a project from ad banners to brand refreshes. Upload assets, set context, and hit go.",
      image: card1Img,
    },
    {
      number: "2",
      title: "Track in real-time",
      description: "Monitor progress and adjust priorities so your creative team is always working on what's important.",
      image: card2Img,
    },
    {
      number: "3",
      title: "Collaborate & review",
      description: "Comment directly in the platform or connect via Slack. Revisions are tracked, versioned, and easy to manage.",
      image: card3Img,
    },
  ];

  return (
    <section className="bg-[#03151a] py-20 relative overflow-hidden">
      <div className="site-container">
        <div className="flex flex-col items-center text-center">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-white font-bw-gradual font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-[1.1]">
              YOUR{" "}
              <span className="font-accent text-[#2DC8E6] normal-case text-[0.6em] relative -top-2 sm:-top-4 inline-block transform -rotate-3 mx-2">
                Creative
              </span>
              <br className="sm:hidden" />
              COMMAND CENTER
            </h2>
          </div>
          
          <button className="relative overflow-hidden inline-block px-10 py-4 rounded-full font-bold text-base transition-transform hover:scale-105 mb-20" 
            style={{ backgroundColor: "rgb(136, 215, 240)", color: "rgb(7, 55, 66)" }}>
            GET STARTED
          </button>
        </div>

        {/* Desktop View: Grid Layout */}
        <div className="hidden md:block">
          {/* Row 1: Cards 1, 2, 3 */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="group bg-[#07242e] rounded-[32px] p-8 flex flex-col items-center border border-white/5 transition-all duration-300 hover:bg-[#072d38] cursor-pointer w-[390.66px] h-[420.25px]"
              >
                <div className="mb-6 rounded-2xl overflow-hidden w-full flex justify-center">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-[326.66px] h-[220px] object-contain transition-transform duration-500" 
                  />
                </div>
                <div className="mt-auto w-full text-left">
                  <h3 className="text-white font-bw-gradual font-bold text-2xl mb-3">
                    {card.number}. {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-poppins">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Card 4 Text and Image */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-[#07242e] rounded-[32px] p-12 border border-white/5 transition-all duration-300 hover:bg-[#072d38] cursor-pointer text-left w-[496.33px] h-[364px] flex flex-col justify-center">
              <h3 className="text-white font-bw-gradual font-bold text-3xl mb-6 leading-tight">
                4. Final files delivered,<br />manageable, sharable
              </h3>
              <p className="text-gray-400 text-base leading-relaxed font-poppins">
                Download layered source files and ready-to-go assets—organized and delivered where and how you need them.
              </p>
            </div>

            <div className="bg-[#07242e] rounded-[32px] p-8 flex items-center justify-center border border-white/5 transition-all duration-300 hover:bg-[#072d38] cursor-pointer w-[707.68px] h-[364px]">
              <div className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
                <img 
                  src={card4Img} 
                  alt="Final files delivered" 
                  className="w-[643.67px] h-[300px] object-contain transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 gap-5">
            {/* Cards 1, 2, 3 */}
            {cards.map((card, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[85vw] snap-center bg-[#07242e] rounded-[32px] p-6 flex flex-col border border-white/5"
              >
                <div className="mb-6 rounded-2xl overflow-hidden w-full flex justify-center bg-[#0a2f3b]/50 p-4">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-[200px] object-contain" 
                  />
                </div>
                <div className="mt-auto w-full text-left">
                  <h3 className="text-white font-bw-gradual font-bold text-xl mb-3">
                    {card.number}. {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-poppins">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Card 4 - Combined Text and Image for Mobile */}
            <div className="flex-shrink-0 w-[85vw] snap-center bg-[#07242e] rounded-[32px] p-6 flex flex-col border border-white/5">
              <div className="mb-6 rounded-2xl overflow-hidden w-full flex justify-center bg-[#0a2f3b]/50 p-4">
                <img 
                  src={card4Img} 
                  alt="Final files delivered" 
                  className="w-full h-[200px] object-contain" 
                />
              </div>
              <div className="mt-auto w-full text-left">
                <h3 className="text-white font-bw-gradual font-bold text-xl mb-3">
                  4. Final files delivered, manageable, sharable
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-poppins">
                  Download layered source files and ready-to-go assets—organized and delivered where and how you need them.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommandCenter;

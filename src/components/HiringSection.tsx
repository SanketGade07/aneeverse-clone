import aneeverseLogo from "../assets/aneeverse-logo.svg";

const CheckIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-current shrink-0">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-current opacity-20 shrink-0">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HiringSection = () => {
  const comparisonData = [
    {
      type: "Aneeverse",
      description: "Work with the top 1% of global creative talent, recruited from the best brands and agencies.",
      features: [true, true, true, true, true],
      highlight: true
    },
    {
      type: "In-house team",
      description: "In-house teams don't always have the skill mix or bandwidth to handle every request that the business needs.",
      features: [false, false, true, true, false]
    },
    {
      type: "Creative agencies",
      description: "Working with full-scale creative agencies can be slow, costly, and inflexible.",
      features: [false, false, true, true, false]
    },
    {
      type: "Freelancers",
      description: "Freelancers can be unreliable and hard to scale, leading to inconsistent work and questionable quality.",
      features: [false, false, true, true, true]
    },
    {
      type: "Self-service tools",
      description: "These solutions make incremental improvements to capacity, and work mostly for simpler, repetitive tasks.",
      features: [false, false, true, true, false]
    }
  ];

  const headers = ["SPEED", "FLEXIBILITY", "QUALITY", "SCALABILITY", "COST-EFFECTIVENESS"];

  return (
    <section className="bg-[#03151a] py-20 relative overflow-hidden">
      <div className="site-container">
        {/* Mobile Header (Simplified for Screenshot Match) */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-20 px-4">
          <h3 className="text-gray-400 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold mb-4">
            BUILT FOR YOU
          </h3>
          
          <h2 className="text-white font-bw-gradual font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[72px] mb-8 md:mb-12 tracking-tighter uppercase leading-[1.1] max-w-5xl">
            HIRING OR TRADITIONAL OUTSOURCING?{" "}
            <span className="font-accent text-[#FC83E1] normal-case text-[0.6em] relative -top-2 md:-top-5 inline-block transform -rotate-3 ml-1">
              Neither
            </span>
          </h2>
          
          <button className="relative overflow-hidden inline-block px-8 py-3.5 rounded-full font-bold text-sm md:text-base transition-transform hover:scale-105" 
            style={{ backgroundColor: "rgb(136, 215, 240)", color: "rgb(7, 55, 66)" }}>
            GET STARTED
          </button>
        </div>

        {/* Mobile View Table (md:hidden) */}
        <div className="md:hidden w-full px-4 mt-4">
          <div className="bg-[#07242e] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
            {/* Mobile Table Header */}
            <div className="bg-black/60 h-[36px] px-4 flex items-center border-b border-white/10">
              <div className="w-[38%] flex justify-start">
                <img src={aneeverseLogo} alt="Logo" className="w-4 h-4 opacity-100 brightness-125" />
              </div>
              <div className="flex-1 grid grid-cols-5 h-full">
                {["SPEED", "FLEX", "QUALITY", "SCALE", "COST"].map((h) => (
                  <div key={h} className="text-[#9CA3AF] text-[7px] font-bold tracking-tight flex items-center justify-center text-center">
                    {h === "QUALITY" ? "QUAL" : (h === "SCALABILITY" ? "SCALE" : h)}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Rows */}
            {comparisonData.map((row) => (
              <div 
                key={row.type} 
                className={`${row.highlight ? 'bg-[#8dd7e8] text-[#073742]' : 'bg-transparent text-white border-b border-white/5 last:border-0'} flex items-center h-[44px] px-4`}
              >
                {/* Type Column */}
                <div className="w-[38%] pr-2">
                  <h4 className={`font-bold text-[10px] leading-tight truncate px-1`}>
                    {row.type}
                  </h4>
                </div>

                {/* Icons Grid */}
                <div className="flex-1 grid grid-cols-5 h-full">
                  {row.features.map((f, i) => (
                    <div key={i} className="flex justify-center items-center">
                      <div className="scale-[0.45]">
                        {f ? (
                          <div className={row.highlight ? 'text-[#073742]' : 'text-[#88D7F0]'}>
                            <CheckIcon />
                          </div>
                        ) : <CrossIcon />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Desktop Comparison Table (hidden md:block) */}
        <div className="hidden md:block w-full overflow-x-auto">
          <div className="min-w-[1000px] lg:min-w-[1200px] bg-[#071c22] rounded-[32px] overflow-hidden border border-white/5">
            {/* Table Header */}
            <div className="bg-black py-4 sm:py-6 px-3 sm:px-10 flex items-center border-b border-gray-800">
              <div className="w-[35%] flex items-center gap-3">
                <div className="flex items-center justify-center">
                   <img src={aneeverseLogo} alt="Logo" className="w-8 h-8 md:w-10 md:h-10 brightness-125 contrast-125" />
                </div>
              </div>
              <div className="flex-1 grid grid-cols-5 items-center">
                {headers.map((header) => (
                  <div key={header} className="text-[#9CA3AF] text-[10px] sm:text-xs font-bold tracking-widest text-center px-2 leading-tight">
                    {header}
                  </div>
                ))}
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row) => (
              <div 
                key={row.type} 
                className={`${row.highlight ? 'bg-[#8dd7e8] text-[#073742]' : 'bg-[#07242e] text-white border-b border-white/5'} flex items-stretch transition-colors duration-300 min-h-[156px]`}
              >
                {/* Information Column */}
                <div className={`w-[35%] p-3 sm:p-8 flex items-center gap-2 sm:gap-6 border-r ${row.highlight ? 'border-[#073742]/10' : 'border-white/10'}`}>
                   <div className={`${row.highlight ? 'bg-[#073742]/10 text-[#073742]' : 'bg-white/5 text-white'} p-2 sm:p-3 md:p-4 rounded-xl shrink-0 w-[62px] h-[62px] flex items-center justify-center`}>
                      {row.type === "Aneeverse" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                      {row.type === "In-house team" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                      {row.type === "Creative agencies" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>}
                      {row.type === "Freelancers" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="16" y1="11" x2="22" y2="11"/></svg>}
                      {row.type === "Self-service tools" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>}
                   </div>
                   <div className="flex flex-col justify-center">
                     <h4 className="font-bold text-lg sm:text-xl md:text-2xl mb-1 leading-tight">{row.type}</h4>
                     <p className={`text-xs sm:text-sm ${row.highlight ? 'text-[#073742]/80' : 'text-gray-400'} max-w-[380px]`}>{row.description}</p>
                   </div>
                </div>

                {/* Features Columns */}
                <div className="flex-1 grid grid-cols-5">
                  {row.features.map((f, i) => (
                    <div key={i} className={`flex justify-center items-center border-r ${row.highlight ? 'border-[#073742]/10' : 'border-white/10'} last:border-0`}>
                      {f ? (
                        <div className={row.highlight ? 'text-[#073742]' : 'text-[#88D7F0]'}>
                          <CheckIcon />
                        </div>
                      ) : <CrossIcon />}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HiringSection;

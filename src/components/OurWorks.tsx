import bharathakshaImg from "../assets/our-works/bharathaksha.avif";
import jmvisaImg from "../assets/our-works/jmvisa.avif";
import eazyVisasImg from "../assets/our-works/eazy-visas.avif";
import pathfinderImg from "../assets/our-works/pathfinder.avif";
import boomiImg from "../assets/our-works/boomi.avif";

const OurWorks = () => {
  const works = [
    {
      title: "Bharathaksha Foundation",
      category: "Website Develpment",
      image: bharathakshaImg,
      colSpan: "lg:col-span-2",
    },
    {
      title: "Jm Visa",
      category: "web design , visa, host",
      image: jmvisaImg,
      colSpan: "lg:col-span-1",
    },
    {
      title: "Eazy Visas",
      category: "website, blogs",
      image: eazyVisasImg,
      colSpan: "lg:col-span-1",
    },
    {
      title: "PathFinder",
      category: "Print Design",
      image: pathfinderImg,
      colSpan: "lg:col-span-1",
    },
    {
      title: "Boomi",
      category: "Growth, Consulting",
      image: boomiImg,
      colSpan: "lg:col-span-1",
    },
  ];

  return (
    <section className="bg-[#03151a] py-20 relative overflow-hidden">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex-1 text-left">
            <h3 className="text-[#9CA3AF] text-xs sm:text-sm tracking-[0.2em] uppercase font-bold mb-4 font-sans">
              OUR WORKS
            </h3>
            
            <h2 className="text-white font-bw-gradual font-extrabold text-3xl sm:text-4xl md:text-[60px] leading-[1.1] tracking-tighter uppercase px-0">
              SEE OUR{" "}
              <span className="font-accent text-[#FF6B00] normal-case text-[0.7em] relative -top-2 inline-block transform -rotate-2 ml-2">
                Top Works
              </span>
            </h2>
          </div>
          
          <div className="shrink-0">
            <button className="px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-transform hover:scale-105" 
              style={{ backgroundColor: "rgb(136, 215, 240)", color: "rgb(7, 55, 66)" }}>
              Explore all our works
            </button>
          </div>
        </div>

        {/* Desktop View: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {works.map((work, index) => (
            <div key={index} className={`group cursor-pointer ${work.colSpan}`}>
              <div className="relative h-[350px] rounded-2xl overflow-hidden mb-6 bg-white/5">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-left">
                <h3 className="text-white italic text-xl sm:text-2xl font-normal mb-1 font-serif">
                  {work.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm font-sans font-normal lowercase first-letter:uppercase">
                  {work.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-6 px-6 gap-6 scroll-smooth">
            {works.map((work, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[300px] snap-center group cursor-pointer"
              >
                <div className="relative h-[380px] rounded-2xl overflow-hidden mb-6 bg-white/5">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-white italic text-xl font-normal mb-1 font-serif">
                    {work.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm font-sans font-normal lowercase first-letter:uppercase">
                    {work.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurWorks;

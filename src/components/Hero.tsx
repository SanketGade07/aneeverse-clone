import ScrollingGrid from "./ScrollingGrid";

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:overflow-hidden pb-12 lg:pb-0">
      {/* CONTENT */}
      <div className="site-container pt-24 md:pt-40 lg:pt-60 pb-8 lg:pb-32 relative z-20 flex flex-col items-center lg:items-start lg:block">

        <div className="max-w-xl text-center lg:text-left">
          {/* DESIGN / OPTIMIZE / ADVERTISE */}
          <h2
            className="
              font-bw-gradual
              text-[28px] md:text-[36px] lg:text-[42px]
              font-bold
              tracking-[0.02em]
              leading-[1.2]
              text-[#EBFAFE]
              mb-2 lg:mb-0
              lg:whitespace-nowrap
            "
          >
            DESIGN, OPTIMIZE, ADVERTISE
          </h2>

          {/* WE GOT YOU COVERED */}
          <h1 className="mt-2 lg:mt-4 overflow-visible">
            <span
              className="
                font-accent
                text-[20px] md:text-[32px] lg:text-4xl xl:text-display-xl
                font-bold lg:font-bold
                text-[#F97316]
                leading-[1.05]
                tracking-[-0.015em]
                inline-block
                whitespace-nowrap
              "
            >
              WE GOT YOU COVERED.
            </span>
          </h1>

          <p className="mt-6 text-[#EBFAFE] lg:text-white/70 text-[14px] md:text-[16px] lg:text-base leading-relaxed max-w-[312px] md:max-w-xl lg:max-w-2xl mx-auto lg:mx-0 opacity-80 lg:opacity-100">
            Get access to high-velocity creative team that works with your brand.
            Ship campaigns faster, more reliably, and at scale.
          </p>




          <div className="flex justify-center lg:justify-start">
            <button className="mt-6 lg:mt-6 px-10 py-2.5 lg:px-10 lg:py-4 rounded-full bg-[#8dd7e8] text-[#073742] lg:text-black font-extrabold lg:font-semibold text-[12px] lg:text-base tracking-tight hover:bg-[#7bcad9] transition-colors">
              GET STARTED
            </button>
          </div>

        </div>
      </div>

      {/* IMAGE GRID */}
      <div className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-[46%] h-auto lg:h-full z-10 mt-0 lg:mt-0">
        <ScrollingGrid />
      </div>

    </section>
  );
}


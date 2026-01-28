import ScrollingGrid from "./ScrollingGrid";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="site-container pt-60 pb-32 relative z-20">
        <div className="max-w-xl">
          {/* DESIGN / OPTIMIZE / ADVERTISE */}
          <h2
            className="
              font-bw-gradual
              text-[42px]
              font-bold
              tracking-[0.02em]
              leading-[1.2]
              text-[#EBFAFE]
              whitespace-nowrap
            "
          >
            DESIGN, OPTIMIZE, ADVERTISE
          </h2>

          {/* WE GOT YOU COVERED */}
          <h1 className="mt-4">
            <span
              className="
               font-accent
    text-2xl md:text-3xl lg:text-4xl xl:text-display-xl
    font-bold
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

          <p className="mt-6 text-white/70 leading-relaxed">
            Get access to high-velocity creative team that works with your
            brand. Ship campaigns faster, more reliably, and at scale.
          </p>

          <button className="mt-6 px-10 py-4 rounded-full bg-[#8dd7e8] text-black font-semibold">
            GET STARTED
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE GRID */}
      <div className="absolute top-0 right-0 h-full w-[46%] z-0">
        <ScrollingGrid />
      </div>
    </section>
  );
}

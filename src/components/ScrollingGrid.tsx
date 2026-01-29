import { motion } from "framer-motion";

const topRowImages = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60",
];

const bottomRowImages = [
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
];


function Column({
  reverse = false,
  offset = 0,
  duration = 70,
  images = topRowImages,
}: {
  reverse?: boolean;
  offset?: number;
  duration?: number;
  images?: string[];
}) {
  return (
    <div
      className="relative overflow-hidden hidden lg:block"
      style={{ height: "820px", marginTop: offset }}
    >
      <motion.div
        className="flex flex-col gap-4 will-change-transform"
        animate={{
          y: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="rounded-xl overflow-hidden">
            <img
              src={src}
              alt="Creative work"
              loading="lazy"
              className="w-[185px] h-[280px] object-cover rounded-xl"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ScrollingGrid() {
  return (
    <div className="w-full h-full">
      {/* DESKTOP VIEW: 3 Vertical Columns */}
      <div
        className="hidden lg:grid absolute right-0 top-0 h-full grid-cols-3 gap-4
        pr-6 pt-16 max-w-[600px]"
      >
        <Column offset={-120} duration={85} />
        <Column reverse offset={-120} duration={85} />
        <Column offset={-120} duration={85} />
      </div>

      {/* MOBILE VIEW: 2 Horizontal Rows */}
      <div className="lg:hidden flex flex-col  w-full">
        {/* TOP ROW: Moving Left (Seamless Marquee + Manual Scroll) */}
        <div className="flex overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
          <motion.div 
            className="flex gap-1.5 py-1"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "fit-content" }}
          >
            {[...topRowImages, ...topRowImages].map((src, i) => (
              <div key={i} className="flex-shrink-0 w-[150px] h-[185px] rounded-[16px] overflow-hidden shadow-lg border border-white/5">
                <img src={src} className="w-full h-full object-cover" alt="Creative work" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM ROW: Moving Right (Opposite Direction + Manual Scroll) */}
        <div className="flex overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
          <motion.div 
            className="flex gap-1.5 py-1"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "fit-content" }}
          >
            {[...bottomRowImages, ...bottomRowImages].map((src, i) => (
              <div key={i} className="flex-shrink-0 w-[150px] h-[185px] rounded-[16px] overflow-hidden shadow-lg border border-white/5">
                <img src={src} className="w-full h-full object-cover" alt="Creative work" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>


    </div>
  );
}

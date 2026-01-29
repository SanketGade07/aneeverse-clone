import { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

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

const MobileInfiniteRow = ({ 
  images, 
  speed = 1, 
  direction = 'left' 
}: { 
  images: string[], 
  speed?: number, 
  direction?: 'left' | 'right' 
}) => {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPanning, setIsPanning] = useState(false);

  // Hardcoded width for reliability: 150px + 6px (gap-1.5) = 156px
  const baseWidth = images.length * 156;

  // Infinite wrapping logic
  const x = useTransform(baseX, (val) => {
    const wrap = (min: number, max: number, v: number) => {
      const range = max - min;
      return ((((v - min) % range) + range) % range) + min;
    };
    return wrap(-baseWidth * 2, -baseWidth, val);
  });

  // Auto-scrolling animation
  useAnimationFrame((_, delta) => {
    if (isPanning) return; 
    const moveBy = (direction === 'left' ? -1 : 1) * (speed * 40 * (delta / 1000));
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative overflow-hidden cursor-grab active:cursor-grabbing py-1 z-50 touch-pan-y">
      <motion.div
        ref={containerRef}
        style={{ x, width: "max-content" }}
        onPanStart={() => setIsPanning(true)}
        onPanEnd={() => setIsPanning(false)}
        onPan={(_, info) => {
          baseX.set(baseX.get() + info.delta.x);
        }}
        className="flex gap-1.5 pointer-events-auto"
      >
        {[...images, ...images, ...images].map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-[150px] h-[185px] rounded-[16px] overflow-hidden shadow-lg border border-white/5 select-none touch-none">
            <img 
              src={src} 
              className="w-full h-full object-cover pointer-events-none select-none" 
              alt="Creative work" 
              loading="lazy" 
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

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

      {/* MOBILE VIEW: 2 Horizontal Rows with Infinite Drag + Auto Scroll */}
      <div className="lg:hidden flex flex-col w-full">
        <MobileInfiniteRow images={topRowImages} speed={1} direction="left" />
        <MobileInfiniteRow images={bottomRowImages} speed={1} direction="right" />
      </div>
    </div>
  );
}

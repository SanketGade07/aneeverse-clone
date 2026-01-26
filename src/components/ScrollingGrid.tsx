import { motion } from "framer-motion";

const images = [
  "https://picsum.photos/400/280?1",
  "https://picsum.photos/400/280?2",
  "https://picsum.photos/400/280?3",
  "https://picsum.photos/400/280?4",
  "https://picsum.photos/400/280?5",
  "https://picsum.photos/400/280?6",
];

function Column({
  reverse = false,
  offset = 0,
  duration = 70,
}: {
  reverse?: boolean;
  offset?: number;
  duration?: number;
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ height: "820px", marginTop: offset }}
    >
      <motion.div
        className="flex flex-col gap-6 will-change-transform"
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
    <div
      className="absolute right-0 top-0 h-full grid grid-cols-3 gap-6
      pr-6 pt-16 max-w-[600px]"
    >
      {/* Left column – slow */}
      <Column offset={-120} duration={85} />

      {/* Middle column – slowest + reverse */}
      <Column reverse offset={-120} duration={85} />

      {/* Right column – medium */}
      <Column offset={-120} duration={85} />
    </div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function SectionDivider() {
  // Html Element ref
  const ref = useRef<HTMLDivElement | null>(null);

  // Motion Scroll Indicator
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 0.8], ["5%", "100%"]);

  return (
    <div ref={ref} className="w-full h-px mx-auto container">
      <motion.div
        style={{
          width,
        }}
        className="bg-primary/20 w-full h-px mx-auto"
      ></motion.div>
    </div>
  );
}

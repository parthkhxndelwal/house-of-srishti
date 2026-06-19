"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  /** Stagger offset in seconds for items revealed together. */
  delay?: number;
  as?: "div" | "li" | "section";
};

/**
 * Scroll-reveal wrapper. Content is its real, visible self by default; motion
 * only adds a gentle rise-and-fade as it enters the viewport (once). Under
 * reduced-motion the element renders in place with no transform.
 */
export function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AmbientMesh() {
  const reduced = useReducedMotion();

  const common =
    "pointer-events-none absolute rounded-full blur-[120px] will-change-transform";

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        animate={
          reduced
            ? {}
            : {
                x: [0, 60, -30, 0],
                y: [0, -40, 50, 0],
                scale: [1, 1.15, 1.05, 1],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`${common} -left-[20%] -top-[20%] h-[65vw] max-h-[800px] w-[65vw] max-w-[800px] bg-warm-rose/20`}
      />
      <motion.div
        animate={
          reduced
            ? {}
            : {
                x: [0, -40, 50, 0],
                y: [0, 60, -30, 0],
                scale: [1, 1.1, 1.2, 1],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`${common} -bottom-[20%] -right-[15%] h-[55vw] max-h-[700px] w-[55vw] max-w-[700px] bg-warm-lilac/18`}
      />
      <motion.div
        animate={
          reduced
            ? {}
            : {
                x: [0, 30, -50, 0],
                y: [0, -50, 40, 0],
                scale: [1, 1.2, 0.95, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`${common} left-[10%] top-[40%] h-[35vw] max-h-[500px] w-[35vw] max-w-[500px] bg-warm-sage/16`}
      />
    </div>
  );
}

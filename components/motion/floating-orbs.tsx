"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingOrbsProps {
  className?: string;
}

export function FloatingOrbs({ className }: FloatingOrbsProps) {
  const reduced = useReducedMotion();

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <motion.div
        animate={
          reduced
            ? {}
            : {
                x: [0, 40, -20, 0],
                y: [0, -30, 40, 0],
                scale: [1, 1.15, 1],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-[15%] -top-[15%] h-[55vw] max-h-[650px] w-[55vw] max-w-[650px] rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        animate={
          reduced
            ? {}
            : {
                x: [0, -40, 30, 0],
                y: [0, 40, -30, 0],
                scale: [1, 1.2, 1],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[15%] -right-[10%] h-[45vw] max-h-[550px] w-[45vw] max-w-[550px] rounded-full bg-purple-500/10 blur-[120px]"
      />
      <motion.div
        animate={
          reduced
            ? {}
            : {
                x: [0, 30, -40, 0],
                y: [0, 50, -20, 0],
                scale: [1, 1.1, 1],
              }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[20%] top-[40%] h-[30vw] max-h-[400px] w-[30vw] max-w-[400px] rounded-full bg-indigo-300/10 dark:bg-indigo-700/10 blur-[100px]"
      />
    </div>
  );
}

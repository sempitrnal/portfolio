"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingShapesProps {
  className?: string;
}

export function FloatingShapes({ className }: FloatingShapesProps) {
  const reduced = useReducedMotion();

  const shapes = [
    { color: "bg-warm-rose", size: "h-12 w-12", top: "10%", left: "85%", delay: 0, duration: 10 },
    { color: "bg-warm-sage", size: "h-16 w-16", top: "30%", left: "75%", delay: 1, duration: 12 },
    { color: "bg-warm-lilac", size: "h-10 w-10", top: "70%", left: "90%", delay: 2, duration: 9 },
    { color: "bg-warm-ochre", size: "h-8 w-8", top: "55%", left: "80%", delay: 0.5, duration: 11 },
    { color: "bg-primary", size: "h-6 w-6", top: "20%", left: "92%", delay: 1.5, duration: 13 },
  ];

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute rounded-full opacity-25 blur-[1px]",
            shape.color,
            shape.size
          )}
          style={{ top: shape.top, left: shape.left }}
          animate={
            reduced
              ? {}
              : {
                  y: [0, -30, 0, 20, 0],
                  x: [0, 15, -15, 0],
                  scale: [1, 1.1, 0.95, 1],
                }
          }
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
      <motion.div
        className="absolute top-[15%] left-[88%] h-24 w-24 rounded-full border border-warm-rose/40 opacity-40"
        animate={
          reduced
            ? {}
            : {
                rotate: [0, 360],
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-[60%] left-[78%] h-20 w-20 rounded-2xl border border-warm-sage/40 opacity-40"
        animate={
          reduced
            ? {}
            : {
                rotate: [0, -360],
                y: [0, -20, 0],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

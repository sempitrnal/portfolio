"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  const reduced = useReducedMotion();

  return (
    <div className={cn("relative h-px w-full overflow-hidden", className)}>
      <motion.div
        className="absolute inset-y-0 left-1/2 h-full w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: reduced ? 0 : 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </div>
  );
}

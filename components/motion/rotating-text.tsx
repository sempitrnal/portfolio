"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RotatingTextProps {
  words: string[];
  className?: string;
  wordClassName?: string;
  interval?: number;
}

export function RotatingText({
  words,
  className,
  wordClassName,
  interval = 2000,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span
      className={cn("inline-flex overflow-hidden align-bottom", className)}
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={
            reduced
              ? { opacity: 0 }
              : { opacity: 0, y: "100%", rotateX: -90, scale: 0.8 }
          }
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          exit={
            reduced
              ? { opacity: 0 }
              : { opacity: 0, y: "-100%", rotateX: 90, scale: 0.8 }
          }
          transition={
            reduced
              ? { duration: 0.2 }
              : {
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  mass: 0.8,
                }
          }
          className={cn("inline-block", wordClassName)}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

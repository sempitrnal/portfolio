"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function TextReveal({
  children,
  className,
  delay = 0,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  const words = children.split(" ");

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex flex-wrap gap-x-[0.22em] leading-none",
        className,
      )}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="overflow-hidden">
          <motion.span
            className="inline-block"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: "100%" }}
            animate={
              hasAnimated
                ? { opacity: 1, y: 0 }
                : reduced
                  ? { opacity: 0 }
                  : { opacity: 0, y: "100%" }
            }
            transition={{
              duration: reduced ? 0 : 0.6,
              delay: reduced ? 0 : delay + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

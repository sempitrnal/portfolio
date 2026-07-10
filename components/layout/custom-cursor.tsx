"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    if (reduced) return;
    const match = window.matchMedia("(pointer: coarse)");
    setIsTouch(match.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    match.addEventListener("change", handler);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };
    const leave = () => setIsVisible(false);
    const down = () => setIsDown(true);
    const up = () => setIsDown(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      match.removeEventListener("change", handler);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [cursorX, cursorY, reduced]);

  if (reduced || isTouch || typeof window === "undefined") return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{ x: cursorX, y: cursorY }}
    >
      <motion.div
        className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm transition-opacity duration-200"
        animate={{
          width: isDown ? 24 : 32,
          height: isDown ? 24 : 32,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { personal } from "@/lib/data";

export function Intro() {
  const [show, setShow] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), reduced ? 0 : 1800);
    return () => clearTimeout(timer);
  }, [reduced]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: reduced ? 0 : 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center gap-4"
          >
            <div className="text-4xl font-bold tracking-tighter text-foreground">
              {personal.shortName}
            </div>
            <motion.div
              className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-purple-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: reduced ? 0 : 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

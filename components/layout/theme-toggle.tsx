"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "h-10 w-10 rounded-full border border-border/60 bg-background/50 animate-pulse",
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative h-10 w-10 rounded-full border border-border/60 bg-background/60 backdrop-blur-md flex items-center justify-center text-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={
            reduced ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.5 }
          }
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={
            reduced ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.5 }
          }
          transition={{ duration: reduced ? 0 : 0.2 }}
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}

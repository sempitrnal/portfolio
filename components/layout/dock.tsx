"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Home, User, Briefcase, Clock, Layers, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const dockItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Clock, label: "Experience", href: "#experience" },
  { icon: Layers, label: "Skills", href: "#skills" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export function Dock({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed bottom-6 left-1/2 z-50 hidden md:flex -translate-x-1/2 items-center gap-2 rounded-full glass px-3 py-2",
        className,
      )}
      aria-label="Section navigation"
    >
      {dockItems.map((item) => {
        const Icon = item.icon;
        return (
          <motion.button
            key={item.href}
            onClick={() => scrollTo(item.href)}
            aria-label={item.label}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            whileHover={reduced ? {} : { scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="h-5 w-5 transition-colors" />
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
              {item.label}
            </span>
          </motion.button>
        );
      })}
    </motion.nav>
  );
}

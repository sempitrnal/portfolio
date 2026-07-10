"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { personal } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div className="section-container">
          <nav
            className={cn(
              "flex items-center justify-between rounded-full border px-2 py-2 transition-all duration-500",
              scrolled
                ? "border-border/60 bg-background/75 shadow-xl shadow-warm-ink/5 backdrop-blur-2xl"
                : "border-transparent bg-transparent",
            )}
            aria-label="Primary navigation"
          >
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#hero");
              }}
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/60 text-sm font-bold tracking-tight text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
              aria-label="Go home"
            >
              <span className="font-mono">RS</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  initial={{ opacity: 0, y: reduced ? 0 : -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduced ? 0 : 0.4,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Open resume"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
              <ThemeToggle />
              <button
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/60 text-foreground backdrop-blur-md transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileNav links={navLinks} onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export { navLinks };

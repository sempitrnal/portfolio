"use client";

import { motion, useReducedMotion } from "framer-motion";
import { personal } from "@/lib/data";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  const reduced = useReducedMotion();

  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="section-container section-padding flex flex-col items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h3 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {personal.name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground font-mono uppercase tracking-widest">
            {personal.role}
          </p>
        </motion.div>
        <SocialLinks />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.6, delay: 0.1 }}
          className="text-sm text-muted-foreground font-mono"
        >
          &copy; {new Date().getFullYear()} {personal.name}. Crafted with care.
        </motion.p>
      </div>
    </footer>
  );
}

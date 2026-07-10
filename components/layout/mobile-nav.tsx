"use client";

import { motion, useReducedMotion } from "framer-motion";
import { personal } from "@/lib/data";
import { SocialLinks } from "@/components/social-links";

interface MobileNavProps {
  links: { label: string; href: string }[];
  onClose: () => void;
}

export function MobileNav({ links, onClose }: MobileNavProps) {
  const reduced = useReducedMotion();

  const scrollTo = (href: string) => {
    onClose();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 300);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-3xl pt-28 px-6 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <nav className="flex flex-col gap-2">
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(link.href);
            }}
            initial={{ opacity: 0, x: reduced ? 0 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: i * 0.06,
              duration: reduced ? 0 : 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-5xl font-medium tracking-tight text-foreground py-3 border-b border-border/40 transition-colors hover:text-primary"
          >
            {link.label}
          </motion.a>
        ))}
      </nav>
      <div className="mt-auto mb-10 flex flex-col gap-6">
        <a
          href={personal.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          View Resume
        </a>
        <SocialLinks />
      </div>
    </motion.div>
  );
}

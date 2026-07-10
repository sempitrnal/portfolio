"use client";

import { motion, useReducedMotion } from "framer-motion";
import { personal } from "@/lib/data";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const reduced = useReducedMotion();

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {personal.socials.map((social, i) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={cn(
              "group flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/60 text-foreground backdrop-blur-md transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              iconClassName,
            )}
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduced ? 0 : 0.4,
              delay: i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={reduced ? {} : { y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="h-5 w-5" />
          </motion.a>
        );
      })}
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { techStack } from "@/lib/data";
import { SectionHeading } from "@/components/motion/section-heading";

export function TechStack() {
  const reduced = useReducedMotion();

  return (
    <section
      id="tech-stack"
      className="section-padding relative overflow-hidden"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Tech stack"
          title="Technologies in my orbit"
          align="center"
        />
      </div>

      <div className="relative mt-10 flex gap-8 overflow-hidden">
        <div className="flex min-w-full shrink-0 animate-marquee items-center gap-8">
          {[...techStack, ...techStack].map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={`a-${tech.name}-${i}`}
                className="flex h-20 w-44 shrink-0 items-center justify-center gap-3 rounded-2xl border border-border/50 bg-card/50 px-5 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card"
              >
                <Icon className="h-6 w-6 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
        <div
          className="flex min-w-full shrink-0 animate-marquee items-center gap-8"
          aria-hidden="true"
        >
          {[...techStack, ...techStack].map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={`b-${tech.name}-${i}`}
                className="flex h-20 w-44 shrink-0 items-center justify-center gap-3 rounded-2xl border border-border/50 bg-card/50 px-5 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card"
              >
                <Icon className="h-6 w-6 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section-container mt-20">
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                whileHover={reduced ? {} : { y: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                animate={
                  reduced
                    ? {}
                    : {
                        y: [0, -8, 0],
                      }
                }
                style={reduced ? undefined : { animationDuration: "4s" }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-card/50 text-primary shadow-sm backdrop-blur-sm transition-colors hover:bg-card hover:border-primary/30"
                title={tech.name}
              >
                <Icon className="h-7 w-7" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

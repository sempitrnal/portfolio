"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { skillCategories, techStack } from "@/lib/data";
import { SectionHeading } from "@/components/motion/section-heading";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to bring ideas to life"
        />

        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActive(i)}
              className={cn(
                "relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors",
                active === i
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {active === i && (
                <motion.div
                  layoutId="activeSkill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.title}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: reduced ? 0 : 0.4 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {skillCategories[active].skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  whileHover={reduced ? {} : { y: -6, scale: 1.05 }}
                  className="group relative flex items-center gap-3 rounded-full border border-border/60 bg-background/60 px-4 py-2 backdrop-blur-md transition-colors hover:border-primary hover:bg-primary/10"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    <AnimatedCounter value={skill.level} suffix="%" />
                  </span>
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <div className="mt-28">
          <FadeIn>
            <h3 className="mb-10 text-center font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Technologies in my orbit
            </h3>
          </FadeIn>
          <div className="relative mx-auto flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
            <motion.div
              className="absolute h-64 w-64 rounded-full border border-dashed border-border/60 md:h-80 md:w-80"
              animate={reduced ? {} : { rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute rounded-full bg-primary/10 px-4 py-2 text-center font-serif text-sm font-medium text-foreground backdrop-blur-md">
              Stack
            </div>
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              const angle = (i / techStack.length) * Math.PI * 2;
              const radius = 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={tech.name}
                  className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background/80 text-primary shadow-sm backdrop-blur-md md:h-14 md:w-14"
                  style={{
                    left: `calc(50% + ${x}px - 24px)`,
                    top: `calc(50% + ${y}px - 24px)`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={reduced ? {} : { scale: 1.2, zIndex: 10 }}
                  title={tech.name}
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { experiences } from "@/lib/data";
import { SectionHeading } from "@/components/motion/section-heading";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Experience() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
        />

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {experiences.map((job, i) => {
              const isEven = i % 2 === 0;
              const isOpen = open === i;

              return (
                <motion.div
                  key={job.role + job.date}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: reduced ? 0 : 0.7,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "relative md:w-1/2",
                    isEven ? "md:ml-auto md:pl-12" : "md:pr-12",
                  )}
                >
                  <div
                    className={cn(
                      "absolute top-5 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary shadow-lg",
                      isEven ? "left-6 md:left-0" : "left-6 md:left-full",
                    )}
                  />

                  <motion.div
                    layout
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="ml-14 md:ml-0 cursor-pointer rounded-2xl glass-card p-6 md:p-8 transition-shadow hover:shadow-lg"
                    whileHover={reduced ? {} : { y: -4 }}
                    role="button"
                    aria-expanded={isOpen}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpen(isOpen ? null : i);
                      }
                    }}
                  >
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
                        {job.role}
                      </h3>
                      <span className="mt-1 text-xs font-mono font-semibold uppercase tracking-wider text-primary md:mt-0">
                        {job.date}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {job.company}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                      <span>{isOpen ? "Show less" : "Read more"}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 leading-relaxed text-muted-foreground">
                            {job.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {job.stack.map((tech) => (
                              <Badge
                                key={tech}
                                variant="soft"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Cloud, Database, Layout, Sparkles } from "lucide-react";
import { about } from "@/lib/data";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/motion/section-heading";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Spotlight } from "@/components/motion/spotlight";

const stats = [
  { value: 4, suffix: "+", label: "Years of coding" },
  { value: 2, suffix: "", label: "Shipped products" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Passion" },
];

const highlights = [
  { icon: Layout, title: "Frontend", desc: "React, Next.js, Tailwind" },
  { icon: Code2, title: "Backend", desc: ".NET, C#, Node.js" },
  { icon: Database, title: "Database", desc: "SQL, PostgreSQL, Supabase" },
  { icon: Cloud, title: "Cloud", desc: "Azure, Docker, Vercel" },
];

export function About() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="About me"
          title="Builder, problem solver, lifelong learner"
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <FadeIn className="space-y-8">
            <div className="space-y-6">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {p}
                </p>
              ))}
            </div>

            <motion.div
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reduced ? 0 : 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-[2rem] bg-gradient-to-br from-warm-rose/10 via-warm-lilac/10 to-warm-sage/10 p-8 md:p-10"
            >
              <Sparkles className="mb-4 h-6 w-6 text-primary" />
              <blockquote className="font-serif text-2xl font-medium leading-snug text-foreground md:text-3xl">
                &ldquo;I believe good software is part engineering, part craft.
                Every line of code is a chance to make something people enjoy
                using.&rdquo;
              </blockquote>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: reduced ? 0 : 0.5,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-2xl glass-card p-5 text-center"
                >
                  <div className="font-serif text-4xl font-medium text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
              {about.timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: reduced ? 0 : 0.5,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative mb-10"
                >
                  <div className="absolute -left-[29px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-primary shadow-md" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                    {item.year}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="mt-28">
          <FadeIn>
            <h3 className="mb-10 font-serif text-3xl font-medium tracking-tight text-foreground">
              What I do best
            </h3>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <StaggerItem key={h.title}>
                  <Spotlight className="rounded-2xl">
                    <motion.div
                      whileHover={reduced ? {} : { y: -6, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="h-full rounded-2xl glass-card p-6 transition-shadow hover:shadow-md"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {h.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {h.desc}
                      </p>
                    </motion.div>
                  </Spotlight>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

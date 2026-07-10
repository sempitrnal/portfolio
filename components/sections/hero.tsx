"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { personal } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/motion/magnetic";
import { RotatingText } from "@/components/motion/rotating-text";
import { SocialLinks } from "@/components/social-links";

export function Hero() {
  const reduced = useReducedMotion();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-24"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-shamrock-50/50 to-transparent dark:via-shamrock-900/20" />

      <div className="section-container flex flex-col items-center text-center">
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-6"
        >
          <Image
            src="/bo.jpg"
            alt={personal.name}
            width={192}
            height={192}
            quality={90}
            sizes="96px"
            priority
            className="h-24 w-24 rounded-full object-cover ring-2 ring-border/50 shadow-sm"
          />
        </motion.div>

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Badge
            variant="default"
            className="mb-6 gap-2 rounded-full px-3 py-1 text-xs font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shamrock-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-shamrock-500" />
            </span>
            {personal.availability.label}
          </Badge>
        </motion.div>

        <motion.p
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-sm font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          {personal.name}
        </motion.h1>

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2 text-lg text-muted-foreground"
        >
          <span className="font-medium text-foreground">{personal.role}</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-muted-foreground">{personal.location}</span>
        </motion.div>

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-4 w-full text-center"
        >
          <span className="text-muted-foreground">I build with</span>
          <RotatingText
            words={["React", "Next.js", "TypeScript", ".NET", "C#", "Tailwind"]}
            interval={2200}
            className="block w-full text-center"
            wordClassName="gradient-text text-2xl font-medium"
          />
        </motion.div>

        <motion.p
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic>
            <Button size="lg" onClick={() => scrollTo("projects")}>
              View my work
              <ArrowDown className="h-4 w-4" />
            </Button>
          </Magnetic>
          <Magnetic>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("contact")}
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </Button>
          </Magnetic>
          <Magnetic>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="hidden sm:inline-flex"
            >
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-12"
        >
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
}

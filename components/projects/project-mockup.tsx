"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

type Project = (typeof projects)[0];

interface ProjectMockupProps {
  project: Project;
}

export function ProjectMockup({ project }: ProjectMockupProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="group relative w-full [perspective:1000px]"
      whileHover={
        reduced
          ? {}
          : {
              rotateY: [0, 2, -2, 0],
              transition: { duration: 0.6, ease: "easeInOut" },
            }
      }
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/50 shadow-2xl backdrop-blur-md dark:bg-black/20">
        <div className="flex items-center gap-2 border-b border-border/40 px-5 py-3">
          <div className="h-3 w-3 rounded-full bg-warm-rose" />
          <div className="h-3 w-3 rounded-full bg-warm-ochre" />
          <div className="h-3 w-3 rounded-full bg-warm-sage" />
          <div className="ml-auto h-2 w-24 rounded-full bg-border/50" />
        </div>

        <div
          className="relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden p-8 md:min-h-[360px]"
          style={{
            background: `linear-gradient(135deg, ${project.color}15 0%, transparent 60%), radial-gradient(circle at 80% 20%, ${project.color}25 0%, transparent 40%)`,
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id={`grid-${project.number}`}
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="1"
                    cy="1"
                    r="1"
                    fill="currentColor"
                    className="text-foreground"
                  />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill={`url(#grid-${project.number})`}
              />
            </svg>
          </div>

          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {project.number}
            </span>
            <h3 className="mt-2 font-serif text-4xl font-medium text-foreground md:text-5xl">
              {project.name}
            </h3>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-primary">
              {project.tagline}
            </p>
          </motion.div>

          <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="glass" className="text-[10px]">
                {tech}
              </Badge>
            ))}
          </div>

          <motion.div
            className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full blur-3xl"
            style={{ backgroundColor: project.color }}
            animate={
              reduced
                ? {}
                : {
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }
            }
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

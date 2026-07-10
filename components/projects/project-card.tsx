"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { ProjectMockup } from "./project-mockup";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  onViewDetails: (project: (typeof projects)[0]) => void;
}

export function ProjectCard({
  project,
  index,
  onViewDetails,
}: ProjectCardProps) {
  const reduced = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={cn("order-2", isEven ? "lg:order-1" : "lg:order-2")}>
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold text-muted-foreground">
              {project.number}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
          <h3 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">
            {project.tagline}
          </p>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-6 space-y-3">
            {project.details.map((detail, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="soft" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name} live demo`}
                >
                  Live Demo
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </Magnetic>
            <Button variant="outline" onClick={() => onViewDetails(project)}>
              View case
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            {project.github && (
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} source code`}
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <motion.div
          className={cn("order-1", isEven ? "lg:order-2" : "lg:order-1")}
          whileHover={reduced ? {} : { y: -8 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectMockup project={project} />
        </motion.div>
      </div>
    </motion.div>
  );
}

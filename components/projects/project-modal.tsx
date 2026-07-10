"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectMockup } from "./project-mockup";

interface ProjectModalProps {
  project: (typeof projects)[0] | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/85 backdrop-blur-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-border/50 bg-card/95 p-6 md:p-10 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-8">
              <ProjectMockup project={project} />
            </div>

            <span className="font-mono text-sm font-semibold text-muted-foreground">
              {project.number}
            </span>
            <h2
              id="project-modal-title"
              className="mt-2 font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl"
            >
              {project.name}
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">
              {project.tagline}
            </p>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-6 space-y-3">
              {project.details.map((detail, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              {project.github && (
                <Button variant="outline" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

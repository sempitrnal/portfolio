"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectModal } from "@/components/projects/project-modal";
import { SectionHeading } from "@/components/motion/section-heading";

export function Projects() {
  const [active, setActive] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Featured work"
          title="Projects that shaped my craft"
          description="A selection of full-stack applications I've built and shipped, presented as product launches."
        />

        <div className="flex flex-col gap-28 md:gap-36">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              onViewDetails={setActive}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

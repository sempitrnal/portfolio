"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  ExternalLink,
  Github,
  Send,
  Code2,
  Database,
  Cloud,
  Layout,
  Sparkles,
  Loader2,
} from "lucide-react";
import {
  personal,
  about,
  experiences,
  projects,
  skillCategories,
} from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SocialLinks } from "@/components/social-links";
import { cn } from "@/lib/utils";

const stats = [
  { value: "4+", label: "Years coding" },
  { value: "2", label: "Shipped products" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Passion" },
];

const highlights = [
  { icon: Layout, title: "Frontend", desc: "React, Next.js, Tailwind" },
  { icon: Code2, title: "Backend", desc: ".NET, C#, Node.js" },
  { icon: Database, title: "Database", desc: "SQL, PostgreSQL, Supabase" },
  { icon: Cloud, title: "Cloud", desc: "Azure, Docker, Vercel" },
];

function Card({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("glass-card scroll-mt-24 p-5 md:p-6", className)}
    >
      {children}
    </section>
  );
}

export function ProfileWidget({ className }: { className?: string }) {
  return (
    <Card id="profile" className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-warm-rose/5" />
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <Image
            src="/bo.jpg"
            alt={personal.name}
            width={96}
            height={96}
            className="h-20 w-20 rounded-2xl object-cover ring-1 ring-border/50 shadow-sm"
          />
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Full-Stack Developer
            </p>
            <h1 className="mt-1 font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              {personal.name}
            </h1>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              {personal.tagline}
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {personal.location}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:flex-col md:items-end">
          {/* <Badge
            variant="default"
            className="w-fit gap-2 rounded-full px-3 py-1.5 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {personal.availability.label}
          </Badge> */}
          <div className="flex items-center gap-2 md:mt-2">
            <Button asChild size="sm" className="h-9">
              <a href={`mailto:${personal.email}`}>
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="h-9">
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function StatsWidget({ className }: { className?: string }) {
  return (
    <Card className={cn("!p-0", className)}>
      <div className="grid grid-cols-2 divide-x divide-border/50 divide-y-0 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "flex flex-col items-center justify-center gap-1 p-4 md:p-5",
              i < 2 && "border-b border-border/50 md:border-b-0",
            )}
          >
            <span className="font-serif text-2xl font-medium text-foreground md:text-3xl">
              {stat.value}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function AboutWidget({ className }: { className?: string }) {
  return (
    <Card id="about" className={cn("flex flex-col", className)}>
      <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
        About
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {about.paragraphs[0]}
      </p>

      <div className="mt-4 rounded-xl bg-primary/5 p-4">
        <Sparkles className="mb-2 h-4 w-4 text-primary" />
        <p className="font-serif text-lg leading-snug text-foreground">
          &ldquo;I believe good software is part engineering, part craft.&rdquo;
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {highlights.map((h) => {
          const Icon = h.icon;
          return (
            <div
              key={h.title}
              className="rounded-xl border border-border/50 bg-background/50 p-3"
            >
              <Icon className="h-4 w-4 text-primary" />
              <p className="mt-2 text-sm font-semibold text-foreground">
                {h.title}
              </p>
              <p className="text-xs text-muted-foreground">{h.desc}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export function ExperienceWidget({ className }: { className?: string }) {
  return (
    <Card id="experience" className={cn("flex flex-col", className)}>
      <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
        Experience
      </h2>
      <div className="mt-4 flex flex-1 flex-col gap-4">
        {experiences.map((job) => (
          <div
            key={job.role + job.date}
            className="relative rounded-xl border-l-2 border-primary bg-background/50 p-4 pl-5"
          >
            <span className="font-mono text-xs font-semibold text-primary">
              {job.date}
            </span>
            <h3 className="mt-1 font-semibold text-foreground">{job.role}</h3>
            <p className="text-xs text-muted-foreground">{job.company}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {job.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {job.stack.map((tech) => (
                <Badge key={tech} variant="soft" className="text-[10px]">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ProjectsWidget({ className }: { className?: string }) {
  return (
    <Card id="projects" className={cn("flex flex-col", className)}>
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
          Projects
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group relative flex flex-col rounded-xl border border-border/50 bg-background/50 p-4 transition-colors hover:border-primary/30"
          >
            <div
              className="mb-3 h-1.5 w-12 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            <span className="font-mono text-xs font-semibold text-muted-foreground">
              {project.number}
            </span>
            <h3 className="mt-1 font-semibold text-foreground">
              {project.name}
            </h3>
            <p className="text-xs font-medium text-primary">
              {project.tagline}
            </p>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="soft" className="text-[10px]">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-2 pt-4">
              <Button asChild size="sm" className="h-8 text-xs">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live
                </a>
              </Button>
              {project.github && (
                <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} source`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function SkillsWidget({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const category = skillCategories[active];

  return (
    <Card id="skills" className={cn("flex flex-col", className)}>
      <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
        Skills
      </h2>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {skillCategories.map((cat, i) => (
          <button
            key={cat.title}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition-colors",
              active === i
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground",
            )}
          >
            {cat.title}
          </button>
        ))}
      </div>
      <div className="mt-4 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3"
          >
            {category.skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/50 p-2.5"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="flex-1 text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                  <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </Card>
  );
}

export function ContactWidget({ className }: { className?: string }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      const subject = `Message from ${form.name}`;
      const body = encodeURIComponent(form.message);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <Card id="contact" className={cn("flex flex-col", className)}>
      <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground">
        Contact
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Open to opportunities, freelance, and collaborations.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 grid gap-3 sm:grid-cols-2">
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="h-10 rounded-xl"
        />
        <Input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="h-10 rounded-xl"
        />
        <Textarea
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="min-h-[100px] rounded-xl sm:col-span-2"
        />
        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="submit"
            disabled={status === "sending"}
            className="h-10 w-full sm:w-auto"
          >
            {status === "sending" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {status === "sent" ? "Sent" : "Send message"}
          </Button>
          <SocialLinks />
        </div>
        {status === "error" && (
          <p className="text-xs text-destructive sm:col-span-2">
            Please fill in all fields.
          </p>
        )}
      </form>
    </Card>
  );
}

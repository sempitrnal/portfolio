"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { personal } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/motion/section-heading";
import { Magnetic } from "@/components/motion/magnetic";
import { SocialLinks } from "@/components/social-links";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "sent" | "error"
  >("idle");
  const reduced = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      const subject = `Message from ${form.name}`;
      const body = encodeURIComponent(form.message);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together"
          align="center"
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <FadeIn className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="max-w-md text-xl leading-relaxed text-muted-foreground">
              I&apos;m open to new opportunities, freelance projects, and
              collaborations. If you have a project in mind or just want to say
              hello, let&apos;s talk.
            </p>

            <a
              href={`mailto:${personal.email}`}
              className="group mt-10 inline-flex items-center gap-4 rounded-full border border-border/60 bg-background/60 px-6 py-4 text-lg font-medium text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="h-5 w-5" />
              </span>
              {personal.email}
              <ArrowUpRight className="h-5 w-5 opacity-50 transition-opacity group-hover:opacity-100" />
            </a>

            <div className="mt-8 flex items-center gap-3 text-muted-foreground">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/60 backdrop-blur-md">
                <MapPin className="h-5 w-5" />
              </span>
              {personal.location}
            </div>

            <div className="mt-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Connect with me
              </p>
              <SocialLinks className="justify-center lg:justify-start" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] glass-card p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <AnimatePresence mode="wait">
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 text-sm text-destructive"
                  >
                    Please fill in all fields.
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="mt-6">
                <Magnetic>
                  <Button
                    type="submit"
                    size="lg"
                    loading={status === "submitting"}
                    className="w-full"
                  >
                    {status === "sent" ? "Message sent" : "Send message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </Magnetic>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

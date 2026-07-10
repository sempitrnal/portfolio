"use client";

import { FadeIn } from "./fade-in";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-14 md:mb-20 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <FadeIn>
          <span className="editorial-eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.05}>
        <h2 className="editorial-heading max-w-4xl">{title}</h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.1}>
          <p
            className={`mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Layers,
  Wrench,
  Mail,
  Menu,
  X,
  FileText,
} from "lucide-react";
import { personal } from "@/lib/data";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { SocialLinks } from "@/components/social-links";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { id: "profile", label: "Overview", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Layers },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "contact", label: "Contact", icon: Mail },
];

function scrollTo(id: string, onDone?: () => void) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  onDone?.();
}

function NavLink({
  item,
  active,
  onClick,
}: {
  item: (typeof nav)[0];
  active: boolean;
  onClick: () => void;
}) {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
        active
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      <Icon className="h-4 w-4" />
      {item.label}
    </button>
  );
}

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("profile");

  const handleClick = (id: string) => {
    setActive(id);
    scrollTo(id, () => setMobileOpen(false));
  };

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/50 bg-background/85 px-4 py-3 backdrop-blur-xl md:hidden">
        <div className="flex items-center gap-3">
          <Image
            src="/bo.jpg"
            alt={personal.name}
            width={40}
            height={40}
            className="h-9 w-9 rounded-full object-cover ring-1 ring-border/50"
          />
          <div>
            <p className="text-sm font-semibold text-foreground">
              {personal.shortName}
            </p>
            <p className="text-xs text-muted-foreground">{personal.role}</p>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-background/60 text-foreground transition-colors hover:bg-muted"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </header>

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-border/50 bg-background/85 backdrop-blur-xl md:flex">
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-3">
            <Image
              src="/bo.jpg"
              alt={personal.name}
              width={48}
              height={48}
              className="h-11 w-11 rounded-full object-cover ring-1 ring-border/50"
            />
            <div>
              <p className="font-semibold text-foreground">{personal.name}</p>
              <p className="text-xs text-muted-foreground">{personal.role}</p>
            </div>
          </div>

          <div className="mt-6">
            {/* <Badge
              variant="default"
              className="w-full justify-center gap-2 rounded-full py-1.5 text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {personal.availability.label}
            </Badge> */}
          </div>

          <nav className="mt-8 flex flex-col gap-1" aria-label="Dashboard">
            {nav.map((item) => (
              <NavLink
                key={item.id}
                item={item}
                active={active === item.id}
                onClick={() => handleClick(item.id)}
              />
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Theme
              </span>
              <ThemeToggle />
            </div>
            <Button asChild variant="outline" className="w-full">
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <SocialLinks className="justify-start" />
            <p className="text-center text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {personal.shortName}
            </p>
          </div>
        </div>
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 w-[280px] border-r border-border/50 bg-background p-5 md:hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/bo.jpg"
                    alt={personal.name}
                    width={44}
                    height={44}
                    className="h-10 w-10 rounded-full object-cover ring-1 ring-border/50"
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      {personal.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {personal.role}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-foreground transition-colors hover:bg-muted"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5">
                {/* <Badge
                  variant="default"
                  className="w-full justify-center gap-2 rounded-full py-1.5 text-xs"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  {personal.availability.label}
                </Badge> */}
              </div>

              <nav className="mt-6 flex flex-col gap-1" aria-label="Dashboard">
                {nav.map((item) => (
                  <NavLink
                    key={item.id}
                    item={item}
                    active={active === item.id}
                    onClick={() => handleClick(item.id)}
                  />
                ))}
              </nav>

              <div className="absolute bottom-5 left-5 right-5 space-y-4">
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={personal.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4" />
                    Resume
                  </a>
                </Button>
                <SocialLinks className="justify-center" />
                <p className="text-center text-xs text-muted-foreground">
                  &copy; {new Date().getFullYear()} {personal.shortName}
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

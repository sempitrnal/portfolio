import {
  SiCss3,
  SiCsharp,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { type IconType } from "react-icons";

export type Social = {
  name: string;
  href: string;
  icon: IconType;
  label: string;
};

export const personal = {
  name: "Reynald Sampelo",
  shortName: "Reynald",
  role: "Full-Stack Developer",
  tagline:
    "I build polished, performant, and accessible web applications that solve real problems.",
  email: "reynaldsampelo6@gmail.com",
  location: "Cebu, Philippines",
  resume: "/sampeloreynald_resume.pdf",
  availability: {
    open: true,
    label: "Open to opportunities",
  },
  socials: [
    {
      name: "Twitter",
      href: "https://twitter.com/sempitrnalsh8",
      icon: FaTwitter,
      label: "Follow me on Twitter",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/__brownrecluse",
      icon: FaInstagram,
      label: "Follow me on Instagram",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/sampeloreynald",
      icon: FaLinkedinIn,
      label: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      href: "https://github.com/whitewaterjunkie",
      icon: FiGithub,
      label: "View my GitHub",
    },
  ] as Social[],
};

export const about = {
  paragraphs: [
    "I'm a software engineer based in Cebu who enjoys building web applications from the ground up. I work primarily with React, Next.js, TypeScript, .NET, and C#, and I like figuring out practical solutions to real problems — whether that's creating a smooth user experience, building scalable APIs, or improving how systems work behind the scenes.",
    "Over the years, I've worked on projects involving cloud services, databases, authentication systems, localization, and business applications. I care about writing clean, maintainable code and building products that people actually enjoy using.",
    "When I'm away from my keyboard, I'm usually playing guitar, producing music, working out, or hanging around local shows. Music has always been a big part of my life, and it gives me the same creative outlet that programming does.",
  ],
  timeline: [
    {
      year: "2020",
      title: "The spark",
      description:
        "Began building projects with HTML, CSS, and JavaScript while studying Computer Science at Cebu Institute of Technology - University.",
    },
    {
      year: "2023",
      title: "Internship",
      description:
        "Developed frontend features with React and built backend APIs with .NET and C#. Learned Docker, GitLab, and how real software teams ship.",
    },
    {
      year: "2023 — 2025",
      title: "Software Developer",
      description:
        "Built and maintained full-stack web apps with Next.js, Material UI, .NET, and C#. Managed SQL databases, deployed on Azure, and integrated Firebase and Docker.",
    },
    {
      year: "Present",
      title: "Open for what's next",
      description:
        "Looking for opportunities to build impactful products, collaborate with great teams, and continue leveling up as a developer.",
    },
  ],
};

export type Experience = {
  role: string;
  company: string;
  date: string;
  description: string;
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "Full-time",
    date: "Jul 2023 — Jun 2025",
    description:
      "Built and maintained full-stack web applications using Next.js, Material UI, .NET, and C#. Managed SQL databases, deployed on Azure, and integrated Firebase services. Used Docker for containerization and WordPress as a headless CMS.",
    stack: [
      "Next.js",
      "Material UI",
      ".NET",
      "C#",
      "SQL",
      "Azure",
      "Firebase",
      "Docker",
      "WordPress",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Internship",
    date: "Jan 2023 — May 2023",
    description:
      "Developed frontend features with React and built backend APIs using .NET and C#. Collaborated through GitLab and containerized services with Docker.",
    stack: ["React", ".NET", "C#", "Docker", "GitLab"],
  },
];

export type Project = {
  number: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  stack: string[];
  link: string;
  github?: string;
  color: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Slydyn",
    tagline: "Automotive Scheduling Platform",
    description:
      "A full-stack web application that streamlines automotive service scheduling — from booking appointments to managing shop capacity in real time.",
    details: [
      "Designed and built a Next.js frontend with a clean, responsive dashboard.",
      "Developed the .NET / C# backend and managed SQL database workflows.",
      "Implemented real-time capacity tracking and appointment management.",
      "Focused on reliability and usability for both shop owners and customers.",
    ],
    stack: ["Next.js", ".NET", "C#", "SQL"],
    link: "https://www.slydyn.com",
    color: "#0c705e",
  },
  {
    number: "02",
    name: "Utangz",
    tagline: "Lending Tracker System",
    description:
      "A personal finance tool that helps users track loans, payments, and balances between friends and family.",
    details: [
      "Built a real-time dashboard with balance updates and payment history.",
      "Used Supabase and PostgreSQL for data storage and authentication.",
      "Implemented due-date reminders and a clean summary of who owes what.",
      "Styled with Tailwind CSS for a fast, modern interface.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
    link: "https://lendz-theta.vercel.app",
    color: "#1bae8c",
  },
];

export type Skill = {
  name: string;
  icon: IconType;
  level: number;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, level: 95 },
      { name: "Next.js", icon: SiNextdotjs, level: 92 },
      { name: "TypeScript", icon: SiTypescript, level: 90 },
      { name: "JavaScript", icon: SiJavascript, level: 95 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      { name: "HTML & CSS", icon: SiHtml5, level: 92 },
      { name: "CSS3", icon: SiCss3, level: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: ".NET", icon: SiDotnet, level: 90 },
      { name: "C#", icon: SiCsharp, level: 90 },
      { name: "Node.js", icon: SiNodedotjs, level: 78 },
      { name: "Python", icon: SiPython, level: 70 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL", icon: SiMicrosoftsqlserver, level: 88 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 82 },
      { name: "Supabase", icon: SiSupabase, level: 85 },
      { name: "Firebase", icon: SiFirebase, level: 80 },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "Azure", icon: SiMicrosoftazure, level: 85 },
      { name: "Vercel", icon: SiVercel, level: 90 },
      { name: "Docker", icon: SiDocker, level: 80 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, level: 88 },
      { name: "GitHub", icon: SiGithub, level: 88 },
      { name: "GitLab", icon: SiGitlab, level: 80 },
      { name: "Figma", icon: SiFigma, level: 75 },
      { name: "VS Code", icon: SiVisualstudiocode, level: 92 },
    ],
  },
];

export const techStack = [
  { name: "Java", icon: SiOpenjdk },
  { name: "MySQL", icon: SiMysql },
  { name: "PHP", icon: SiPhp },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: ".NET", icon: SiDotnet },
  { name: "C#", icon: SiCsharp },
  { name: "Supabase", icon: SiSupabase },
  { name: "Azure", icon: SiMicrosoftazure },
  { name: "Docker", icon: SiDocker },
  { name: "Firebase", icon: SiFirebase },
];

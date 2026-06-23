"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/portfolio/Navbar";
import { MediumBlogSection } from "@/components/portfolio/MediumBlogSection";
import { ossContributions } from "@/lib/ossContributions";

const roleLabels = ["Full Stack", "REST APIs", "AWS & CI/CD", "AI Agents"];

const features = [
  { icon: "code", title: "Full Stack", desc: "React, Next.js, Python, Django, Node.js & REST APIs" },
  { icon: "stack", title: "Cloud & DevOps", desc: "AWS, Docker, CI/CD pipelines & deployments" },
  { icon: "bolt", title: "AI & Automation", desc: "Claude agents, prompt engineering & AI workflows" },
  { icon: "collab", title: "Integrations", desc: "Microsoft 365 workspace add-ins & platform tooling" },
];

const projectsData = [
  { id: "tripmate", title: "TripMate AI", description: "AI-powered travel planner with personalized itineraries", tags: ["React", "Django", "Gemini API", "OpenStreetMap", "AWS", "EC2", "Docker", "Docker Hub", "RDS", "Kubernetes"], fullDescription: "An AI-powered travel planner that creates personalized itineraries using the Gemini API. Integrated OpenStreetMap (Nominatim) for location search and place recommendations. Built a real-time, scalable React + Django architecture. Deployed on AWS (EC2), containerized with Docker and images published to Docker Hub, with Amazon RDS for the database and Kubernetes for orchestration.", previewUrl: "https://trip-ai-mate.vercel.app/", color: "#6366f1", githubUrl: "https://github.com/Gaurab4/tripmate", liveUrl: "https://trip-ai-mate.vercel.app/" },
  { id: "shanksportfolio", title: "Shashank Film Portfolio", description: "Filmmaker portfolio showcasing creative work", tags: ["Next.js", "React", "TypeScript"], fullDescription: "A cinematic portfolio website for filmmaker Shashank Aswal, built to showcase films, reels, and creative projects with an immersive layout and smooth project browsing.", previewUrl: "https://shashank-film-portfolio.vercel.app/", color: "#10b981", githubUrl: "https://github.com/Gaurab4/shanks-portfolio", liveUrl: "https://shashank-film-portfolio.vercel.app/" },
  { id: "hkoven", title: "HK Oven", description: "Pizza & pasta restaurant website", tags: ["Next.js", "React", "Tailwind CSS"], fullDescription: "A restaurant website built for HK Oven Pizza & Pasta, featuring menu highlights, brand storytelling, and a clean customer experience tailored for a local pizza restaurant.", previewUrl: "https://hkoven.vercel.app/", color: "#22c55e", githubUrl: "https://github.com/Gaurab4/hk-oven", liveUrl: "https://hkoven.vercel.app/" },
  { id: "artisanclub", title: "ArtisanClub", description: "Project management platform for creative teams", tags: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Docker"], fullDescription: "A project management and collaboration platform for creative teams. Built task assignment, file sharing, and client portals from scratch. Used Docker to containerize the app for easy deployment.", previewUrl: "https://placehold.co/1200x750/0f172a/22c55e?text=ArtisanClub", color: "#22c55e", githubUrl: "#", liveUrl: "#" },
  { id: "todaytaskmanager", title: "Today Task Manager", description: "Task management app for daily productivity", tags: ["TypeScript", "Next.js", "CSS", "JavaScript"], fullDescription: "A lightweight task manager focused on organizing and tracking day-to-day tasks. Built with a frontend-first architecture and deployed for quick access and productivity workflows.", previewUrl: "https://placehold.co/1200x750/0f172a/f59e0b?text=Today+Task+Manager", color: "#f59e0b", githubUrl: "https://github.com/Gaurab4/today-task-manager", liveUrl: "https://today-manager.vercel.app" },
  { id: "timeleft", title: "TimeLeft", description: "Life calendar iOS app with zero setup", tags: ["Swift", "iOS", "WidgetKit"], fullDescription: "An iOS life-calendar app inspired by The Life Calendar, designed to be simple and ready to use without setup. Built in Swift with companion widget support for quick glanceable progress.", previewUrl: "https://placehold.co/1200x750/0f172a/8b5cf6?text=TimeLeft", color: "#8b5cf6", githubUrl: "https://github.com/Gaurab4/TimeLeft", liveUrl: "#" },
  { id: "nextcontest", title: "nextContest", description: "Aggregates next coding contests across platforms", tags: ["Swift", "iOS", "Codeforces", "LeetCode"], fullDescription: "An iOS app that helps users quickly find the next upcoming coding contests across platforms like Codeforces, CodeChef, AtCoder, and LeetCode.", previewUrl: "https://placehold.co/1200x750/0f172a/06b6d4?text=nextContest", color: "#06b6d4", githubUrl: "https://github.com/Gaurab4/nextContest", liveUrl: "#" },
];

const experiences = [
  { period: "Nov 2024 – Present", type: "Full-time", title: "Software Engineer", company: "Bryckel AI", points: ["Implemented RBAC system for role-based access control", "Built end-to-end onboarding flow for new users", "Architected and implemented 2 separate product line architectures", "Designed, created, and optimized REST APIs for production services", "Deployed and maintained workloads on AWS with CI/CD pipelines", "Built Microsoft 365 workspace add-ins for in-product integrations", "Created Claude-based agents and production prompt workflows for AI features", "Implemented Excel generation from JSON data using third-party libraries"], tags: ["React", "Django", "Python", "REST APIs", "AWS", "CI/CD", "Claude", "Prompt Engineering", "Microsoft 365"] },
  { period: "Jun 2024 – Nov 2024", type: "Full-time", title: "Software Engineer", company: "Skizaa", location: "Remote", points: ["Developed dynamic and responsive user interfaces using React.js, enhancing user experience and performance", "Created an efficient Infinity Scroll feature, reducing data loading time by 90% (1–2 min → 2–3 sec)", "Collaborated with core team to ensure seamless UX, driving positive feedback and engagement", "Integrated Mixpanel analytics and session tracking across key modules, enabling data-driven insights that increased user engagement and improved feature adoption by 30%"], tags: ["React", "Redux", "Java", "JavaScript"] },
  { period: "Sept 2023 – Jun 2024", type: "Internship", title: "Frontend Intern", company: "Skizaa", points: ["Integrated APIs for dashboards", "Implemented Mixpanel analytics", "Fixed core UI bugs across the application", "Improved feature adoption by 30% through data-driven iteration"], tags: ["React", "APIs", "Mixpanel", "Analytics", "UI"] },
];

const skillCategories = [
  { title: "LANGUAGES", skills: [{ name: "JavaScript", years: 3 }, { name: "Python", years: 2 }, { name: "C++", years: 3 }, { name: "Java", years: 2 }] },
  { title: "FRONTEND", skills: [{ name: "React.js", years: 3 }, { name: "Next.js", years: 2 }, { name: "Tailwind CSS", years: 2 }, { name: "GSAP", years: 1 }] },
  { title: "BACKEND & APIs", skills: [{ name: "REST APIs", years: 2 }, { name: "Django", years: 2 }, { name: "Node.js", years: 2 }, { name: "Express", years: 2 }, { name: "PostgreSQL", years: 2 }] },
  { title: "CLOUD & DEVOPS", skills: [{ name: "AWS", years: 2 }, { name: "CI/CD Pipelines", years: 2 }, { name: "Docker", years: 2 }, { name: "EC2", years: 2 }, { name: "Amazon RDS", years: 1 }, { name: "Kubernetes", years: 1 }] },
  { title: "AI & PLATFORMS", skills: [{ name: "Claude Agents", years: 1 }, { name: "Prompt Engineering", years: 1 }, { name: "Microsoft 365 Add-ins", years: 1 }, { name: "Gemini API", years: 1 }] },
];

const FEATURED_PROJECT_COUNT = 6;

function ProjectCard({
  project,
  selected,
  onSelect,
  className = "",
}: {
  project: (typeof projectsData)[0];
  selected: boolean;
  onSelect: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`text-left rounded-lg p-4 border transition-all duration-200 ${className} ${
        selected
          ? "border-emerald-300/80 bg-emerald-50/90 shadow-sm dark:border-emerald-400/60 dark:bg-emerald-950/50"
          : "border-zinc-200/80 bg-zinc-50/90 hover:border-emerald-200/60 hover:bg-emerald-50/50 dark:border-zinc-700 dark:bg-[#1a211e] dark:hover:border-emerald-500/50 dark:hover:bg-[#1f2824]"
      }`}
    >
      <h3 className="truncate font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300">{project.description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded border border-zinc-200/80 bg-zinc-100/80 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && <span className="text-xs text-zinc-500 dark:text-zinc-400">+{project.tags.length - 3}</span>}
      </div>
    </button>
  );
}

function formatExperience(years: number) {
  return years === 1 ? "1 year" : `${years} years`;
}

const contactInfo = [
  { label: "PHONE", value: "+91-8909365272", href: "tel:+918909365272", icon: "phone" },
  { label: "EMAIL", value: "gaurabth2002@gmail.com", href: "mailto:gaurabth2002@gmail.com", icon: "mail" },
  { label: "LOCATION", value: "Bengaluru, Karnataka, India", icon: "location" },
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const [previewFailed, setPreviewFailed] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsScrollRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: "left" | "right") => {
    const container = projectsScrollRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>("button");
    const gap = 12;
    const amount = card ? card.offsetWidth + gap : container.clientWidth * 0.75;
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roleLabels.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const selectProject = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project);
    setPreviewFailed(false);
  };

  return (
    <div className="relative bg-white text-zinc-900 dark:bg-[#0a0f0d] dark:text-zinc-100">
      <Navbar />

      {/* Hero + About */}
      <section id="hero" className="relative z-10 flex min-h-screen flex-col scroll-mt-20 bg-gradient-to-br from-emerald-50 via-white to-zinc-100 pt-20 dark:from-[#0a0f0d] dark:via-[#0d1210] dark:to-[#111916] sm:pt-24">
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-10 sm:px-6 sm:py-12 lg:py-16">
          <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.85fr)_minmax(0,3.15fr)] lg:gap-16 xl:gap-24">
            <div className="text-center lg:text-left">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">Full Stack Software Engineer</p>
              <h1 className="mb-3 text-4xl font-bold leading-[0.95] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-white">Gaurab</h1>
              <p key={roleIndex} className="mb-6 min-h-[1.75rem] animate-fade-in text-base text-emerald-700 sm:text-lg dark:text-emerald-300">{roleLabels[roleIndex]}</p>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base lg:mx-0 dark:text-zinc-200">
                Full stack across frontend, REST APIs, AWS, CI/CD, Microsoft 365 add-ins, and Claude agent workflows.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link href="/#projects" className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-500 px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400">View Projects</Link>
                <Link href="/#contact" className="inline-flex h-11 items-center justify-center rounded-lg border border-emerald-600/60 bg-transparent px-5 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-500/10 sm:h-12 sm:px-6 dark:border-emerald-500/60 dark:text-white dark:hover:bg-emerald-500/10">Get In Touch</Link>
              </div>
              <div className="mt-8 flex justify-center gap-4 lg:justify-start">
          <a href="https://github.com/Gaurab4" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/40 bg-white/80 text-emerald-700 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:bg-zinc-900/60 dark:text-emerald-400 dark:hover:border-emerald-400 dark:hover:text-emerald-300" aria-label="GitHub">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23 9.585-2.655 19.965-.885 19.965 0 0 1 3.3-1.23c.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/gaurab-t/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/40 bg-white/80 text-emerald-700 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:bg-zinc-900/60 dark:text-emerald-400 dark:hover:border-emerald-400 dark:hover:text-emerald-300" aria-label="LinkedIn">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
          <a href="https://leetcode.com/u/thgemma/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/40 bg-white/80 text-emerald-700 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:bg-zinc-900/60 dark:text-emerald-400 dark:hover:border-emerald-400 dark:hover:text-emerald-300" aria-label="LeetCode">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 13h7.5" />
              <path d="M9.424 7.268l4.999 -4.999" />
              <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
            </svg>
          </a>
              </div>
            </div>

            <div id="about" className="scroll-mt-28 lg:pl-6 xl:pl-10">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">01. ABOUT ME</p>
              <h2 className="mb-5 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl dark:text-white">Crafting Digital Experiences</h2>
              <div className="mb-6 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-200">
                <p>I&apos;m a full-stack Software Engineer. I build React and Next.js interfaces, design and ship REST APIs, deploy on AWS, and maintain CI/CD pipelines for reliable releases.</p>
                <p>I also work on Microsoft 365 workspace add-ins, Claude agent creation, and prompt engineering for production AI features: turning complex product needs into scalable, maintainable systems.</p>
              </div>
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((f) => (
                  <div key={f.title} className="flex min-h-[5.5rem] items-center gap-4 rounded-lg border border-emerald-200/70 bg-white/80 p-4 transition-all duration-200 hover:border-emerald-400/60 hover:bg-white sm:p-5 dark:border-zinc-700 dark:bg-[#1a211e] dark:hover:border-emerald-500/50 dark:hover:bg-[#1f2824]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-emerald-200/80 bg-emerald-50 text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/50 dark:text-emerald-400">
                      {f.icon === "code" && <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                      {f.icon === "stack" && <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>}
                      {f.icon === "bolt" && <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                      {f.icon === "collab" && <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-sm font-semibold text-zinc-900 dark:text-white">{f.title}</h3>
                      <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-8">
          <a href="#projects" className="animate-bounce text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-600" aria-label="Scroll to projects">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen scroll-mt-20 bg-white pt-20 pb-12 dark:bg-[#111916] sm:pt-24">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">02. PROJECTS</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-white">Recent Work</h2>
            </div>
            {projectsData.length > FEATURED_PROJECT_COUNT && (
              <button
                type="button"
                onClick={() => setShowAllProjects((open) => !open)}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-emerald-600/50 px-4 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-500/10 dark:border-emerald-500/50 dark:text-emerald-300 dark:hover:bg-emerald-500/10"
              >
                {showAllProjects ? "Carousel view" : "All projects"}
              </button>
            )}
          </div>
          <div className="space-y-6">
            {showAllProjects ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {projectsData.map((p) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    selected={selectedProject.id === p.id}
                    onSelect={() => selectProject(p)}
                    className="w-full"
                  />
                ))}
              </div>
            ) : (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => scrollProjects("left")}
                  className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200/80 bg-white text-zinc-700 shadow-sm transition-colors hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-600 dark:bg-[#1a211e] dark:text-zinc-200 dark:hover:border-emerald-500/50 dark:hover:text-emerald-300"
                  aria-label="Scroll projects left"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div ref={projectsScrollRef} className="hide-scrollbar overflow-x-auto scroll-smooth px-1 pb-1">
                  <div className="flex w-max gap-3 snap-x snap-mandatory">
                    {projectsData.map((p) => (
                      <ProjectCard
                        key={p.id}
                        project={p}
                        selected={selectedProject.id === p.id}
                        onSelect={() => selectProject(p)}
                        className="w-[240px] shrink-0 snap-start sm:w-[260px]"
                      />
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => scrollProjects("right")}
                  className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-zinc-200/80 bg-white text-zinc-700 shadow-sm transition-colors hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-600 dark:bg-[#1a211e] dark:text-zinc-200 dark:hover:border-emerald-500/50 dark:hover:text-emerald-300"
                  aria-label="Scroll projects right"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4 items-stretch min-h-[300px] md:min-h-[340px]">
              <div className="flex flex-col rounded-lg overflow-hidden bg-zinc-900 border border-zinc-700 min-h-[260px] md:min-h-0">
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border-b border-zinc-700 shrink-0">
                  <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500/80" /><div className="w-3 h-3 rounded-full bg-yellow-500/80" /><div className="w-3 h-3 rounded-full bg-green-500/80" /></div>
                  <div className="flex-1 mx-4 py-1 px-3 rounded bg-zinc-800 text-zinc-500 text-xs truncate">
                    {selectedProject.liveUrl && selectedProject.liveUrl !== "#" ? selectedProject.liveUrl : "preview — source code"}
                  </div>
                </div>
                <div className="relative flex-1 min-h-[200px] bg-zinc-900 overflow-hidden">
                  {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && !previewFailed ? (
                    <iframe src={selectedProject.liveUrl} title={`${selectedProject.title} live preview`} className="absolute inset-0 w-full h-full border-0" onError={() => setPreviewFailed(true)} />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center" style={{ background: `linear-gradient(145deg, #18181b 0%, #27272a 50%, ${selectedProject.color}22 100%)` }}>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <svg className="h-6 w-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="font-semibold text-white">{selectedProject.title}</p>
                      <p className="mt-1 text-sm text-zinc-400">
                        {previewFailed && selectedProject.liveUrl && selectedProject.liveUrl !== "#" ? "Preview unavailable in browser" : "No public live demo yet"}
                      </p>
                      {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-4 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20 transition-colors">
                          View on GitHub
                        </a>
                      )}
                    </div>
                  )}
                  {previewFailed && selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                    <div className="absolute inset-0 flex items-end justify-center bg-black/35 pb-5">
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-white/95 px-3 py-1.5 text-xs font-semibold text-zinc-900">
                        Open Live Demo
                      </a>
                    </div>
                  )}
                  <div className="absolute left-0 right-0 top-0 h-px opacity-20 pointer-events-none animate-scan-line" style={{ background: `linear-gradient(90deg, transparent, ${selectedProject.color}, transparent)` }} />
                </div>
              </div>
              <div className="flex min-h-[260px] flex-col rounded-lg border border-zinc-200/60 bg-zinc-50/90 p-4 sm:p-5 md:min-h-0 dark:border-zinc-700 dark:bg-[#1a211e]">
                <div className="mb-2 flex shrink-0 items-start justify-between">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{selectedProject.title}</h3>
                  <div className="flex shrink-0 gap-2">
                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && <a href={selectedProject.githubUrl} className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-emerald-800/50 dark:text-emerald-400 dark:hover:border-emerald-500 dark:hover:text-emerald-300" aria-label="GitHub"><svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23 9.585-2.655 19.965-.885 19.965 0 0 1 3.3-1.23c.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg></a>}
                    {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && <a href={selectedProject.liveUrl} className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-emerald-800/50 dark:text-emerald-400 dark:hover:border-emerald-500 dark:hover:text-emerald-300" aria-label="Live demo"><svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>}
                  </div>
                </div>
                <p className="mb-4 flex-1 leading-relaxed text-zinc-600 dark:text-zinc-200">{selectedProject.fullDescription}</p>
                <div className="mt-auto flex flex-wrap gap-2">{selectedProject.tags.map((tag) => <span key={tag} className="rounded border border-zinc-200/80 bg-zinc-100/80 px-2 py-1 text-xs text-zinc-600 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200">{tag}</span>)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="min-h-screen scroll-mt-20 bg-emerald-50/40 pt-20 pb-12 dark:bg-[#0a0f0d] sm:pt-24">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">03. EXPERIENCE</p>
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 sm:mb-12 sm:text-4xl md:text-5xl dark:text-white">Where I&apos;ve Worked</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-emerald-300/80 dark:bg-emerald-800/50" />
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.title}-${exp.period}`} className="relative flex gap-4 pl-5 sm:gap-6 sm:pl-6">
                  <div className="absolute left-0 top-2 h-3 w-3 -translate-x-[5px] rounded-full bg-emerald-600 dark:bg-emerald-500" />
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="text-sm text-zinc-600 dark:text-zinc-300">{exp.period}</span>
                      <span className="rounded-full border border-emerald-200/80 bg-emerald-50 px-2 py-0.5 text-xs text-emerald-800 dark:border-emerald-700/50 dark:bg-emerald-950/60 dark:text-emerald-300">{exp.type}</span>
                      {"location" in exp && exp.location && (
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">· {exp.location}</span>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-zinc-900 sm:text-lg dark:text-zinc-50">{exp.title} at {exp.company}</h3>
                    {"points" in exp && exp.points ? (
                      <ul className="mb-3 mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
                        {exp.points.map((point: string, j: number) => <li key={j}>{point}</li>)}
                      </ul>
                    ) : (
                      <p className="mb-3 mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
                        {"description" in exp ? (exp as { description: string }).description : ""}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2">{exp.tags.map((tag) => <span key={tag} className="rounded border border-emerald-200/80 bg-emerald-50 px-2 py-0.5 text-xs text-emerald-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-emerald-300">{tag}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section id="opensource" className="min-h-screen scroll-mt-20 bg-white pt-20 pb-12 dark:bg-[#111916] sm:pt-24">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">04. OPEN SOURCE</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-white">Contributions</h2>

          <div className="space-y-4">
            {ossContributions.map((pr) => (
              <a
                key={pr.id}
                href={pr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 rounded-lg border border-zinc-200/70 bg-zinc-50/80 p-4 transition-colors hover:border-emerald-300/80 hover:bg-emerald-50/40 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6 sm:p-5 dark:border-zinc-700 dark:bg-[#1a211e] dark:hover:border-emerald-500/50 dark:hover:bg-[#1f2824]"
              >
                <div className="min-w-0 border-b border-zinc-200/60 pb-4 sm:border-b-0 sm:border-r sm:pr-6 sm:pb-0 dark:border-zinc-700">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">{pr.org}</span>
                  <h3 className="mb-2 text-sm font-semibold leading-snug text-zinc-900 group-hover:text-emerald-800 sm:text-base dark:text-zinc-50 dark:group-hover:text-emerald-300">{pr.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-mono">{pr.repo}</span>
                    <span>·</span>
                    <span>{pr.date}</span>
                  </div>
                  <p className="mt-3 text-xs font-medium text-emerald-700 group-hover:underline dark:text-emerald-400">View pull request →</p>
                </div>
                <div className="flex min-w-0 flex-col justify-center">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 sm:text-xs dark:text-zinc-400">What I did</p>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-200">{pr.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-20 bg-emerald-50/40 py-20 dark:bg-[#0a0f0d] sm:py-24">
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600 dark:text-emerald-400">05. SKILLS</p>
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 sm:mb-12 sm:text-4xl md:text-5xl dark:text-zinc-50">Technical Arsenal</h2>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12">
            {skillCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="mb-5 border-b border-emerald-500/30 pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-400">
                  {cat.title}
                </h3>
                <ul className="space-y-4">
                  {cat.skills.map((s) => (
                    <li key={s.name}>
                      <div className="mb-2 flex items-baseline justify-between gap-4">
                        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">{s.name}</span>
                        <span className="shrink-0 text-xs text-zinc-500 dark:text-zinc-300">{formatExperience(s.years)}</span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full bg-zinc-200/90 dark:bg-zinc-600">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-700"
                          style={{ width: `${Math.min((s.years / 4) * 100, 100)}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section id="blogs" className="flex min-h-screen scroll-mt-20 flex-col justify-center bg-white py-20 dark:bg-[#111916] sm:py-24">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">06. WRITING</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-zinc-50">From the Blog</h2>
          <p className="mb-8 max-w-xl text-sm text-zinc-600 sm:mb-10 sm:text-base dark:text-zinc-200">
            Latest posts from{" "}
            <a
              href="https://medium.com/@gaurabth2002"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              Medium
            </a>
            .
          </p>
          <MediumBlogSection />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="flex min-h-screen scroll-mt-20 flex-col justify-center bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950 pt-20 pb-12 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950 sm:pt-24">
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">07. CONTACT</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Let&apos;s Build Something Together</h2>
          <p className="mx-auto mb-8 max-w-xl text-sm text-zinc-300 sm:mb-10 sm:text-base dark:text-zinc-200">Reach out for collaborations, opportunities, or project discussions.</p>
          <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {contactInfo.map((item) => {
              const iconSvg = item.icon === "mail" ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> : item.icon === "phone" ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> : <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>;
              const content = (
                <div className="flex flex-col items-center gap-3 text-center">
                  <svg className="h-5 w-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">{iconSvg}</svg>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-emerald-500 mb-1">{item.label}</p>
                    <p className="text-white font-medium text-sm leading-snug">{item.value}</p>
                  </div>
                </div>
              );
              const cardClass = "h-full rounded-lg border border-emerald-800/40 bg-zinc-800/90 p-5 transition-colors hover:border-emerald-500/50 dark:border-emerald-900/50 dark:bg-zinc-900";
              return item.href ? <a key={item.label} href={item.href} className={cardClass}>{content}</a> : <div key={item.label} className={cardClass}>{content}</div>;
            })}
          </div>
          <p className="pt-8 text-sm text-zinc-400">I typically respond within <span className="font-semibold text-emerald-400">24 hours</span>.</p>
        </div>
      </section>

      <footer className="relative z-10 border-t border-emerald-900/30 bg-zinc-900 py-4 text-center text-sm text-emerald-400 dark:border-zinc-700 dark:bg-[#0a0f0d] dark:text-zinc-300">
        <p>Built with &hearts; by Gaurab</p>
      </footer>
    </div>
  );
}

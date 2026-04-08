"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import { MediumBlogSection } from "@/components/portfolio/MediumBlogSection";

const roleLabels = ["React.js", "Next.js", "Python", "Node.js"];

const features = [
  { icon: "code", title: "Clean Code", desc: "Maintainable, well-documented systems" },
  { icon: "stack", title: "Full Stack", desc: "React.js, Next.js, Python, Node.js" },
  { icon: "bolt", title: "Performance", desc: "API optimization & fast interfaces" },
  { icon: "collab", title: "Real Impact", desc: "Real-time systems & AI-integrated tools" },
];

const projectsData = [
  { id: "tripmate", title: "TripMate AI", description: "AI-powered travel planner with personalized itineraries", tags: ["React", "Django", "Gemini API", "OpenStreetMap", "AWS", "EC2", "Docker", "Docker Hub", "RDS", "Kubernetes"], fullDescription: "An AI-powered travel planner that creates personalized itineraries using the Gemini API. Integrated OpenStreetMap (Nominatim) for location search and place recommendations. Built a real-time, scalable React + Django architecture. Deployed on AWS (EC2), containerized with Docker and images published to Docker Hub, with Amazon RDS for the database and Kubernetes for orchestration.", previewUrl: "https://trip-ai-mate.vercel.app/", color: "#6366f1", githubUrl: "https://github.com/Gaurab4/tripmate", liveUrl: "https://trip-ai-mate.vercel.app/" },
  { id: "artisanclub", title: "ArtisanClub", description: "Project management platform for creative teams", tags: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Docker"], fullDescription: "A project management and collaboration platform for creative teams. Built task assignment, file sharing, and client portals from scratch. Used Docker to containerize the app for easy deployment.", previewUrl: "https://placehold.co/1200x750/0f172a/22c55e?text=ArtisanClub", color: "#22c55e", githubUrl: "#", liveUrl: "#" },
  { id: "todaytaskmanager", title: "Today Task Manager", description: "Task management app for daily productivity", tags: ["TypeScript", "Next.js", "CSS", "JavaScript"], fullDescription: "A lightweight task manager focused on organizing and tracking day-to-day tasks. Built with a frontend-first architecture and deployed for quick access and productivity workflows.", previewUrl: "https://placehold.co/1200x750/0f172a/f59e0b?text=Today+Task+Manager", color: "#f59e0b", githubUrl: "https://github.com/Gaurab4/today-task-manager", liveUrl: "https://today-manager.vercel.app" },
  { id: "timeleft", title: "TimeLeft", description: "Life calendar iOS app with zero setup", tags: ["Swift", "iOS", "WidgetKit"], fullDescription: "An iOS life-calendar app inspired by The Life Calendar, designed to be simple and ready to use without setup. Built in Swift with companion widget support for quick glanceable progress.", previewUrl: "https://placehold.co/1200x750/0f172a/8b5cf6?text=TimeLeft", color: "#8b5cf6", githubUrl: "https://github.com/Gaurab4/TimeLeft", liveUrl: "#" },
  { id: "nextcontest", title: "nextContest", description: "Aggregates next coding contests across platforms", tags: ["Swift", "iOS", "Codeforces", "LeetCode"], fullDescription: "An iOS app that helps users quickly find the next upcoming coding contests across platforms like Codeforces, CodeChef, AtCoder, and LeetCode.", previewUrl: "https://placehold.co/1200x750/0f172a/06b6d4?text=nextContest", color: "#06b6d4", githubUrl: "https://github.com/Gaurab4/nextContest", liveUrl: "#" },
];

const experiences = [
  { period: "Nov 2024 – Present", type: "Full-time", title: "Software Engineer", company: "Bryckel AI", points: ["Implemented RBAC system for role-based access control", "Built end-to-end onboarding flow for new users", "Architected and implemented 2 separate product line architectures", "Maintained and improved credit flow management", "Designed, created, and optimized REST APIs", "Implemented Excel generation from JSON data using third-party libraries"], tags: ["React", "Django", "Python", "PostgreSQL", "Pandas", "ReportLab", "REST APIs"] },
  { period: "Jun 2024 – Nov 2024", type: "Full-time", title: "Software Engineer", company: "Skizaa", location: "Remote", points: ["Developed dynamic and responsive user interfaces using React.js, enhancing user experience and performance", "Created an efficient Infinity Scroll feature, reducing data loading time by 90% (1–2 min → 2–3 sec)", "Collaborated with core team to ensure seamless UX, driving positive feedback and engagement", "Integrated Mixpanel analytics and session tracking across key modules, enabling data-driven insights that increased user engagement and improved feature adoption by 30%"], tags: ["React", "Redux", "Java", "JavaScript"] },
  { period: "Sept 2023 – Jun 2024", type: "Internship", title: "Frontend Intern", company: "Skizaa", points: ["Integrated APIs for dashboards", "Implemented Mixpanel analytics", "Fixed core UI bugs across the application", "Improved feature adoption by 30% through data-driven iteration"], tags: ["React", "APIs", "Mixpanel", "Analytics", "UI"] },
];

const skillCategories = [
  { title: "LANGUAGES", skills: [{ name: "JavaScript", level: 90 }, { name: "Python", level: 85 }, { name: "C++", level: 80 }, { name: "Java", level: 75 }] },
  { title: "FRONTEND", skills: [{ name: "React.js", level: 92 }, { name: "Next.js", level: 90 }, { name: "Tailwind CSS", level: 88 }, { name: "GSAP", level: 78 }] },
  { title: "BACKEND", skills: [{ name: "Django", level: 85 }, { name: "Node.js", level: 90 }, { name: "Express", level: 88 }, { name: "PostgreSQL", level: 80 }] },
  { title: "CLOUD & DEVOPS", skills: [{ name: "AWS", level: 85 }, { name: "EC2", level: 84 }, { name: "Docker", level: 88 }, { name: "Docker Hub", level: 82 }, { name: "Amazon RDS", level: 83 }, { name: "Kubernetes", level: 80 }] },
];

const fullStack = ["JavaScript", "Python", "React.js", "Next.js", "Tailwind CSS", "GSAP", "Django", "Node.js", "Express", "PostgreSQL", "GraphQL", "REST APIs", "Git", "AWS", "EC2", "Docker", "Docker Hub", "Amazon RDS", "Kubernetes"];

const contactInfo = [
  { label: "EMAIL", value: "gaurabth2002@gmail.com", href: "mailto:gaurabth2002@gmail.com", icon: "mail" },
  { label: "PHONE", value: "+91-8909365272", href: "tel:+918909365272", icon: "phone" },
  { label: "LOCATION", value: "Bengaluru, Karnataka, India", icon: "location" },
  { label: "AVAILABILITY", value: "Open to opportunities", icon: "calendar" },
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roleLabels.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#f5f5f5]">
      <Navbar />

      {/* Hero */}
      <section id="hero" className="relative z-10 flex min-h-screen flex-col scroll-mt-20 pt-16">
        <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">Gaurab</h1>
          <p key={roleIndex} className="mb-6 min-h-[1.75rem] text-lg text-zinc-600 animate-fade-in">{roleLabels[roleIndex]}</p>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-500">
            Software Engineer building performant, scalable web apps. React · Next.js · Python · Node.js
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/#projects" className="inline-flex h-12 items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-700">View Projects</Link>
            <Link href="/#contact" className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-900 bg-transparent px-6 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-900/5">Get In Touch</Link>
          </div>
        </main>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center gap-6 pb-8 sm:pb-10">
        <div className="pointer-events-auto flex justify-center gap-4">
          <a href="https://github.com/Gaurab4" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded border border-zinc-300 text-zinc-500 transition-colors hover:border-zinc-400 hover:text-zinc-700" aria-label="GitHub">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23 9.585-2.655 19.965-.885 19.965 0 0 1 3.3-1.23c.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/gaurab-t/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded border border-zinc-300 text-zinc-500 transition-colors hover:border-zinc-400 hover:text-zinc-700" aria-label="LinkedIn">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
          <a href="https://leetcode.com/u/thgemma/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded border border-zinc-300 text-zinc-500 transition-colors hover:border-zinc-400 hover:text-zinc-700" aria-label="LeetCode">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 13h7.5" />
              <path d="M9.424 7.268l4.999 -4.999" />
              <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
            </svg>
          </a>
          <a href="mailto:gaurabth2002@gmail.com" className="flex h-10 w-10 items-center justify-center rounded border border-zinc-300 text-zinc-500 transition-colors hover:border-zinc-400 hover:text-zinc-700" aria-label="Email">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
        </div>
        <div className="pointer-events-auto flex justify-center">
          <a href="#about" className="animate-bounce text-zinc-400 hover:text-zinc-600" aria-label="Scroll to about">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
          </a>
        </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen flex flex-col justify-center py-24 bg-[#f0efea] scroll-mt-10">
        <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2">01. ABOUT ME</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">Crafting Digital Experiences</h2>
              <div className="space-y-4 text-base leading-relaxed text-zinc-600 mb-8">
                <p>I&apos;m a Software Engineer passionate about building performant, scalable web applications. I specialize in React, Next.js, Python, and Node.js, and enjoy crafting both frontend interfaces and backend systems that deliver real impact.</p>
                <p>Over the past year, I&apos;ve worked on real-time document systems, API optimization, and AI-integrated tools. I love turning complex problems into clean, efficient code.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {features.map((f) => (
                <div key={f.title} className="rounded-lg bg-zinc-100/70 p-5 border border-zinc-200/80 flex gap-4 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-100 hover:shadow-sm">
                  <div className="text-zinc-700 shrink-0 rounded-lg bg-white/80 p-2 border border-zinc-200/60">
                    {f.icon === "code" && <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                    {f.icon === "stack" && <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>}
                    {f.icon === "bolt" && <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                    {f.icon === "collab" && <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-1">{f.title}</h3>
                    <p className="text-sm text-zinc-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen pt-24 pb-12 bg-[#f5f5f5] scroll-mt-20">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2">02. PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-8">Recent Work</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-3">
              {projectsData.map((p) => (
                <button key={p.id} onClick={() => setSelectedProject(p)} className={`w-full text-left rounded-lg p-4 border border-zinc-200/80 transition-all duration-200 ${selectedProject.id === p.id ? "bg-zinc-200/80 border-zinc-300" : "bg-white hover:bg-zinc-50 hover:border-zinc-300"}`}>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-semibold text-zinc-900">{p.title}</h3>
                      <p className="text-sm text-zinc-600 mt-1">{p.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">{p.tags.slice(0, 3).map((tag) => <span key={tag} className="text-xs px-2 py-0.5 rounded border border-zinc-200/80 bg-zinc-100/80 text-zinc-600">{tag}</span>)}{p.tags.length > 3 && <span className="text-xs text-zinc-500">+{p.tags.length - 3}</span>}</div>
                    </div>
                    <svg className={`h-5 w-5 shrink-0 text-zinc-500 ${selectedProject.id === p.id ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </button>
              ))}
            </div>
            <div className="lg:col-span-3 space-y-4">
              <div className="rounded-lg overflow-hidden bg-zinc-900 border border-zinc-700">
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border-b border-zinc-700">
                  <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500/80" /><div className="w-3 h-3 rounded-full bg-yellow-500/80" /><div className="w-3 h-3 rounded-full bg-green-500/80" /></div>
                  <div className="flex-1 mx-4 py-1 px-3 rounded bg-zinc-800 text-zinc-500 text-xs truncate">{selectedProject.previewUrl}</div>
                </div>
                <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                  {selectedProject.liveUrl && selectedProject.liveUrl !== "#" ? (
                    <iframe src={selectedProject.liveUrl} title={`${selectedProject.title} live preview`} className="absolute w-[133.33%] h-[133.33%] border-0 origin-top-left scale-75" />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={selectedProject.previewUrl} alt={`${selectedProject.title} preview`} className="w-full h-full object-cover" loading="lazy" />
                  )}
                  <div className="absolute left-0 right-0 top-0 h-px opacity-20 pointer-events-none animate-scan-line" style={{ background: `linear-gradient(90deg, transparent, ${selectedProject.color}, transparent)` }} />
                </div>
              </div>
              <div className="rounded-lg bg-white p-5 border border-zinc-200/80">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-zinc-900">{selectedProject.title}</h3>
                  <div className="flex gap-2 shrink-0">
                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && <a href={selectedProject.githubUrl} className="w-9 h-9 rounded-full border border-zinc-200/80 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-colors" aria-label="GitHub"><svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23 9.585-2.655 19.965-.885 19.965 0 0 1 3.3-1.23c.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg></a>}
                    {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && <a href={selectedProject.liveUrl} className="w-9 h-9 rounded-full border border-zinc-200/80 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-colors" aria-label="Live demo"><svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>}
                  </div>
                </div>
                <p className="text-zinc-600 leading-relaxed mb-4">{selectedProject.fullDescription}</p>
                <div className="flex flex-wrap gap-2">{selectedProject.tags.map((tag) => <span key={tag} className="text-xs px-2 py-1 rounded border border-zinc-200/80 bg-zinc-100/80 text-zinc-600">{tag}</span>)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="min-h-screen pt-24 pb-12 bg-[#f0efea] scroll-mt-20">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2">03. EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-12">Where I&apos;ve Worked</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200" />
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.title}-${exp.period}`} className="relative flex gap-6 pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-zinc-400 -translate-x-[5px]" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-sm text-zinc-500">{exp.period}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-200 text-zinc-600">{exp.type}</span>
                      {"location" in exp && exp.location && (
                        <span className="text-xs text-zinc-500">· {exp.location}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900">{exp.title} at {exp.company}</h3>
                    {"points" in exp && exp.points ? (
                      <ul className="text-zinc-600 leading-relaxed mt-2 mb-3 space-y-1 list-disc list-inside">
                        {exp.points.map((point: string, j: number) => <li key={j}>{point}</li>)}
                      </ul>
                    ) : (
                      <p className="text-zinc-600 leading-relaxed mt-2 mb-3">
                        {"description" in exp ? (exp as { description: string }).description : ""}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2">{exp.tags.map((tag) => <span key={tag} className="text-xs px-2 py-0.5 rounded bg-zinc-200 text-zinc-600">{tag}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="min-h-screen pt-24 pb-12 bg-[#f5f5f5] scroll-mt-20">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2">04. SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-10">Technical Arsenal</h2>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="rounded-lg bg-white p-6 sm:p-7 shadow-sm border border-zinc-100 min-w-0">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-4">{cat.title}</h3>
                <div className="space-y-4">{cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1"><span className="text-zinc-700">{s.name}</span><span className="text-zinc-500 font-medium">{s.level}%</span></div>
                    <div className="h-2 rounded-full bg-zinc-100 overflow-hidden"><div className="h-full rounded-full bg-zinc-700" style={{ width: `${s.level}%` }} /></div>
                  </div>
                ))}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <h3 className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-4">FULL TECH STACK</h3>
          <div className="flex flex-wrap justify-center gap-2">{fullStack.map((tech) => <span key={tech} className="px-3 py-1.5 rounded bg-white border border-zinc-100 text-sm text-zinc-700 shadow-sm">{tech}</span>)}</div>
        </div>
      </section>

      {/* Blogs */}
      <section id="blogs" className="min-h-screen flex flex-col justify-center py-24 bg-[#f0efea] scroll-mt-20">
        <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2">05. WRITING</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">From the Blog</h2>
          <p className="text-zinc-600 mb-10 max-w-xl">
            Latest posts from{" "}
            <a
              href="https://medium.com/@gaurabth2002"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-700"
            >
              Medium
            </a>
            .
          </p>
          <MediumBlogSection />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen pt-24 pb-12 bg-[#f5f5f5] scroll-mt-20">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2">06. CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">Let&apos;s Build Something Together</h2>
          <p className="text-zinc-600 mb-10 max-w-xl">Whether you have a project in mind, an idea to explore, or just want to say hi — my inbox is always open.</p>
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-600 mb-2">NAME</label>
                <input type="text" placeholder="John Doe" className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-300" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-600 mb-2">EMAIL</label>
                <input type="email" placeholder="john@example.com" className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-300" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-600 mb-2">MESSAGE</label>
                <textarea placeholder="Tell me about your project..." rows={5} className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-300 resize-none" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors">Send Message <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></button>
            </form>
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const iconSvg = item.icon === "mail" ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> : item.icon === "phone" ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> : item.icon === "location" ? <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />;
                const content = (<><svg className="h-5 w-5 text-zinc-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">{iconSvg}</svg><div><p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">{item.label}</p><p className="text-zinc-900 font-medium">{item.value}</p></div></>);
                return item.href ? <a key={item.label} href={item.href} className="rounded-lg bg-white p-5 shadow-sm border border-zinc-100 flex gap-4 hover:border-zinc-200 transition-colors">{content}</a> : <div key={item.label} className="rounded-lg bg-white p-5 shadow-sm border border-zinc-100 flex gap-4">{content}</div>;
              })}
              <p className="text-sm text-zinc-600 pt-2">I typically respond within <span className="font-semibold text-zinc-900">24 hours</span>. Let&apos;s talk about how we can work together.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-black/[0.06] py-4 text-center text-sm text-zinc-500 bg-[#f5f5f5]">
        <p>Built with &hearts; by Gaurab</p>
      </footer>
    </div>
  );
}

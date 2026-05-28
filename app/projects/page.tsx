"use client";

import Header from "../components/Header";
import { useEffect, useState } from "react";

const projectsData = [
  {
    id: "tripmate",
    title: "TripMate AI",
    description: "AI-powered travel planner with personalized itineraries",
    tags: ["React", "Django", "Gemini API", "OpenStreetMap", "AWS", "EC2", "Docker", "Docker Hub", "RDS", "Kubernetes"],
    fullDescription:
      "An AI-powered travel planner that creates personalized itineraries using the Gemini API. Integrated OpenStreetMap (Nominatim) for location search and place recommendations. Built a real-time, scalable React + Django architecture. Deployed on AWS (EC2), containerized with Docker and images published to Docker Hub, with Amazon RDS for the database and Kubernetes for orchestration.",
    previewUrl: "https://trip-ai-mate.vercel.app/",
    color: "#6366f1",
    githubUrl: "https://github.com/Gaurab4/tripmate",
    liveUrl: "https://trip-ai-mate.vercel.app/",
  },
  {
    id: "shanksportfolio",
    title: "Shashank Film Portfolio",
    description: "Filmmaker portfolio showcasing creative work",
    tags: ["Next.js", "React", "TypeScript"],
    fullDescription:
      "A cinematic portfolio website for filmmaker Shashank Aswal, built to showcase films, reels, and creative projects with an immersive layout and smooth project browsing.",
    previewUrl: "https://shashank-film-portfolio.vercel.app/",
    color: "#10b981",
    githubUrl: "https://github.com/Gaurab4/shanks-portfolio",
    liveUrl: "https://shashank-film-portfolio.vercel.app/",
  },
  {
    id: "hkoven",
    title: "HK Oven",
    description: "Pizza & pasta restaurant website",
    tags: ["Next.js", "React", "Tailwind CSS"],
    fullDescription:
      "A restaurant website built for HK Oven Pizza & Pasta, featuring menu highlights, brand storytelling, and a clean customer experience tailored for a local pizza restaurant.",
    previewUrl: "https://hkoven.vercel.app/",
    color: "#22c55e",
    githubUrl: "https://github.com/Gaurab4/hk-oven",
    liveUrl: "https://hkoven.vercel.app/",
  },
  {
    id: "artisanclub",
    title: "ArtisanClub",
    description: "Project management platform for creative teams",
    tags: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Docker"],
    fullDescription:
      "A project management and collaboration platform for creative teams. Built task assignment, file sharing, and client portals from scratch. Designed a clean, responsive UI for consistent UX across devices. Used Docker to containerize the app for easy deployment.",
    previewUrl: "https://placehold.co/1200x750/0f172a/22c55e?text=ArtisanClub",
    color: "#22c55e",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "todaytaskmanager",
    title: "Today Task Manager",
    description: "Task management app for daily productivity",
    tags: ["TypeScript", "Next.js", "CSS", "JavaScript"],
    fullDescription:
      "A lightweight task manager focused on organizing and tracking day-to-day tasks. Built with a frontend-first architecture and deployed for quick access and productivity workflows.",
    previewUrl: "https://placehold.co/1200x750/0f172a/f59e0b?text=Today+Task+Manager",
    color: "#f59e0b",
    githubUrl: "https://github.com/Gaurab4/today-task-manager",
    liveUrl: "https://today-manager.vercel.app",
  },
  {
    id: "timeleft",
    title: "TimeLeft",
    description: "Life calendar iOS app with zero setup",
    tags: ["Swift", "iOS", "WidgetKit"],
    fullDescription:
      "An iOS life-calendar app inspired by The Life Calendar, designed to be simple and ready to use without setup. Built in Swift with companion widget support for quick glanceable progress.",
    previewUrl: "https://placehold.co/1200x750/0f172a/8b5cf6?text=TimeLeft",
    color: "#8b5cf6",
    githubUrl: "https://github.com/Gaurab4/TimeLeft",
    liveUrl: "#",
  },
  {
    id: "nextcontest",
    title: "nextContest",
    description: "Aggregates next coding contests across platforms",
    tags: ["Swift", "iOS", "Codeforces", "LeetCode"],
    fullDescription:
      "An iOS app that helps users quickly find the next upcoming coding contests across platforms like Codeforces, CodeChef, AtCoder, and LeetCode.",
    previewUrl: "https://placehold.co/1200x750/0f172a/06b6d4?text=nextContest",
    color: "#06b6d4",
    githubUrl: "https://github.com/Gaurab4/nextContest",
    liveUrl: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const [previewFailed, setPreviewFailed] = useState(false);

  useEffect(() => {
    setPreviewFailed(false);
  }, [selectedProject.id]);

  return (
    <div className="min-h-screen relative bg-[#f5f5f5] flex flex-col">
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-100"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <Header />
      <main className="relative z-10 flex-1 mx-auto w-full max-w-6xl px-6 pt-24 pb-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2 animate-fade-in-up">
          02. PROJECTS
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-8 animate-fade-in-up opacity-0 [animation-delay:0.05s] [animation-fill-mode:forwards]">
          Recent Work
        </h1>

        <div className="space-y-6">
          <div className="overflow-x-auto pb-2 -mx-1 px-1 scroll-smooth [scrollbar-width:thin]">
            <div className="flex gap-3 w-max lg:w-full snap-x snap-mandatory">
              {projectsData.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProject(p)}
                  className={`snap-start shrink-0 w-[260px] sm:w-[280px] lg:w-[calc((100%-1.25rem*5)/6)] text-left rounded-lg p-4 border border-zinc-200/80 transition-all duration-200 animate-fade-in-up opacity-0 ${
                    selectedProject.id === p.id
                      ? "bg-zinc-200/80 border-zinc-300 shadow-sm"
                      : "bg-white hover:bg-zinc-50 hover:border-zinc-300"
                  }`}
                  style={{ animationDelay: `${0.1 + i * 0.08}s`, animationFillMode: "forwards" }}
                >
                  <h3 className="font-semibold text-zinc-900 truncate">{p.title}</h3>
                  <p className="text-sm text-zinc-600 mt-1 line-clamp-2">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded border border-zinc-200/80 bg-zinc-100/80 text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                    {p.tags.length > 3 && (
                      <span className="text-xs text-zinc-500">+{p.tags.length - 3}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
          {projectsData.length > 6 && (
            <p className="text-xs text-zinc-500 -mt-2">Scroll right to see more projects →</p>
          )}

          <div className="grid md:grid-cols-2 gap-4 items-stretch min-h-[300px] md:min-h-[340px] animate-fade-in-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
            <div className="flex flex-col rounded-lg overflow-hidden bg-zinc-900 border border-zinc-700 min-h-[260px] md:min-h-0">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border-b border-zinc-700 shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
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
                <div
                  className="absolute left-0 right-0 top-0 h-px opacity-20 pointer-events-none animate-scan-line"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${selectedProject.color}, transparent)`,
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-white p-5 border border-zinc-200/80 min-h-[260px] md:min-h-0">
              <div className="flex items-start justify-between mb-2 shrink-0">
                <h2 className="text-xl font-bold text-zinc-900">{selectedProject.title}</h2>
                <div className="flex gap-2 shrink-0">
                  {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                    <a
                      href={selectedProject.githubUrl}
                      className="w-9 h-9 rounded-full border border-zinc-200/80 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-colors"
                      aria-label="GitHub"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23 9.585-2.655 19.965-.885 19.965 0 0 1 3.3-1.23c.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                    <a
                      href={selectedProject.liveUrl}
                      className="w-9 h-9 rounded-full border border-zinc-200/80 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-colors"
                      aria-label="Live demo"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-4 flex-1">{selectedProject.fullDescription}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded border border-zinc-200/80 bg-zinc-100/80 text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

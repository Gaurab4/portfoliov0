"use client";

import Header from "../components/Header";
import { useState } from "react";

const projectsData = [
  {
    id: "tripmate",
    title: "TripMate AI",
    description: "AI-powered travel planner with personalized itineraries",
    tags: ["React", "Django", "Gemini API", "Google Places API"],
    fullDescription:
      "An AI-powered travel planner that generates personalized itineraries using the Gemini API. Integrated Google Places API to recommend top-rated spots with 95% accuracy. Built a real-time, scalable React + Django architecture. Improved API response times and optimized user interactions.",
    previewUrl: "https://placehold.co/1200x750/1a1a2e/6366f1?text=TripMate+AI",
    color: "#6366f1",
    githubUrl: "#",
    liveUrl: "#",
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
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

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
          Selected Work
        </h1>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-3">
            {projectsData.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className={`w-full text-left rounded-lg p-4 border border-zinc-200/80 transition-all duration-200 animate-fade-in-up opacity-0 ${
                  selectedProject.id === p.id
                    ? "bg-zinc-200/80 border-zinc-300"
                    : "bg-white hover:bg-zinc-50 hover:border-zinc-300"
                }`}
                style={{ animationDelay: `${0.1 + i * 0.08}s`, animationFillMode: "forwards" }}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-semibold text-zinc-900">{p.title}</h3>
                    <p className="text-sm text-zinc-600 mt-1">{p.description}</p>
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
                  </div>
                  <svg
                    className={`h-5 w-5 shrink-0 text-zinc-500 ${
                      selectedProject.id === p.id ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="rounded-lg overflow-hidden bg-zinc-900 border border-zinc-700 animate-fade-in-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border-b border-zinc-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4 py-1 px-3 rounded bg-zinc-800 text-zinc-500 text-xs truncate">
                  {selectedProject.previewUrl}
                </div>
              </div>
              <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProject.previewUrl}
                  alt={`${selectedProject.title} preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute left-0 right-0 top-0 h-px opacity-20 pointer-events-none animate-scan-line"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${selectedProject.color}, transparent)`,
                  }}
                />
              </div>
            </div>
            <div className="rounded-lg bg-white p-5 border border-zinc-200/80 animate-fade-in-up opacity-0 [animation-delay:0.28s] [animation-fill-mode:forwards]">
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-xl font-bold text-zinc-900">{selectedProject.title}</h2>
                <div className="flex gap-2 shrink-0">
                  {selectedProject.githubUrl && (
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
                  {selectedProject.liveUrl && (
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
              <p className="text-zinc-600 leading-relaxed mb-4">{selectedProject.fullDescription}</p>
              <div className="flex flex-wrap gap-2">
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

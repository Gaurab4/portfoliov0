import Header from "../components/Header";
import Link from "next/link";

const articles = [
  {
    tags: ["React", "State Management"],
    title: "Why I Stopped Using Redux and What I Use Instead",
    description:
      "A deep dive into modern React state management — Zustand, Jotai, and React Query patterns that replaced my Redux boilerplate.",
    date: "Feb 2024",
    readTime: "8 min read",
  },
  {
    tags: ["WebSockets", "CRDT", "Node.js"],
    title: "Building a Real-Time Collaborative Editor from Scratch",
    description:
      "CRDT algorithms, operational transforms, and WebSocket orchestration. Everything I learned building a Notion-like editor.",
    date: "Jan 2024",
    readTime: "14 min read",
  },
  {
    tags: ["DevOps", "Architecture", "CI/CD"],
    title: "The Architecture Behind Zero-Downtime Deployments",
    description:
      "Blue-green deployments, feature flags, database migration strategies, and how we ship 50+ times a day without user impact.",
    date: "Dec 2023",
    readTime: "10 min read",
  },
  {
    tags: ["TypeScript", "Best Practices"],
    title: "TypeScript Tricks That Saved My Codebase",
    description:
      "Discriminated unions, template literal types, conditional types — the advanced TypeScript patterns that make your code bulletproof.",
    date: "Nov 2023",
    readTime: "7 min read",
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen relative bg-[#f0efea] flex flex-col">
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-100"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <Header />
      <main className="relative z-10 flex-1 mx-auto w-full max-w-6xl px-6 pt-24 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2 animate-fade-in-up">
              05. WRITING
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 animate-fade-in-up opacity-0 [animation-delay:0.05s] [animation-fill-mode:forwards]">
              From the Blog
            </h1>
          </div>
          <Link
            href="#"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 flex items-center gap-1"
          >
            All articles
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <article
              key={article.title}
              className="rounded-lg bg-white p-6 shadow-sm border border-zinc-100 hover:border-zinc-200 transition-colors group animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.1 + i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-zinc-100 text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-zinc-400 group-hover:text-zinc-600">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
              <h2 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-zinc-700">
                {article.title}
              </h2>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                {article.description}
              </p>
              <p className="text-xs text-zinc-500">
                {article.date} · {article.readTime}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

import Header from "../components/Header";


const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Clean Code",
    desc: "Maintainable, well-documented systems",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Full Stack",
    desc: "React.js, Next.js, Django, Node.js",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Performance",
    desc: "API optimization & fast interfaces",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Real Impact",
    desc: "Real-time systems & AI-integrated tools",
  },
];

export default function About() {
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
      <main className="relative z-10 flex-1 mx-auto w-full max-w-6xl px-6 pt-24 pb-12 ">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="animate-fade-in-up">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2">
              01. ABOUT ME
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
              Crafting Digital Experiences
            </h1>
            <div className="space-y-4 text-base leading-relaxed text-zinc-600 mb-8">
              <p>
                I&apos;m a Software Engineer passionate about building performant,
                scalable, and user-friendly web applications. I specialize in React,
                Next.js, Django, and Node.js, and enjoy crafting both frontend
                interfaces and backend systems that deliver real impact.
              </p>
              <p>
                Over the past year, I&apos;ve worked on real-time document systems,
                API optimization, and AI-integrated tools. I love turning complex
                problems into clean, efficient code — and continuously improving the
                user experience through thoughtful engineering.
              </p>
            </div>
          
          </div>

          {/* Right column - feature cards */}
          <div className="flex flex-col gap-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="rounded-lg bg-white p-5 shadow-sm border border-zinc-100 flex gap-4 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${0.1 + i * 0.08}s`, animationFillMode: "forwards" }}
              >
                <div className="text-zinc-700 shrink-0 mt-0.5">{f.icon}</div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-zinc-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

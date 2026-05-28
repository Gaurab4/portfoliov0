import Header from "../components/Header";

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "C++", level: 80 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "GSAP", level: 78 },
    ],
  },
  {
    title: "BACKEND & APIs",
    skills: [
      { name: "REST APIs", level: 90 },
      { name: "Django", level: 85 },
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    title: "CLOUD & DEVOPS",
    skills: [
      { name: "AWS", level: 85 },
      { name: "CI/CD Pipelines", level: 84 },
      { name: "Docker", level: 88 },
      { name: "EC2", level: 84 },
      { name: "Amazon RDS", level: 83 },
      { name: "Kubernetes", level: 80 },
    ],
  },
  {
    title: "AI & PLATFORMS",
    skills: [
      { name: "Claude Agents", level: 86 },
      { name: "Prompt Engineering", level: 88 },
      { name: "Microsoft 365 Add-ins", level: 82 },
      { name: "Gemini API", level: 80 },
    ],
  },
];

const fullStack = [
  "JavaScript",
  "Python",
  "React.js",
  "Next.js",
  "Django",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "AWS",
  "CI/CD",
  "Docker",
  "Kubernetes",
  "Claude Agents",
  "Prompt Engineering",
  "Microsoft 365 Add-ins",
  "Git",
];

export default function Skills() {
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
      <main className="relative z-10 flex-1 w-full pt-24 pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2 animate-fade-in-up">
            04. SKILLS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-10 animate-fade-in-up opacity-0 [animation-delay:0.05s] [animation-fill-mode:forwards]">
            Technical Arsenal
          </h1>
        </div>

        <div className="mx-auto w-full max-w-[90rem] px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 mb-12">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="rounded-lg bg-white p-6 sm:p-7 shadow-sm border border-zinc-100 min-w-0 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${0.1 + i * 0.1}s`, animationFillMode: "forwards" }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-4">
                  {cat.title}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-zinc-700">{s.name}</span>
                        <span className="text-zinc-500 font-medium">{s.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-zinc-700"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-4">
            FULL TECH STACK
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {fullStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded bg-white border border-zinc-100 text-sm text-zinc-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

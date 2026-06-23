import Header from "../components/Header";

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "JavaScript", years: 3 },
      { name: "Python", years: 2 },
      { name: "C++", years: 3 },
      { name: "Java", years: 2 },
    ],
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "React.js", years: 3 },
      { name: "Next.js", years: 2 },
      { name: "Tailwind CSS", years: 2 },
      { name: "GSAP", years: 1 },
    ],
  },
  {
    title: "BACKEND & APIs",
    skills: [
      { name: "REST APIs", years: 2 },
      { name: "Django", years: 2 },
      { name: "Node.js", years: 2 },
      { name: "Express", years: 2 },
      { name: "PostgreSQL", years: 2 },
    ],
  },
  {
    title: "CLOUD & DEVOPS",
    skills: [
      { name: "AWS", years: 2 },
      { name: "CI/CD Pipelines", years: 2 },
      { name: "Docker", years: 2 },
      { name: "EC2", years: 2 },
      { name: "Amazon RDS", years: 1 },
      { name: "Kubernetes", years: 1 },
    ],
  },
  {
    title: "AI & PLATFORMS",
    skills: [
      { name: "Claude Agents", years: 1 },
      { name: "Prompt Engineering", years: 1 },
      { name: "Microsoft 365 Add-ins", years: 1 },
      { name: "Gemini API", years: 1 },
    ],
  },
];

function formatExperience(years: number) {
  return years === 1 ? "1 year" : `${years} years`;
}

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
                        <span className="text-zinc-500 font-medium">{formatExperience(s.years)}</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-zinc-700"
                          style={{ width: `${Math.min((s.years / 4) * 100, 100)}%` }}
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

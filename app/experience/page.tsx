import Header from "../components/Header";

const experiences = [
  {
    period: "Nov 2024 – Present",
    type: "Full-time",
    title: "Software Engineer",
    company: "Bryckel AI",
    points: [
      "Implemented RBAC system for role-based access control",
      "Built end-to-end onboarding flow for new users",
      "Architected and implemented 2 separate product line architectures",
      "Maintained and improved credit flow management",
      "Designed, created, and optimized REST APIs",
      "Implemented Excel generation from JSON data using third-party libraries",
    ],
    tags: ["React", "Django", "Python", "PostgreSQL", "Pandas", "ReportLab", "REST APIs"],
  },
  {
    period: "Jun 2024 – Nov 2024",
    type: "Full-time",
    title: "Software Engineer",
    company: "Skizaa",
    location: "Remote",
    points: [
      "Developed dynamic and responsive user interfaces using React.js, enhancing user experience and performance",
      "Created an efficient Infinity Scroll feature, reducing data loading time by 90% (1–2 min → 2–3 sec)",
      "Collaborated with core team to ensure seamless UX, driving positive feedback and engagement",
      "Integrated Mixpanel analytics and session tracking across key modules, enabling data-driven insights that increased user engagement and improved feature adoption by 30%",
    ],
    tags: ["React", "Redux", "Java", "JavaScript"],
  },
  {
    period: "Sept 2023 – Jun 2024",
    type: "Internship",
    title: "Frontend Intern",
    company: "Skizaa",
    points: [
      "Integrated APIs for dashboards",
      "Implemented Mixpanel analytics",
      "Fixed core UI bugs across the application",
    ],
    tags: ["React", "APIs", "Mixpanel", "Analytics", "UI"],
  },
];

export default function Experience() {
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
      <main className="relative z-10 flex-1 mx-auto w-full max-w-3xl px-6 pt-24 pb-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2 animate-fade-in-up">
          03. EXPERIENCE
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-12 animate-fade-in-up opacity-0 [animation-delay:0.05s] [animation-fill-mode:forwards]">
          Where I&apos;ve Worked
        </h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={`${exp.company}-${exp.title}-${exp.period}`} className="relative flex gap-6 pl-6 animate-fade-in-up opacity-0" style={{ animationDelay: `${0.1 + i * 0.12}s`, animationFillMode: "forwards" }}>
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-zinc-400 -translate-x-[5px]" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-sm text-zinc-500">{exp.period}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-200 text-zinc-600">
                      {exp.type}
                    </span>
                    {"location" in exp && exp.location && (
                      <span className="text-xs text-zinc-500">· {exp.location}</span>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold text-zinc-900">
                    {exp.title} at {exp.company}
                  </h2>
                  {"points" in exp && exp.points ? (
                    <ul className="text-zinc-600 leading-relaxed mt-2 mb-3 space-y-1 list-disc list-inside">
                      {exp.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-zinc-600 leading-relaxed mt-2 mb-3">
                      {"description" in exp ? (exp as { description: string }).description : ""}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-zinc-200 text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

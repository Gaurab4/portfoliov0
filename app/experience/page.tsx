import Header from "../components/Header";

const experiences = [
  {
    period: "Nov 2024 – Present",
    type: "Full-time",
    title: "Software Engineer",
    company: "Bryckel AI",
    description:
      "Built a real-time document highlighting system, improving review speed by 60%. Optimized Django REST APIs, cutting response time by 50%+. Automated Excel/PDF report generation with Pandas and ReportLab. Led cross-stack performance initiatives, boosting productivity by 35%.",
    tags: ["Django", "React", "Python", "Pandas", "ReportLab", "REST APIs"],
  },
  {
    period: "Jun 2024 – Nov 2024",
    type: "Full-time",
    title: "Software Engineer",
    company: "Skizaa",
    description:
      "Developed responsive UIs with React, including an Infinity Scroll that reduced loading time from 1–2 min to ~3 sec. Collaborated with core team to enhance UX and engagement.",
    tags: ["React", "JavaScript", "UX", "Performance"],
  },
  {
    period: "Sept 2023 – Jun 2024",
    type: "Internship",
    title: "Frontend Intern",
    company: "Skizaa",
    description:
      "Integrated APIs for dashboards, implemented Mixpanel analytics, and fixed core UI bugs. Improved feature adoption by 30% through data-driven iteration.",
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
                  </div>
                  <h2 className="text-lg font-semibold text-zinc-900">
                    {exp.title} at {exp.company}
                  </h2>
                  <p className="text-zinc-600 leading-relaxed mt-2 mb-3">
                    {exp.description}
                  </p>
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

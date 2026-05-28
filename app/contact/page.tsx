import Header from "../components/Header";

const contactInfo = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "PHONE",
    value: "+91-8909365272",
    href: "tel:+918909365272",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "EMAIL",
    value: "gaurabth2002@gmail.com",
    href: "mailto:gaurabth2002@gmail.com",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "LOCATION",
    value: "Bengaluru, Karnataka, India",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen relative bg-zinc-950 flex flex-col">
      <Header />
      <main className="relative z-10 flex-1 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-6 pt-24 pb-12 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400 mb-2 animate-fade-in-up">
          06. CONTACT
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 animate-fade-in-up opacity-0 [animation-delay:0.05s] [animation-fill-mode:forwards]">
          Let&apos;s Build Something Together
        </h1>
        <p className="text-zinc-400 mb-10 max-w-xl mx-auto animate-fade-in-up opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
          Reach out for collaborations, opportunities, or project discussions.
        </p>

        <div className="mx-auto grid w-full max-w-3xl gap-4 sm:grid-cols-3">
          {contactInfo.map((item, i) => {
            const cardContent = (
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="text-emerald-400 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-emerald-500 mb-1">
                    {item.label}
                  </p>
                  <p className="text-white font-medium text-sm leading-snug">{item.value}</p>
                </div>
              </div>
            );
            const cardClass =
              "rounded-lg bg-zinc-900 p-5 border border-emerald-900/50 h-full animate-fade-in-up opacity-0 hover:border-emerald-500/50 transition-colors";
            const style = {
              animationDelay: `${0.15 + i * 0.08}s`,
              animationFillMode: "forwards",
            } as React.CSSProperties;
            return item.href ? (
              <a key={item.label} href={item.href} className={cardClass} style={style}>
                {cardContent}
              </a>
            ) : (
              <div key={item.label} className={cardClass} style={style}>
                {cardContent}
              </div>
            );
          })}
        </div>
        <p className="text-sm text-zinc-500 pt-8">
          I typically respond within{" "}
          <span className="font-semibold text-emerald-400">24 hours</span>.
        </p>
      </main>
    </div>
  );
}

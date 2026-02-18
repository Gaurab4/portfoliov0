"use client";

import Header from "../components/Header";
import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "EMAIL",
    value: "gaurab@example.com",
  },
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "LOCATION",
    value: "Bengaluru, Karnataka, India",
  }
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

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
      <main className="relative z-10 flex-1 mx-auto w-full max-w-5xl px-6 pt-24 pb-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2 animate-fade-in-up">
          06. CONTACT
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4 animate-fade-in-up opacity-0 [animation-delay:0.05s] [animation-fill-mode:forwards]">
          Let&apos;s Build Something Together
        </h1>
        <p className="text-zinc-600 mb-10 max-w-xl animate-fade-in-up opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
          Whether you have a project in mind, an idea to explore, or just want to
          say hi — my inbox is always open.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up opacity-0 [animation-delay:0.15s] [animation-fill-mode:forwards]">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-zinc-600 mb-2">
                NAME
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-300"
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-zinc-600 mb-2">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-300"
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-zinc-600 mb-2">
                MESSAGE
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
            >
              Send Message
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>

          {/* Contact info cards */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => {
              const cardContent = (
                <>
                  <div className="text-zinc-600 shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">
                      {item.label}
                    </p>
                    <p className="text-zinc-900 font-medium">{item.value}</p>
                  </div>
                </>
              );
              const cardClass = "rounded-lg bg-white p-5 shadow-sm border border-zinc-100 flex gap-4 animate-fade-in-up opacity-0";
              const style = { animationDelay: `${0.2 + i * 0.08}s`, animationFillMode: "forwards" } as React.CSSProperties;
              return item.href ? (
                <a key={item.label} href={item.href} className={`${cardClass} hover:border-zinc-200 transition-colors`} style={style}>
                  {cardContent}
                </a>
              ) : (
                <div key={item.label} className={cardClass} style={style}>
                  {cardContent}
                </div>
              );
            })}
            <p className="text-sm text-zinc-600 pt-2">
              I typically respond within{" "}
              <span className="font-semibold text-zinc-900">24 hours</span>. Let&apos;s
              talk about how we can work together.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

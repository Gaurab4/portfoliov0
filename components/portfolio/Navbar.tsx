"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/#hero", sectionId: "hero", label: "Home" },
  { href: "/#projects", sectionId: "projects", label: "Projects" },
  { href: "/#experience", sectionId: "experience", label: "Experience" },
  { href: "/#opensource", sectionId: "opensource", label: "Open Source" },
  { href: "/#skills", sectionId: "skills", label: "Skills" },
  { href: "/#blogs", sectionId: "blogs", label: "Blogs" },
  { href: "/#contact", sectionId: "contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const activeSection = useScrollSpy();
  const isHomePage = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkHref = (link: (typeof navLinks)[0]) => {
    if (link.sectionId === "hero") return "/#hero";
    if (isHomePage) return `/#${link.sectionId}`;
    return `/${link.sectionId}`;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: (typeof navLinks)[0]) => {
    setMenuOpen(false);
    if (link.sectionId !== "hero" || !isHomePage) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/#hero");
  };

  const isActive = (link: (typeof navLinks)[0]) => {
    if (isHomePage) {
      if (link.sectionId === "hero") return activeSection === "hero" || activeSection === "about";
      return activeSection === link.sectionId;
    }
    return pathname === `/${link.sectionId}`;
  };

  const linkClass = (active: boolean) =>
    `text-xs font-medium uppercase tracking-widest transition-colors ${
      active
        ? "text-emerald-600 underline underline-offset-4 dark:text-emerald-400"
        : "text-zinc-600 hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-emerald-300"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-sm dark:border-zinc-700 dark:bg-[#0a0f0d]/95 animate-fade-in-down">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/#hero"
          onClick={(e) => handleNavClick(e, navLinks[0])}
          className="shrink-0 text-sm font-semibold tracking-tight text-emerald-700 transition-opacity hover:opacity-80 dark:text-emerald-400"
        >
          {"<gaurab.dev />"}
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-6 xl:flex">
          {navLinks.map((link) => {
            const linkHref = getLinkHref(link);
            const active = isActive(link);
            return (
              <Link
                key={link.sectionId}
                href={linkHref}
                onClick={(e) => handleNavClick(e, link)}
                className={linkClass(active)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-300 text-zinc-700 transition-colors hover:bg-zinc-100 xl:hidden dark:border-emerald-800/40 dark:text-emerald-400 dark:hover:bg-zinc-900"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-zinc-200/80 bg-white/95 px-4 py-4 dark:border-zinc-700 dark:bg-[#0a0f0d]/98 xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => {
              const linkHref = getLinkHref(link);
              const active = isActive(link);
              return (
                <Link
                  key={link.sectionId}
                  href={linkHref}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`rounded-lg px-3 py-2 ${linkClass(active)}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

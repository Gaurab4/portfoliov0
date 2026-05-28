"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { href: "/#hero", sectionId: "hero", label: "Home" },
  { href: "/#projects", sectionId: "projects", label: "Projects" },
  { href: "/#experience", sectionId: "experience", label: "Experience" },
  { href: "/#skills", sectionId: "skills", label: "Skills" },
  { href: "/#blogs", sectionId: "blogs", label: "Blogs" },
  { href: "/#contact", sectionId: "contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const activeSection = useScrollSpy();
  const isHomePage = pathname === "/";

  const getLinkHref = (link: (typeof navLinks)[0]) => {
    if (link.sectionId === "hero") return "/#hero";
    if (isHomePage) return `/#${link.sectionId}`;
    return `/${link.sectionId}`;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: (typeof navLinks)[0]) => {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-emerald-900/40 bg-zinc-950/90 backdrop-blur-sm animate-fade-in-down">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        <Link
          href="/#hero"
          onClick={(e) => handleNavClick(e, navLinks[0])}
          className="text-sm font-semibold tracking-tight text-emerald-400 transition-opacity hover:opacity-80"
        >
          {"<gaurab.dev />"}
        </Link>
        <nav className="flex items-center justify-center gap-7">
          {navLinks.map((link) => {
            const linkHref = getLinkHref(link);
            const active = isActive(link);
            return (
              <Link
                key={link.sectionId}
                href={linkHref}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-xs font-medium uppercase tracking-widest transition-colors hover:text-emerald-300 ${
                  active ? "text-emerald-400 underline underline-offset-4" : "text-zinc-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div aria-hidden />
      </div>
    </header>
  );
}

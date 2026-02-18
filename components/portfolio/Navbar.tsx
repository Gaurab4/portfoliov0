"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { href: "/", sectionId: "hero", label: "Home" },
  { href: "/#about", sectionId: "about", label: "About" },
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
    if (isHomePage) return link.sectionId === "hero" ? "/" : `/#${link.sectionId}`;
    return link.sectionId === "hero" ? "/" : `/${link.sectionId}`;
  };

  const isActive = (link: (typeof navLinks)[0]) => {
    if (isHomePage) return activeSection === link.sectionId;
    return pathname === `/${link.sectionId}` || (pathname === "/" && link.sectionId === "hero");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.06] bg-[#f5f5f5]/95 backdrop-blur-sm animate-fade-in-down">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
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
                className={`text-xs font-medium uppercase tracking-widest transition-colors hover:text-foreground ${
                  active ? "text-foreground underline underline-offset-4" : "text-zinc-500"
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

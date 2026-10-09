"use client";

import { useEffect, useState } from "react";
import { BreezeMark } from "./BreezeLogo";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Plans", href: "#plans" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell">
        <nav
          className={`mt-4 flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-white/70 bg-white/75 shadow-glass backdrop-blur-xl"
              : "border-transparent bg-white/30 backdrop-blur-sm"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <BreezeMark className="h-9 w-9" />
            <span className="leading-none">
              <span className="block text-base font-extrabold tracking-tight text-deep">Breeze</span>
              <span className="block text-[0.7rem] font-semibold tracking-[0.22em] text-teal-dark">
                HOST
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-deep/80 transition-colors hover:bg-white/70 hover:text-teal-dark"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a href="#community" className="btn-primary px-5 py-2.5 text-xs sm:text-sm">
            Join Discord
          </a>
        </nav>
      </div>
    </header>
  );
}

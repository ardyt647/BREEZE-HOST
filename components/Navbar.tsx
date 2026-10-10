"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

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
          className={`mt-4 flex items-center justify-between rounded-xl border px-4 py-2.5 transition-colors duration-200 sm:px-5 ${
            scrolled
              ? "border-white/70 bg-white/80 shadow-glass backdrop-blur-xl"
              : "border-transparent bg-white/30 backdrop-blur-sm"
          }`}
        >
          <a href="#top" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/logo.png")}
              alt="Breeze Host"
              width={386}
              height={220}
              className="h-11 w-auto"
            />
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-4 py-2 text-sm font-semibold text-deep/80 transition-colors hover:bg-white/70 hover:text-teal-dark"
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

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative pb-12 pt-6">
      <div className="section-shell">
        <div className="glass-card flex flex-col items-center gap-8 px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Breeze Host" className="h-14 w-auto" />
            <p className="text-sm font-semibold text-teal-dark">Your Project. Our Power.</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-deep/70">
            <a href="#features" className="transition-colors hover:text-teal-dark">Features</a>
            <a href="#plans" className="transition-colors hover:text-teal-dark">Plans</a>
            <a href="#community" className="transition-colors hover:text-teal-dark">Community</a>
            <Link href="/privacy" className="transition-colors hover:text-teal-dark">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-teal-dark">Terms and Conditions</Link>
          </nav>
        </div>

        <p className="mt-7 text-center text-xs text-deep/50">
          &copy; {new Date().getFullYear()} Breeze Host. Hosting services run through our Discord
          community.
        </p>
      </div>
    </footer>
  );
}

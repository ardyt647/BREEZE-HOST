import { BreezeMark } from "./BreezeLogo";

export default function Footer() {
  return (
    <footer className="relative pb-12 pt-6">
      <div className="section-shell">
        <div className="glass-card flex flex-col items-center gap-8 px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <BreezeMark className="h-12 w-12" />
            <div>
              <p className="text-lg font-extrabold leading-none tracking-tight text-deep">
                Breeze Host
              </p>
              <p className="mt-1 text-sm font-semibold text-teal-dark">
                Your Project. Our Power.
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-deep/70">
            <a href="#features" className="transition-colors hover:text-teal-dark">Features</a>
            <a href="#plans" className="transition-colors hover:text-teal-dark">Plans</a>
            <a href="#community" className="transition-colors hover:text-teal-dark">Community</a>
          </nav>
        </div>

        <p className="mt-7 text-center text-xs text-deep/50">
          © {new Date().getFullYear()} Breeze Host · Paid &amp; Free Services, 24/7. Operated through
          our Discord community. 💜
        </p>
      </div>
    </footer>
  );
}

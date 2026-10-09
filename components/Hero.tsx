import { BreezeMark } from "./BreezeLogo";

/** Decorative drifting wind swooshes that echo the logo's "breeze" lines. */
function WindBackdrop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 700"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="#A8E4EA" strokeLinecap="round" opacity="0.55">
        <path d="M-40 180 C 200 120, 420 220, 700 150 S 1080 60, 1260 140" strokeWidth="3" />
        <path d="M-40 300 C 240 250, 480 340, 760 270 S 1120 200, 1260 260" strokeWidth="2.5" />
        <path d="M-40 430 C 220 380, 500 470, 780 400 S 1140 330, 1260 390" strokeWidth="2" />
      </g>
      <g fill="#BFEBEE" opacity="0.5">
        <circle cx="180" cy="140" r="7" />
        <circle cx="960" cy="200" r="5" />
        <circle cx="640" cy="470" r="6" />
        <circle cx="1120" cy="430" r="4" />
      </g>
    </svg>
  );
}

const STATS = [
  { value: "24/7", label: "Uptime & support" },
  { value: "Free", label: "Plans to start" },
  { value: "100%", label: "Discord managed" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-28">
      <WindBackdrop />

      <div className="section-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-teal" />
            Paid &amp; Free Services · Online 24/7
          </span>

          <h1 className="animate-fade-up mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-deep sm:text-6xl md:text-7xl">
            Your Project.
            <br />
            <span className="bg-gradient-to-r from-teal-dark via-teal to-aqua bg-clip-text text-transparent">
              Our Power.
            </span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-deep/75">
            Breeze Host is a Discord-run hosting service built for creators, gamers and developers.
            Powerful, affordable and stable — with free plans to start and friendly humans on the
            other end, around the clock.
          </p>

          <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#plans" className="btn-primary w-full sm:w-auto">
              Explore Our Plans
              <span aria-hidden="true">→</span>
            </a>
            <a href="#community" className="btn-ghost w-full sm:w-auto">
              Join the Community
            </a>
          </div>
        </div>

        {/* Floating logo mark — the visual anchor of the page */}
        <div className="relative mx-auto mt-16 flex max-w-3xl justify-center">
          <div className="animate-float-slow glass-card flex items-center gap-5 px-7 py-5 sm:gap-7 sm:px-10">
            <BreezeMark className="h-16 w-16 shrink-0 sm:h-20 sm:w-20" />
            <div className="text-left">
              <p className="text-2xl font-extrabold leading-none tracking-tight text-deep sm:text-3xl">
                Breeze Host
              </p>
              <p className="mt-1.5 text-sm font-semibold text-teal-dark">
                ⚡ Powerful &amp; Reliable Hosting
              </p>
            </div>
          </div>
        </div>

        <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="glass-card px-4 py-5 text-center">
              <dt className="text-2xl font-extrabold text-teal-dark sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-xs font-semibold uppercase tracking-wide text-deep/60">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

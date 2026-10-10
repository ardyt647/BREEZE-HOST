import { BreezeMark } from "./BreezeLogo";

/** Static decorative wind lines that echo the "breeze" strokes in the logo. */
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

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-28">
      <WindBackdrop />

      <div className="section-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            <span className="h-2 w-2 rounded-full bg-teal" />
            Free and paid plans, online 24/7
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-deep sm:text-6xl md:text-7xl">
            Your Project.
            <br />
            <span className="bg-gradient-to-r from-teal-dark via-teal to-aqua bg-clip-text text-transparent">
              Our Power.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-deep/75">
            Breeze Host is a hosting service that runs on Discord. We host bots, websites and game
            servers on plans that start free, with paid tiers when your project needs more room.
            Support is answered by our team in the same server you join.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#plans" className="btn-primary w-full sm:w-auto">
              See our plans
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#community" className="btn-ghost w-full sm:w-auto">
              Join the community
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-3xl justify-center">
          <div className="glass-card flex items-center gap-5 px-6 py-6 sm:gap-7 sm:px-10">
            <BreezeMark className="h-16 w-16 shrink-0 sm:h-20 sm:w-20" />
            <div className="text-left">
              <p className="text-2xl font-extrabold leading-none tracking-tight text-deep sm:text-3xl">
                Breeze Host
              </p>
              <p className="mt-1.5 text-sm font-semibold text-teal-dark">
                Hosting for bots, websites and game servers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

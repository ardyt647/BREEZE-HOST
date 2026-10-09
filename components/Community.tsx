const DISCORD_INVITE = "https://discord.gg/breeze-host"; // ← EDIT: your real invite link

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.4A8.5 8.5 0 1 1 21 11.5Z" />
    </svg>
  );
}

function InviteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </svg>
  );
}

export default function Community() {
  return (
    <section id="community" className="relative py-20 sm:py-28">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-deep via-teal-dark to-teal px-7 py-14 shadow-breeze-lg sm:px-14 sm:py-16">
          {/* soft breeze highlights */}
          <svg aria-hidden="true" viewBox="0 0 1200 500" className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
            <g fill="none" stroke="#BFEBEE" strokeLinecap="round" opacity="0.28">
              <path d="M-40 120 C 260 70, 520 170, 820 100 S 1160 40, 1260 110" strokeWidth="3" />
              <path d="M-40 300 C 300 250, 560 350, 860 280 S 1180 220, 1260 290" strokeWidth="2.5" />
            </g>
          </svg>

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-soft">
              <span className="h-2 w-2 rounded-full bg-cyan-soft" />
              The Breeze Community
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Come say hi 👋
            </h2>
            <p className="mt-4 text-cyan-pale/90">
              Everything at Breeze Host lives on Discord — plans, support and the people behind it.
              Jump in, meet the community, and invite your friends to grow it with us. 🚀
            </p>
          </div>

          <div className="relative mx-auto mt-11 grid max-w-3xl gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-cyan-soft">
                <ChatIcon />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">💬 Chat Here</h3>
              <p className="mt-2 text-sm leading-relaxed text-cyan-pale/80">
                Join the conversation, meet the community and enjoy your stay.
              </p>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-dark transition-transform duration-300 hover:-translate-y-0.5"
              >
                Open Discord <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-cyan-soft">
                <InviteIcon />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">🔗 Invite Your Friends</h3>
              <p className="mt-2 text-sm leading-relaxed text-cyan-pale/80">
                Help us grow the Breeze Host community — a quick invite goes a long way.
              </p>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/15"
              >
                Copy Invite Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

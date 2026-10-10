import CopyInviteButton from "./CopyInviteButton";
import { DISCORD_INVITE } from "@/lib/site";

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
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-deep via-teal-dark to-teal px-7 py-14 shadow-breeze-lg sm:px-14 sm:py-16">
          <svg aria-hidden="true" viewBox="0 0 1200 500" className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
            <g fill="none" stroke="#BFEBEE" strokeLinecap="round" opacity="0.28">
              <path d="M-40 120 C 260 70, 520 170, 820 100 S 1160 40, 1260 110" strokeWidth="3" />
              <path d="M-40 300 C 300 250, 560 350, 860 280 S 1180 220, 1260 290" strokeWidth="2.5" />
            </g>
          </svg>

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-soft">
              <span className="h-2 w-2 rounded-full bg-cyan-soft" />
              The Breeze Community
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Join the community
            </h2>
            <p className="mt-4 text-cyan-pale/90">
              Plans, support and the team all live in our Discord server. Come in, meet the other
              members, and invite your friends if you find it useful.
            </p>
          </div>

          <div className="relative mx-auto mt-11 grid max-w-3xl gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-white/20 bg-white/10 p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 text-cyan-soft">
                <ChatIcon />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">Chat with us</h3>
              <p className="mt-2 text-sm leading-relaxed text-cyan-pale/80">
                Join the conversation, meet other members and ask us anything about hosting.
              </p>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-teal-dark transition-colors duration-200 hover:bg-cyan-pale"
              >
                Open Discord <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 text-cyan-soft">
                <InviteIcon />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">Invite your friends</h3>
              <p className="mt-2 text-sm leading-relaxed text-cyan-pale/80">
                Help the community grow. A single invite goes a long way.
              </p>
              <CopyInviteButton invite={DISCORD_INVITE} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

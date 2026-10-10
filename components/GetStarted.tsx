import { DISCORD_INVITE } from "@/lib/site";

const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const STEPS = [
  {
    title: "Join our Discord",
    body: "The invite link takes you straight to our plans channel.",
    icon: (
      <Icon>
        <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.4A8.5 8.5 0 1 1 21 11.5Z" />
      </Icon>
    ),
  },
  {
    title: "Open a ticket",
    body: "Tell us which plan you want and what you plan to run on it.",
    icon: (
      <Icon>
        <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4Z" />
        <path d="M14 5v14" />
      </Icon>
    ),
  },
  {
    title: "Get your server",
    body: "We send your login details, including SSH access, and you are ready to go.",
    icon: (
      <Icon>
        <rect x="3" y="4" width="18" height="7" rx="2" />
        <rect x="3" y="13" width="18" height="7" rx="2" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </Icon>
    ),
  },
];

export default function GetStarted() {
  return (
    <section id="get-started" className="relative py-20 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Getting started</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-deep sm:text-4xl">
            How to get a server
          </h2>
          <p className="mt-4 text-deep/70">
            Everything runs through our Discord server. Three steps and your VPS is ready.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="glass-card flex flex-col p-7 transition-shadow duration-200 hover:shadow-breeze"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-dark to-aqua text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <span className="text-teal">{step.icon}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold leading-snug text-deep">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-deep/70">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Join the Discord
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

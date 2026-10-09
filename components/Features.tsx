type Feature = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const I = (d: React.ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    {d}
  </svg>
);

const FEATURES: Feature[] = [
  {
    title: "Powerful & Reliable Hosting",
    body: "Fast, well-specced hardware that keeps your bots, sites and game servers online — so your project never has to wait on us.",
    icon: I(<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />),
  },
  {
    title: "Affordable Plans",
    body: "Start free and scale up only when you need to. Paid tiers stay honest and budget-friendly, with no nasty surprises.",
    icon: I(
      <>
        <path d="M12 3v18" />
        <path d="M16.5 7.5H9.8a2.8 2.8 0 0 0 0 5.6h4.4a2.8 2.8 0 0 1 0 5.6H7" />
      </>
    ),
  },
  {
    title: "Stable Performance",
    body: "Monitored around the clock for smooth, consistent uptime. When something wobbles, we notice before you do.",
    icon: I(<path d="M12 2.5 20 6v6c0 5-3.4 8.3-8 9.5-4.6-1.2-8-4.5-8-9.5V6l8-3.5Z" />),
  },
  {
    title: "Friendly Support",
    body: "A real, welcoming team on Discord. Ask a question, get help fast — and enjoy the conversation while you're at it.",
    icon: I(
      <>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M4 13v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z" />
        <path d="M20 13v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Breeze Host</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-deep sm:text-4xl">
            Everything you need, in one calm breeze
          </h2>
          <p className="mt-4 text-deep/70">
            We keep the complicated parts quiet so you can focus on building. Here&apos;s what you get
            the moment you join.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="glass-card group flex flex-col p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-breeze"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-dark to-aqua text-white shadow-breeze">
                {f.icon}
              </span>
              <h3 className="mt-5 text-lg font-bold leading-snug text-deep">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-deep/70">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

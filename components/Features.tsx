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
    title: "Powerful and Reliable Hosting",
    body: "Fast hardware that keeps your bots, websites and game servers online. Your project stays up, and you are not left waiting on us.",
    icon: I(<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />),
  },
  {
    title: "Affordable Plans",
    body: "Start on the free plan and move to a paid tier only when you need more. No hidden fees and no surprise charges.",
    icon: I(
      <>
        <path d="M12 3v18" />
        <path d="M16.5 7.5H9.8a2.8 2.8 0 0 0 0 5.6h4.4a2.8 2.8 0 0 1 0 5.6H7" />
      </>
    ),
  },
  {
    title: "Stable Performance",
    body: "Our servers are monitored around the clock. When something goes wrong, we fix it before it reaches you.",
    icon: I(<path d="M12 2.5 20 6v6c0 5-3.4 8.3-8 9.5-4.6-1.2-8-4.5-8-9.5V6l8-3.5Z" />),
  },
  {
    title: "Friendly Support",
    body: "Open a ticket or ask in the Discord server. A member of our team replies, not an automated bot.",
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
            What you get with Breeze Host
          </h2>
          <p className="mt-4 text-deep/70">
            Breeze Host is built to stay out of your way. Here is what every plan includes.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="glass-card flex flex-col p-7 transition-shadow duration-200 hover:shadow-breeze"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-dark to-aqua text-white shadow-breeze">
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

/**
 * EDIT ME
 * These tiers describe the Breeze Host offering. No prices are invented here:
 * the free plan is marked "Free" and paid plans are marked "Paid" with a note
 * pointing to Discord. Replace the price and note values with your real
 * figures once you have them.
 */
type Plan = {
  name: string;
  tagline: string;
  price: string;
  note: string;
  cta: string;
  featured?: boolean;
  perks: string[];
};

const PLANS: Plan[] = [
  {
    name: "Breeze Starter",
    tagline: "For your first project",
    price: "Free",
    note: "No card required",
    cta: "Claim the free plan",
    perks: [
      "1 hosted project",
      "Community support",
      "Shared resources",
      "Basic uptime monitoring",
      "Support through our Discord",
    ],
  },
  {
    name: "Breeze Pro",
    tagline: "For bots and sites that need more room",
    price: "Paid",
    note: "Current pricing is listed in our Discord",
    cta: "Ask about Pro",
    featured: true,
    perks: [
      "Up to 5 hosted projects",
      "More RAM and CPU",
      "Faster restarts and deploys",
      "Priority support",
    ],
  },
  {
    name: "Breeze Elite",
    tagline: "For always-on setups",
    price: "Paid",
    note: "Current pricing is listed in our Discord",
    cta: "Ask about Elite",
    perks: [
      "More hosted projects",
      "Dedicated resources",
      "Backups and custom domains",
      "Direct contact with the team",
    ],
  },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Plans() {
  return (
    <section id="plans" className="relative py-20 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Plans</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-deep sm:text-4xl">
            Plans for every project
          </h2>
          <p className="mt-4 text-deep/70">
            Every plan is managed through our Discord server. Start free, then move up when your
            project grows.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-shadow duration-200 ${
                plan.featured
                  ? "border-teal/30 bg-gradient-to-b from-white to-cyan-pale shadow-breeze-lg"
                  : "border-white/70 bg-white/70 shadow-glass backdrop-blur-md hover:shadow-breeze"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-md bg-gradient-to-r from-teal-dark to-teal px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white">
                  Recommended
                </span>
              )}

              <h3 className="text-xl font-extrabold text-deep">{plan.name}</h3>
              <p className="mt-1 text-sm text-deep/60">{plan.tagline}</p>

              <div className="mt-6">
                <span className="text-4xl font-extrabold tracking-tight text-teal-dark">
                  {plan.price}
                </span>
                <p className="mt-2 text-sm text-deep/55">{plan.note}</p>
              </div>

              <a
                href="#community"
                className={`mt-7 ${plan.featured ? "btn-primary" : "btn-ghost"} w-full`}
              >
                {plan.cta}
              </a>

              <ul className="mt-7 space-y-3">
                {plan.perks.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-deep/80">
                    <span className="mt-0.5 text-teal">
                      <Check />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-deep/55">
          Not sure which plan fits? Ask us in our Discord server and we will help you choose.
        </p>
      </div>
    </section>
  );
}

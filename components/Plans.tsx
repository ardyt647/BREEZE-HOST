/**
 * ── EDIT ME ──────────────────────────────────────────────────────────────
 * These plans, prices and specs are sensible PLACEHOLDERS so the page looks
 * complete. Swap in your real Breeze Host plans before you go live.
 * ─────────────────────────────────────────────────────────────────────────
 */
type Plan = {
  name: string;
  tagline: string;
  price: string;
  period: string;
  cta: string;
  featured?: boolean;
  perks: string[];
};

const PLANS: Plan[] = [
  {
    name: "Breeze Starter",
    tagline: "Perfect for trying things out",
    price: "Free",
    period: "forever",
    cta: "Claim Free Plan",
    perks: [
      "1 hosted project",
      "Community support",
      "Shared resources",
      "Basic uptime monitoring",
      "Discord ticket support",
    ],
  },
  {
    name: "Breeze Pro",
    tagline: "For growing projects & bots",
    price: "₹99",
    period: "/month",
    cta: "Upgrade to Pro",
    featured: true,
    perks: [
      "Up to 5 hosted projects",
      "Priority resources & RAM",
      "99.9% uptime target",
      "Faster deploy & restarts",
      "Priority ticket support",
    ],
  },
  {
    name: "Breeze Elite",
    tagline: "For serious, always-on setups",
    price: "₹249",
    period: "/month",
    cta: "Go Elite",
    perks: [
      "Unlimited projects",
      "Dedicated resources",
      "Backups & custom domains",
      "Advanced monitoring",
      "Direct line to the team",
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
            Find the perfect option for your project
          </h2>
          <p className="mt-4 text-deep/70">
            Whether you&apos;re spinning up your first bot or running something always-on, there&apos;s
            a Breeze plan that fits — free to start, easy to grow.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-4xl border p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                plan.featured
                  ? "border-teal/30 bg-gradient-to-b from-white to-cyan-pale shadow-breeze-lg lg:-mt-4 lg:mb-4"
                  : "border-white/70 bg-white/70 shadow-glass backdrop-blur-md hover:shadow-breeze"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-dark to-teal px-4 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white shadow-breeze">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-extrabold text-deep">{plan.name}</h3>
              <p className="mt-1 text-sm text-deep/60">{plan.tagline}</p>

              <div className="mt-6 flex items-end gap-1.5">
                <span className="text-4xl font-extrabold tracking-tight text-teal-dark">
                  {plan.price}
                </span>
                <span className="pb-1.5 text-sm font-semibold text-deep/50">{plan.period}</span>
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
          Not sure which plan? Hop into our Discord and we&apos;ll help you pick.
        </p>
      </div>
    </section>
  );
}

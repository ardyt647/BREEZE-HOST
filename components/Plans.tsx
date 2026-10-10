/**
 * VPS plans for Breeze Host. Specs and prices are taken from the plan sheet.
 * Update the PLANS array if the plans change.
 */
import { DISCORD_INVITE } from "@/lib/site";

type Spec = { label: string; value: string; icon: React.ReactNode };
type Plan = {
  tier: string;
  name: string;
  price: string;
  priceNote: string;
  featured?: boolean;
  specs: Spec[];
};

const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const RAM = (
  <Icon>
    <rect x="3" y="7" width="18" height="9" rx="2" />
    <path d="M6 16v3M10 16v3M14 16v3M18 16v3" />
  </Icon>
);
const CPU = (
  <Icon>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="10" y="10" width="4" height="4" />
    <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
  </Icon>
);
const DISK = (
  <Icon>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
    <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
  </Icon>
);
const CLOCK = (
  <Icon>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </Icon>
);

const PLANS: Plan[] = [
  {
    tier: "Tier 1",
    name: "Starter",
    price: "Free",
    priceNote: "with 20 invites, or \u20B9499",
    specs: [
      { label: "RAM", value: "12 GB", icon: RAM },
      { label: "CPU", value: "4 cores", icon: CPU },
      { label: "Disk", value: "20 GB", icon: DISK },
      { label: "Duration", value: "330 days", icon: CLOCK },
    ],
  },
  {
    tier: "Tier 2",
    name: "Basic",
    price: "\u20B92,999",
    priceNote: "for the full term",
    specs: [
      { label: "RAM", value: "16 GB", icon: RAM },
      { label: "CPU", value: "6 cores", icon: CPU },
      { label: "Disk", value: "35 GB", icon: DISK },
      { label: "Duration", value: "190 days", icon: CLOCK },
    ],
  },
  {
    tier: "Tier 3",
    name: "Pro",
    price: "\u20B93,999",
    priceNote: "for the full term",
    featured: true,
    specs: [
      { label: "RAM", value: "42 GB", icon: RAM },
      { label: "CPU", value: "32 cores", icon: CPU },
      { label: "Disk", value: "50 GB", icon: DISK },
      { label: "Duration", value: "320 days", icon: CLOCK },
    ],
  },
  {
    tier: "Tier 4",
    name: "Ultimate",
    price: "\u20B94,999",
    priceNote: "for the full term",
    specs: [
      { label: "RAM", value: "84 GB", icon: RAM },
      { label: "CPU", value: "42 cores", icon: CPU },
      { label: "Disk", value: "100 GB", icon: DISK },
      { label: "Duration", value: "392 days", icon: CLOCK },
    ],
  },
];

const HIGHLIGHTS = [
  { label: "Fast", icon: <Icon><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></Icon> },
  { label: "Secure", icon: <Icon><path d="M12 2.5 20 6v6c0 5-3.4 8.3-8 9.5-4.6-1.2-8-4.5-8-9.5V6l8-3.5Z" /></Icon> },
  { label: "24/7 uptime", icon: <Icon><path d="M3 12h4l3-7 4 14 3-7h4" /></Icon> },
  { label: "Full root access", icon: <Icon><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3" /><path d="M13 15h4" /></Icon> },
];

export default function Plans() {
  return (
    <section id="plans" className="relative py-20 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">VPS Plans</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-deep sm:text-4xl">
            Pick a VPS plan
          </h2>
          <p className="mt-4 text-deep/70">
            Every plan runs on Debian or Ubuntu, comes with full root access and SSH from the moment
            it is created, and is managed through our Discord server.
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {HIGHLIGHTS.map((h) => (
            <li key={h.label} className="flex items-center gap-2 text-sm font-semibold text-deep/80">
              <span className="text-teal">{h.icon}</span>
              {h.label}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-shadow duration-200 ${
                plan.featured
                  ? "border-teal/30 bg-gradient-to-b from-white to-cyan-pale shadow-breeze-lg"
                  : "border-white/70 bg-white/85 shadow-glass hover:shadow-breeze"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 rounded-md bg-gradient-to-r from-teal-dark to-teal px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white">
                  Recommended
                </span>
              )}

              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-dark">
                {plan.tier}
              </p>
              <h3 className="mt-2 text-xl font-extrabold text-deep">{plan.name}</h3>

              <div className="mt-5">
                <span className="text-3xl font-extrabold tracking-tight text-teal-dark">
                  {plan.price}
                </span>
                <p className="mt-1.5 text-sm text-deep/55">{plan.priceNote}</p>
              </div>

              <ul className="mt-6 space-y-3 border-t border-teal/15 pt-6">
                {plan.specs.map((s) => (
                  <li key={s.label} className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2 text-deep/60">
                      <span className="text-teal">{s.icon}</span>
                      {s.label}
                    </span>
                    <span className="font-semibold text-deep">{s.value}</span>
                  </li>
                ))}
              </ul>

              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 ${plan.featured ? "btn-primary" : "btn-ghost"} w-full`}
              >
                Open a ticket
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 space-y-2 text-center">
          <p className="text-sm text-deep/60">
            Debian and Ubuntu images, SSH access straight away, and free renewals for active members.
          </p>
          <p className="text-sm font-semibold text-deep/75">
            How to get one: open a ticket in our Discord server.
          </p>
        </div>
      </div>
    </section>
  );
}

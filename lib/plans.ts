/**
 * VPS plan data, kept in one place so the plans section and the structured data
 * on the page cannot drift apart. Specs and prices come from the plan sheet.
 */
export type PlanSpec = { label: string; value: string };

export type PlanData = {
  tier: string;
  name: string;
  /** Display price, for example "Free" or "₹2,999". */
  price: string;
  /** Numeric price for structured data. */
  priceValue: string;
  currency: string;
  priceNote: string;
  featured?: boolean;
  specs: PlanSpec[];
};

export const PLANS: PlanData[] = [
  {
    tier: "Tier 1",
    name: "Starter",
    price: "Free",
    priceValue: "0",
    currency: "INR",
    priceNote: "with 20 invites, or \u20B9499",
    specs: [
      { label: "RAM", value: "12 GB" },
      { label: "CPU", value: "4 cores" },
      { label: "Disk", value: "20 GB" },
      { label: "Duration", value: "330 days" },
    ],
  },
  {
    tier: "Tier 2",
    name: "Basic",
    price: "\u20B92,999",
    priceValue: "2999",
    currency: "INR",
    priceNote: "for the full term",
    specs: [
      { label: "RAM", value: "16 GB" },
      { label: "CPU", value: "6 cores" },
      { label: "Disk", value: "35 GB" },
      { label: "Duration", value: "190 days" },
    ],
  },
  {
    tier: "Tier 3",
    name: "Pro",
    price: "\u20B93,999",
    priceValue: "3999",
    currency: "INR",
    priceNote: "for the full term",
    featured: true,
    specs: [
      { label: "RAM", value: "42 GB" },
      { label: "CPU", value: "32 cores" },
      { label: "Disk", value: "50 GB" },
      { label: "Duration", value: "320 days" },
    ],
  },
  {
    tier: "Tier 4",
    name: "Ultimate",
    price: "\u20B94,999",
    priceValue: "4999",
    currency: "INR",
    priceNote: "for the full term",
    specs: [
      { label: "RAM", value: "84 GB" },
      { label: "CPU", value: "42 cores" },
      { label: "Disk", value: "100 GB" },
      { label: "Duration", value: "392 days" },
    ],
  },
];

import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, OG_IMAGE } from "./seo";
import { DISCORD_INVITE } from "./site";
import { PLANS } from "./plans";

export const organizationLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  sameAs: [DISCORD_INVITE],
};

export const websiteLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  description: SITE_DESCRIPTION,
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export function breadcrumbLd(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export const plansLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${SITE_NAME} VPS plans`,
  itemListElement: PLANS.map((plan, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: `${SITE_NAME} ${plan.name} VPS`,
      description: `${plan.specs
        .map((s) => `${s.label} ${s.value}`)
        .join(", ")}. ${plan.priceNote}.`,
      image: OG_IMAGE.url,
      brand: { "@type": "Brand", name: SITE_NAME },
      offers: {
        "@type": "Offer",
        price: plan.priceValue,
        priceCurrency: plan.currency,
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#plans`,
      },
    },
  })),
};

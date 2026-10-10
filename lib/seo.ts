/**
 * Site-wide SEO constants.
 *
 * SITE_URL must be absolute: it is used for canonical URLs, Open Graph tags,
 * the sitemap and structured data. Override it with NEXT_PUBLIC_SITE_URL when
 * the site moves to a custom domain, for example:
 *   NEXT_PUBLIC_SITE_URL=https://breezehost.xyz npm run build
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://ardyt647.github.io/BREEZE-HOST"
).replace(/\/+$/, "");

export const SITE_NAME = "Breeze Host";
export const SITE_TAGLINE = "Your Project. Our Power.";
export const SITE_TITLE = `${SITE_NAME} | ${SITE_TAGLINE}`;

export const SITE_DESCRIPTION =
  "Breeze Host is a Discord-based hosting service offering free and paid VPS plans on Debian and Ubuntu, with full root access, instant SSH and support through our Discord server.";

export const OG_DESCRIPTION =
  "Free and paid VPS plans on Debian and Ubuntu, with full root access, instant SSH and support through our Discord server.";

export const OG_IMAGE = {
  url: `${SITE_URL}/og.png`,
  width: 1200,
  height: 630,
  alt: `${SITE_NAME}. ${SITE_TAGLINE}`,
};

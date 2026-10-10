/**
 * Base path for assets referenced in plain markup.
 *
 * Next applies the `basePath` to its own routes and to `_next` assets, but not to
 * paths written by hand in JSX (a plain <img src="/logo.png"> is left untouched).
 * On a GitHub Pages project site the app lives under /<repo>, so those paths would
 * 404. This helper prepends the base path so the file resolves wherever it is hosted.
 *
 * The value is injected at build time from next.config.mjs (see the `env` key).
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}

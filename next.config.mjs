/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT === "1";
// For GitHub Pages project sites the app is served from /<repo>, so we need a basePath.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  // Set EXPORT=1 to emit a fully static site into ./out (used for Pages + the preview file).
  ...(isExport ? { output: "export", images: { unoptimized: true } } : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;

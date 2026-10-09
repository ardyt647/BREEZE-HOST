/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Set EXPORT=1 to emit a fully static site into ./out (used for the preview file).
  ...(process.env.EXPORT === "1" ? { output: "export" } : {}),
};

export default nextConfig;

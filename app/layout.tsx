import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breeze Host — Your Project. Our Power.",
  description:
    "Breeze Host is a Discord-based hosting service offering free and paid plans with powerful, reliable hosting, 24/7 friendly support, and stable performance.",
  keywords: [
    "Breeze Host",
    "hosting",
    "free hosting",
    "Discord hosting",
    "game server hosting",
    "bot hosting",
  ],
  openGraph: {
    title: "Breeze Host — Your Project. Our Power.",
    description:
      "Paid & free hosting services, available 24/7. Powerful, affordable, stable, and friendly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

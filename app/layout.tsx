import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breeze Host | Your Project. Our Power.",
  description:
    "Breeze Host is a Discord-based hosting service with free and paid plans for bots, websites and game servers. Hosting, support and the community all run through our Discord server.",
  keywords: [
    "Breeze Host",
    "hosting",
    "free hosting",
    "Discord hosting",
    "game server hosting",
    "bot hosting",
  ],
  openGraph: {
    title: "Breeze Host | Your Project. Our Power.",
    description:
      "Free and paid hosting plans for bots, websites and game servers, with support through our Discord server.",
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

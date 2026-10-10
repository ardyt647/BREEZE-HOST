import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import GetStarted from "@/components/GetStarted";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { plansLd } from "@/lib/structuredData";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <JsonLd data={plansLd} />
      <Navbar />
      <Hero />
      <Features />
      <Plans />
      <GetStarted />
      <Community />
      <Footer />
    </main>
  );
}

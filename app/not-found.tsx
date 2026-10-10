import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Overrides the site-wide robots directive from the root layout so this route
// is not indexed. Next also emits a noindex tag here, so the two agree.
export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="section-shell flex min-h-[60vh] flex-col items-center justify-center pb-20 pt-36 text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-deep sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-deep/70">
          The page you are looking for does not exist or has moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </section>
      <Footer />
    </main>
  );
}

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <article className="section-shell pt-36 pb-16">
        <div className="mx-auto max-w-3xl">
          <div className="glass-card p-8 sm:p-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-deep sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-deep/55">Last updated: {updated}</p>
            <div className="legal">{children}</div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

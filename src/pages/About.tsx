import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="relative bg-brand-800">
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_top,white,transparent_55%)]" />
        <Navbar />
        <div className="container relative py-24 text-center text-white">
          <h1 className="font-display text-4xl">About RESEATO</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            RESEATO helps you book the best tables at top-rated restaurants in Cebu. Skip the line,
            enjoy the dine — and discover what’s best.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
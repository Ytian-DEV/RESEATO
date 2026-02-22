import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import Button from "../components/ui/Buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="relative min-h-[78vh]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('/src/assets/hero.jpg')",
          }}
        />
        <Navbar />

        <main className="relative flex min-h-[78vh] items-center">
          <div className="container">
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
                Restaurants in Cebu City
              </h1>
              <p className="mt-4 text-base text-white/80 md:text-lg">
                Book the best tables at top-rated restaurants, skip the line, enjoy the dine — and
                discover what’s best.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/signup">
                  <Button className="w-56">Get Started</Button>
                </Link>
                <Link to="/signin">
                  <Button variant="outline" className="w-56 bg-white/95">
                    Sign In
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex items-center justify-center gap-6 text-xs text-white/70">
                <Link to="/about" className="hover:text-white">About</Link>
                <span>•</span>
                <span className="hover:text-white cursor-default">Terms and Conditions</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
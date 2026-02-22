import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-800 text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-display text-lg">RESEATO</div>
            <p className="mt-3 max-w-sm text-sm text-white/75">
              Making restaurant reservations simple and elegant for Cebu’s best dining spots.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Quick Links</div>
            <div className="mt-3 grid gap-2 text-sm text-white/75">
              <Link className="hover:text-white" to="/">Home</Link>
              <Link className="hover:text-white" to="/signin">Sign In</Link>
              <Link className="hover:text-white" to="/signup">Get Started</Link>
              <Link className="hover:text-white" to="/about">About</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-3 grid gap-2 text-sm text-white/75">
              <div>SM Seaside, Cebu City</div>
              <div>support@reseato.com</div>
              <div>+63 123 456 7890</div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} RESEATO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
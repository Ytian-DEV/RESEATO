import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Buttons";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <span className="text-lg">🍴</span>
          </div>
          <span className="font-display tracking-wide">RESEATO</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link to="/signin">
            <Button variant="ghost" className="h-10 px-4">
              Sign In
            </Button>
          </Link>

          <Link to="/signup">
            <Button className="h-10 bg-brand-500 hover:bg-brand-600 px-4">
              Get Started
            </Button>
          </Link>

          {pathname !== "/about" && (
            <Link to="/about" className="hidden text-sm text-white/80 hover:text-white md:block">
              About
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
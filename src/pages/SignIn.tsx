import { Link } from "react-router-dom";
import AuthShell from "../components/layout/AuthShell";
import Input from "../components/ui/Input";
import Checkbox from "../components/ui/Checkbox";
import Button from "../components/ui/Buttons";

export default function SignIn() {
  return (
    <AuthShell>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-800 text-white shadow-soft">
            🍴
          </div>
          <div>
            <div className="font-display text-xl tracking-wide text-brand-900">RESEATO</div>
            <div className="text-sm text-neutral-600">Welcome back to seamless dining</div>
          </div>
        </div>

        <p className="text-neutral-700">
          Your favorite restaurants are just a click away.
        </p>

        <ul className="space-y-3 text-sm text-neutral-700">
          <li className="flex gap-2"><span className="text-brand-600">✓</span>Reserve tables in seconds</li>
          <li className="flex gap-2"><span className="text-brand-600">✓</span>Skip the waiting lines</li>
          <li className="flex gap-2"><span className="text-brand-600">✓</span>Manage all your bookings</li>
        </ul>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-soft ring-1 ring-neutral-100">
        <h1 className="font-display text-2xl text-brand-900">Sign In</h1>
        <p className="mt-1 text-sm text-neutral-600">Enter your credentials to continue</p>

        <form className="mt-6 space-y-4">
          <Input label="Email Address" placeholder="Enter your email" type="email" />
          <Input label="Password" placeholder="Enter your password" type="password" />

          <div className="flex items-center justify-between">
            <Checkbox label="Remember me" />
            <button type="button" className="text-sm font-medium text-brand-700 hover:text-brand-800">
              Forgot password?
            </button>
          </div>

          <Checkbox label="I have read and agree to the Terms and Conditions" />

          <Button className="w-full">Sign In →</Button>

          <p className="text-center text-sm text-neutral-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="font-semibold text-brand-700 hover:text-brand-800">
              Sign up for free
            </Link>
          </p>
        </form>
      </div>
    </AuthShell>
  );
}
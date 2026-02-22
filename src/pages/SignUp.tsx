import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AuthShell from "../components/layout/AuthShell";
import Button from "../components/ui/Buttons";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpFormValues } from "../features/auth/authSchemas";

export default function SignUp() {
  const [termsOpen, setTermsOpen] = useState(false);

  const defaultValues = useMemo<SignUpFormValues>(() => ({
    role: "customer",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  }), []);

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues,
    resolver: zodResolver(signUpSchema),
  });

  const role = watch("role");

  const onSubmit = (data: SignUpFormValues) => {
    // TODO: hook to API
    console.log("signup", data);
  };

  return (
    <AuthShell>
      <div className="hidden lg:block">
        <Link to="/" className="inline-flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-800 text-white shadow-soft">
            🍴
          </div>
          <div className="font-display text-xl text-brand-900">RESEATO</div>
        </Link>
        <div className="mt-6 max-w-md text-neutral-700">
          Join and start reserving tables today — with a premium experience that feels effortless.
        </div>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-soft ring-1 ring-neutral-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl text-brand-900">Create Account</h1>
            <p className="mt-1 text-sm text-neutral-600">Join us and start reserving tables today</p>
          </div>
        </div>

        {/* role picker */}
        <div className="mt-6">
          <div className="text-xs font-semibold text-neutral-600">I am a…</div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setValue("role", "customer")}
              className={[
                "rounded-2xl border p-4 text-left transition",
                role === "customer"
                  ? "border-brand-400 bg-brand-50"
                  : "border-neutral-200 hover:bg-neutral-50",
              ].join(" ")}
            >
              <div className="text-sm font-semibold text-brand-900">Customer</div>
              <div className="text-xs text-neutral-600">Reserve tables</div>
            </button>

            <button
              type="button"
              onClick={() => setValue("role", "owner")}
              className={[
                "rounded-2xl border p-4 text-left transition",
                role === "owner"
                  ? "border-brand-400 bg-brand-50"
                  : "border-neutral-200 hover:bg-neutral-50",
              ].join(" ")}
            >
              <div className="text-sm font-semibold text-brand-900">Restaurant Owner</div>
              <div className="text-xs text-neutral-600">Manage bookings</div>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input label="First Name" placeholder="First name" error={errors.firstName?.message} {...register("firstName")} />
            <Input label="Last Name" placeholder="Last name" error={errors.lastName?.message} {...register("lastName")} />
          </div>

          <Input label="Email Address" placeholder="Enter your email" type="email" error={errors.email?.message} {...register("email")} />
          <Input label="Phone Number (Optional)" placeholder="Enter phone number" error={errors.phone?.message} {...register("phone")} />
          <Input label="Password" placeholder="Create a password" type="password" error={errors.password?.message} {...register("password")} />
          <Input label="Confirm Password" placeholder="Confirm your password" type="password" error={errors.confirmPassword?.message} {...register("confirmPassword")} />

          <label className="flex items-start gap-2 text-sm text-neutral-700">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-neutral-300" {...register("terms")} />
            <span>
              I have read and agree to the{" "}
              <button type="button" onClick={() => setTermsOpen(true)} className="font-semibold text-brand-700 hover:text-brand-800">
                Terms and Conditions
              </button>
            </span>
          </label>
          {errors.terms?.message && <div className="text-xs text-red-600">{errors.terms.message}</div>}

          <Button className="w-full">Create Account →</Button>

          <p className="text-center text-sm text-neutral-600">
            Already have an account?{" "}
            <Link to="/signin" className="font-semibold text-brand-700 hover:text-brand-800">
              Sign in
            </Link>
          </p>
        </form>
      </div>

      <Modal
        open={termsOpen}
        onClose={() => setTermsOpen(false)}
        title="RESEATO Terms and Conditions & Policy"
        footer={
          <div className="flex justify-end">
            <Button onClick={() => setTermsOpen(false)} className="min-w-32">
              Close
            </Button>
          </div>
        }
      >
        <div className="space-y-4 text-sm leading-6 text-neutral-700">
          <p>
            By ticking the agreement box and proceeding, you acknowledge that you have read,
            understood, and agreed to the following Terms and Conditions.
          </p>

          <ol className="list-decimal space-y-3 pl-5">
            <li><b>Acceptance of Terms.</b> Using RESEATO means you agree to comply with the policies stated herein.</li>
            <li><b>Payment Policy.</b> Payments are considered final once successfully processed.</li>
            <li><b>No Cancellation Policy.</b> Once processed, reservations cannot be canceled, transferred, or rescheduled.</li>
            <li><b>Limitation of Liability.</b> RESEATO uses third-party payment providers; proceed at your own risk.</li>
            <li><b>Accuracy of Information.</b> Users are responsible for providing accurate and complete information.</li>
          </ol>

          <p className="text-xs text-neutral-500">
            Replace this placeholder with your complete terms text (we’ll wire it from the backend later).
          </p>
        </div>
      </Modal>
    </AuthShell>
  );
}
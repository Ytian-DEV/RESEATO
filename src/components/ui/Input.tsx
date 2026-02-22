import { cn } from "../../lib/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function Input({ label, error, className, ...props }: Props) {
  return (
    <label className="block">
      {label && <div className="mb-2 text-sm font-medium text-neutral-700">{label}</div>}
      <input
        className={cn(
          "w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100",
          error && "border-red-300 focus:border-red-400 focus:ring-red-100",
          className
        )}
        {...props}
      />
      {error && <div className="mt-2 text-xs text-red-600">{error}</div>}
    </label>
  );
}
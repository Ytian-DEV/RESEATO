type Props = React.InputHTMLAttributes<HTMLInputElement> & { label: string };

export default function Checkbox({ label, ...props }: Props) {
  return (
    <label className="flex items-center gap-2 text-sm text-neutral-700">
      <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" {...props} />
      <span>{label}</span>
    </label>
  );
}
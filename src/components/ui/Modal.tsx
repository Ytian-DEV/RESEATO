import { cn } from "../../lib/cn";

type Props = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

export default function Modal({ open, title, onClose, children, footer, className }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className={cn("w-full max-w-3xl rounded-2xl bg-white shadow-soft", className)}>
          <div className="flex items-start justify-between gap-4 border-b border-neutral-100 p-6">
            <div>
              {title && <h2 className="font-display text-xl text-brand-900">{title}</h2>}
            </div>
            <button
              onClick={onClose}
              className="rounded-lg px-2 py-1 text-neutral-500 hover:bg-neutral-100"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          <div className="max-h-[70vh] overflow-auto p-6">{children}</div>

          {footer && <div className="border-t border-neutral-100 p-6">{footer}</div>}
        </div>
      </div>
    </div>
  );
}
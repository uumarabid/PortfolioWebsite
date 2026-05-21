import { Copy } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { useState } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type ContactInfoCardProps = {
  icon: IconComponent;
  label: string;
  value: string;
  href?: string;
  copyValue?: string;
  external?: boolean;
};

export function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
  copyValue,
  external,
}: ContactInfoCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copyValue) return;
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="mt-1 block text-base font-medium text-slate-900 transition hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:text-white dark:hover:text-teal-400"
        >
          {value}
        </a>
      ) : (
        <p className="mt-1 text-base font-medium text-slate-900 dark:text-white">{value}</p>
      )}
      {copyValue && (
        <button
          type="button"
          onClick={handleCopy}
          className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-500 transition hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:text-slate-400 dark:hover:text-teal-400"
        >
          <Copy className="h-3.5 w-3.5" aria-hidden />
          {copied ? "Copied" : "Copy"}
        </button>
      )}
    </div>
  );
}

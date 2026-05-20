import { Code2, Mail, Share2 } from "lucide-react";
import { profile } from "../../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-100/80 py-8 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.contact.email}`}
            aria-label="Email"
            className="text-slate-500 transition hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:text-slate-400 dark:hover:text-teal-400"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:text-slate-400 dark:hover:text-teal-400"
          >
            <Code2 className="h-5 w-5" />
          </a>
          {profile.contact.linkedin ? (
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:text-slate-400 dark:hover:text-teal-400"
            >
              <Share2 className="h-5 w-5" />
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

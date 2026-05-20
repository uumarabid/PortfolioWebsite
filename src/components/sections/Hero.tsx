import { ArrowDown, Code2, Download } from "lucide-react";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/10 via-slate-50 to-slate-50 dark:from-teal-900/20 dark:via-slate-950 dark:to-slate-950" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-600 dark:text-teal-400">
          {profile.title}
        </p>
        <div className="flex max-w-3xl flex-wrap items-center gap-8 md:gap-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
            {profile.name}
          </h1>
          <ThemeToggle className="shrink-0" />
        </div>
        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">{profile.location}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="#projects">
            View projects
            <ArrowDown className="h-4 w-4" aria-hidden />
          </Button>
          <Button href={profile.cvPath} variant="secondary" download>
            <Download className="h-4 w-4" aria-hidden />
            Download CV
          </Button>
          <Button
            href={profile.contact.github}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 className="h-4 w-4" aria-hidden />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}

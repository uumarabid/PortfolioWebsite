import type { Project } from "../../data/projects";
import { GitHubIcon } from "./GitHubIcon";
import { TagList } from "./TagList";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-xl border bg-white p-6 transition hover:border-teal-500/40 hover:bg-slate-50 dark:bg-slate-900/50 dark:hover:bg-slate-900/80 ${
        project.featured
          ? "border-teal-500/30 ring-1 ring-teal-500/10"
          : "border-slate-200 dark:border-slate-800"
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>
        {project.featured && (
          <span className="shrink-0 rounded-full bg-teal-500/15 px-2.5 py-0.5 text-xs font-medium text-teal-600 dark:text-teal-300">
            Featured
          </span>
        )}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {project.description}
      </p>
      <ul className="mb-4 flex-1 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <TagList tags={project.technologies} className="mb-4" />
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 transition hover:text-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-teal-400 dark:hover:text-teal-300 dark:focus-visible:ring-offset-slate-900"
      >
        <GitHubIcon className="h-4 w-4" aria-hidden />
        View on GitHub
      </a>
    </article>
  );
}

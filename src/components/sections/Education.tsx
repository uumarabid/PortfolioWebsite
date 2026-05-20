import { education } from "../../data/education";
import { Section, SectionHeading } from "../layout/Section";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading title="Education" subtitle="Academic background and achievements." />
      <div className="space-y-6">
        {education.map((entry) => (
          <article
            key={entry.qualification}
            className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {entry.qualification}
            </h3>
            <p className="mt-1 text-teal-600 dark:text-teal-400">{entry.institution}</p>
            <p className="mt-1 text-sm text-slate-500">{entry.period}</p>
            {entry.highlights && (
              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                {entry.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

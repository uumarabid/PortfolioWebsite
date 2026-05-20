import { certifications } from "../../data/certifications";
import { Section, SectionHeading } from "../layout/Section";

export function Certifications() {
  return (
    <Section id="certifications" className="bg-slate-900/30">
      <SectionHeading
        title="Courses & Certifications"
        subtitle="Continuous learning and professional development."
      />
      <ul className="grid gap-3 sm:grid-cols-2">
        {certifications.map((cert) => (
          <li
            key={cert}
            className="flex gap-3 rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3 text-slate-300"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
            <span>{cert}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

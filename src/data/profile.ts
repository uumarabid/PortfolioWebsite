import { withBase } from "../lib/paths"

export const profile = {
  name: "Muhammad Umar Abid",
  title: "Software Developer",
  location: "Manchester / London, UK",
  tagline:
    "Software Engineer, building full-stack solutions with modern technologies.",
  summary:
    "A highly motivated Software Engineering graduate who is a heavy, practical user of AI to design, plan, and build software end-to-end. Experienced in translating problem statements and stakeholder discussions into clear requirements, breaking work down with structured planning, and rapidly delivering working solutions. Comfortable building applications using C#, JavaScript, and SQL, with hands-on exposure to cloud platforms, modern development practices, and agile delivery. Strong collaborator with a disciplined, detail-oriented approach, combining human judgement with AI to accelerate development while maintaining code quality, clarity, and intent.",
  cvPath: withBase("Muhammad-Umar-Abid-CV.pdf"),
  contact: {
    email: "star_umar2008@hotmail.com",
    phone: "07449312342",
    phoneDisplay: "07449 312342",
    location: "Manchester / London, UK",
    github: "https://github.com/uumarabid",
    githubUsername: "uumarabid",
    linkedin: "https://www.linkedin.com/in/muhammad-umar-abid-93457b22b/",
    linkedinLabel: "LinkedIn",
  },
} as const;

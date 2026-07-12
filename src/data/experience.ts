export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
};

export const softwareExperience: ExperienceEntry[] = [
  {
    role: "Accenture Discover & Experience Day",
    company: "Accenture",
    location: "London, UK",
    period: "July 2026",
    highlights: [
      "Participated in a hands-on agentic AI hackathon with Accenture's Google Business Group and UKI Data & AI Solution Architecture community.",
      "Designed and presented Resolve — an AI returns agent combining policy decision trees, Gemini LLM conversation layer, and structured human escalation.",
      "Collaborated with Accenture technical teams on agentic AI architecture, prompt guardrails, and responsible AI design.",
    ],
    technologies: [
      "Gemini",
      "Agentic AI",
      "LLM",
      "Prompt Engineering",
      "Responsible AI",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Aero Parker",
    location: "Manchester, UK",
    period: "Jan 2026 – May 2025",
    highlights: [
      "Developed and optimised front-end and back-end features for airport parking and lounge booking systems.",
      "Automated permission-based access controls, improving scalability and security.",
      "Collaborated in an Agile Scrum team, delivering enhancements through Jira and sprint planning.",
      "Improved user experience by resolving critical system issues and optimising workflows.",
    ],
    technologies: [
      "JavaScript",
      "Java",
      "JSP",
      "Spring Boot",
      "jOOQ",
      "SCSS",
      "AWS",
      "DataTables",
      "MySQL",
    ],
  },
];

export const otherExperience = {
  role: "Professional Driving Roles (Bus Driver)",
  companies: "Stagecoach, Go NorthWest",
  location: "Manchester, UK",
  period: "Feb 2016 – Present",
  highlights: [
    "Ensure safe and reliable transport services, maintaining an excellent safety record.",
    "Support diverse passengers, including those with additional needs, with empathy and adaptability.",
    "Build strong teamwork, communication, and problem-solving skills in high-pressure, client-facing environments.",
  ],
};

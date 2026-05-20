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
    role: "Junior Software Developer",
    company: "Aero Parker",
    location: "Manchester, UK",
    period: "Jan 2025 – May 2025",
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
  role: "Professional Driving Roles (Bus & Taxi Driver)",
  companies: "Stagecoach, Go NorthWest & Uber",
  location: "Manchester, UK",
  period: "Feb 2016 – Present",
  highlights: [
    "Ensure safe and reliable transport services, maintaining an excellent safety record.",
    "Support diverse passengers, including those with additional needs, with empathy and adaptability.",
    "Build strong teamwork, communication, and problem-solving skills in high-pressure, client-facing environments.",
  ],
};

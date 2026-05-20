export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["JavaScript (ES6+)", "Java", "C#"],
  },
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "React.js",
      "Tailwind CSS",
      "SCSS/SASS",
      "Bootstrap",
      "Material UI",
      "AJAX",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "C#", "Spring Boot"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Frameworks",
    items: [
      "Git",
      "Bitbucket",
      "Jira",
      "Visual Studio",
      "Tomcat",
      "AWS (Basic)",
    ],
  },
  {
    title: "Development Practices",
    items: [
      "Agile (Scrum)",
      "OOP",
      "SOLID Principles",
      "Test-Driven Development (TDD)",
      "CI/CD",
    ],
  },
  {
    title: "AI Skills & Tools",
    items: ["Cursor", "Claude Code"],
  },
  {
    title: "Soft Skills",
    items: [
      "Analytical thinking",
      "Problem-solving",
      "Remote collaboration",
      "Adaptability",
      "Teamwork",
      "Communication",
    ],
  },
];

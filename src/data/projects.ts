export type Project = {
  name: string;
  description: string;
  highlights: string[];
  technologies: string[];
  repoUrl: string;
  featured?: boolean;
  aiAssisted?: boolean;
};

export const projects: Project[] = [
  {
    name: "MCP-AI — Cursor Todo MCP",
    description:
      ".NET Todo applications with Cursor MCP integration, exposing the same CRUD tools over stdio and HTTP streaming for hands-on AI tooling practice.",
    highlights: [
      "Parallel stdio and HTTP MCP servers (todo-mcp and todo-mcp-http) wired to a shared ASP.NET Core REST API.",
      "MCP tools for full Todo lifecycle: list, get, create, update, complete, and delete.",
      "EF Core + SQLite backend with MVC dashboard and documented Cursor setup.",
    ],
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "EF Core",
      "SQLite",
      "MCP",
      "Cursor",
    ],
    repoUrl: "https://github.com/uumarabid/MCP-AI",
    featured: true,
  },
  {
    name: "Hotel Management System",
    description:
      "Full-stack web application for managing bookings, cancellations, and employee roles with an admin dashboard.",
    highlights: [
      "Role-based access control for operational efficiency.",
      "MySQL database for dynamic data handling and automated booking processes.",
      "Admin dashboard for bookings and staff management.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Material UI"],
    repoUrl: "https://github.com/uumarabid/UmarAbidHotelManagement",
    featured: true,
  },
  {
    name: "Shifting Solutions — TripEnRoute Removals",
    description:
      "Full-stack marketing website for a nationwide UK removals business, with multi-page services, coverage, and contact flows.",
    highlights: [
      "React + Vite client with Express API, TypeScript, Tailwind CSS, and Framer Motion.",
      "WhatsApp-first contact CTAs plus SMTP-backed quote form with Zod validation and rate limiting.",
      "Six service detail pages, regional coverage, FAQ, and blog — production-ready npm workspace layout.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Express",
      "Tailwind CSS",
      "Framer Motion",
    ],
    repoUrl: "https://github.com/uumarabid/TripEnRouteRemovals",
    aiAssisted: true,
  },
  {
    name: "Portfolio Website",
    description:
      "Personal developer portfolio with data-driven sections, optional in-browser contact via Formspree, and deploy targets for GitHub Pages and Vercel.",
    highlights: [
      "Vite + React + TypeScript + Tailwind CSS v3 with content centralized in src/data/.",
      "Sections for skills, experience, projects, education, and certifications.",
      "Contact flow supports mailto fallback or Formspree; CI workflow deploys to GitHub Pages.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Formspree",
    ],
    repoUrl: "https://github.com/uumarabid/PortfolioWebsite",
    aiAssisted: true,
  },
  {
    name: "Blogging Web Application",
    description:
      "Web application for creating and managing blog content with a modern JavaScript stack.",
    highlights: [
      "Client-side interactivity and content management patterns.",
      "Structured project layout for maintainable front-end code.",
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/uumarabid/BloggingApplicationUmar",
  },
  {
    name: "API Web Application",
    description:
      "Client web application consuming RESTful APIs with separation between front-end and data layer.",
    highlights: [
      "API-linked client architecture.",
      "Demonstrates integration between UI and external data sources.",
    ],
    technologies: ["HTML", "JavaScript", "REST APIs"],
    repoUrl: "https://github.com/uumarabid/UmarAbidAPILinkedClientWebApplication",
  },
  {
    name: "Coding with Design Patterns",
    description:
      "Java project exploring common design patterns and object-oriented structure.",
    highlights: [
      "Practical implementations of software design patterns.",
      "Emphasis on maintainable, extensible code structure.",
    ],
    technologies: ["Java", "OOP", "Design Patterns"],
    repoUrl: "https://github.com/uumarabid/CodingWithDesignPatternsUmar",
  },
  {
    name: "Database Driven Website",
    description:
      "PHP-based website with persistent data storage and dynamic page generation.",
    highlights: [
      "Database-backed content and user interactions.",
      "Server-side logic connected to a relational database.",
    ],
    technologies: ["PHP", "MySQL", "HTML"],
    repoUrl: "https://github.com/uumarabid/UmarDatabaseDrivenWebsite",
  },
  {
    name: "Object Oriented Programming",
    description:
      "Collection of Java exercises and applications demonstrating OOP principles.",
    highlights: [
      "Classes, inheritance, and encapsulation in practice.",
      "Foundation for larger application design.",
    ],
    technologies: ["Java", "OOP"],
    repoUrl: "https://github.com/uumarabid/ObjectOrientedProgramming",
  },
  {
    name: "User Interface Design",
    description:
      "UI design coursework focusing on layout, usability, and visual hierarchy.",
    highlights: [
      "Responsive layout and component-based structure.",
      "Attention to accessibility and user experience.",
    ],
    technologies: ["HTML", "CSS", "UI Design"],
    repoUrl: "https://github.com/uumarabid/UserInterfaceDesign",
  },
];

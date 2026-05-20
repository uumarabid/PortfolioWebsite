export type EducationEntry = {
  qualification: string;
  institution: string;
  period: string;
  highlights?: string[];
};

export const education: EducationEntry[] = [
  {
    qualification: "BSc (Hons) Software Development – First Class Honours",
    institution: "Manchester Metropolitan University",
    period: "Sep 2020 – Jun 2023",
    highlights: [
      "Student of the Year (2022) for excellence in Management, Digital, and Engineering.",
      "Student Representative (2023), advocating for academic and student concerns.",
      "Key modules: Software Engineering, Web Application Development, Databases, Agile Practices.",
    ],
  },
  {
    qualification:
      "Level 3 Diploma – ICT Systems and Principles for IT Professionals",
    institution: "The Manchester College",
    period: "Sep 2019 – Jun 2020",
  },
];

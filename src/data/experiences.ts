export interface Experience {
  startDate: string;
  endDate?: string;
  title: string;
  description: string;
  tools: string[];
  hyperlink: string;
}

export const experiences: Experience[] = [
  {
    startDate: "Jun 2025",
    endDate: "Present",
    title: "Machine Learning Engineer Intern • Tridorian",
    description: "Tridorian is a tech company and an official Google Cloud Partner, specializing in building AI-driven solutions to enhance business processes and productivity. As a Machine Learning Engineer Intern, I assisted in documenting ongoing machine learning projects and organizing development progress using Jira to ensure structured execution and greater workflow visibility. I also enrolled in Google Cloud Skills Boost courses focused on cloud and machine learning fundamentals to prepare for incoming projects.",
    tools: ["Google Cloud", "Jira", "Gemini"],
    hyperlink: "https://tridorian.com/"
  },
  {
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    title: "Data Scientist Intern • PT Pupuk Indonesia Persero",
    description: "PT Pupuk Indonesia (Persero) is a state-owned enterprise and the largest fertilizer producer in Southeast Asia, supporting national agricultural productivity through large-scale supply chain operations. As a Data Scientist Intern, I processed operational data using SQL and developed machine learning models in Python to support inventory and logistics optimization, deploying them via FastAPI for seamless integration. I also built data transformation workflows using KNIME to improve data quality and significantly enhance the performance of Tableau dashboards used for reporting and analysis.",
    tools: ["Python", "Pandas", "SQL", "FastAPI", "Tableau", "KNIME"],
    hyperlink: "https://pupuk-indonesia.com"
  },
  {
    startDate: "Mar 2024",
    endDate: "Feb 2025",
    title: "Web Developer • RISTEK Fakultas Ilmu Komputer",
    description: "RISTEK is a student-driven technology organization under the Faculty of Computer Science, Universitas Indonesia, focused on building real-world tech solutions through collaborative projects. As a web developer at RISTEK, I contributed to multiple initiatives, including enhancing Susun Jadwal by adding a feedback system, CMS features, and resolving calendar bugs; developing UIFolks with user authentication and profile management; and building a reusable design system, homepage, and deployment pipeline for TAX FIA UI. I worked in an Agile (Scrum) environment, collaborating with Project Managers, UI/UX designers, back-end developers, and DevOps engineers to deliver impactful, production-ready systems.",
    tools: ["React", "Next.js", "ChakraUI", "Tailwind CSS", "Asana"],
    hyperlink: "https://www.ristek.cs.ui.ac.id/"
  }
];

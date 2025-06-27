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
    description: "**Tridorian** is a tech company and Google Cloud Partner focused on AI-driven business solutions. As a **Machine Learning Engineer Intern**, I documented ML projects, organized progress with **Jira**, and completed **Google Cloud** courses to support upcoming work.",
    tools: ["Google Cloud", "Jira", "Gemini"],
    hyperlink: "https://tridorian.com/"
  },
  {
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    title: "Data Scientist Intern • PT Pupuk Indonesia Persero",
    description: "**PT Pupuk Indonesia** is Southeast Asia’s largest fertilizer producer, supporting agriculture with large-scale operations. As a **Data Scientist Intern**, I processed data with **SQL**, built statistical models in **Python**, and improved reporting using **KNIME** and **Tableau**.",
    tools: ["Python", "Pandas", "SQL", "FastAPI", "Tableau", "KNIME"],
    hyperlink: "https://pupuk-indonesia.com"
  },
  {
    startDate: "Mar 2024",
    endDate: "Feb 2025",
    title: "Web Developer • RISTEK Fakultas Ilmu Komputer",
    description: "**RISTEK** is a student tech organization at Universitas Indonesia building real-world solutions. As a **Web Developer**, I worked in an **Agile team** to enhance products like **Susun Jadwal**, develop **UIFolks**, and build the **TAX FIA UI** **homepage** along with its **deployment pipeline**.",
    tools: ["React", "Next.js", "ChakraUI", "Tailwind CSS", "Asana"],
    hyperlink: "https://www.ristek.cs.ui.ac.id/"
  }
];

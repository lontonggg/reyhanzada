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
    startDate: "Dec 2025",
    endDate: "Present",
    title: "Software Engineer - AI • Tridorian",
    description: "After a great 6 months internship experience, I was promoted to a **full-time Software Engineer – AI**, and in this new role, I am expanding my impact by building **full-stack, end-to-end AI applications**, integrating production-ready frontends, scalable backends, and intelligent agents into cohesive real-world solutions.",
    tools: ["Google Cloud", "Google Agent Development Kit", "Copilot Kit", "AG-UI"],
    hyperlink: "https://tridorian.com/"
  },
  {
    startDate: "Jun 2025",
    endDate: "Nov 2025",
    title: "Machine Learning Engineer Intern • Tridorian",
    description: "**Tridorian** is a top-tier **Google Cloud Premier Partner** across the APAC region, specialising in **Secure Cloud, Data & AI**. As a **Machine Learning Engineer Intern**, I focused on building **Agentic AI solutions** on **Google Cloud**, developing AI automation agents with **Google ADK**, implementing a multimodal chatbot, creating an internal feedback pipeline, and improving the reliability and deployment of AI-driven systems.",
    tools: ["Google Cloud", "Google Agent Development Kit", "Vertex AI", "Model Context Protocol", "Docker", "Langfuse"],
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

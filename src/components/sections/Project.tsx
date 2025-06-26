import { useState } from "react";
import { ProjectCard } from "../cards/ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div 
      id="projects" 
      className="text-primary mt-20 md:mt-40"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h1 className="text-2xl lg:text-4xl font-bold">My Projects</h1>
      <div className="lg:mt-10 grid grid-cols-1 gap-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "blur-[2px] opacity-50"
                : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              tools={project.tools}
              hyperlink={project.hyperlink}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

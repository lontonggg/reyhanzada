import { useState } from "react"
import { ExperienceCard } from "../cards/ExperienceCard"
import { motion } from "framer-motion"
import { experiences } from "../../data/experiences"

export const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div 
      id="experience" 
      className="text-primary mt-20 md:mt-40"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
        <h1 className="text-2xl lg:text-4xl font-bold">My Experience</h1>
        <div className="lg:mt-10 grid grid-cols-1 gap-1">
            {experiences.map((experience, index) => (
                <div 
                key={index}
                className={`transition-all duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index 
                  ? 'lg:blur-[2px] lg:opacity-50' 
                  : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                >
                <ExperienceCard 
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                  title={experience.title}
                  description={experience.description}
                  tools={experience.tools}
                  hyperlink={experience.hyperlink}
                />
                </div>
            ))}
        </div>
    </motion.div>
  )
}
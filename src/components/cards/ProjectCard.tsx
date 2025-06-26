import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "framer-motion";
import type { Project } from "../../data/projects";

export const ProjectCard: React.FC<Project> = ({
  image,
  title,
  description,
  tools,
  hyperlink,
}) => {
  return (
    <motion.a 
      href={hyperlink} 
      target="_blank" 
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <div className="text-primary px-4 md:px-6 py-6 md:py-10 -mx-4 md:-mx-6 rounded-xl transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-sm hover:border-gray-200/30 hover:shadow cursor-pointer group">
        {/* Mobile */}
        <div className="block lg:hidden">
          <div className="mb-4">
            <img
              src={image}
              alt={title}
              className="w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex items-center gap-1 mb-2">
            <h1 className="text-lg font-bold">{title}</h1>
            <LuArrowUpRight
              size={18}
              className="transition-transform duration-300 translate-y-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
          <p className="text-sm text-justify mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="bg-gray-200 text-primary px-2 py-1 rounded-full text-xs shadow"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid md:grid-cols-5">
          <div className="pr-8 flex items-stretch">
            <img
              src={image}
              alt={title}
              className="w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1">
                <h1 className="text-xl font-bold">{title}</h1>
                <LuArrowUpRight
                  size={20}
                  className="transition-transform duration-300 translate-y-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <p className="text-justify mt-2">{description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 self-start">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-gray-200 text-primary px-3 py-1 rounded-full text-sm shadow"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
};
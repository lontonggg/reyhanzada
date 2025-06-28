import { motion } from "framer-motion";

export const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10 shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="px-6 xl:px-72 lg:px-56 py-4 flex justify-center items-center lg:text-xl text-primary">
        <div className="flex space-x-6 md:space-x-10">
          <h1 
            className="transition-all duration-200 hover:text-gray-300 hover:scale-105 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            About
          </h1>
          <h1 
            className="transition-all duration-200 hover:text-gray-300 hover:scale-105 cursor-pointer"
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </h1>
          <h1 
            className="transition-all duration-200 hover:text-gray-300 hover:scale-105 cursor-pointer"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </h1>
        </div>
      </div>
    </motion.div>
  )
}
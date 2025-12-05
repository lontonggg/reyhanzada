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
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.div 
        className="bg-black/5 backdrop-blur-md border border-white/10 shadow-lg rounded-full px-4 md:px-6 py-2 md:py-3 lg:mt-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="flex space-x-6 md:space-x-8 md:text-xl text-primary">
          <h1 
            className="transition-all duration-200 hover:text-gray-300 hover:scale-105 cursor-pointer px-4 py-2 rounded-full hover:bg-white/10"
            onClick={() => scrollToSection('about')}
          >
            About
          </h1>
          <h1 
            className="transition-all duration-200 hover:text-gray-300 hover:scale-105 cursor-pointer px-4 py-2 rounded-full hover:bg-white/10"
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </h1>
          <h1 
            className="transition-all duration-200 hover:text-gray-300 hover:scale-105 cursor-pointer px-4 py-2 rounded-full hover:bg-white/10"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </h1>
        </div>
      </motion.div>
    </motion.div>
  )
}

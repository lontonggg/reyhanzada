import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10 shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="px-6 xl:px-72 lg:px-56 py-5 flex justify-between items-center text-xl text-primary">
        <div>
          <a href="/">
            <h1 className="font-medium cursor-pointer">reyhanzada.com</h1>
          </a>
        </div>
        
        {/* Desktop */}
        <div className="hidden lg:flex space-x-10">
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
          <h1 
            className="transition-all duration-200 hover:text-gray-300 hover:scale-105 cursor-pointer"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </h1>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="transition-transform duration-300">
            {isMenuOpen ? (
              <HiX size={24} className="text-primary" />
            ) : (
              <HiMenu size={24} className="text-primary" />
            )}
          </div>
        </button>
      </div>

      {/* Mobile */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-dark/95 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <h1 
              className="block py-2 hover:text-gray-300 cursor-pointer transform transition-transform duration-300"
              onClick={() => scrollToSection('about')}
            >
              About
            </h1>
            <h1 
              className="block py-2  hover:text-gray-300 cursor-pointer transform transition-transform duration-300"
              onClick={() => scrollToSection('experience')}
            >
              Experiences
            </h1>
            <h1 
              className="block py-2  hover:text-gray-300 cursor-pointer transform transition-transform duration-300"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </h1>
            <h1 
              className="block py-2 hover:text-gray-300 cursor-pointer transform transition-transform duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </h1>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
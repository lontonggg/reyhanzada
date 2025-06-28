;import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.div 
      className="bg-dark/80 backdrop-blur-md shadow-lg text-primary text-center p-6 md:p-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
    
      <p className="text-sm lg:text-lg">
        Designed in <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="font-medium transition-all duration-200 hover:text-gray-300 cursor-pointer">Figma</a>, Built with <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="font-medium transition-all duration-200 hover:text-gray-300 cursor-pointer">React</a>, Fueled by ☕
      </p>
      <p className="text-xs lg:text-base px-4 font-medium">
        Copyright © 2025 Reyhan Zada Virgiwibowo
      </p>
    </motion.div>
  );
};
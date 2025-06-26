import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  const socialLinks = [
    {
      icon: <MdEmail size={20} />,
      label: "zadareyhan@gmail.com",
      href: "mailto:zadareyhan@gmail.com",
    },
    {
      icon: <FaGithub size={20} />,
      label: "lontonggg",
      href: "https://github.com/lontonggg",
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "in/reyhanzada",
      href: "https://linkedin.com/in/reyhanzada",
    },
    {
      icon: <FaMedium size={20} />,
      label: "@zadareyhan",
      href: "https://medium.com/@zadareyhan",
    },
    {
      icon: <FaInstagram size={20} />,
      label: "@rehanzadaa",
      href: "https://instagram.com/rehanzadaa",
    },
  ];

  return (
    <motion.div 
      id="contact" 
      className="bg-dark/80 backdrop-blur-md shadow-lg text-primary text-center p-6 md:p-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="mb-8 md:mb-12">
        <h2 className="text-xl md:text-3xl font-bold mb-3">Let's Connect!</h2>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you have an exciting project in mind, looking to collaborate, 
          or simply wish to connect and discuss ideas, I'd love to hear from you.
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex justify-center space-x-10 mb-4">
        {socialLinks.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary hover:text-accent transition-colors"
          >
            <span className="mr-2">{icon}</span>
            <span className="transition-all duration-200 hover:text-gray-300 cursor-pointer">
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div className="lg:hidden space-y-4 mb-6">
        {socialLinks.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-primary hover:text-accent transition-colors p-2"
          >
            <span className="mr-3">{icon}</span>
            <span className="transition-all duration-200 hover:text-gray-300 cursor-pointer text-sm">
              {label}
            </span>
          </a>
        ))}
      </div>

      <p className="text-xs mt-8 md:mt-14">
        Designed in <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="font-bold transition-all duration-200 hover:text-gray-300 cursor-pointer">Figma</a>, Built with <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="font-bold transition-all duration-200 hover:text-gray-300 cursor-pointer">React</a>, Fueled by ☕
      </p>
      <p className="text-xs px-4 font-medium">
        Copyright © 2025 Reyhan Zada Virgiwibowo
      </p>
    </motion.div>
  );
};
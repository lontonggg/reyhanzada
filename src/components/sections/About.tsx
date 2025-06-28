import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiSpring,
  SiDjango,
  SiPostgresql,
  SiPython,
  SiScikitlearn,
  SiKeras,
  SiTableau,
  SiNumpy,
  SiNextdotjs,
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiTailwindcss,
  SiFigma,
  SiExpress,
  SiNestjs,
  SiPandas,
} from "react-icons/si";
import { motion } from "framer-motion";

export const About = () => {
  const socialLinks = [
    {
      icon: <MdEmail />,
      label: "zadareyhan@gmail.com",
      href: "mailto:zadareyhan@gmail.com",
    },
    {
      icon: <FaGithub />,
      label: "lontonggg",
      href: "https://github.com/lontonggg",
    },
    {
      icon: <FaLinkedin />,
      label: "in/reyhanzada",
      href: "https://linkedin.com/in/reyhanzada",
    },
    {
      icon: <FaMedium />,
      label: "@zadareyhan",
      href: "https://medium.com/@zadareyhan",
    },
    {
      icon: <FaInstagram />,
      label: "@rehanzadaa",
      href: "https://instagram.com/rehanzadaa",
    },
  ];

  return (
    <motion.div
      id="about"
      className="text-primary mt-48 lg:px-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center">
        <motion.img
          src="images/rehan.png"
          alt="Reyhan Zada"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-44 h-44 lg:w-78 lg:h-78 rounded-full object-cover mb-6 bg-white/30 backdrop-blur-sm shadow-lg"
        />

        <motion.div
          className="w-full text-left mt-2 xl:mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-2xl lg:text-4xl font-bold">About Me</h1>
          <p className="text-sm lg:text-2xl text-justify mt-4">
            I'm <span className="font-medium">Reyhan Zada Virgiwibowo</span>, a
            final-year{" "}
            <span className="font-medium">Computer Science student</span> at the{" "}
            <span className="font-medium">University of Indonesia</span>,
            expected to graduate in{" "}
            <span className="font-medium">July 2026</span>. Based in{" "}
            <span className="font-medium">South Jakarta, Indonesia</span>, I'm
            eager to contribute to meaningful projects and grow through
            collaboration.
          </p>
        </motion.div>

        <motion.div
          className="w-full mt-8 lg:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >

          <div className="flex space-x-2 lg:space-x-8 mb-4">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-accent transition-colors"
              >
                <span className="mr-2 text-lg lg:text-xl">{icon}</span>
                <span className="transition-all duration-200 hover:text-gray-300 cursor-pointer hidden lg:block lg:text-xl">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-20 lg:mt-40 grid md:grid-cols-2 border-2 border-gray-200/50 rounded-xl bg-white/30 backdrop-blur-sm shadow-lg">
        <div className="p-6 py-14 lg:p-14 flex flex-col justify-center items-center lg:border-r-2 border-gray-200/50 gap-4 lg:gap-6">
          <FaLaptopCode
            size={50}
            color="0A0F13"
            className="lg:w-[60px] lg:h-[60px]"
          />
          <h1 className="font-bold text-sm xl:text-2xl">
            Relevant Courses – Software Engineering
          </h1>
          <p className="text-xs lg:text-lg font-medium text-center">
            Programming I & II • Data Structures & Algorithms • Platform Based
            Programming • UI/UX • Design & Analysis of Algorithm • Software
            Engineering • Software Project
          </p>

          <h1 className="font-bold text-lg xl:text-2xl">Tech Stacks</h1>
          <div className="grid grid-cols-3 lg:grid-cols-5 lg:grid-rows-2 gap-3 lg:gap-6 mt-4">
            <div className="flex flex-col items-center">
              <SiTypescript
                size={32}
                className="text-primary lg:w-12 lg:h-12"
              />
              <span className="mt-1 lg:mt-2 text-xs ">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss
                size={32}
                className="text-primary lg:w-12 lg:h-12"
              />
              <span className="mt-1 lg:mt-2 text-xs ">Tailwind</span>
            </div>
            <div className="flex flex-col items-center">
              <SiReact size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNodedotjs size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">Express.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNestjs size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">Nest.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiSpring size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">Spring</span>
            </div>
            <div className="flex flex-col items-center">
              <SiDjango size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">Django</span>
            </div>
            <div className="hidden lg:flex flex-col items-center">
              <SiFigma size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">Figma</span>
            </div>
          </div>
        </div>

        <div className="p-6 py-14  lg:px-14 lg:py-20 flex flex-col justify-center items-center gap-4 lg:gap-6 border-t-2 lg:border-t-0 border-gray-200/50">
          <HiOutlinePresentationChartLine
            size={50}
            color="0A0F13"
            className="lg:w-[60px] lg:h-[60px]"
          />
          <h1 className="font-bold text-sm xl:text-2xl">
            Relevant Courses – Data & Analytics
          </h1>
          <p className="text-xs lg:text-lg font-medium text-center">
            Statistics & Probability • Introduction to AI & Data Science • Data
            Mining • Machine Learning • Reinforcement Learning • Deep Learning •
            Numerical Analysis
          </p>

          <h1 className="font-bold text-lg xl:text-2xl">Tools</h1>
          <div className="grid grid-cols-3 lg:grid-cols-5 lg:grid-rows-2 gap-3 lg:gap-6 mt-4">
            <div className="flex flex-col items-center">
              <SiPython size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">Python</span>
            </div>
            <div className="hidden lg:flex flex-col items-center">
              <SiNumpy size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">NumPy</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPandas size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">Pandas</span>
            </div>
            <div className="flex flex-col items-center">
              <SiScikitlearn
                size={32}
                className="text-primary lg:w-12 lg:h-12"
              />
              <span className="mt-1 lg:mt-2 text-xs ">Scikit Learn</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPytorch size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">PyTorch</span>
            </div>
            <div className="flex flex-col items-center">
              <SiKeras size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">Keras</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTensorflow
                size={32}
                className="text-primary lg:w-12 lg:h-12"
              />
              <span className="mt-1 lg:mt-2 text-xs ">TensorFlow</span>
            </div>
            <div className="flex flex-col items-center">
              <SiHuggingface
                size={32}
                className="text-primary lg:w-12 lg:h-12"
              />
              <span className="mt-1 lg:mt-2 text-xs ">HuggingFace</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTableau size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">Tableau</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPostgresql
                size={32}
                className="text-primary lg:w-12 lg:h-12"
              />
              <span className="mt-1 lg:mt-2 text-xs ">SQL</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
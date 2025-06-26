import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
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
  SiPandas
} from "react-icons/si";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div 
      id="about" 
      className="text-primary mt-32 lg:px-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h1 className="text-2xl lg:text-4xl font-bold">About Me</h1>
      <p className="text-base lg:text-xl text-justify mt-4">
        My name is Reyhan Zada Virgiwibowo, a final-year undergraduate Computer
        Science student at the University of Indonesia. I have a great passion
        for Software Engineering as well as Data Science & Analytics. Throughout
        my academic journey, I have developed strong leadership, teamwork, and
        coordination skills through various experiences in internships, student
        organizations, and competitions. These experiences have not only
        deepened my technical expertise but also strengthened my ability to work
        collaboratively and adapt in dynamic environments.
      </p>

      <div className="mt-20 lg:mt-40 grid md:grid-cols-2 border-2 border-gray-200/50 rounded-xl bg-white/30 backdrop-blur-sm shadow-lg">
        <div className="p-6 py-14 lg:p-14 flex flex-col justify-center items-center lg:border-r-2 border-gray-200/50 gap-4 lg:gap-6">
          <FaLaptopCode size={50} color="0A0F13" className="lg:w-[60px] lg:h-[60px]" />
          <h1 className="text-2xl lg:text-4xl font-bold mt-2 lg:mt-4">Software</h1>
          <p className="text-sm lg:text-base text-justify">
            I am passionate about building reliable and efficient software solutions. I enjoy solving problems, improving systems, and collaborating with others to create applications that are both functional and user-friendly.
          </p>
          <h1 className="font-bold">Relevant Courses</h1>
          <p className="text-xs lg:text-sm font-medium text-center">
            Programming I & II • Data Structures & Algorithms • Platform Based Programming • UI/UX • Design & Analysis of Algorithm • Software Engineering • Software Project
          </p>
        
          <h1 className="font-bold">Tech Stacks</h1>
          <div className="grid grid-cols-3 lg:grid-cols-5 lg:grid-rows-2 gap-3 lg:gap-6 mt-4 lg:mt-8">
            <div className="flex flex-col items-center">
              <SiTypescript size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">Tailwind</span>
            </div>
            <div className="flex flex-col items-center">
              <SiReact size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs size={32} className="text-primary lg:w-12 lg:h-12"/>
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
          <HiOutlinePresentationChartLine size={50} color="0A0F13" className="lg:w-[60px] lg:h-[60px]" />
          <h1 className="text-2xl lg:text-4xl font-bold">Data</h1>
          <p className="text-sm lg:text-base text-justify">
            I'm also interested in using data to generate insights and guide decisions. I enjoy analyzing information, recognizing trends, and communicating results in a way that is clear, accurate, and actionable.
          </p>
          <h1 className="font-bold">Relevant Courses</h1>
          <p className="text-xs lg:text-sm font-medium text-center">
            Statistics & Probability • Introduction to AI & Data Science • Data Mining • Machine Learning • Reinforcement Learning • Deep Learning • Numerical Analysis
          </p>

          <h1 className="font-bold">Tools</h1>
          <div className="grid grid-cols-3 lg:grid-cols-5 lg:grid-rows-2 gap-3 lg:gap-6 mt-4 lg:mt-8">
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
              <SiScikitlearn size={32} className="text-primary lg:w-12 lg:h-12" />
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
              <SiTensorflow size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">TensorFlow</span>
            </div>
            <div className="flex flex-col items-center">
              <SiHuggingface size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">HuggingFace</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTableau size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">Tableau</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPostgresql size={32} className="text-primary lg:w-12 lg:h-12" />
              <span className="mt-1 lg:mt-2 text-xs ">SQL</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
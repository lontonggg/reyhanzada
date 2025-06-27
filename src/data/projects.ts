export interface Project {
  image: string;
  title: string;
  description: string;
  tools: string[];
  hyperlink: string;
}

export const projects: Project[] = [
  {
    image: "/images/personal-website.png",
    title: "My Personal Website",
    description:
      "A **personal portfolio website** to showcase my skills, projects, and professional experience. This is the current website you're viewing right now, built to demonstrate my **frontend development capabilities**.",
    tools: ["React", "Vite", "TypeScript", "Tailwind CSS", "Three.js", "Framer-motion"],
    hyperlink: "/",
  },
  {
    image: "/images/medicine-retrieval-system.png",
    title: "RSUMMI Medicine Retrieval System",
    description:
      "A comprehensive **medicine retrieval system** developed in collaboration with **RSUMMI Hospital** to streamline the medicine pickup process for patients. Built using **agile methodology** with **Test-Driven Development (TDD)**. Features include **QR code scanning functionality** that I developed to enhance user experience and reduce wait times.",
    tools: [
      "Next.js",
      "Express.js",
      "Docker",
      "Portainer",
      "SonarQube",
      "Sentry",
    ],
    hyperlink: "https://ppl-c6.rsummi.co.id",
  },
  {
    image: "/images/spongebob-scene-classification.png",
    title: "Spongebob Scene Classification with Convolutional Neural Networks",
    description:
      "A **deep learning project** that automatically detects and classifies **SpongeBob, Squidward, and Patrick characters** in images using **multi-label classification**. Built as a final project for **Deep Learning course**, achieving **96.16% accuracy** with **VGG16 architecture** and advanced data augmentation techniques.",
    tools: [
      "Jupyter Notebook",
      "TensorFlow",
      "Keras",
      "Albumentations",
      "OpenCV",
    ],
    hyperlink: "https://github.com/lontonggg/spongebob-scene-classification",
  },
  {
    image: "/images/diabetes_hypertension.png",
    title: "Diabetes and Hypertension Treatement using Reinforcement Learning",
    description:
      "A comprehensive **reinforcement learning framework** for personalized **diabetes and hypertension treatment optimization**. Combines **supervised learning models** with **deep RL agents (PPO, DQN, A2C)** to develop intelligent treatment protocols that adapt to individual patient characteristics and responses.",
    tools: [
      "Python",
      "OpenAI Gym",
      "Stable-Baselines3",
      "PyTorch",
      "Scikit-learn",
    ],
    hyperlink: "https://github.com/lontonggg/diabetes_and_hypertension_treatment_with_rl",
  },
  {
    image: "/images/jabodetabek-house.png",
    title: "Jabodetabek House Price Prediction",
    description:
      "A **machine learning project** that predicts **house prices in the Jabodetabek area** using **regression techniques**. Features comprehensive data preprocessing, **clustering analysis with DBSCAN**, and comparison of multiple models including **Random Forest and Gradient Boosting**, achieving **over 94% accuracy** with robust evaluation across 100 random splits.",
    tools: ["Python", "Numpy", "Pandas", "Seaborn", "Scikit-learn"],
    hyperlink:
      "https://github.com/lontonggg/jabodetabek_house_price_regression",
  },
  {
    image: "/images/tax-centre.png",
    title: "Tax Centre UI Website",
    description:
      "A **company website** developed for **Tax Centre UI**, a taxation consultancy firm based in **University of Indonesia**. Built with **Next.js** and deployed to production using a **virtual machine setup** with **Nginx as reverse proxy** and **PM2 for process management**, ensuring high availability and optimal performance.",
    tools: ["Next.js", "Tailwind CSS", "PM2", "Nginx", "Asana"],
    hyperlink: "https://taxcentreui.org/",
  },
  {
    image: "/images/swara.png",
    title: "SWARA",
    description:
      "A comprehensive **legal support platform** developed during **Garuda Hacks 5.0 Hackathon** to make legal resources accessible to marginalized communities in Indonesia. Built in **36 hours** with features like **'Angkat Isu'** for case highlighting and **'Cari Tau'** for legal guidance. Won **2nd Place in the Helping Hands Track**.",
    tools: ["Next.js", "Tailwind CSS", "Framer-motion", "Railway"],
    hyperlink: "https://devpost.com/software/swara",
  },
  {
    image: "/images/snackscription.png",
    title: "Snackscription",
    description:
      "A **subscription-based snack delivery platform** built as part of **Advanced Programming course**. Features a **full-stack microservices architecture** with comprehensive testing, monitoring, and **CI/CD pipeline**. Includes **user management**, **subscription services**, and **automated delivery scheduling** with robust performance monitoring.",
    tools: [
      "Spring Boot",
      "Next.js",
      "Docker",
      "SonarQube",
      "JMeter",
      "Prometheus",
      "Grafana",
    ],
    hyperlink: "https://github.com/orgs/ADPRO-C11/repositories",
  },
];
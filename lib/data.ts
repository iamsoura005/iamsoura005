import { Project, TechStack, ContactInfo } from '@/types';

export const personalInfo = {
  name: "Sourasanta Dutta",
  title: "AI/ML Developer & Full Stack Engineer",
  location: "India 🇮🇳",
  email: "souradutta@example.com",
  github: "iamsoura005",
  linkedin: "sourasanta-dutta-852345282",
  bio: "I enjoy bringing ideas to life through code. I'm curious, detail-oriented, and always learning new things.",
  tagline: "Building intelligent solutions that make a real difference",
  funFact: "I've built AI systems that can detect 8 different eye diseases and authenticate users based on their typing patterns!"
};

export const aboutMe = {
  currentWork: "Advanced Machine Learning & AI Projects",
  learning: "Large Language Models & Generative AI",
  collaboration: "Python-based ML/AI Projects",
  help: "Scaling ML Models in Production",
  interests: ["Python", "AI/ML", "Full Stack Development", "Data Science"],
  totalCommits: "100+",
  repositories: "15+"
};

export const techStack: TechStack[] = [
  {
    category: "Core Languages",
    technologies: [
      { name: "Python", icon: "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue", color: "#3776ab" },
      { name: "TypeScript", icon: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white", color: "#3178c6" },
      { name: "JavaScript", icon: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black", color: "#f7df1e" },
      { name: "HTML5", icon: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white", color: "#e34f26" },
      { name: "CSS3", icon: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white", color: "#1572b6" },
      { name: "SQL", icon: "https://img.shields.io/badge/SQL-316192?style=for-the-badge&logo=postgresql&logoColor=white", color: "#316192" }
    ]
  },
  {
    category: "AI & Machine Learning",
    technologies: [
      { name: "TensorFlow", icon: "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white", color: "#ff6f00" },
      { name: "PyTorch", icon: "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white", color: "#ee4c2c" },
      { name: "Scikit Learn", icon: "https://img.shields.io/badge/-Scikit%20Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white", color: "#f7931e" },
      { name: "OpenCV", icon: "https://img.shields.io/badge/OpenCV-27338e?style=for-the-badge&logo=OpenCV&logoColor=white", color: "#27338e" },
      { name: "Pandas", icon: "https://img.shields.io/badge/-Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white", color: "#150458" },
      { name: "NumPy", icon: "https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white", color: "#777bb4" }
    ]
  },
  {
    category: "Web Development",
    technologies: [
      { name: "React", icon: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB", color: "#61dafb" },
      { name: "Next.js", icon: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white", color: "#000000" },
      { name: "Node.js", icon: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white", color: "#43853d" },
      { name: "Flask", icon: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white", color: "#000000" },
      { name: "Django", icon: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white", color: "#092e20" },
      { name: "Tailwind CSS", icon: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white", color: "#38b2ac" }
    ]
  },
  {
    category: "Databases & Cloud",
    technologies: [
      { name: "PostgreSQL", icon: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white", color: "#316192" },
      { name: "MongoDB", icon: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white", color: "#4ea94b" },
      { name: "Supabase", icon: "https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white", color: "#181818" },
      { name: "AWS", icon: "https://img.shields.io/badge/-AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white", color: "#232f3e" },
      { name: "Vercel", icon: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white", color: "#000000" },
      { name: "Docker", icon: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white", color: "#2496ed" }
    ]
  }
];

export const featuredProjects: Project[] = [
  {
    id: "dristi-ai",
    title: "Dristi AI - Eye Disease Detection",
    description: "AI-powered detection of 8 different eye diseases with color blindness testing using deep learning and computer vision.",
    tech: ["Next.js", "TensorFlow", "Flask", "Python", "Computer Vision"],
    github: "https://github.com/iamsoura005/Dristi_Ai",
    live: "https://dristi-ai.vercel.app",
    featured: true,
    category: "ai-ml"
  },
  {
    id: "keystroke-auth",
    title: "Keystroke Authentication System",
    description: "Sophisticated biometric authentication using typing patterns with 5 different ML models for enhanced security.",
    tech: ["Python", "Flask", "Machine Learning", "Biometrics"],
    github: "https://github.com/iamsoura005/User-Authentication-Using-Keystroke-Dynamics",
    featured: true,
    category: "ai-ml"
  },
  {
    id: "skills-swap",
    title: "Skills Swap Platform",
    description: "Modern TypeScript web application with glass morphism UI for peer-to-peer skill exchange and learning.",
    tech: ["Next.js", "TypeScript", "Supabase", "TailwindCSS"],
    github: "https://github.com/iamsoura005/Skills_swap_oddo",
    live: "https://skills-swap-oddo.vercel.app",
    featured: true,
    category: "fullstack"
  },
  {
    id: "voice-fraud",
    title: "Voice Fraud Detection",
    description: "Advanced audio processing and ML system for detecting fraudulent voice patterns and authentication.",
    tech: ["Python", "Audio Processing", "Machine Learning"],
    github: "https://github.com/iamsoura005/Fraude-detection-using-voice",
    featured: true,
    category: "ai-ml"
  },
  {
    id: "fake-news",
    title: "Fake News Detection",
    description: "Natural Language Processing solution using machine learning for real-time fake news identification.",
    tech: ["Python", "NLP", "Machine Learning", "Text Processing"],
    github: "https://github.com/iamsoura005/Fake-news-detection",
    featured: true,
    category: "ai-ml"
  },
  {
    id: "crime-detection",
    title: "Crime Hotspot Mapping",
    description: "Predictive analytics system for crime forecasting and geographical mapping using machine learning.",
    tech: ["Python", "scikit-learn", "Pandas", "Data Analysis"],
    github: "https://github.com/iamsoura005/Crime-Detection-",
    featured: true,
    category: "data-science"
  }
];

export const contactInfo: ContactInfo = {
  email: personalInfo.email,
  linkedin: `https://www.linkedin.com/in/${personalInfo.linkedin}`,
  github: `https://github.com/${personalInfo.github}`,
  location: personalInfo.location
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: contactInfo.linkedin,
    icon: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
  },
  {
    name: "GitHub",
    url: contactInfo.github,
    icon: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
  },
  {
    name: "Email",
    url: `mailto:${contactInfo.email}`,
    icon: "https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"
  }
];
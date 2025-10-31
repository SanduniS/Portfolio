import { 
  FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt 
} from "react-icons/fa";
import { 
  SiSpringboot, SiMysql, SiJenkins, SiPostman, SiJavascript, SiR, SiVite 
} from "react-icons/si";
import profileimg from "./profileimg.jpg";
import jobImg from "./job.png"; 
import coffeeImg from "./coffee.png";

// Assets
export const assets = {
  profileimg,jobImg,coffeeImg
};

// About Info
export const aboutinfo = [
  {
    description:
      "I’m Sanduni Sathsarani, a third-year Computer Science undergraduate at the University of Sri Jayewardenepura, deeply passionate about Artificial Intelligence and Machine Learning. My curiosity lies in exploring how intelligent systems can learn, adapt, and make decisions that transform industries and improve everyday life. I’m particularly interested in areas like deep learning, natural language processing, computer vision, few-shot learning, and predictive analytics. I enjoy working on projects that combine data, algorithms, and creativity to uncover insights and build smart, efficient solutions. With a growing enthusiasm for AI research and real-world applications, I’m continuously learning, experimenting, and striving to contribute to the evolving field of intelligent technologies.",
    color: "text-purple",
  },
];

// Projects
export const projects = [
  {
    title: "Job Portal",
    description: "A job portal designed to connect Sri Lankan students and NVQ holders with verified recruiters",
    image: jobImg, // use imported asset
    tech: ["Java", "Spring Boot", "React"],
  },
  {
    title: "Coffee Project",
    description: "A fun coffee-themed project.",
    image: coffeeImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },
];


// Skills / Tech Stack
export const skills = [
  {
    title: "Languages",
    tags: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "R", icon: SiR },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Frameworks & Libraries",
    tags: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "React.js", icon: FaReact },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    title: "Databases",
    tags: [
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "DevOps & Tools",
    tags: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGitAlt },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Docker", icon: FaDocker },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    title: "Frontend & UI",
    tags: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
];

// Work Experience
export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple",
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink",
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue",
  },
];

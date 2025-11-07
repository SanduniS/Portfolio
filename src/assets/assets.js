import { 
  FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt 
} from "react-icons/fa";
import { 
  SiSpringboot, SiMysql, SiJenkins, SiPostman, SiJavascript, SiR, SiVite 
} from "react-icons/si";
import profileimg from "./profileimg.jpg";
import jobImg from "./job.png"; 
import coffeeImg from "./coffee.png";
import dropout from "./dropoutpredictor.png";

// Assets
export const assets = {
  profileimg,jobImg,coffeeImg,dropout
};

// About Info
export const aboutinfo = [
  {
    description:
      "I’m Sanduni Sathsarani, a third-year Computer Science undergraduate at the University of Sri Jayewardenepura, deeply passionate about Artificial Intelligence and Machine Learning. My curiosity lies in exploring how intelligent systems can learn, adapt, and make decisions that transform industries and improve everyday life. I’m particularly interested in areas like deep learning, natural language processing, computer vision, few-shot learning, and predictive analytics. I enjoy working on projects that combine data, algorithms, and creativity to uncover insights and build smart, efficient solutions. With a growing enthusiasm for AI research and real-world applications, I’m continuously learning, experimenting, and striving to contribute to the evolving field of intelligent technologies.",
    color: "text-purple",
  },
];
// Education
export const educationData = [
  {
    company: "University of Sri Jayewardenepura",
    degree: "BSc (Hons) in Computer Science",
    duration: "2023 - 2027"
  },
   {
    company: "St.Paul's Girls' School Milagiriya-Colombo 05 ",
    degree: "",
    duration: "2012-2021"
  },

];

// Projects
export const projects = [
  {
    title: "SkillBridge Lanka",
    description: "A job portal designed to connect Sri Lankan students and NVQ holders with verified recruiters",
    image: jobImg, // use imported asset
    tech: ["RestAPI","Java", "Spring Boot", "Docker","Jenkins","JWT","Mysql","React"],
    github: "https://github.com/SanduniS/SkillBridgeLankaapplication.git"  
  },
  {
    title: "Coffee Holics",
    description: "A Tabel Reservation platform developed for a restaurant.",
    image: coffeeImg,
    tech: ["HTML", "CSS", "JavaScript","Java","Mysql"],
    github: "" 
  },
  {
    title: "Dropout Predictor (Ongoing)",
    description: "This is an End-to-End Machine Learning Pipeline for Student Dropout Prediction using attendance and academic performance data.",
    image: dropout,
    tech: [""],
    github: "" 
  },

];


// Skills / Tech Stack
export const skills = [
  {
    title: "Languages",
    tags: [
      { name: "Java" },
      { name: "Python" },
      { name: "R" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    tags: [
      { name: "Spring Boot" },
      { name: "React.js" },
      { name: "Vite" },
    ],
  },
  {
    title: "Databases",
    tags: [
      { name: "MySQL" },
    ],
  },
  {
    title: "DevOps & Tools",
    tags: [
      { name: "Git"},
      { name: "GitHub" },
      { name: "Jenkins" },
      { name: "Docker"},
      { name: "Postman"},
    ],
  },
  {
    title: "Frontend & UI",
    tags: [
      { name: "HTML" },
      { name: "CSS"},
    ],
  },
];

// Work Experience
export const workData = [
  {
    role: "Intern",
    company: "Sampath Bank PLC",
    duration: "May 2022 - Jan 2023",
    description:
      "I was responsible for managing daily bank operations while ensuring smooth and efficient service delivery. My role involved handling customer inquiries related to financial transactions and providing assistance with online banking facilities.",
    color: "purple",
  },
  // {
  //   role: "Web Developer",
  //   company: "Digital Solutions LLC",
  //   duration: "2018 - 2020",
  //   description:
  //     "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
  //   color: "pink",
  // },
  // {
  //   role: "Junior Developer",
  //   company: "StartUp Ventures",
  //   duration: "2016 - 2018",
  //   description:
  //     "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
  //   color: "blue",
  // },
];
// Volunteering
export const volunteerData = [
  // {
  //   role: "AI Awareness Speaker",
  //   company: "",
  //   duration: "Present",
  //   description:
  //     "Collaborated with my university lecturers to deliver interactive AI awareness sessions, guiding students to explore innovations and develop curiosity toward emerging technologies.",
  //   color: "purple",
  // },
  {
    role: "Assistant Secretary",
    company: "Computer Science Association",
    duration: "Feb 2025 -   Present",
    description:
      "I contributed to effective communication, documentation, and event planning while collaborating with team members to ensure smooth coordination and successful execution of association activities.",
    color: "purple",
  },
   {
    role: "Executive Committee Member",
    company: "Computer Science Association",
    duration: "Feb 2024 - Feb 2025",
    description:"",
    color: "purple",
  },
 
];

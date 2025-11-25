import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },

  {
    id: "skills",
    title: "Skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Designer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI & ML Learner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Freelance Frontend Developer",
    company_name: "Self-employed",
    icon: freelance, // Replace with any icon you like
    iconBg: "#0188E3",
    date: "Jul 2024 - Jan 2025",
    points: [
      "Built responsive and interactive web apps using React.js, Tailwind CSS, and GSAP.",
      "Developed and deployed modern landing pages and portfolio websites for clients.",
      "Integrated APIs and handled form validation, animations, and smooth scroll effects.",
      "Delivered pixel-perfect UI designs based on Figma and Adobe XD mockups.",
    ],
  },
  {
    title: "Urja Link — ML & Geospatial Intelligence Project",
    company_name: "URJA LINK",
    icon: sheryians, // Or institute logo
    iconBg: "#ffffff",
    date: "Jul 2025 - Present",
    points: [
      "Researched real-world energy-poverty problems using academic papers and government datasets.",
      "Identified and mapped energy-deficient regions using GIS, remote sensing data, and ML models.",
      "Worked on rooftop detection and solar panel suitability analysis using satellite imagery and computer vision techniques.",
      "Designed ML workflows for optimal solar deployment, terrain analysis, and solar potential prediction.",
      "Built clean UI/UX layouts and dashboards to visualize geospatial insights for NGOs, policymakers, and solar companies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Audio and Text Processing ",
    description:
      "A machine learning project that processes and analyzes audio signals and text data for classification tasks. Implemented feature extraction, preprocessing, and ML models to build a complete data-analysis pipeline.",
    tags: [
      {
        name: "NumPy",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/janithe36/Audio-and-text-processing-",
    live_website_link: "https://github.com/janithe36/Audio-and-text-processing-",
  },
  {
    name: "URJA-LINK",
    description:
      "A machine-learning–powered platform that identifies energy-deficient regions and assists in planning solar deployment using geospatial and remote-sensing data. Includes basic frontend interfaces and ML logic to analyze rooftop suitability, energy patterns, and solar potential.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TesorFlow",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: falverra,
    source_code_link: "https://github.com/janithe36/Urja-Link",
    live_website_link: "https://github.com/janithe36/TECHBOARD",
  },
  {
    name: "AIT Technical Board Website",
    description:
      "A modern, student-focused website built for AIT’s Technical Board to showcase events, initiatives, and team members. Designed with an intuitive interface to improve student engagement and simplify navigation for tech-related announcements.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    // github link ⬇️
    source_code_link: "https://github.com/janithe36/TECHBOARD",
    // project link ⬇️
    live_website_link: "https://github.com/janithe36/TECHBOARD",
  },
];

export { services, technologies, experiences, testimonials, projects };

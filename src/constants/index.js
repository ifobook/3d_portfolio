
import { CiTwitter } from "react-icons/ci";
import { LuGithub, LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaEye } from "react-icons/fa";


import { DiPhotoshop } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { MdOutlinePhp } from "react-icons/md";
import { RiJavascriptLine } from "react-icons/ri";


import { PiPaintBrushBroadDuotone } from "react-icons/pi";
import { MdOutlineViewQuilt } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

import { FaRegUser } from "react-icons/fa";

















const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "a Frontend Developer", imgPath: "/images/ideas.svg" },
  { text: "a Backend Developer", imgPath: "/images/concepts.svg" },
  { text: "an Instructor", imgPath: "/images/designs.svg" },
 
 
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 70, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/srlogo.png",
  },
  {
    imgPath: "/images/logos/dominicjade.png",
  },
  {
    imgPath: "/images/logos/hcbeautycollections.png",
  },
  
];

const abilities = [
  {
    AbilityIcon: PiPaintBrushBroadDuotone,
    title: "Graphic Design",
    desc: "I design creative solutions by blending visual elements, layout structure, and typography to tell clear, effective stories.",
  },
  {
    AbilityIcon: MdOutlineViewQuilt,
    title: "Frontend Devlopment",
    desc: " build responsive, user-centric interfaces using modern frontend technologies. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React, I translate design concepts into interactive and accessible web experiences that perform seamlessly across devices.",
  },
  {
    AbilityIcon: FaDatabase,
    title: "Backend Devlopment",
    desc: "I develop and maintain robust server-side applications that power scalable, secure, and high-performance web platforms. With expertise in databases, and server-side logic using technologies like PHP, and MySQL, I ensure seamless data flow, system reliability, and efficient backend architecture.",
  },
  {
    AbilityIcon: GiTeacher,
    title: "Instructor",
    desc: "I’m passionate about making difficult concepts easy to grasp. So far, I’ve taught and supported the learning journey of over 15 students.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Franklin has brought a blend of creativity and technical expertise to the team, significantly enhancing both our frontend and backend projects. His contributions have been instrumental in delivering faster and more efficient experiences to our customers.",
    imgPath: "/images/logos/srlogo2.png",
    logoPath: "/images/scicon.png",
    title: "Fullstack Developer",
    date: "January 2020 - Present",
    responsibilities: [
      "Developed and maintained user-facing features and server-side applications to build scalable, secure, and high-performance web platforms for Script Route.",
      "Collaborated closely with UI/UX designers to ensure seamless and intuitive user experiences.",
      "Optimized web applications for maximum speed upto 20%, efficiency, and scalability.",
      "Assisted in training students in frontend development and onboarding new staff members at the company."
    ],
  },
  {
    review:
      "Franklin helped us build and maintain our company website (hcbeautycollections.com), where we showcase, sell, and deliver fashion products to customers. He is a developer who pays close attention to company objectives and translates them effectively into code. Franklin is both meticulous and smart in his approach.",
    imgPath: "/images/logos/hcbeautycollections.png",
    logoPath: "/images/logos/hcicon.png",
    title: "Full Stack Developer",
    date: "July 2024 -  Present",
    responsibilities: [
      "Built user-centric and intuitive interfaces using HTML, CSS, Bootstrap, and JavaScript, ensuring responsiveness across all devices.",
      "Worked as a backend developer to implement dynamic functionality and server-side features using php and mysql.",
      "Ensured the website operates seamlessly and remains up to date.",
    ],
  },
  {
    review:
      "Franklin’s work on Dominicjade website brought a high level of quality and efficiency. He delivered solutions that enhanced our clients experience & meet our product goals.",
    imgPath: "/images/logos/dominicjade.png",
    logoPath: "/images/dominicjadeicon.png",
    title: "Backend Developer",
    date: "February 2023 - Present",
    responsibilities: [
      "Built cross-platform applications using native PHP and MySQL, integrated with Dominicjade's frontend services.",
      "Improved application performance and user experience through code optimization and thorough testing.",
      "Collaborated with the product team to implement new features based on user and stakeholder feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Ude Camillus",
    mentions: "",
    review:
      "I can’t say enough good things about Franklin. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: FaRegUser,
  },
  {
    name: "Uzoka Ebuka",
    mentions: "Uzokagroups.com",
    review:
      "Working with Franklin was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: FaRegUser,
  },
  {
    name: "Akachukwu",
    mentions: "www.akachukwuu.com",
    review:
      "Collaborating with Franklin was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Franklin's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Franklin is the ideal partner.",
    imgPath: FaRegUser,
  },
  {
    name: "Arinze",
    mentions: "",
    review:
      "Franklin was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: FaRegUser,
  },
  {
    name: "Ukpai Onu",
    mentions: "",
    review:
      "Franklin’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: FaRegUser,
  },
  {
    name: "Danial",
    mentions: "",
    review:
      "Franklin was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: FaRegUser,
  },
];

const socialImgs = [
  {
    name: "Linkedin",
    url: "https://github.com/ifobook/",
    SocialIcon: SlSocialLinkedin
  },
  {
    name: "Github",
    url: "https://github.com/ifobook",
    SocialIcon: LuGithub,
  },
  {
    name: "x",
    url: "https://x.com/ifobook?t=tMkVXgLsjyT4VmaCLmdkeA&s=09",
    SocialIcon: CiTwitter,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/share/1EaJDJvg9Y/",
    SocialIcon: LuFacebook,
  },
];

const bestSkills = [
  {
    name:'',
    Icon: DiPhotoshop

  },
  {
    name: '',
    Icon: FaReact
  },
  {
    name: '',
    Icon: MdOutlinePhp
  },
  {
    name: '',
    Icon: RiJavascriptLine
  }
]

const firstProject = [
  {
    projectName: 'Portfolio',
    desc: 'I developed a frontend portfolio site using REACT, GSAP for animation',
    imgPath: '/images/portfolio.png',
    ait: '3d portfolio',
    url: 'https://www.facebook.com',
    UrlIcon: FaEye,
    GithubIcon: LuGithub,
    github: 'https://github.com/ifobook/3d_portfolio',

  }
]

const OtherProjects = [
  {
    projectName: 'Fullstack Todolist App ',
    desc: 'Fullstack Todo app developed using ReactJS,Tailwindcss, Firebase for server side management, and Context API for global state management',
    imgPath: '/images/listpage.png',
    ait: 'Todolist',
    url: '#!',
    UrlIcon: FaEye,
    GithubIcon: LuGithub,
    github: '#!',

  },

  {
    projectName: 'Dominicjade, An Enterprise Services App',
    desc: "Built cross-platform applications using native PHP and MySQL, integrated with the frontend services.",
    imgPath: '/images/dominicjadedesktop.png',
    ait: 'Dominicjade',
    url: 'https://www.dominicjade.com',
    UrlIcon: FaEye,
    GithubIcon: LuGithub,
    github: '#!',

  },

  {
    projectName: 'Hcbeautycollections, Fullstack Fashion E-commerce',
    desc: 'I bult a fashion e-commerce application using html, css, bootstrap, javascript, ajax, for frontend and native php for backend and mysql for database management ',
    imgPath: '/images/hcpage.png',
    ait: 'hcbeautycollections',
    url: 'https://www.hcbeautycollections.com',
    UrlIcon: FaEye,
    GithubIcon: LuGithub,
    github: '#!',

  },
  {
    projectName: 'Frontend Company Site',
    desc: 'A company website designed with Reactjs and Tailwindcss',
    imgPath: '/images/srpage.png',
    ait: 'script Route',
    url: '#!',
    UrlIcon: FaEye,
    GithubIcon: LuGithub,
    github: '#!',

  },
  {
    projectName: '02travel.ng, Fullstack Travel & Tourism system ',
    desc: 'I bult a fullstact Travel and Tourism application using html, css, bootstrap, javascript, ajax, for frontend and native php for backend, mysql for database management, Flutterwave API for online payment integration',
    imgPath: '/images/02page.png',
    ait: '02travel',
    url: '#!',
    UrlIcon: FaEye,
    GithubIcon: LuGithub,
    github: '#!',

  },
  {
    projectName: 'Uzokagroups, A Frontend site',
    desc: 'A frontend company site with html, css and javascript',
    imgPath: '/images/uzokapage.png',
    ait: 'uzokagroups',
    url: 'https:www.uzokagroups.com',
    UrlIcon: FaEye,
    GithubIcon: LuGithub,
    github: '#!',

  }

]

const frontendSkills = [
  { skill: 'PHOTOSHOP', percent: 50 },
  { skill: 'FIGMA', percent: 60 },
  { skill: 'HTML', percent: 85 },
  { skill: 'CSS', percent: 80 },
  { skill: 'TAILWIND CSS', percent: 80 },
  { skill: 'JAVASCRIPT', percent: 60 },
  { skill: 'GIT AND GITHUB', percent: 60 },
  { skill: 'REACT JS', percent: 70 },
];

const backendSkills = [
  { skill: 'PHP', percent: 80 },
  { skill: 'FIREBASE', percent: 50 },
  { skill: 'MYSQL', percent: 80 },
  { skill: 'MONGO DB', percent: 20 },
  { skill: 'POSTMAN', percent: 55 },
];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  bestSkills,
  firstProject,
  OtherProjects,
  frontendSkills,
  backendSkills,
};

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
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
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
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "Linkedin",
    url: "https://www.instagram.com/",
    SocialIcon: SlSocialLinkedin
  },
  {
    name: "Github",
    url: "https://www.facebook.com/",
    SocialIcon: LuGithub,
  },
  {
    name: "x",
    url: "https://www.x.com/",
    SocialIcon: CiTwitter,
  },
  {
    name: "facebook",
    url: "https://www.linkedin.com/",
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
    projectName: 'On-Demand Rides ',
    desc: 'I’m a Full Stack Developer with hands-on experience in building dynamic, responsive web applications using HTML, CSS, JavaScript, ReactJS, PHP, MySQL, and Tailwind CSS. I thrive in team settings, leveraging strong problem-solving and communication skills to deliver results within demanding timelines.',
    imgPath: '/images/portfolio.png',
    ait: 'Ryde App Interface',
    url: 'https://www.facebook.com',
    UrlIcon: FaEye,
    GithubIcon: LuGithub,
    github: 'https://www.youtube.com',

  }
]

const OtherProjects = [
  {
    projectName: 'On-Demand Rides ',
    desc: 'I’m a Full Stack Developer with hands-on experience in building dynamic, responsive web applications using HTML, CSS, JavaScript, ReactJS, PHP, MySQL, and Tailwind CSS. I thrive in team settings, leveraging strong problem-solving and communication skills to deliver results within demanding timelines.',
    imgPath: '/images/project1.png',
    ait: 'Ryde App Interface',
    url: '',
    UrlIcon: FaEye,
    GithubIcon: LuGithub,
    github: '',

  },

  {
    projectName: 'On-Demand Rides ',
    desc: 'I’m a Full Stack Developer with hands-on experience in building dynamic, responsive web applications using HTML, CSS, JavaScript, ReactJS, PHP, MySQL, and Tailwind CSS. I thrive in team settings, leveraging strong problem-solving and communication skills to deliver results within demanding timelines.',
    imgPath: '/images/project1.png',
    ait: 'Ryde App Interface',
    url: '',
    UrlIcon: FaEye,
    GithubIcon: LuGithub,
    github: '',

  },
  {
    projectName: 'On-Demand Rides ',
    desc: 'I’m a Full Stack Developer with hands-on experience in building dynamic, responsive web applications using HTML, CSS, JavaScript, ReactJS, PHP, MySQL, and Tailwind CSS. I thrive in team settings, leveraging strong problem-solving and communication skills to deliver results within demanding timelines.',
    imgPath: '/images/project1.png',
    ait: 'Ryde App Interface',
    url: '',
    UrlIcon: FaEye,
    GithubIcon: LuGithub,
    github: '',

  },
  {
    projectName: 'On-Demand Rides ',
    desc: 'I’m a Full Stack Developer with hands-on experience in building dynamic, responsive web applications using HTML, CSS, JavaScript, ReactJS, PHP, MySQL, and Tailwind CSS. I thrive in team settings, leveraging strong problem-solving and communication skills to deliver results within demanding timelines.',
    imgPath: '/images/project1.png',
    ait: 'Ryde App Interface',
    url: '',
    UrlIcon: FaEye,
    GithubIcon: LuGithub,
    github: '',

  },
  {
    projectName: 'On-Demand Rides ',
    desc: 'I’m a Full Stack Developer with hands-on experience in building dynamic, responsive web applications using HTML, CSS, JavaScript, ReactJS, PHP, MySQL, and Tailwind CSS. I thrive in team settings, leveraging strong problem-solving and communication skills to deliver results within demanding timelines.',
    imgPath: '/images/project1.png',
    ait: 'Ryde App Interface',
    url: '',
    UrlIcon: FaEye,
    GithubIcon: LuGithub,
    github: '',

  }

]


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
};
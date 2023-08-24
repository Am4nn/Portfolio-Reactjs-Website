import Goldman_Sachs_Logo from "../assets/Images/company/Goldman_Sachs.png";
import Hash_Include_Logo from "../assets/Images/company/Hash_Include.png";
import SGSITS_Logo from "../assets/Images/company/SGSITS_Logo.png";
import resume from "../assets/resume/resume.pdf";
import { NO_PROJECTS } from "../dev-env";

export const hashRoutes = [
    ["Home", "/home/#home"],
    ["About", "/home/#about"],
    ["Experience", "/home/#experience"],
    ["Projects", "/home/#projects"],
    ["Contact", "/home/#contact"],
    ["Resume", resume]
];
((() => {
    // function clear out hasRoutes which are not yet available
    if (NO_PROJECTS) {
        hashRoutes.splice(3, 1);
    }
})());
export const sections = hashRoutes.map(route => route[0].toLowerCase());

export const introAnimatedText = [
    "Developer",
    "Programmer",
    "Tech Enthusiast",
    "Gamer"
];
export const myName = "Aman Arya";
export const shortDescription = "MERN and Full Stack Developer";

export const socialMediaDetails = [
    {
        name: 'GitHub',
        url: 'https://github.com/Am4nn',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/am4n_arya',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/aman-arya-79a52121b',
    },
    {
        name: 'Email',
        url: 'mailto:125aryaaman@gmail.com',
    }
];

export const skills = [
    {
        name: "Languages",
        items: ["C", "C++", "Java", "Python", "HTML/CSS", "Javascript", "Typescript"],
    },
    {
        name: "Web Development",
        items: ["React", "NextJs", "Node", "Redux", "Boot", "RestAPI", "ExpressJs", "SocketIO", "MUI"],
    },
    {
        name: "Database",
        items: ["MySQL", "MongoDB", "Redis"],
    },
    {
        name: "Tools/Software/Others",
        items: ["Git", "Github", "VSCode", "IntellijIdea", "Docker", "Postman", "OpenGL"],
    },
];

export const experiences = [
    {
        title: "Summer Analyst",
        company_name: "Goldman Sachs Pvt Ltd",
        bottomColor: "#6d92bf",
        icon: Goldman_Sachs_Logo,
        date: "May 2023 - July 2023",
        points: [
            "Engaged in the Goldman Sachs team maintaining client fee calculation applications, implementing 10+ efficiency-focused enhancements",
            "Implemented a feature enabling users to charge fees as last year to bulk accounts in one click, reducing process time by 85% while ensuring reliability with 20+ JUnit test cases",
            "Optimized user experience by decreasing UI loading time by 76% through enhanced MongoDB queries",
            "Rectified over 15 bugs within the internal fee calculation application"
        ],
    },
    {
        title: "Exam Module 2",
        company_name: "SGSITS Indore",
        bottomColor: "#f1df87",
        icon: SGSITS_Logo,
        date: "Feb 2023 - Apr 2023",
        points: [
            "Developed a robust web-based system to automate the examiner allocation process for multiple departments within the college",
            "Implemented various functionalities to simplify the examiner allocation workflow",
            "Built a user-friendly interface with React. Leveraged SQL for efficient database management and Nodejs for integration"
        ],
    },
    {
        title: "Senior Coordinator",
        company_name: "#include Club SGSITS",
        bottomColor: "#bc1010",
        icon: Hash_Include_Logo,
        date: "Oct 2021 - present",
        points: [
            "Developing and maintaining web applications for hackindore using Nextjs and other related technologies",
            "With the assistance of other coordinators, successfully organized events and guided sessions for students",
            'Speaker at "Tech-tonic" a programming road-map for freshers',
        ],
    }
];
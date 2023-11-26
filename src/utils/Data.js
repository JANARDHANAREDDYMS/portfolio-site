import { FaReact, FaNode, FaCss3Alt}  from 'react-icons/fa';

import { SiJavascript} from 'react-icons/si';

import Project1 from "../assets/project1.jpg"
import Project2 from "../assets/Project2.png"

export const Skills = [
    {
        id:0,
        tech: 'React 35',
        icon: <FaReact />
    },
    {
        id: 1,
        tech: 'Node 35',
        icon: <FaNode />

    },
    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        id:3,
        tech: "JavaScipt",
        icon: <SiJavascript />
    }
]


export const projectDetails = [

    {
        id: 0,
        Project_name:" Weather App",
        Project_desc: " A live weather tracking app using open source api, based on user focused interaction, it also has the ability to show you the history upto an year along with hourly weather prediction for a particular date that ahs been asked",
        tech_stack: ["Kotlin","Material UI"],
        project_img: Project1,
        project_url: "https://github.com/JANARDHANAREDDYMS/weather-app",
        reverse: false,
},
{
    id: 1,
        Project_name:" Key Logger",
        Project_desc: " A keylogger is a type of malicious software designed to secretly record and monitor keystrokes on a computer or mobile device. It can capture sensitive information such as usernames, passwords, and credit card details, posing a significant threat to user privacy and security. Cybercriminals often use keyloggers to steal personal data and carry out unauthorized activities, making them a serious concern for cybersecurity.",
        tech_stack: ["Python","pynput"],
        project_img: Project2,
        project_url: "https://github.com/JANARDHANAREDDYMS/keylogger",
        reverse: true,
}
]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 0,
        name: 'My Skills',
        href: 'Skills'
    },
    {
        id: 0,
        name: 'My Projects',
        href: 'Projects'
    },
    {
        id: 0,
        name: 'Contact',
        href: 'contact'
    }
]
import { FaReact, FaNode, FaCss3Alt,FaJava,FaPython}  from 'react-icons/fa';
import { FaFontAwesomeIcon } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { SiJavascript} from 'react-icons/si';

import Project1 from "../assets/project1.jpg"
import Project2 from "../assets/Project2.png"
import Project3 from "../assets/Project3.png"
import Project4 from "../assets/Project4.jpg"
import { TiHtml5 } from "react-icons/ti";
import { BsFiletypeSql } from "react-icons/bs";
import { SiPytorch } from 'react-icons/si';
import { SiMusicbrainz } from "react-icons/si";

export const Skills = [
    {
        id:0,
        tech: 'React JS',
        icon: <FaReact />,
        progress: 70,
    },
  
    {
        id: 1,
        tech: 'CSS',
        icon: <FaCss3Alt />,
        progress: 90,

    },
    {
        id: 2,
        tech: 'HTML',
        icon:<TiHtml5 />,
        progress:90
    },
    {
        id:3,
        tech: "JavaScipt",
        icon: <SiJavascript />,
        progress: 80,

    },
    {
        id: 4,
        tech: 'Node JS',
        icon: <FaNode />,
        progress: 70,
    },
    
    {
        id:5,
        tech: 'SQL',
        icon:<BsFiletypeSql />,
        progress: 80
    },
    {
        id:6,
        tech:'Java',
        icon:<FaJava />,
        progress: 80
    },
    {
        id:7,
        tech:'Python',
        icon:<FaPython />,
        progress: 85
    },
    {
        id:8,
        tech:'PyTorch',
        icon:<SiPytorch />,
        progress: 20
    },
    {
        id: '10',
        tech: 'Deep Learning',
        icon:<SiMusicbrainz />,
        progress: '40'
    }

]


export const projectDetails = [

    {
        id: 0,
        Project_name:" Weather App",
        Project_desc: " A live weather tracking app using open source api, based on user focused interaction, it also has the ability to show you the history upto an year along with hourly weather prediction for a particular date that ahs been asked",
        tech_stack: ["Kotlin","Material UI"],
        project_img: Project1,
        project_url: "https://github.com/JANARDHANAREDDYMS/weather-app.git",
        reverse: false,
},
{
    id: 1,
        Project_name:" Key Logger",
        Project_desc: " A keylogger is a type of malicious software designed to secretly record and monitor keystrokes on a computer or mobile device. It can capture sensitive information such as usernames, passwords, and credit card details, posing a significant threat to user privacy and security. Cybercriminals often use keyloggers to steal personal data and carry out unauthorized activities, making them a serious concern for cybersecurity.",
        tech_stack: ["Python","pynput"],
        project_img: Project2,
        project_url: "https://github.com/JANARDHANAREDDYMS/keylogger.git",
        reverse: true,
},
{
    id:2,
    Project_name:"Airline Management System",
    Project_desc: "This is django based Ailine management system, that can be used airline and airport administrators to manage various flights, passengers,runways etc. A token bucket is implemented to manage runways, where they can be flights can be added sequentially until the max capacity is added. It also has access to all passengers, thus giving ability to manage their travel ",
    tech_stack:["Django","Python","HTML","CSS"],
    project_img: Project3,
    project_url: "https://github.com/JANARDHANAREDDYMS/DBMS-PROJECT.git",
    reverse: false,
},
{
    id: 3,
    Project_name:"Automated Lane Detection System",
    Project_desc: "An automated lane detection system using open source libraries like OpenCV,NumPy,Pandas. The system uses the principles of Hough Transform for lane detection using up vote technique",
    tech_stack: ["Python","OpenCv"],
    project_img: Project4,
    project_url: "https://github.com/JANARDHANAREDDYMS/LANEDETECTION.git",
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
















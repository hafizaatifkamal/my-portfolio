import react_logo from "../images/react.svg";
import node_logo from "../images/node.png";
import mongodb_logo from "../images/mongodb.svg";
import tailwind_logo from "../images/tailwind.png";
import antD_logo from "../images/antDesign.svg";
import micro_logo from "../images/microservices.svg";
import redis_logo from "../images/redis.png";
import express_logo from "../images/express.svg";
import aws_logo from "../images/aws.png";
import mui_logo from "../images/mui.png";
import socket_logo from "../images/Socket-io.png";
import redux_logo from "../images/redux.png";
import fire_logo from "../images/firebase.png";

export const projects = [
  {
    title: "Rate-limiting Chat-App",
    description:
      "Rate-limited Chat Room: This is a public real-time chat room where users can have conversations, with a twist - a user can only send a certain number of messages in a given time frame.",
    technologies: [
      { name: "React", logo: react_logo },
      { name: "Tailwind CSS", logo: tailwind_logo },
      { name: "Websocket", logo: socket_logo },
      { name: "NodeJS", logo: node_logo },
      { name: "Express", logo: express_logo },
      { name: "Redis", logo: redis_logo },
    ],
    githubLink: "https://github.com/hafizaatifkamal/rate-limited-chat-app",
  },
  {
    title: "Grow10x - by Valuebound",
    description: "OKR tool to grow your org 10X",
    technologies: [
      { name: "React", logo: react_logo },
      { name: "Redux", logo: redux_logo },
      { name: "AntDesign", logo: antD_logo },
      { name: "Express", logo: express_logo },
      { name: "NodeJS", logo: node_logo },
      { name: "AWS", logo: aws_logo },
      { name: "Microservices", logo: micro_logo },
    ],
    githubLink: "https://github.com/hafizaatifkamal/",
  },
  {
    title: "Legiview - Interview Feedback System",
    description:
      "This solution web application provides some efficient features which help interviewers take notes and give ratings while interviewing candidates. It also keeps the history of all the interviewed candidates which ultimately helps in deciding better candidates to hire in the company.",
    technologies: [
      { name: "React", logo: react_logo },
      { name: "MUI", logo: mui_logo },
      { name: "NodeJS", logo: node_logo },
      { name: "MongoDB", logo: mongodb_logo },
      { name: "Express", logo: express_logo },
    ],
    githubLink: "https://github.com/hafizaatifkamal/ifs-legiview",
  },
  {
    title: "Oneplace - ERP",
    description:
      "A centralized application by Valuebound to streamline operational processes and serve as a primary touchpoint for all employees.",
    technologies: [
      { name: "React", logo: react_logo },
      { name: "NodeJS", logo: node_logo },
      { name: "MongoDB", logo: mongodb_logo },
      { name: "Firebase", logo: fire_logo },
      { name: "AWS", logo: aws_logo },
      { name: "Redux", logo: redux_logo },
      { name: "MUI", logo: mui_logo },
      { name: "Express", logo: express_logo },
      { name: "Microservices", logo: micro_logo },
    ],
    githubLink: "https://github.com/hafizaatifkamal/",
  },
  {
    title: "SurveyPOC",
    description:
      "An add-on application that builds Surveys and preserves the survey stats. It can be associated with any react app.",
    technologies: [
      { name: "React", logo: react_logo },
      { name: "MUI", logo: mui_logo },
      { name: "NodeJS", logo: node_logo },
      { name: "Express", logo: express_logo },
      { name: "MongoDB", logo: mongodb_logo },
      { name: "Microservices", logo: micro_logo },
    ],
    githubLink: "https://github.com/hafizaatifkamal/survey-poc",
  },
  // Add more projects
];
